export type NeatlintOptions = {
  ignores: string[];
  typescript_eslint: {
    files: string[];
    languageOptions: object;
    plugins: Record<string, unknown>;
    rules: Record<string, string | object>;
  };
  eslint: {
    files: string[];
    languageOptions: object;
    plugins: Record<string, unknown>;
    rules: Record<string, string | object>;
  };
};
