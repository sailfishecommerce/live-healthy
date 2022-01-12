/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import dynamic from "next/dynamic";

import Applayout from "@/layout/Applayout";
import blogContent from "@/json/blog.json";

interface blogExcerpt {
  content: {
    title: string;
    text: string;
    tags: string[];
    author: string;
    authorImage: string;
    date: string;
    image?: string;
    comment: number;
  };
}

function BlogArticleExcerpt({ content }: blogExcerpt) {
  return (
    <article key={content.title} className="masonry-grid-item">
      <div className="card">
        {content.image && (
          <Link href="/blog-single" passHref>
            <a className="blog-entry-thumb">
              <img className="card-img-top" src={content.image} alt="Post" />
            </a>
          </Link>
        )}
        <div className="card-body">
          <h2 className="h6 blog-entry-title">
            <Link href="/blog-single" passHref>
              <a>{content.title}</a>
            </Link>
          </h2>
          <p className="fs-sm">{content.text}</p>
          {content.tags.map((tag) => (
            <a key={tag} className="btn-tag me-2 mb-2" href="#">
              {tag}
            </a>
          ))}
        </div>
        <div className="card-footer d-flex align-items-center fs-xs">
          <a className="blog-entry-meta-link" href="#">
            <div className="blog-entry-author-ava">
              <img src={content.author} alt={content.author} />
            </div>
            {content.author}
          </a>
          <div className="ms-auto text-nowrap">
            <a className="blog-entry-meta-link text-nowrap" href="#">
              {content.date}
            </a>
            <span className="blog-entry-meta-divider mx-2"></span>
            <Link href="/blog-single#comments" passHref>
              <a className="blog-entry-meta-link text-nowrap">
                <i className="ci-message"></i>
                {content.comment}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

const BlogSlider = dynamic(
  () => import("../components/Carousel/BlogGridCarousel"),
  {
    ssr: false,
  }
);

export default function Blog() {
  return (
    <Applayout title="Blog Gist">
      <div className="bg-secondary py-4">
        <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
          <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb flex-lg-nowrap justify-content-center justify-content-lg-start">
                <li className="breadcrumb-item">
                  <Link href="/index" passHref>
                    <a className="text-nowrap">
                      <i className="ci-home"></i>Home
                    </a>
                  </Link>
                </li>
                <li className="breadcrumb-item text-nowrap">
                  <a href="#">Blog</a>
                </li>
                <li
                  className="breadcrumb-item text-nowrap active"
                  aria-current="page"
                >
                  Grid no sidebar
                </li>
              </ol>
            </nav>
          </div>
          <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
            <h1 className="h3 mb-0">Blog grid no sidebar</h1>
          </div>
        </div>
      </div>
      <div className="container pb-5 mb-2 mb-md-4">
        {/*<!-- Featured posts carousel-->*/}
        <BlogSlider />
        <hr className="mt-5" />
        <div className="pt-5 mt-md-2">
          {/*<!-- Entries grid-->*/}
          <div className="masonry-grid" data-columns="3">
            {/*<!-- Entry-->*/}
            {blogContent.post.map((content) => (
              <BlogArticleExcerpt key={content.title} content={content} />
            ))}
          </div>
          <hr className="mb-4" />
          {/*<!-- Pagination-->*/}
          <nav
            className="d-flex justify-content-between pt-2"
            aria-label="Page navigation"
          >
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  <i className="ci-arrow-left me-2"></i>
                  Prev
                </a>
              </li>
            </ul>
            <ul className="pagination">
              <li className="page-item d-sm-none">
                <span className="page-link page-link-static">1 / 5</span>
              </li>
              {blogContent.pagination.map((pagination) => {
                return pagination.active ? (
                  <li
                    key={pagination.number}
                    className="page-item active d-none d-sm-block"
                    aria-current="page"
                  >
                    <span className="page-link">
                      {pagination.number}
                      <span className="visually-hidden">(current)</span>
                    </span>
                  </li>
                ) : (
                  <li
                    key={pagination.number}
                    className="page-item d-none d-sm-block"
                  >
                    <a className="page-link" href="#">
                      {pagination.number}
                    </a>
                  </li>
                );
              })}
            </ul>
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  Next
                  <i className="ci-arrow-right ms-2"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Applayout>
  );
}
