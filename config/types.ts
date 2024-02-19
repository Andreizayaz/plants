export type mode = "production" | "development";

export type EnvType = {
  mode: mode;
  port?: number;
};

export type PluginType = {
  html: string;
  mode: mode;
  favicon: string;
};
