import { useWindowSize } from "usehooks-ts";

const firstColumn = (first: any, modulo: any) => {
  const colDecide = () => {
    switch (modulo) {
      case 5:
        return "grid grid-cols-5";
      case 4:
        return "grid grid-cols-4";
      case 3:
        return "grid grid-cols-3";
      case 2:
        return "grid grid-cols-2";
    }
  };

  return (
    <div className={`${colDecide()} gap-4 mt-6`}>
      {first.map((partner: any) => (
        <div key={partner.id} className={` flex items-center justify-center`}>
          <img
            className="w-[100px] h-[100px] object-scale-down"
            height={20}
            width={20}
            src={partner.our_partner_image}
            alt={partner.our_partner_image_alt}
            sizes="100vw"
          />
        </div>
      ))}
    </div>
  );
};

const lastColumn = (last: any) => {
  return (
    <div className="flex items-center justify-center mt-6  space-x-10 ">
      {last.map((partner: any) => (
        <div key={partner.id} className={` flex items-center justify-center`}>
          <img
            className="h-[100px] w-[100px]"
            width="0"
            height="0"
            sizes="100vw"
            src={partner.our_partner_image}
            alt={partner.our_partner_image_alt}
          />
        </div>
      ))}
    </div>
  );
};

const Mitra = ({ data }: any) => {
  const window = useWindowSize();
  const divideArray = () => {
    let modulo = 5;
    if (window.width! < 600 && window.width! > 100) {
      modulo = 2;
    } else if (window.width! < 800 && window.width! >= 600) {
      modulo = 3;
    } else if (window.width! <= 1200 && window.width! >= 800) {
      modulo = 4;
    } else {
      modulo = 5;
    }
    const lastCount = data?.results.length - (data?.results.length % modulo);

    let first = data?.results.slice(0, lastCount);
    let last = data?.results.slice(lastCount, data?.results.length);
    return (
      <>
        {firstColumn(first, modulo)} {lastColumn(last)}
      </>
    );
  };
  return <div>{divideArray()}</div>;
};

export default Mitra;
