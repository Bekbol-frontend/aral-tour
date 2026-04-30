import axios from "axios";
import { env } from "../config/env";

const PUBLIC_API = axios.create({
  baseURL: env.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

PUBLIC_API.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const cookies = Object.fromEntries(
      document.cookie.split("; ").map((c) => c.split("=")),
    );
    const locale = cookies["NEXT_LOCALE"] ?? "uz";

    config.headers["Accept-Language"] = locale;
  }

  return config;
});

export default PUBLIC_API;
