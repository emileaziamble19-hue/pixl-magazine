module.exports = function(eleventyConfig) {
  // Copier les fichiers statiques
  eleventyConfig.addPassthroughCopy("static");
  eleventyConfig.addPassthroughCopy("admin");

  // Filtres utiles
  eleventyConfig.addFilter("dateFormat", function(date) {
    if (!date) return "";
    const d = new Date(date);
    return d.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  });

  eleventyConfig.addFilter("limit", function(arr, limit) {
    return arr.slice(0, limit);
  });

  eleventyConfig.addFilter("rubriqueLabel", function(rubrique) {
    const labels = {
      tech:    "Tech & Numérique",
      culture: "Culture & Arts",
      mode:    "Mode africaine",
      gastro:  "Gastronomie",
      lit:     "Critique littéraire"
    };
    return labels[rubrique] || rubrique;
  });

  return {
    dir: {
      input:    "src",
      output:   "_site",
      layouts:  "_layouts",
      includes: "_includes",
      data:     "_data"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
