function ProductCom({ src, alt, name, pathname, url_slug, type }: any) {
  return (
    <div>
      {type === "gallery" ? (
        <div className="space-y-4">
          <img className="" src={src} width={50} height={50} alt={alt} />
          <p
            className={`${
              pathname === "/product" ? "text-black" : "text-white"
            } font-bold`}
          >
            {name}
          </p>
        </div>
      ) : (
        <a className="space-y-4" href={`/product/${url_slug}`}>
          <img className="" src={src} width={50} height={50} alt={alt} />
          <p
            className={`${
              pathname === "/product" ? "text-black" : "text-white"
            } font-bold`}
          >
            {name}
          </p>
        </a>
      )}
    </div>
  );
}

export default ProductCom;
