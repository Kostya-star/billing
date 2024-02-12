/// <reference types="vite/client" />

declare module '*.svg' {
  // It's really a string, precisely a resolved path pointing to the image file
  const filePath: string;

  export default filePath;
}

declare module '@/*' {
  import Vue from 'vue'
  export default Vue
}