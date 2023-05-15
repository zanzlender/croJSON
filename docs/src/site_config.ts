// This file contains the site configuration for the theme.

// Metadata, SEO, and Social
export const SITE_TITLE = "croJSON";
export const SITE_DESCRIPTION =
  "Kolekcija JSON fileova sa različitim informacijama o Hrvatskoj koji bi mogli zatrebati programerima.";
export const SITE_URL = "https://cro-json.vercel.app/";
export const SITE_DEFAULT_OG_IMAGE = "/logo.png";

// Docs Sidebar
// Define the left sidebar items here.
// The path should match the folder name in src/content/docs/
export const SIDEBAR_ITEMS = {
  "Kreni ovdje": ["/docs/get-started/introduction"],
  Podaci: ["/docs/data/zupanije", "/docs/data/naselja"],
  Contribute: ["/docs/contribute/contributing"],
};
