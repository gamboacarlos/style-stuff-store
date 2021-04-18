declare module "*.scss" {
  const styles: { [className: string]: string };
  export default styles;
}
declare module '*.css'
declare module '*.ttf'
declare module '*.png' {
    const content: string;
    export default content;
  }