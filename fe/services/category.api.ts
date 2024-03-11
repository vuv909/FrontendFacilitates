import restClient from "./restClient";

export function getCategory(activePage?: number, name?: string) {
  return restClient({
    url: "category/list?size=1",
    params: { page: activePage, name },
  });
}

export function addCategory(data: any) {
  return restClient({
    url: "category/create",
    method: "POST",
    data: data,
  });
}

export function editCategory(data: any) {
  return restClient({
    url: "category/edit",
    method: "PUT",
    data: data,
  });
}

export function deleteCategory(id: string) {
  return restClient({
    url: `category/delete?id=${id}`,
    method: "DELETE",
  });
}
