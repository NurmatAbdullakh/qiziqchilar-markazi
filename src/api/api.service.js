import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import { request } from "./request";

export const ApiService = {
  get: (url, params = {}) => {
    return request.get(`${url}`, {
      params: {
        images: "*",
        populate: "*",
        pagination: {
          start: 0,
          limit: 10,
        },
        ...params,
      },
    });
  },
  getInfinite: (url, params = {}) => {
    return request
      .get(`${url}`, {
        params: {
          images: "*",
          populate: "*",
          pagination: {
            start: params?.pageParam || 0,
            limit: 5,
          },
          ...params,
        },
      })
      .then((res) => {
        return {
          currentPage: res?.data?.meta?.pagination?.start + 1,
          lastPage: Math.ceil(res?.data?.meta?.pagination?.total / 5),
          total: res?.data?.meta?.pagination?.total,
          list: res?.data?.data,
        };
      });
  },
  getOne: (
    url,
    id,
    params = {
      images: "*",
      populate: "*",
    }
  ) => request.get(`/${url}/${id}`, { params }),

  createArizalar: (data) => {
    return request.post("/arizalars", { data });
  },
};

export const useCreateArizalarMutation = () =>
  useMutation({
    mutationKey: ["arizalar"],
    mutationFn: (data) => {
      return ApiService.createArizalar(data);
    },
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

export const useGetInfiniteQuery = (url, params) =>
  useInfiniteQuery({
    queryKey: [url],
    queryFn: ({ pageParam }) =>
      ApiService.getInfinite(url, { ...params, pageParam }),
    retry: 0,
    getNextPageParam: ({ currentPage, lastPage }) => {
      return currentPage < lastPage ? currentPage + 1 : undefined;
    },
  });
