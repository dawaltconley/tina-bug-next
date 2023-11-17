/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Global Data",
  name: "global",
  path: "content/page",
  match: {
    include: "global",
  },
  format: "yaml",
  fields: [
    {
      name: "title",
      label: "Test Content",
      type: "string",
    },
  ],
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
};

