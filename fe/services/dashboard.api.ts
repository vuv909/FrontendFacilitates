import restClient from "./restClient";
import { StorageService } from "./storage";

export const getListDashboard = (page?: number, name?: any, sort?: any) => {
  const tokenWithQuotes = StorageService.getToken();
  const token = tokenWithQuotes ? tokenWithQuotes.replace(/['"]+/g, "") : "";
  const headers = token ? { Authorization: `Bearer ${token}` } : {};
  return restClient({
    url: "facility/list-dashboard?size=2",
    method: "GET",
    params: { page, name, sort },
    headers,
  });
};

export const getTopNumber = () => {
  return restClient({
    url: "facility/list-dashboard?size=8",
    method: "GET",
    params: { sort : 'TOTAL_BOOKED_DESC' },
  });
};
