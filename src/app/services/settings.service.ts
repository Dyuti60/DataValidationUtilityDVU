import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Settings } from '../models/settings.model';

@Injectable({ providedIn: 'root' })
export class SettingsService {
  private baseUrl = '/api/settings';

  constructor(private http: HttpClient) {}

  getSettings(): Observable<Settings> {
    return this.http.get<Settings>(this.baseUrl);
  }

  updateSettings(settings: Settings): Observable<Settings> {
    return this.http.put<Settings>(this.baseUrl, settings);
  }
}
