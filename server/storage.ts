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

  // Initialize with the real property portfolio from PDF
  private initializeDefaultProperties() {
    const defaultProperties: InsertProperty[] = [
      // Shopping Centers & Retail
      { name: 'Argyll Shopping Centre', address: '6815 83 Street, Edmonton, AB T6C 2X9', totalSF: 24508, vacantSF: 2993, occupiedSF: 21515, propertyType: 'retail' },
      { name: 'Castledowns Shopping Centre', address: '10807 Castledowns Road, Edmonton, AB', totalSF: 60173, vacantSF: 0, occupiedSF: 60173, propertyType: 'retail' },
      { name: 'No Frills', address: '5101 47 Avenue, Stettler, AB T0A 3A1', totalSF: 37562, vacantSF: 0, occupiedSF: 37562, propertyType: 'retail' },
      { name: 'Millwoods Mainstreet', address: '6107 28 Avenue, Edmonton, AB T6L 6N5', totalSF: 39194, vacantSF: 0, occupiedSF: 39194, propertyType: 'retail' },
      { name: 'Sherwood Park Plaza', address: '101 Granada Boulevard, Sherwood Park, AB T8A 4W2', totalSF: 44180, vacantSF: 0, occupiedSF: 44180, propertyType: 'retail' },
      { name: 'Wainwright Crossing', address: '2840 13th Avenue, Wainwright, AB T9W 0A2', totalSF: 11249, vacantSF: 0, occupiedSF: 11249, propertyType: 'retail' },
      { name: 'Wild Rose Square', address: '130 & 152 Sioux Road, Sherwood Park, AB T8A 3X5', totalSF: 20693, vacantSF: 0, occupiedSF: 20693, propertyType: 'retail' },
      { name: 'Broadmoor Baseline Crossing', address: '975 Broadmoor Boulevard, Sherwood Park, AB', totalSF: 55358, vacantSF: 4832, occupiedSF: 50526, propertyType: 'retail' },
      
      // Professional & Office Buildings
      { name: 'Brentwood Building', address: '48 Brentwood Boulevard, Sherwood Park, AB T8A 2H5', totalSF: 21706, vacantSF: 5285, occupiedSF: 16421, propertyType: 'office' },
      { name: 'Normed Professional Centre', address: '50 Brentwood Boulevard, Sherwood Park, AB T8A 2H5', totalSF: 13160, vacantSF: 4766, occupiedSF: 8394, propertyType: 'office' },
      { name: 'Centre 34', address: '3360 Parsons Road, Edmonton, AB T6N 1B5', totalSF: 20165, vacantSF: 0, occupiedSF: 20165, propertyType: 'office' },
      { name: 'Hans Professional Centre', address: '720 91 Street SW, Edmonton, AB T6X 0E4', totalSF: 28715, vacantSF: 0, occupiedSF: 28715, propertyType: 'office' },
      { name: 'AHS Project', address: '113 Thickwood Boulevard, Fort McMurray, AB T9H 5E5', totalSF: 11690, vacantSF: 0, occupiedSF: 11690, propertyType: 'office' },
      { name: 'Soper Building', address: '10519–11350 114 Street, Edmonton, AB', totalSF: 20033, vacantSF: 0, occupiedSF: 20033, propertyType: 'office' },
      { name: 'Winnington Building', address: '12415 Stony Plain Road, Edmonton, AB T5N 3N3', totalSF: 10289, vacantSF: 3945, occupiedSF: 6344, propertyType: 'office' },
      
      // Mixed Use & Special Properties
      { name: 'Natasha Manor', address: '7424–7432 101 Avenue, Edmonton, AB T6A 0J3', totalSF: 3517, vacantSF: 1200, occupiedSF: 2317, propertyType: 'mixed-use' },
      { name: 'Plaza 127 & Warehouse 127', address: '10204 & 10120 127 Avenue, Edmonton, AB', totalSF: 20661, vacantSF: 2125, occupiedSF: 18536, propertyType: 'mixed-use' },
      { name: 'Woodbridge Gardens', address: '9 Sioux Road, Sherwood Park, AB T8A 4C7', totalSF: 18058, vacantSF: 0, occupiedSF: 18058, propertyType: 'mixed-use' },
      { name: 'Ever @ Ellerslie', address: '10606 / 10680 Ellerslie Road, Edmonton, AB', totalSF: 22877, vacantSF: 3417, occupiedSF: 19460, propertyType: 'mixed-use' },
      { name: 'Hinton Land', address: '816 Carmichael Lane, Hinton, AB T7V 1T1', totalSF: 5481, vacantSF: 0, occupiedSF: 5481, propertyType: 'mixed-use' }
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
      vacantSF: (typeof validUpdates.vacantSF === 'number') ? validUpdates.vacantSF : existing.vacantSF,
      occupiedSF: (typeof validUpdates.occupiedSF === 'number') ? validUpdates.occupiedSF : existing.occupiedSF,
      propertyType: (typeof validUpdates.propertyType === 'string') ? validUpdates.propertyType : existing.propertyType,
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
      phone: (typeof inquiry.phone === 'string') ? inquiry.phone : null,
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
