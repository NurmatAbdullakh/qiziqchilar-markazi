export const getImageUrl = (
  item,
  baseUrl = "https://admin.askiyachilar.uz"
) => {
  return (
    baseUrl +
    (
      item?.image?.data?.[0]?.attributes?.url ||
      item?.image?.data?.attributes?.url ||
      item?.images?.data?.[0]?.attributes?.url ||
      item?.images?.[0]?.url ||
      item?.rasm?.data?.attributes?.url ||
      item?.profil_rasmi?.data?.attributes?.url ||
      item?.cover_rasmi?.data?.attributes?.url ||
      item?.cover_rasmi?.url ||
      "")
  );
};
