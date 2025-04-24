export interface HealthResponse {
  id: string;
  query: string;
  remedies: string[];
  prescriptions: string[];
  commonSymptoms: string[];
  possibleConditions: string[];
}