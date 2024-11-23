import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

import { colors } from "./src/infrastructure/theme/colors";
import { space, lineHeights } from "./src/infrastructure/theme/spacing";
import { sizes } from "./src/infrastructure/theme/sizes";
import { fonts, fontWeights, fontSizes } from "./src/infrastructure/theme/fonts";

export const theme = {
  colors,
  space,
  lineHeights,
  sizes,
  fonts,
  fontSizes,
  fontWeights,
};