export const DOMAIN =
  process.env.NEXT_ENV === "production"
    ? process.env.NEXT_PUBLIC_PROD_DOMAIN
    : process.env.NEXT_PUBLIC_DEV_DOMAIN

export const CALENDLY_URL =
  "https://calendly.com/vj-as-entrepreneur/schedule-a-no-obligation-consultation"
