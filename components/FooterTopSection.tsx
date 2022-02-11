import footerContent from "@/json/footer.json";
import { useCategoryData } from "@/hooks/useCategory";
import { contentLinkType } from "@/types";
import { addCategoryView } from "@/hooks/useVbout";
import useAlgoliaEvents from "@/hooks/useAlgoliaEvents";
import useMarketplaceCategory from "@/hooks/useMarketplaceCategory";
import FooterLink from "./FooterElement";
import Footernewsletter from "./Footernewsletter";

export default function FooterTopSection() {
  const [categories, status] = useCategoryData();

  if (status === "success") {
    footerContent.section1[0].links = categories?.results.slice(12);
  }
  const { itemViewed } = useAlgoliaEvents();

  const selectedFooterCategory = useMarketplaceCategory();

  function vboutCategoryViewHandler(contentLink: contentLinkType) {
    addCategoryView({
      id: contentLink.id,
      categoryId: contentLink.slug,
      categoryName: contentLink?.name,
      categoryLink: `categories/${contentLink.slug}`,
      categoryImage: contentLink?.images[0]?.file?.url,
    });
  }

  function categoryEvents(contentLink: contentLinkType) {
    vboutCategoryViewHandler(contentLink);
    itemViewed("category_viewed", [contentLink.id]);
  }

  return (
    <>
      <div className="topSection pt-5">
        <div className="container">
          <div className="row pb-2">
            {footerContent.section1.map((content, index) => {
              return content.group ? (
                <FooterLink
                  key={index}
                  content={content}
                  onClickHandler={categoryEvents}
                  multiple
                />
              ) : (
                <FooterLink
                  key={index}
                  content={content}
                  onClickHandler={selectedFooterCategory}
                />
              );
            })}
            <Footernewsletter />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .topSection {
            background-color: #373f50;
          }
        `}
      </style>
    </>
  );
}
