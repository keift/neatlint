export type NeatlintOptions = {
  ignores?: string[];

  typescript?: {
    files?: string[];
    languageOptions?: object;
    plugins?: Record<string, unknown>;

    rules?: Record<string, string | object>;
  };

  javascript?: {
    files?: string[];
    languageOptions?: object;
    plugins?: Record<string, unknown>;

    rules?: Record<string, string | object>;
  };

  config?: {
    files: string[];
    [key: string]: unknown;

    rules: Record<string, string | object>;
  }[];
};
