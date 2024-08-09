import { Button } from "../components/ui/button";

const ButtonBeli = ({ response, title, stylecss }: any) => {
  const handleBeli = () => {
    window.open(
      `https://wa.me/${response.value.phone}/?text=${response.value.message}`,
      "_blank"
    );
  };
  return (
    <Button
      className={`${stylecss}`}
      // className="w-[300px] border-2 border-white bg-abukoru hover:border-abukoru hover:bg-black rounded-xl px-6 py-2 cursor-pointer"
      onClick={() => handleBeli()}
    >
      {title}
    </Button>
  );
};

export default ButtonBeli;
