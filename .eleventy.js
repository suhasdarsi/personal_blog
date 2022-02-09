module.exports = function (eleventyConfig) {
  return {
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "html", "md"],
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
    },
  };
};
