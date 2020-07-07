export interface Message {
  message: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  percentComplete: number;
  favorite: boolean;
}

export interface Lesson {
  id: string;
  title: string;
  description?: string;
}
