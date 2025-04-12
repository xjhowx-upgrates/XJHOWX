export type Course = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  duration: string;
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  content: string;
  imageUrl: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};