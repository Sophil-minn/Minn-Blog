export interface ComponentsMap {
  modularization: React.FC,
  modularizationHistory: React.FC,
  componentization: React.FC,
}

export interface RouteParams {
  id: "modularization" | "componentization" | "modularizationHistory"
}
