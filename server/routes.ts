import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertPropertySchema, insertContactInquirySchema } from "@shared/schema";
import { sendContactInquiryNotification } from "./sendgrid";

export async function registerRoutes(app: Express): Promise<Server> {
  // Property routes
  
  // GET /api/properties - Get all properties
  app.get("/api/properties", async (req, res) => {
    try {
      const properties = await storage.getAllProperties();
      res.json(properties);
    } catch (error) {
      console.error("Error fetching properties:", error);
      res.status(500).json({ error: "Failed to fetch properties" });
    }
  });

  // GET /api/properties/:id - Get single property
  app.get("/api/properties/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const property = await storage.getProperty(id);
      
      if (!property) {
        return res.status(404).json({ error: "Property not found" });
      }
      
      res.json(property);
    } catch (error) {
      console.error("Error fetching property:", error);
      res.status(500).json({ error: "Failed to fetch property" });
    }
  });

  // POST /api/properties - Create new property
  app.post("/api/properties", async (req, res) => {
    try {
      const validationResult = insertPropertySchema.safeParse(req.body);
      
      if (!validationResult.success) {
        return res.status(400).json({ error: "Validation failed", details: validationResult.error.flatten().fieldErrors });
      }

      const property = await storage.createProperty(validationResult.data);
      res.status(201).json(property);
    } catch (error) {
      console.error("Error creating property:", error);
      res.status(500).json({ error: "Failed to create property" });
    }
  });

  // PUT /api/properties/:id - Update property
  app.put("/api/properties/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const validationResult = insertPropertySchema.partial().safeParse(req.body);
      
      if (!validationResult.success) {
        return res.status(400).json({ error: "Validation failed", details: validationResult.error.flatten().fieldErrors });
      }

      const updatedProperty = await storage.updateProperty(id, validationResult.data);
      
      if (!updatedProperty) {
        return res.status(404).json({ error: "Property not found" });
      }
      
      res.json(updatedProperty);
    } catch (error) {
      console.error("Error updating property:", error);
      res.status(500).json({ error: "Failed to update property" });
    }
  });

  // DELETE /api/properties/:id - Delete property
  app.delete("/api/properties/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await storage.deleteProperty(id);
      
      if (!deleted) {
        return res.status(404).json({ error: "Property not found" });
      }
      
      res.status(204).send();
    } catch (error) {
      console.error("Error deleting property:", error);
      res.status(500).json({ error: "Failed to delete property" });
    }
  });

  // Contact inquiry routes
  
  // Admin routes are commented out until proper authentication is implemented
  // to prevent unauthorized access to contact inquiries (PII data)
  
  /*
  // GET /api/contact-inquiries - Get all contact inquiries (admin route)
  app.get("/api/contact-inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getAllContactInquiries();
      res.json(inquiries);
    } catch (error) {
      console.error("Error fetching contact inquiries:", error);
      res.status(500).json({ error: "Failed to fetch contact inquiries" });
    }
  });

  // GET /api/contact-inquiries/:id - Get single contact inquiry
  app.get("/api/contact-inquiries/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const inquiry = await storage.getContactInquiry(id);
      
      if (!inquiry) {
        return res.status(404).json({ error: "Contact inquiry not found" });
      }
      
      res.json(inquiry);
    } catch (error) {
      console.error("Error fetching contact inquiry:", error);
      res.status(500).json({ error: "Failed to fetch contact inquiry" });
    }
  });
  */

  // POST /api/contact-inquiries - Submit new contact inquiry
  app.post("/api/contact-inquiries", async (req, res) => {
    try {
      // Validate full schema including consent requirement
      const validationResult = insertContactInquirySchema.safeParse(req.body);
      
      if (!validationResult.success) {
        return res.status(400).json({ error: "Validation failed", details: validationResult.error.flatten().fieldErrors });
      }

      // Extract consent and pass the rest to storage (consent is not persisted)
      const { consent, ...inquiryData } = validationResult.data;
      const inquiry = await storage.createContactInquiry(inquiryData);
      
      // Send email notification to company
      const companyEmail = process.env.TO_EMAIL || "info@propertymasters.ca"; // Company notification email
      try {
        // Ensure all required fields have values for email template
        const emailData = {
          name: inquiryData.name,
          email: inquiryData.email,
          phone: inquiryData.phone ?? null,
          message: inquiryData.message,
          inquiryType: inquiryData.inquiryType ?? 'general'
        };
        await sendContactInquiryNotification(emailData, companyEmail);
        console.log(`Contact inquiry notification sent to ${companyEmail}`);
      } catch (emailError) {
        console.error("Failed to send email notification:", emailError);
        // Continue execution - don't fail the request if email fails
      }
      
      res.status(201).json({ message: "Contact inquiry submitted successfully", id: inquiry.id });
    } catch (error) {
      console.error("Error creating contact inquiry:", error);
      res.status(500).json({ error: "Failed to submit contact inquiry" });
    }
  });

  // Contact form endpoint for external API compatibility
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, subject, message } = req.body;
      
      // Basic validation
      if (!name || !email || !message) {
        return res.status(400).json({ 
          ok: false, 
          error: "Missing required fields: name, email, and message are required" 
        });
      }

      // Create contact inquiry data
      const inquiryData = {
        name: name.trim(),
        email: email.trim(),
        phone: phone ? phone.trim() : null,
        message: message.trim(),
        inquiryType: 'general'
      };

      // Store the inquiry (without consent field since it's external)
      const inquiry = await storage.createContactInquiry(inquiryData);
      
      // Send email notification to company
      const companyEmail = process.env.TO_EMAIL || "reception@propertymasters.ca";
      try {
        await sendContactInquiryNotification(inquiryData, companyEmail);
        console.log(`Contact form notification sent to ${companyEmail}`);
      } catch (emailError) {
        console.error("Failed to send email notification:", emailError);
        // Continue execution - don't fail the request if email fails
      }
      
      res.json({ 
        ok: true, 
        message: "Contact inquiry submitted successfully",
        id: inquiry.id 
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ 
        ok: false, 
        error: "Failed to submit contact inquiry" 
      });
    }
  });

  /*
  // PUT /api/contact-inquiries/:id/status - Update contact inquiry status (admin route)
  app.put("/api/contact-inquiries/:id/status", async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      
      if (!status || !['pending', 'contacted', 'closed'].includes(status)) {
        return res.status(400).json({ error: "Invalid status. Must be 'pending', 'contacted', or 'closed'" });
      }

      const updatedInquiry = await storage.updateContactInquiryStatus(id, status);
      
      if (!updatedInquiry) {
        return res.status(404).json({ error: "Contact inquiry not found" });
      }
      
      res.json(updatedInquiry);
    } catch (error) {
      console.error("Error updating contact inquiry status:", error);
      res.status(500).json({ error: "Failed to update contact inquiry status" });
    }
  });
  */

  const httpServer = createServer(app);

  return httpServer;
}