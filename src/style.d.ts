import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            body: string,
            text: string,
            textHover: string
        }
    }
};