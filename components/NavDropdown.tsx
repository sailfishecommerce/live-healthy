/* eslint-disable @next/next/no-img-element */
import { useQuery } from "react-query";
import Link from "next/link";

import useCategory from "@/hooks/useCategory";
import { categoryType } from "@/types";
import useVbout from "@/hooks/useVbout";
import useMarketplaceCategory from "@/hooks/useMarketplaceCategory";

interface Props {
  category: categoryType;
  categories: categoryType[];
}
function CategoryDropdownList({ category, categories }: Props) {
  const subCategories = categories.filter((cats) => cats.topId === category.id);
  const displayThreeSubCat = subCategories.slice(0, 3);
  const { addCategoryView } = useVbout();
  const selectedFooterCategory = useMarketplaceCategory();

  function linkHandler(category: any) {
    addCategoryView({
      id: category.id,
      categoryId: category.slug,
      categoryName: category.name,
      categoryLink: `categories/${category.slug}`,
      categoryImage: category.images[0]?.file?.url,
    });
    selectedFooterCategory(category.name);
  }

  return (
    <div>
      <div className="mega-dropdown-column pt-3 pt-sm-4 px-2 px-lg-3">
        <div className="widget widget-links">
          <Link href={`/categories/${category.slug}`} passHref>
            <a
              onClick={() => linkHandler(category)}
              className="categoryImg d-flex flex-column overflow-hidden rounded-3 mb-3"
            >
              <img src={category.images[0].file.url} alt={category.name} />
              <h6 className="fs-base my-2">{category.name}</h6>
            </a>
          </Link>
          <ul className="widget-list">
            {displayThreeSubCat.map((cat) => (
              <li key={cat.id} className="widget-list-item mb-1">
                <Link href={`/categories/${cat.slug}`} passHref>
                  <a className="widget-list-link">{cat.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <style jsx>
        {`
          .categoryImg img {
            height: 160px;
            width: 100%;
          }
          .categoryImg img:hover {
            -webkit-transform: scale(1.03);
            -moz-transform: scale(1.03);
            -ms-transform: scale(1.03);
            transform: scale(1.03);
            -webkit-transition: -webkit-transform 300ms ease-in 0s;
            transition: transform 300ms ease-in 0s;
          }
          .widget:hover h6 {
            color: #fb696a;
          }
        `}
      </style>
    </div>
  );
}

export default function CategoryDropdown() {
  const { listAllCategory } = useCategory();
  const { data, status } = useQuery("listAllCategory", listAllCategory);
  const topCategories = data?.results?.filter(
    (category: categoryType) => !category.topId
  );

  const firstCategories = topCategories?.slice(9, 12);
  const secondCategories = topCategories?.slice(13, 16);

  function displayCategories(categorySet: categoryType[]) {
    return (
      <div>
        {status === "error" ? (
          "unable to fetch categories"
        ) : status === "loading" ? (
          "loading categories"
        ) : (
          <div className="d-flex flex-wrap flex-sm-nowrap">
            {categorySet.map((category: categoryType) => (
              <CategoryDropdownList
                key={category.id}
                category={category}
                categories={data?.results}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="dropdown-menu px-2 pb-4">
      {displayCategories(firstCategories)}
      {displayCategories(secondCategories)}
    </div>
  );
}