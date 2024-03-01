import restClient from "./restClient";


export function getFacilities(activePage?: number) {
    return restClient({
        url: "facility/list",
        params: {page : activePage}
    });
}

export function getFacilityDetail(id: String){
    return restClient({
        url: `facility/detail/${id}`,
    });
}

export function addFacility(data: any){
    return restClient({
        url:"facility/create",
        method: "POST",
        data: data,
    });
}

export function updateFacility(data: any){
    return restClient({
        url:"facility/update",
        method: "PUT",
        data: data,
    });
}

export function deleteFacility(id: string){
    return restClient({
        url: "facility/delete?id="+id,
        method: "DELETE",
    })
}

export function facilityById(id : string){
    return restClient({
        url: "facility/detail/"+id,
        method: "GET",
    })
}

export function searchFacility(name?:string , categoryId?:string, page?: number , size ?: number){
    return restClient({
        url: "facility/list",
        method: "GET",
        params: {
            page  , size , name , categoryId 
        }
    })
}
