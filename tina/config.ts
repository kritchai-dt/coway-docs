import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.TINA_BRANCH || "main",
  clientId: process.env.TINA_PUBLIC_CLIENT_ID!,
  token: process.env.TINA_TOKEN!,
  build: {
    outputFolder: "admin/admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      publicFolder: "static",
      mediaRoot: "img/uploads",
    },
  },
  schema: {
    collections: [
      {
        label: "Payment",
        name: "payment",
        path: "docs/payment",
        format: "md",
        fields: [
          { type: "string", name: "title", label: "หัวข้อ" },
          { type: "rich-text", name: "body", label: "เนื้อหา", isBody: true },
        ],
      },
    ],
  },
});