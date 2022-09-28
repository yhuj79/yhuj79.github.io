
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/mac_yhj/IO/.cache/dev-404-page.js")),
  "component---src-pages-404-tsx": preferDefault(require("/Users/mac_yhj/IO/src/pages/404.tsx")),
  "component---src-pages-about-tsx": preferDefault(require("/Users/mac_yhj/IO/src/pages/about.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/Users/mac_yhj/IO/src/pages/index.tsx")),
  "component---src-templates-blog-post-tsx": preferDefault(require("/Users/mac_yhj/IO/src/templates/blogPost.tsx"))
}

