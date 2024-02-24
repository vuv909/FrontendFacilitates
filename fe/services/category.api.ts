import restClient from "./restClient";

export function getCategory() {
  return restClient({
    url: "category/list",
  });
}

export function addCategory(data: any) {
  return restClient({
    url: "category/create",
    data: data,
  });
}

export function editCategory(data: any) {
  return restClient({
    url: "category/edit",
    data: data,
  });
}

export function deleteCategory(id: number) {
  return restClient({
    url: `category/dekete?id=${id}`,
  });
}
