export const getImageUrl = (
  item,
  baseUrl = "https://admin.askiyachilar.uz"
) => {
  return (
    baseUrl + item?.image?.data?.attributes?.url ||
    item?.rasm?.data?.attributes?.url ||
    ""
  );
};
