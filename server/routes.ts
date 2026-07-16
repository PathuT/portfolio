import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactEmail } from "./email";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);

      const contact = await storage.createContact(validatedData);

      try {
        await sendContactEmail(validatedData);
      } catch (emailError) {
        console.error("Failed to send contact email:", emailError);
      }

      res.status(201).json({
        success: true,
        message: "Thank you for your message! I'll get back to you soon.",
        id: contact.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Please fill in all required fields correctly.",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message. Please try again later." 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
