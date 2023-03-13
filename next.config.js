/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: async function () {
    return {
      "/": { page: "/" },
      "/login": { page: "/login" },
      "/signup": { page: "/signup" },
      // "/posts": { page: "/posts" },
      // "/posts/first-post": { page: "/posts/[id]", query: { id: "first-post" } },
      // "/posts/second-post": {
      //   page: "/posts/[id]",
      //   query: { id: "second-post" },
      // },
    };
  },
};

module.exports = nextConfig;
