declare namespace NodeJS {
  export interface ProcessEnv {
    DATABASE_URL: string
    SENDGRID_API_KEY: string
    TOKEN_SECRET: string
    NEXT_PUBLIC_GTM_ID: string
  }
}
