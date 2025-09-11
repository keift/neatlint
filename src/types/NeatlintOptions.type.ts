export type NeatlintOptions = {
  disabled?: boolean;

  ignores?: string[];

  javascript?: {
    files?: string[];
    languageOptions?: object;
    plugins?: Record<string, unknown>;

    rules?: Record<string, string | object>;
  };

  typescript?: {
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
