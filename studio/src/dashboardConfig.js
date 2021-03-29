export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60624555b09b931b3f2af434",
                  title: "Sanity Studio",
                  name: "blog-studio-u8m9kef9",
                  apiId: "9b07c87f-5ea2-44e8-bbe4-1339c75f4db8",
                },
                {
                  buildHookId: "60624556eee04b1419f5e162",
                  title: "Blog Website",
                  name: "blog-web-yo4ncmtw",
                  apiId: "05d13496-7198-4211-952c-e5c2438fa223",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/prokopious/blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://blog-web-yo4ncmtw.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
