export interface Settings {
  appName: string;
  theme: 'light' | 'dark';
  language: string;
  dateFormat: string;
  timeZone: string;
  security?: {
    passwordPolicy?: string;
    sessionTimeout?: number;
  };
}
export interface AdminSettings {
  maxConnections: number;
  queryTimeoutSeconds: number;
  enableLogging: boolean;
  maintenanceMode: boolean;
}
