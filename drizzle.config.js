/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./src/utils/schema.tsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://ai-content-data_owner:wSrsWfqm2l0x@ep-old-feather-a5p64vzc.us-east-2.aws.neon.tech/ai-content-data?sslmode=require',
  }
};