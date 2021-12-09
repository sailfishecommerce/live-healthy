export default function toShopifyProductModel(product: any) {
  const productData = {
    name: product["Title"],
    price: product["CWH Price"],
    active: true,
    type: "standard",
    cost: product["HKD Cost Price"],
    customizable: true,
    description: product["Product Description"],
    meta_description: product["cwh-Meta_Description_EN"],
    meta_title: product["Metafield: title_tag [string]"],
    review_rating: product["Reviews"],
    rating: product["Rating"],
    sale: true,
    sku: product["Variant SKU"],
    tags: product["Tags"],
    vendor: product["Vendor"],
    path: product["cwh-path"],
    rrp: product["CWH RRP"],
    bestseller: product["cwh-bestseller"],
    discount: product["cwh-discount"],
    exclude: product["Exclude"],
    percentage_chinese: product["percentage_chinese"],
    low_stock: product["cwh-low_stock"],
    link: product["cwh-link"],
    new_sailfish: product["New Sailfish"],
    max_quantity: product["max_qty"],
    on_line: product["cwh-on_line"],
    margin: product["Margin"],
    airtable_group: "toShopify",
    product_categories: [product["Type"], product["Flags"]],
    select_store: "livehealthy",
    hkd_selling_price: product["Variant Price"],
    hkd_compare_at_price: product["Variant Compare At Price"],
    product_image: product["Image Src"],
    images: [
      {
        file: {
          url: product["Image Src"],
        },
      },
    ],
    weight: product["calculated-weight"],
    image_alt_text: [
      product["Image 1 Alt Text"],
      product["Image 2 Alt Text"],
      product["Image 3 Alt Text"],
      product["Image 4 Alt Text"],
      product["Image 5 Alt Text"],
      product["Image 6 Alt Text"],
      product["Image 7 Alt Text"],
      product["Image 8 Alt Text"],
      product["Image 9 Alt Text"],
      product["Image 10 Alt Text"],
    ],
    product_type: product["Type"],
    information_html: product["cwh-html"],
    information_html_eng: product["cwh-html-ENG"],
    information_eng_ch: product["cwh-html-EN+CH"],
    product_images: [
      {
        link: product["Image 1"],
        alt: product["Image 1 Alt Text"],
      },
      {
        link: product["Image 2"],
        alt: product["Image 2 Alt Text"],
      },
      {
        link: product["Image 3"],
        alt: product["Image 3 Alt Text"],
      },
      {
        link: product["Image 4"],
        alt: product["Image 4 Alt Text"],
      },
      {
        link: product["Image 5"],
        alt: product["Image 5 Alt Text"],
      },
      {
        link: product["Image 7"],
        alt: product["Image 7 Alt Text"],
      },
      {
        link: product["Image 7"],
        alt: product["Image 7 Alt Text"],
      },
      {
        link: product["Image 8"],
        alt: product["Image 8 Alt Text"],
      },
      {
        link: product["Image 9"],
        alt: product["Image 9 Alt Text"],
      },
      {
        link: product["Image 10"],
        alt: product["Image 10 Alt Text"],
      },
    ],
    weight_unit: product["Variant Weight Unit"],
    brand: product["cwh-brand"],
  };

  return productData;
}
