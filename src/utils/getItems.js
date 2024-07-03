export const getItems = (data) =>
  data?.data?.data?.map((item) => item.attributes);
