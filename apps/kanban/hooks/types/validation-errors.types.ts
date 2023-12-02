export interface ValidationErrors {
  title?: string;
  columnErrors?: Record<string, string | undefined>;
}
