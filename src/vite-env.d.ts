/// <reference types="vite/client" />

interface ImportMeta {
    readonly env: ImportMetaEnv 
  }
  
  interface ImportMetaEnv {  
    readonly VITE_SERVICE_ID: string;
    readonly VITE_TEMPLATE_ID: string;
    readonly VITE_PUBLIC_KEY: string; 
    readonly VITE_BASE_URL: string;  
  }
  
