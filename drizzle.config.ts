import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: 'postgresql', // 'mysql' | 'sqlite' | 'turso'
  schema: './utils/schema.tsx',
  dbCredentials:{
    url:'postgresql://neondb_owner:XRFUBfYr08OV@ep-falling-block-a5peui31.us-east-2.aws.neon.tech/neondb?sslmode=require',
  }
})