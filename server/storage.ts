import { type Property, type InsertProperty, type ContactInquiry, type InsertContactInquiry } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Property operations
  getAllProperties(): Promise<Property[]>;
  getProperty(id: string): Promise<Property | undefined>;
  createProperty(property: InsertProperty): Promise<Property>;
  updateProperty(id: string, updates: Partial<InsertProperty>): Promise<Property | undefined>;
  deleteProperty(id: string): Promise<boolean>;
  
  // Contact inquiry operations
  getAllContactInquiries(): Promise<ContactInquiry[]>;
  getContactInquiry(id: string): Promise<ContactInquiry | undefined>;
  createContactInquiry(inquiry: Omit<InsertContactInquiry, 'consent'>): Promise<ContactInquiry>;
  updateContactInquiryStatus(id: string, status: 'pending' | 'contacted' | 'closed'): Promise<ContactInquiry | undefined>;
}

export class MemStorage implements IStorage {
  private properties: Map<string, Property>;
  private contactInquiries: Map<string, ContactInquiry>;

  constructor() {
    this.properties = new Map();
    this.contactInquiries = new Map();
    this.initializeDefaultProperties();
  }

  // Initialize with the existing property data
  private initializeDefaultProperties() {
    const defaultProperties: InsertProperty[] = [
      { name: 'Argyll Shopping Centre', address: 'Edmonton, AB', totalSF: 24508, vacantSF: 2993, occupiedSF: 21515, propertyType: 'retail' },
      { name: 'Brentwood Building', address: 'Edmonton, AB', totalSF: 21706, vacantSF: 5285, occupiedSF: 16421, propertyType: 'office' },
      { name: 'Normed Professional Centre', address: 'Edmonton, AB', totalSF: 13160, vacantSF: 4766, occupiedSF: 8394, propertyType: 'office' },
      { name: 'Broadmoor Baseline Crossing', address: 'Sherwood Park, AB', totalSF: 55358, vacantSF: 4832, occupiedSF: 50526, propertyType: 'mixed-use' },
      { name: 'Castledowns Shopping Centre', address: 'Edmonton, AB', totalSF: 60173, vacantSF: 0, occupiedSF: 60173, propertyType: 'retail' },
      { name: 'Centre 34', address: 'Edmonton, AB', totalSF: 20165, vacantSF: 0, occupiedSF: 20165, propertyType: 'office' },
      { name: 'Hans Professional Centre', address: 'Edmonton, AB', totalSF: 28715, vacantSF: 0, occupiedSF: 28715, propertyType: 'office' },
      { name: 'Hinton Land', address: 'Hinton, AB', totalSF: 5481, vacantSF: 0, occupiedSF: 5481, propertyType: 'commercial' },
      { name: 'AHS Project', address: 'Alberta', totalSF: 11690, vacantSF: 0, occupiedSF: 11690, propertyType: 'office' },
      { name: 'No Frills', address: 'Edmonton, AB', totalSF: 37562, vacantSF: 0, occupiedSF: 37562, propertyType: 'retail' },
      { name: 'Millwoods Mainstreet', address: 'Edmonton, AB', totalSF: 39194, vacantSF: 0, occupiedSF: 39194, propertyType: 'retail' },
      { name: 'Natasha Manor', address: 'Edmonton, AB', totalSF: 3517, vacantSF: 1200, occupiedSF: 2317, propertyType: 'residential' }
    ];

    defaultProperties.forEach(prop => {
      const id = randomUUID();
      const property: Property = {
        ...prop,
        id,
        vacantSF: prop.vacantSF ?? 0,
        occupiedSF: prop.occupiedSF ?? 0,
        propertyType: prop.propertyType ?? 'commercial',
        description: prop.description ?? null,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      this.properties.set(id, property);
    });
  }

  // Property methods
  async getAllProperties(): Promise<Property[]> {
    return Array.from(this.properties.values()).sort((a, b) => a.name.localeCompare(b.name));
  }

  async getProperty(id: string): Promise<Property | undefined> {
    return this.properties.get(id);
  }

  async createProperty(insertProperty: InsertProperty): Promise<Property> {
    const id = randomUUID();
    const now = new Date();
    const property: Property = {
      ...insertProperty,
      id,
      vacantSF: insertProperty.vacantSF ?? 0,
      occupiedSF: insertProperty.occupiedSF ?? 0,
      propertyType: insertProperty.propertyType ?? 'commercial',
      description: insertProperty.description ?? null,
      createdAt: now,
      updatedAt: now
    };
    this.properties.set(id, property);
    return property;
  }

  async updateProperty(id: string, updates: Partial<InsertProperty>): Promise<Property | undefined> {
    const existing = this.properties.get(id);
    if (!existing) return undefined;

    // Filter out undefined values to prevent overwriting required fields
    const validUpdates = Object.fromEntries(
      Object.entries(updates).filter(([_, value]) => value !== undefined)
    );

    const updated: Property = {
      ...existing,
      ...validUpdates,
      // Ensure defaults are maintained for optional fields
      vacantSF: validUpdates.vacantSF ?? existing.vacantSF,
      occupiedSF: validUpdates.occupiedSF ?? existing.occupiedSF,
      propertyType: validUpdates.propertyType ?? existing.propertyType,
      description: validUpdates.description !== undefined ? validUpdates.description : existing.description,
      updatedAt: new Date()
    };
    this.properties.set(id, updated);
    return updated;
  }

  async deleteProperty(id: string): Promise<boolean> {
    return this.properties.delete(id);
  }

  // Contact inquiry methods
  async getAllContactInquiries(): Promise<ContactInquiry[]> {
    return Array.from(this.contactInquiries.values()).sort((a, b) => 
      new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
    );
  }

  async getContactInquiry(id: string): Promise<ContactInquiry | undefined> {
    return this.contactInquiries.get(id);
  }

  async createContactInquiry(inquiry: Omit<InsertContactInquiry, 'consent'>): Promise<ContactInquiry> {
    const id = randomUUID();
    const contactInquiry: ContactInquiry = {
      ...inquiry,
      id,
      phone: inquiry.phone ?? null,
      inquiryType: inquiry.inquiryType ?? 'general',
      status: inquiry.status ?? 'pending',
      createdAt: new Date()
    };
    this.contactInquiries.set(id, contactInquiry);
    return contactInquiry;
  }

  async updateContactInquiryStatus(id: string, status: 'pending' | 'contacted' | 'closed'): Promise<ContactInquiry | undefined> {
    const existing = this.contactInquiries.get(id);
    if (!existing) return undefined;

    const updated: ContactInquiry = { ...existing, status };
    this.contactInquiries.set(id, updated);
    return updated;
  }
}

export const storage = new MemStorage();
