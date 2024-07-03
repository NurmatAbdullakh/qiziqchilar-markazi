import { useQuery } from "@tanstack/react-query";
import { request } from "./request";

export const ApiService = {
  get: (url) =>
    request.get(
      `${url}?images=*&populate=*&pagination[start]=0&pagination[limit]=10`
    ),
};

export const useGetAllByUrlQuery = (url) =>
  useQuery({ queryKey: [url], queryFn: () => ApiService.get(url) });
