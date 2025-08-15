export interface QueryRequest {
  id?: string;
  connectionId?: string;       // For single DB
  connectionIds?: string[];    // For multi DB queries
  sql: string;
  parameters?: Record<string, any>;
  createdBy?: string;
  createdAt?: Date;
}

export interface QueryResult {
  columns: string[];
  rows: any[]; // can be typed more strictly if you know schema
  rowCount: number;
  executionTimeMs: number;
}
