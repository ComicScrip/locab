const baseUrl = process.env.HOST || "http://localhost:3000";
const relativeUrlsToCheck = ["/"];

module.exports = {
  ci: {
    upload: {
      target: "temporary-public-storage",
    },
    collect: {
      url: relativeUrlsToCheck.map((path) => baseUrl + path),
      // staticDistDir: '.next/server/pages',
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        "categories:performance": [
          "warn",
          { minScore: 0.8, aggregationMethod: "optimistic" },
        ],
        "categories:accessibility": [
          "error",
          { minScore: 0.9, aggregationMethod: "pessimistic" },
        ],
        "categories:best-practices": [
          "error",
          { minScore: 0.9, aggregationMethod: "pessimistic" },
        ],
        "categories:seo": [
          "error",
          { minScore: 0.9, aggregationMethod: "pessimistic" },
        ],
      },
    },
  },
};
