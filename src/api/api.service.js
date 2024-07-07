import { useQuery } from "@tanstack/react-query";
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
  ) => request.get(`${url}`, { params }),
  getOne: (
    url,
    id,
    params = {
      images: "*",
      populate: "*",
    }
  ) => request.get(`/${url}/${id}`, { params }),
};

export const useGetAllByUrlQuery = (url) =>
  useQuery({
    queryKey: [url],
    queryFn: () => ApiService.get(url),
    retry: 0,
  });

export const useGetOneByUrlQuery = (url, id) =>
  useQuery({
    queryKey: [url, id],
    queryFn: () => ApiService.getOne(url, id),
    retry: 0,
  });
