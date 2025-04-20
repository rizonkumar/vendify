import type { CollectionConfig } from "payload";

export const Categories: CollectionConfig = {
  slug: "categories",
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
};
