declare namespace NodeJS {
  export interface ProcessEnv {
    DATABASE_URL: string
    SENDGRID_API_KEY: string
    TOKEN_SECRET: string

    NEXT_PUBLIC_GTM_ID: string

    AUTH0_CLIENT_ID: string
    AUTH0_CLIENT_SECRET: string
    AUTH0_ISSUER: string
    NEXTAUTH_URL: string
    NEXTAUTH_SECRET: string
  }
}
