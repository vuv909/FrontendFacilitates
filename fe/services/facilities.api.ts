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

export function deleteFacility(id: number){
    return restClient({
        url: "facility/delete",
        method: "DELETE",
        data: id,
    })
}