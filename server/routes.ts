import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Email configuration - Update these with your email credentials
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
      pass: emailPass,
    },
  });

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, message } = req.body;

      // Validate input
      if (!name || !email || !phone || !message) {
        return res.status(400).json({ message: "All fields are required" });
      }

      // Send email to admin
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
        `,
      });

      // Send confirmation email to user
      await transporter.sendMail({
        from: process.env.EMAIL_USER || "your-email@gmail.com",
        to: email,
        subject: "Chúng tôi đã nhận được tin nhắn của bạn",
        html: `
          <h2>Cảm ơn bạn đã liên hệ</h2>
          <p>Xin chào ${name},</p>
          <p>Chúng tôi đã nhận được tin nhắn của bạn và sẽ liên hệ lại sớm nhất có thể.</p>
          <p>Trân trọng,</p>
          <p>Đội ngũ Thủy Lam</p>
        `,
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

  const httpServer = createServer(app);

  return httpServer;
}
