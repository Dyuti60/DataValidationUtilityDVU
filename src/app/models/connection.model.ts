export interface Connection {
  id?: string;
  name: string;
  type: 'MySQL' | 'PostgreSQL' | 'MSSQL' | 'Oracle' | 'SQLite';
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  options?: Record<string, any>;
}