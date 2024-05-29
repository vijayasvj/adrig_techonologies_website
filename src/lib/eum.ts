export const domain =
  process.env.NEXT_ENV === "production"
    ? process.env.NEXT_PUBLIC_PROD_DOMAIN
    : process.env.NEXT_PUBLIC_DEV_DOMAIN
