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
    url: "booking",
    method: "GET",
  });
}

export function editBooking(data:any){
  return restClient({
    url: "booking",
    method: "POST",
    data
  });
}