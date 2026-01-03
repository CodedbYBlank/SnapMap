import { ExpoConfig } from "@expo/config";

const config: ExpoConfig = {
  name: "Snap Map",
  slug: "snap-map",
  scheme: "snapmap",
  version: "1.0.0",

  extra: {
    API_BASE_URL: process.env.EXPO_PUBLIC_API_BASE_URL,
  },
};

export default config;