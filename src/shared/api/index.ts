import axios from "axios";
import { getLocale } from "next-intl/server";
import { env } from "../config/env";

const API = axios.create({
  baseURL: env.baseUrl,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const PUBLIC_API = axios.create({
  baseURL: env.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getServerClient = async () => {
  const locale = await getLocale();

  return axios.create({
    baseURL: env.baseUrl,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": locale,
    },
  });
};

API.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const cookies = Object.fromEntries(
      document.cookie.split("; ").map((c) => c.split("=")),
    );
    const locale = cookies["NEXT_LOCALE"] ?? "uz";

    config.headers["Accept-Language"] = locale;
  }

  return config;
});

export default API;
