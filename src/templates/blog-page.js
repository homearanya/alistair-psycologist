import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Breadcrumbs from "../components/Breadcrumbs"
import PostThumbnail from "../components/PostThumbnail"
import SEO from "../components/SEO/SEO"
import BlogSidebar from "../components/BlogSidebar"

export default function({ location, data }) {
  const { fields, frontmatter } = data.blogPageQuery
  const { edges: posts } = data.postsQuery
  //   Prepare breadcrumbs
  const pages = [
    { title: "Home", href: "/" },
    { title: "Blog", href: null },
  ]
  const pageMeta = {
    title: `Blog · Counselling Psychologist in Howick`,
    description:
      frontmatter.excerpt ||
      frontmatter.blurb ||
      "Alistair Mork-Chadwick is a Counselling psychologist based in Howick. He offers personal counselling, career guidance, psychological assessments and mindfulness training.",
    slug: fields.slug,
    datePublished: false,
  }
  return (
    <Layout currentPageSlug={fields.slug}>
      <SEO
        pageData={pageMeta}
        breadcrumbs={JSON.parse(JSON.stringify(pages))}
      />
      <Breadcrumbs
        bannerImage={frontmatter.bannerimage}
        pageTitle="Blog"
        pages={JSON.parse(JSON.stringify(pages))}
      />
      <section className="ls page_portfolio section_padding_top_100 section_padding_bottom_75">
        <div className="container">
          <Row className="row mosaic-post">
            <div className="col-sm-9">
              <div className="isotope_container isotope row masonry-layout columns_bottom_margin_30">
                {posts.map(({ node: post }) => (
                  <PostThumbnail
                    siteUrl={location.origin}
                    post={post}
                    key={post.id}
                  />
                ))}
              </div>
            </div>
            <div className="col-sm-3">
              <BlogSidebar />
            </div>
          </Row>
        </div>
      </section>
    </Layout>
  )
}

export const blogPageQuery = graphql`
  query BlogQuery($id: String!) {
    blogPageQuery: markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      frontmatter {
        blurb
        excerpt
        bannerimage {
          image {
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          alt
        }
      }
    }
    postsQuery: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "post-page" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          fields {
            slug
          }
          frontmatter {
            title
            intro
            category {
              frontmatter {
                title
              }
            }
            date(formatString: "MMMM DD, YYYY")
            thumbnailimage {
              alt
              image {
                childImageSharp {
                  fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
const Row = styled.div`
  @media (max-width: 992px) {
    display: flex;
    flex-direction: column-reverse;

    div.col-sm-9,
    div.col-sm-3 {
      width: 100%;
    }
  }
`
