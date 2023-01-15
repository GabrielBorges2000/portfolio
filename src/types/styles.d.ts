import 'styled-components';
import { theme } from '../styles/global/theme';

type Themetype = typeof theme

declare module 'styled-components' {
    export interface DefaultTheme extends Themetype { }

}
