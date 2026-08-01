export default function sitemap() {
  const baseUrl = "https://www.yourrealestate.com";

  const routes = [
    "",
    "/properties",
    "/buyers",
    "/renters",
    "/about",
    "/contact",
    "/terms",
    "/privacy",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}