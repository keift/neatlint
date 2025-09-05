export type NeatlintOptions = {
  ignores: string[];
  files: string[];
  languageOptions: object;
  plugins: Record<string, unknown>;
  rules: Record<string, string | object>;
};
