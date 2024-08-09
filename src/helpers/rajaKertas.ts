import request from "./request";
type method = "put" | "post" | "delete";

const getRequest = async (
  endpoint: string,
  params: Object
  //   response: NextApiResponse
) => {
  try {
    // const { data: response } = await request.get(endpoint, { params });
    const data = await fetch(`${import.meta.env.PUBLIC_API}${endpoint}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const result = await data.json();
    return result;
  } catch (error) {
    throw error;
  }
};

const postRequest = async (
  endpoint: string,
  body: any,
  isFormData = false,
  method: method
) => {
  // let payload = body;
  // if (isFormData) {
  //   payload = new FormData();
  //   Object.keys(body).forEach((key: string) => {
  //     payload.append(key, body[key]);
  //   });
  // }
  try {
    // const { data: response } = await request[method](endpoint, payload);
    const data = await fetch(`${import.meta.env.PUBLIC_API}${endpoint}`, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const result = data.json();
    return result;
  } catch (error) {
    throw error;
  }
};

export const getLogoHitam = () => getRequest(`/public/config-key/Logo/`, {});
export const getHero = () => getRequest(`/public/config-key/HERO_LOGO/`, {});
export const getHeroImage = () =>
  getRequest(`/public/config-key/HERO_IMAGE/`, {});

export const getProdukHero = () =>
  getRequest(`/public/config-key/PRODUCT_HERO/`, {});

export const getTentangKamiPageProduct = () =>
  getRequest(`/public/config-key/TENTANG_KAMI_PAGE_1/`, {});
export const getTentangKamiPageDua = () =>
  getRequest(`/public/config-key/TENTANG_KAMI_PAGE_2/`, {});
export const getTentangKamiPageTiga = () =>
  getRequest(`/public/config-key/TENTANG_KAMI_PAGE_3/`, {});

export const getTentangKami = () =>
  getRequest(`/public/config-key/TENTANG_KAMI_HOME/`, {});

export const getWhyKoru = () => getRequest(`/why-koru/`, {});

export const getKeunggulan = () =>
  getRequest(`/public/config-key/KEUNGGULAN/`, {});
export const getFaq = () => getRequest(`/public/config-key/FAQ/`, {});
export const getHomeGallery = () => getRequest(`/home-gallery/`, {});
export const getProductList = () => getRequest(`/product/`, {});
export const getPartner = () => getRequest(`/our-partner/`, {});
export const getFooter = () => getRequest(`/public/config-key/Footer/`, {});
export const getMainProduct = () =>
  getRequest(`/public/config-key/mainproduct/`, {});
export const getWhatsapp = () => getRequest(`/public/config-key/WHATSAPP/`, {});
export const getProductDetail = (params: any) =>
  getRequest(`/product-detail/?url_slug=${params}`, {});

export const postContactUs = (body: any) =>
  postRequest(`/contact-us-form/`, body, false, "post");
