export interface Message {
  message: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  percentComplete: number;
  favorite: boolean;
}
