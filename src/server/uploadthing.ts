import { randomUUID } from "crypto";

import type { FileRouter } from "uploadthing/next";
import { createUploadthing, UTFiles } from "uploadthing/next";

const f = createUploadthing({
  errorFormatter: (err) => {
    console.log("Error uploading file", err.message);
    console.log(" - Above error caused by:", err.cause);

    return { message: err.message };
  },
});

export const uploadRouter = {
  things: f({
    image: {
      maxFileSize: "16MB",
      maxFileCount: 10,
      acl: "public-read",
    },
    video: {
      maxFileSize: "32MB",
      maxFileCount: 5,
      acl: "public-read",
    },
  })
    .middleware(({ req, files }) => {
      req;
      const filesWithMyIds = files.map((file, idx) => ({
        ...file,
        customId: `${idx}-${randomUUID()}`,
      }));

      return { foo: "bar" as const, [UTFiles]: filesWithMyIds };
    })
    .onUploadComplete(({ file, metadata }) => {
      metadata;
      file.customId;
      console.log("Upload completed", file);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof uploadRouter;