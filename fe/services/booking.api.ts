import restClient from "./restClient";

export function addBooking(data: any) {
  return restClient({
    url: "booking",
    method: "POST",
    data: data,
  });
}

export function getBookingByUserId(id:number) {
  return restClient({
    url: "booking/user/"+id,
    method: "GET",
  });
}

export function getAllBooking() {
  return restClient({
    url: "booking?page=1&size=100",
    method: "GET",
  });
}

export function editBooking(data:any,id :string){
  
  return restClient({
    url: "booking/"+id,
    method: "PUT",
    data
  });
}