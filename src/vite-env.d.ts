/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_OSU_CLIENT_ID: string
  readonly VITE_OSU_CLIENT_SECRET: string
  readonly VITE_OSU_TEST_USERNAME: string
  readonly VITE_OSU_API_BASE_URL: string
  readonly VITE_OSU_TOKEN_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
