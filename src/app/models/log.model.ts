export interface Log {
  id?: string;
  timestamp: string; // ISO date format
  userId: string;
  username?: string;
  action: string;
  details?: string;
  status?: 'SUCCESS' | 'FAILURE' | 'WARNING';
}