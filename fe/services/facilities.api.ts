import restClient from "./restClient";


export function getFacilities() {
    return restClient({
        url: "facility/list",
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

export function deleteFacility(id: number){
    return restClient({
        url: "facility/delete/"+id,
        method: "DELETE",
    })
}