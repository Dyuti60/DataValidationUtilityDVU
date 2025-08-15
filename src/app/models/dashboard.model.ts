export interface DashboardStats {
  activeConnections: number;
  totalQueriesToday: number;
  failedQueries: number;
  topUsers: { username: string; queriesRun: number }[];
}
