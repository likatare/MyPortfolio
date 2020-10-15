const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("D:\\Skolarbete\\GitHub\\MyPortfolio\\Portfolio-frontend\\src\\pages\\404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("D:\\Skolarbete\\GitHub\\MyPortfolio\\Portfolio-frontend\\src\\pages\\about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("D:\\Skolarbete\\GitHub\\MyPortfolio\\Portfolio-frontend\\src\\pages\\blog.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("D:\\Skolarbete\\GitHub\\MyPortfolio\\Portfolio-frontend\\src\\pages\\contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("D:\\Skolarbete\\GitHub\\MyPortfolio\\Portfolio-frontend\\src\\pages\\index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("D:\\Skolarbete\\GitHub\\MyPortfolio\\Portfolio-frontend\\src\\pages\\projects.js"))),
  "component---src-templates-blog-template-js": hot(preferDefault(require("D:\\Skolarbete\\GitHub\\MyPortfolio\\Portfolio-frontend\\src\\templates\\blog-template.js")))
}

