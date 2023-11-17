/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Home Page",
  name: "page",
  path: "content/page",
  match: {
    include: 'home',
  },
  format: "mdx",
  fields: [
    {
      name: "body",
      label: "Main Content",
      type: "rich-text",
      isBody: true,
    },
  ],
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
    router: ({ document }) => {
      if (document._sys.filename === "home") {
        return `/`;
      }
      return undefined;
    },
  },
};

/**
 * @type {import('tinacms').Collection}
 */
export const about = {
  label: "About Page",
  name: "about",
  path: "content/page",
  match: {
    include: 'about',
  },
  format: "mdx",
  fields: [
    {
      name: "body",
      label: "Main Content",
      type: "rich-text",
      isBody: true,
    },
  ],
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
    router: ({ document }) => {
      if (document._sys.filename === "about") {
        return `/about`;
      }
      return undefined;
    },
  },
};
