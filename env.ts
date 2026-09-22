export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
export const sanityString = process.env.NEXT_PUBLIC_SANITY_REVALIDATE_SECRET!

// Server-only. No NEXT_PUBLIC_ prefix, so these are never bundled into the browser.
export const token = process.env.SANITY_API_READ_TOKEN
export const writeToken = process.env.SANITY_API_WRITE_TOKEN

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-08-01'
