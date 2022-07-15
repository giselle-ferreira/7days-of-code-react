// env.d.ts
// interface ImportMeta {
//     readonly env: {
//       readonly YOUR_SERVICE_ID: string;
//       readonly YOUR_TEMPLATE_ID: string;
//       readonly YOUR_PUBLIC_KEY: string;
//     };
//   }

interface ImportMeta {
  readonly env: ImportMetaEnv 
}

interface ImportMetaEnv {  
  readonly YOUR_SERVICE_ID: string;
  readonly YOUR_TEMPLATE_ID: string;
  readonly YOUR_PUBLIC_KEY: string; 
}

 
  
