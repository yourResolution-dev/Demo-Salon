export type ServiceCategoryId = 'all' | 'hair' | 'skin' | 'makeup' | 'spa';

export interface ServiceCategory {
  id: ServiceCategoryId;
  label: string;
  count: number;
}

export interface ServiceItem {
  id: string;
  categoryId: 'hair' | 'skin' | 'makeup' | 'spa';
  categoryName: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  duration: string;
  price: number;
  originalPrice?: number;
  image: string;
  includes: string[];
  benefits: string[];
  badge?: string;
  popular?: boolean;
}

export interface PackageItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  duration: string;
  price: number;
  originalPrice: number;
  discountBadge: string;
  iconType: 'facial' | 'hair' | 'bridal';
  itemsIncluded: string[];
  idealFor: string;
  serviceCategory: string;
}

export interface StylistExpert {
  id: string;
  name: string;
  role: string;
  specialization: string;
  experience: string;
  rating: number;
  clientCount: string;
  image: string;
  bio: string;
  certifications: string[];
  specialties: string[];
  instagram: string;
}

export interface TransformationItem {
  id: string;
  title: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  serviceUsed: string;
  duration: string;
  expert: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  review: string;
  service: string;
  date: string;
  verified: boolean;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  serviceId: string;
  serviceName: string;
  date: string;
  time: string;
  stylistId?: string;
  notes?: string;
}
