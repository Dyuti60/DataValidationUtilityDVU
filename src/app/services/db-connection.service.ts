import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Connection } from '../models/connection.model';

@Injectable({ providedIn: 'root' })
export class DbConnectionService {
  private baseUrl = '/api/connections';

  constructor(private http: HttpClient) {}

  getConnections(): Observable<Connection[]> {
    return this.http.get<Connection[]>(this.baseUrl);
  }

  addConnection(conn: Connection): Observable<Connection> {
    return this.http.post<Connection>(this.baseUrl, conn);
  }

  deleteConnection(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
