import { classes, style } from 'typestyle';
import { Context } from '../context';
import { fontSizes } from './font-sizes';
import { fontWeights } from './font-weights';

interface SurfaceColors {
  background: string;
  font: string;
}

function base(context: Context, colors: SurfaceColors) {
  const weights = fontWeights(context);
  const sizes = fontSizes(context);

  return classes(style({
    color: colors.font,
    backgroundColor: colors.background,
  }), weights.regular, sizes.base);
}

function light(context: Context) {
  const { colors } = context;
  return base(context, {
    background: colors.white,
    font: colors.light.black,
  });
}

function dark(context: Context) {
  const { colors } = context;
  return base(context, {
    background: colors.dark.gray10,
    font: colors.dark.white,
  });
}

function highContrast(context: Context) {
  const { colors } = context;
  return base(context, {
    background: colors.black,
    font: colors.white,
  });
}

export function surface(context: Context) {
  return context.style({
    light: light(context),
    dark: dark(context),
    highContrast: highContrast(context),
  });
}