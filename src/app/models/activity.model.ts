export interface Activity {
  id?: string;
  userId: string;
  username: string;
  activityType: string; // e.g., "LOGIN", "RUN_QUERY"
  details?: string;
  timestamp: string;
}