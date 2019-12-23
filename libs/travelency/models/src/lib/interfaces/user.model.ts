export interface User {
  name: string;
  email: string;
  role: 'user' | 'admin';
  passwordChangedAt: Date;
  passwordResetToken: string;
  passwordResetExpires: Date;
  password?: string;
  passwordConfirm?: string;
  active?: boolean;
}
