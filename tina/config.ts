// tina/config.ts
import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: "3f96a547-a2f5-405a-a19c-fe76f1256275",
  token: "07f0dd3e3f3993944167705e06ec17099f66646f",


  build: {
    outputFolder: "static/admin",
    publicFolder: "static"
  },

  media: {
    tina: {
      publicFolder: "static",
      mediaRoot: "img/uploads"
    }
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
          { type: "number", name: "sidebar_position", label: "ลำดับใน Sidebar", required: false },
          { type: "rich-text", name: "body", label: "เนื้อหา", isBody: true }
        ]
      },
      {
        label: "Service",
        name: "service",
        path: "docs/service",
        format: "md",
        fields: [
          { type: "string", name: "title", label: "หัวข้อ" },
          { type: "rich-text", name: "body", label: "เนื้อหา", isBody: true }
        ]
      },
      {
        label: "Account",
        name: "account",
        path: "docs/account",
        format: "md",
        fields: [
          { type: "string", name: "title", label: "หัวข้อ" },
          { type: "rich-text", name: "body", label: "เนื้อหา", isBody: true }
        ]
      }
    ]
  }
});