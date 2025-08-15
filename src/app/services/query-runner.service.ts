import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QueryRequest } from '../models/query.model';

@Injectable({ providedIn: 'root' })
export class QueryRunnerService {
  private baseUrl = '/api/query';

  constructor(private http: HttpClient) {}

  runSingleDbQuery(query: QueryRequest): Observable<any[]> {
    return this.http.post<any[]>(`${this.baseUrl}/single`, query);
  }

  runMultiDbQuery(query: QueryRequest): Observable<any[]> {
    return this.http.post<any[]>(`${this.baseUrl}/multi`, query);
  }
}
