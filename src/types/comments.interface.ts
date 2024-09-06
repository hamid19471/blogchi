import { User } from "./user.interface";

export interface Comment {
  _id: string;
  user: User;
  content: {
    text: string;
  };
  status: number;
  openToComment: boolean;
  createdAt: string;
  answers: Answer[];
}

export interface Answer {
  _id: string;
  content: {
    text: string;
  };
  status: number;
  openToComment: boolean;
  createdAt: string;
  user: User;
}
