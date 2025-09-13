declare module "*.vue" {
    import type { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

// Allow TypeScript files
declare module "*.ts" {
    const content: any; // Adjust the type based on your use case
    export default content;
  }