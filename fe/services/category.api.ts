import restClient from "./restClient";
import { StorageService } from "./storage";

const tokenWithQuotes = StorageService.getToken(); 
const token = tokenWithQuotes ? tokenWithQuotes.replace(/['"]+/g, '') : ''; 
const headers = token ? { Authorization: `Bearer ${token}` } : {}; 

export function getCategory(activePage?: number, name?: string) {
  return restClient({
    url: "category/list?size=1",
    params: { page: activePage, name },
    headers
  });
}

export function addCategory(data: any) {
  return restClient({
    url: "category/create",
    method: "POST",
    data: data,
    headers
  });
}

export function editCategory(data: any) {
  return restClient({
    url: "category/edit",
    method: "PUT",
    data: data,
    headers
  });
}

export function deleteCategory(id: string) {
  return restClient({
    url: `category/delete?id=${id}`,
    method: "DELETE",
    headers
  });
}
export function viewUpdate(id: string,type: string,page:number, size: number) {
  return restClient({
    url: `log/list?id=${id}`,
    method: "GET",
    params:{type:type,
            page:page,
            size:size   },
    headers
  });
}
