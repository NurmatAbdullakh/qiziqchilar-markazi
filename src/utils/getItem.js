export const getItem = (data) => {
  return { ...data?.data?.data?.attributes, id: data?.data?.data?.id };
};
