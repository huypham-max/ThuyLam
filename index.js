// server/index.ts
import "dotenv/config";
import express2 from "express";

// server/routes.ts
import { createServer } from "http";
import nodemailer from "nodemailer";
async function registerRoutes(app2) {
  const emailUser = (process.env.EMAIL_USER || "your-email@gmail.com").trim();
  const rawPass = process.env.EMAIL_PASSWORD || "your-app-password";
  const emailPass = String(rawPass).trim();
  console.log("[Email Config] User:", emailUser);
  console.log("[Email Config] Raw password length:", rawPass ? String(rawPass).length : 0, "chars");
  console.log("[Email Config] Trimmed password length:", emailPass.length, "chars");
  console.log("[Email Config] First 3 chars:", emailPass.substring(0, 3));
  if (String(rawPass) !== emailPass) console.log("[Email Config] Note: password was trimmed of surrounding whitespace");
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: emailUser,
      pass: emailPass
    }
  });
  app2.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, message } = req.body;
      if (!name || !email || !phone || !message) {
        return res.status(400).json({ message: "All fields are required" });
      }
      await transporter.sendMail({
        from: process.env.EMAIL_USER || "your-email@gmail.com",
        to: process.env.ADMIN_EMAIL || "admin@example.com",
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `
      });
      await transporter.sendMail({
        from: process.env.EMAIL_USER || "your-email@gmail.com",
        to: email,
        subject: "Ch\xFAng t\xF4i \u0111\xE3 nh\u1EADn \u0111\u01B0\u1EE3c tin nh\u1EAFn c\u1EE7a b\u1EA1n",
        html: `
          <h2>C\u1EA3m \u01A1n b\u1EA1n \u0111\xE3 li\xEAn h\u1EC7</h2>
          <p>Xin ch\xE0o ${name},</p>
          <p>Ch\xFAng t\xF4i \u0111\xE3 nh\u1EADn \u0111\u01B0\u1EE3c tin nh\u1EAFn c\u1EE7a b\u1EA1n v\xE0 s\u1EBD li\xEAn h\u1EC7 l\u1EA1i s\u1EDBm nh\u1EA5t c\xF3 th\u1EC3.</p>
          <p>Tr\xE2n tr\u1ECDng,</p>
          <p>\u0110\u1ED9i ng\u0169 Th\u1EE7y Lam</p>
        `
      });
      res.json({
        message: "Email sent successfully",
        success: true
      });
    } catch (error) {
      console.error("[Email Error] Full error:", error);
      if (error instanceof Error) {
        console.error("[Email Error] Message:", error.message);
        console.error("[Email Error] Stack:", error.stack);
      }
      res.status(500).json({
        message: "Failed to send email",
        success: false
      });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      ),
      await import("@replit/vite-plugin-dev-banner").then(
        (m) => m.devBanner()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  app.listen(5e3, "127.0.0.1", () => {
    console.log("Server is running on http://127.0.0.1:5000");
  });
})();
