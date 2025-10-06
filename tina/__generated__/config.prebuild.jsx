// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: process.env.TINA_BRANCH || "main",
  clientId: process.env.TINA_PUBLIC_CLIENT_ID,
  // จาก Tina Cloud
  token: process.env.TINA_TOKEN,
  // จาก Tina Cloud
  build: {
    outputFolder: "admin",
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
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
