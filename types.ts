export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum BookingStep {
  SELECT_SERVICE,
  DATE_TIME,
  DETAILS,
  CONFIRMATION
}

export interface BusinessConfig {
  name: string;
  industry: string;
  services: Service[];
  about: string;
}

export type View = 'home' | 'courses' | 'work' | 'academy';