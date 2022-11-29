declare namespace NodeJS {
  export interface ProcessEnv {
    DATABASE_URL: string
    TOKEN_SECRET: string

    SENDGRID_API_KEY: string
    SENDINBLUE_API_KEY: string

    NEXT_PUBLIC_GTM_ID: string

    AUTH0_CLIENT_ID: string
    AUTH0_CLIENT_SECRET: string
    AUTH0_ISSUER: string
    NEXTAUTH_URL: string
    NEXTAUTH_SECRET: string
  }
}
