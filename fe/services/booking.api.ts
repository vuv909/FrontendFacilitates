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
    url: "booking/user/"+id+"?page=1&&size=6",
    method: "GET",
  });
}

export function getAllBooking(page = 1 , size = 5) {
  return restClient({
    url: "booking?page="+page+"&size="+size,
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

export function calendarBooking(weeks ?:string,faciId ?: string){
  
  console.log('====================================');
  console.log("faciId: ",faciId);
  console.log('====================================');

  return restClient({
    url: "booking/status/"+faciId,
    method: "GET",
    params : {weeks}
  });
}