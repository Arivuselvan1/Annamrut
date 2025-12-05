export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'classic' | 'exotic' | 'vegan' | 'seasonal';
  isBestSeller?: boolean;
}

export type IssueType = 'taste' | 'packaging' | 'delivery' | 'other';

export interface ContactFormState {
  name: string;
  email: string;
  message: string;
}

export interface ComplaintFormState {
  name: string;
  email: string;
  batchNumber?: string;
  issueType: IssueType;
  details: string;
}