export const handleBeli = (response: any) => {
  window.open(
    `https://wa.me/${response.value.phone}/?text=${response.value.message}`,
    "_blank"
  );
};
