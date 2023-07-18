import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.SANATY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: false,
  apiVersion: "2023-06-02",
  token: process.env.SANITY_SECRET_TOKEN,
});
