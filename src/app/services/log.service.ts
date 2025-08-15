import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Log } from '../models/log.model';

@Injectable({ providedIn: 'root' })
export class LogService {
  private baseUrl = '/api/logs';

  constructor(private http: HttpClient) {}

  getLogs(): Observable<Log[]> {
    return this.http.get<Log[]>(this.baseUrl);
  }

  addLog(log: Log): Observable<Log> {
    return this.http.post<Log>(this.baseUrl, log);
  }
}
