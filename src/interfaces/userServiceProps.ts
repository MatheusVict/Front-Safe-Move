export interface userService {
  id?: number;
  userName?: string;
  email?: string;
  password?: string;
  createdAt?: string;
  updatedAT?: string;
  deletedAt?: any;
  guardians?: [
    {
    id: number,
    guardianName: string, 
    email: string, 
    password: string, 
    createdAt: string, 
    updatedAT: string, 
    deletedAt: string
    }
  ]
}

export interface emailProps {
  to: string;
  subject: string;
  message: string;
}

export interface userAuth {
  user: userService;
  token: string;
}