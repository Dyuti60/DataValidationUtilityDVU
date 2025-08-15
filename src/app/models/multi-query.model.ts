import { QueryResult } from './query.model';
export interface MultiQueryRequest {
  connections: string[]; // array of connection IDs
  sql: string;
}

export interface MultiQueryResult {
  connectionId: string;
  result: QueryResult;
}