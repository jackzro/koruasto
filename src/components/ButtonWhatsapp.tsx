const ButtonWhatsapp = ({ response }: any) => {
  const handleBeli = () => {
    window.open(
      `https://wa.me/${response.value.phone}/?text=${response.value.message}`,
      "_blank"
    );
  };
  return (
    <div>
      <a onClick={() => handleBeli()} title="beli-rajakertas">
        <img
          src={"/images/whatsapp.png"}
          alt={"rajakertas"}
          width={70}
          height={70}
          style={{
            backgroundColor: "#25D366",
            fontSize: "50px",
            position: "fixed",
            zIndex: 100,
            textAlign: "center",
            borderRadius: 50,
            color: "white",
            bottom: "40px",
            right: "40px",
            cursor: "pointer",
          }}
        />
      </a>
    </div>
  );
};

export default ButtonWhatsapp;
