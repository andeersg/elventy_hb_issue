module.exports = function(eleventyConfig) {
  
  eleventyConfig.addFilter("raw", function(options) {
		return options.fn();
	});

  return {
		passthroughFileCopy: true,
		htmlTemplateEngine: 'hbs',
  };
};