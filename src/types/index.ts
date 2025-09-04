export type UserRole = 'tourist' | 'worker' | 'admin' | 'authority';

export interface User {
  id: string;
  role: UserRole;
  name: string;
}

export interface DashboardProps {
  userRole: UserRole;
}