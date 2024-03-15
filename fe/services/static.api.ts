import restClient from "./restClient";
import { StorageService } from "./storage";

const tokenWithQuotes = StorageService.getToken();
const token = tokenWithQuotes ? tokenWithQuotes.replace(/['"]+/g, "") : "";
const headers = token ? { Authorization: `Bearer ${token}` } : {};

export function userStatic() {
  return restClient({
    url: "users/stastic-by-role",
    method: "GET",
    headers,
  });
}

export function faciStatic() {
  return restClient({
    url: "facility/stastic-by-category",
    method: "GET",
    headers,
  });
}

export function statisticStaticByYear(year?: number, status?: number) {
  return restClient({
    url: "booking/dashboard/month",
    params: {status,year}
  });
}
