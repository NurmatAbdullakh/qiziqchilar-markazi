import { useMutation, useQuery } from "@tanstack/react-query";
import { request } from "./request";

export const ApiService = {
  get: (
    url,
    params = {
      images: "*",
      populate: "*",
      pagination: {
        start: 0,
        limit: 10,
      },
    }
  ) => request.get(`${url}`, { params:{
      images: "*",
      populate: "*",
      pagination: {
        start: 0,
        limit: 10,
    },
    ...params
    }}),
  getOne: (
    url,
    id,
    params = {
      images: "*",
      populate: "*",
    }
  ) => request.get(`/${url}/${id}`, { params }),
  
  createArizalar: (data) => {
    return request.post("/arizalars", {data})
  },
};

export const useCreateArizalarMutation = () =>
  useMutation({
    mutationKey: ["arizalar"],
    mutationFn: (data) => {console.log("queryFn"); return ApiService.createArizalar(data)},
    retry: 0,
  });

export const useGetAllByUrlQuery = (url, params) =>
  useQuery({
    queryKey: [url],
    queryFn: () => ApiService.get(url, params),
    retry: 0,
  });

export const useGetOneByUrlQuery = (url, id) =>
  useQuery({
    queryKey: [url, id],
    queryFn: () => ApiService.getOne(url, id),
    retry: 0,
  });
