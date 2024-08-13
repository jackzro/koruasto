import { getProductList } from "@/helpers/koru";

export async function GET() {
  const pages = [
    { path: "", lastModified: new Date().toLocaleDateString("en-CA") },
    {
      path: "/tentang-kami",
      lastModified: new Date().toLocaleDateString("en-CA"),
    },
    // {
    //   path: "/contact-us",
    //   lastModified: new Date().toLocaleDateString("en-CA"),
    // },
  ];
  const siteUrl = import.meta.env.SITE;

  try {
    // const product = await getProductList();

    // if (product.results.length !== 0) {
    // product.results.map((detail: any) => {
    //   pages.push({
    //     path: "/product/" + detail.url_slug,
    //     lastModified: new Date().toLocaleDateString("en-CA"),
    //   });
    // });

    const result = `  
    <?xml version="1.0" encoding="UTF-8"?>  
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">  
    ${pages.map(
      ({ path, lastModified }) => `
    <url>
      <loc>${siteUrl}${path}</loc>
      <lastmod>${lastModified}</lastmod>
      <priority>1.0</priority>
    </url>
    `
    )}
     
    </urlset>  
      `.trim();

    return new Response(result, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
    // }
  } catch (error) {}
}
