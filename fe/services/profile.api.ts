import restClient from "./restClient";

export function getProfile(id:String){
    return restClient({
        url:`users/${id}`
    })
}
export function updateProfile(id:String,data:any){
return restClient({
    url:`users/${id}`,
    method:`PUT`,
    data:data,

})
}