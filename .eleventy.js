
module.exports = function(eleventyConfig) {
  // Copy CSS and favicon to output
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/pdf");
  eleventyConfig.addPassthroughCopy("favicon.ico");

  return {
    dir: {
      input: "src",
      includes: "../_includes",
      output: "_site"
    }
  };
};
