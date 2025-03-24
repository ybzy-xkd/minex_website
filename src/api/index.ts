import request from "@/utils/request";


export const APIGetInfo = (data: any) => {
  return request.post("/ddd", data)
}
