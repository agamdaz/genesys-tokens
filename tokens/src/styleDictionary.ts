// Stryker disable all
import path from 'path';
import type { Scheme } from './Scheme';

const tokensPath = path.resolve(__dirname, 'tokens');

export const getStyleDictionaryConfig = (
  scheme: Scheme,
  menuScheme: Scheme,
  source: string,
  output: string
) => ({
  source: [
    /* --------------------- COMMON TOKENS -------------------- */
    // global.x
    `${tokensPath}/global/**/*.json`,
    // theme.x
    `${tokensPath}/schemes/${scheme}/*.json`,
    // alias.x
    `${tokensPath}/alias/**/*.json`,
    // figma.x
    `${tokensPath}/figma/**/*.json`,

    /* --------------- COMMON COMPONENTS TOKENS --------------- */
    // cmp.x
    `${tokensPath}/component/**/*.json`,

    /* --------------- COMMON MENU SCHEME TOKENS -------------- */
    // theme.mainMenu.x
    `${tokensPath}/schemes/${menuScheme}/component/theme-main-menu.json`,

    /* --------------- BASE BRAND SCHEME TOKENS --------------- */
    // brand.x
    `${source}/*.json`,
  ],
  platforms: {
    'web/js': {
      transformGroup: 'tokens-js',
      buildPath: output,
      files: [
        // MODULE
        {
          destination: 'js/dev/tokens.module.all.js',
          format: 'javascript/module',
          filter: 'isNotFigma',
        },
        {
          destination: 'js/dev/tokens.module.alias.js',
          format: 'javascript/module',
          filter: 'isAlias',
        },
        {
          destination: 'js/dev/tokens.module.cmp.js',
          format: 'javascript/module',
          filter: 'isCmp',
        },
        // MODULE REDUCED
        // dev
        {
          destination: 'js/dev/tokens.module.reduced.global.js',
          format: 'javascript/module-reduced',
          filter: 'isGlobal',
        },
        {
          destination: 'js/dev/tokens.module.reduced.alias.js',
          format: 'javascript/module-reduced',
          filter: 'isAlias',
        },
        {
          destination: 'js/dev/tokens.module.reduced.cmp.js',
          format: 'javascript/module-reduced',
          filter: 'isCmp',
        },
        {
          destination: 'js/dev/tokens.module.reduced.group.js',
          format: 'javascript/module-reduced',
          filter: 'isGroup',
        },
        {
          destination: 'js/dev/tokens.module.reduced.brand.js',
          format: 'javascript/module-reduced',
          filter: 'isBrand',
        },
        // root
        {
          destination: 'js/tokens.module.reduced.alias.js',
          format: 'javascript/module-reduced',
          filter: 'isAlias',
        },
        {
          destination: 'js/tokens.module.reduced.meta.js',
          format: 'javascript/module-reduced',
          filter: {
            attributes: {
              tier: 'meta',
            },
          },
        },
        {
          destination: 'js/tokens.module.reduced.cmp.js',
          format: 'javascript/module-reduced',
          filter: 'isCmp',
        },

        // MODULE REDUCED MIN
        {
          destination: 'js/tokens.module.reduced.alias.min.js',
          format: 'javascript/module-reduced-min',
          filter: 'isAlias',
        },
        {
          destination: 'js/tokens.module.reduced.cmp.min.js',
          format: 'javascript/module-reduced-min',
          filter: 'isCmp',
        },
        // ESM
        {
          destination: 'js/tokens.esm.alias.js',
          format: 'javascript/esm-reduced-min',
          filter: 'isAlias',
        },
        {
          destination: 'js/tokens.esm.meta.js',
          format: 'javascript/esm-reduced-min',
          filter: {
            attributes: {
              tier: 'meta',
            },
          },
        },
        {
          destination: 'js/tokens.esm.cmp.js',
          format: 'javascript/esm-reduced-min',
          filter: 'isCmp',
        },
        // DECLARATION
        {
          destination: 'js/index.d.ts',
          format: 'typescript/module-reduced-declarations',
          filter: 'isCmpAlias',
        },
      ],
    },
    'web/html': {
      transformGroup: 'tokens-js',
      buildPath: output,
      files: [
        {
          destination: 'html/preview/tokens.alias.html',
          format: 'html/preview',
          filter: 'isAlias',
        },
        {
          destination: 'html/preview/tokens.cmp.html',
          format: 'html/preview',
          filter: 'isCmp',
        },
        {
          destination: 'html/preview/tokens.all.html',
          format: 'html/preview',
          filter: 'isCmpAlias',
        },
      ],
    },
    'web/json': {
      transformGroup: 'tokens-json',
      buildPath: output,
      files: [
        {
          destination: 'json/tokens.json.all.json',
          format: 'json/flat',
          filter: 'isNotFigma',
        },
        {
          destination: 'json/tokens.json.global.json',
          format: 'json/flat',
          filter: 'isGlobal',
        },
        {
          destination: 'json/tokens.json.alias.json',
          format: 'json/flat',
          filter: 'isAlias',
        },
        {
          destination: 'json/tokens.json.cmp.json',
          format: 'json/flat',
          filter: 'isCmp',
        },
        {
          destination: 'json/tokens.json.group.json',
          format: 'json/flat',
          filter: 'isGroup',
        },
        {
          destination: 'json/tokens.json.brand.json',
          format: 'json/flat',
          filter: 'isBrand',
        },
      ],
    },
    'web/scss': {
      transformGroup: 'tokens-scss',
      buildPath: output,
      files: [
        {
          destination: 'scss/dev/tokens.sass.all.scss',
          format: 'scss/variables',
          filter: 'isNotFigma',
        },
        {
          destination: 'scss/dev/tokens.sass.global.scss',
          format: 'scss/variables',
          filter: 'isGlobal',
        },
        {
          destination: 'scss/dev/tokens.sass.alias.scss',
          format: 'scss/variables',
          filter: 'isAlias',
        },
        {
          destination: 'scss/tokens.sass.alias.scss',
          format: 'scss/variables',
          filter: 'isAlias',
        },
        {
          destination: 'scss/dev/tokens.sass.cmp.scss',
          format: 'scss/variables',
          filter: 'isCmp',
        },
        {
          destination: 'scss/tokens.sass.cmp.scss',
          format: 'scss/variables',
          filter: 'isCmp',
        },
        {
          destination: 'scss/dev/tokens.sass.group.scss',
          format: 'scss/variables',
          filter: 'isGroup',
        },
        {
          destination: 'scss/dev/tokens.sass.brand.scss',
          format: 'scss/variables',
          filter: 'isBrand',
        },
      ],
    },
    'web/css': {
      transformGroup: 'tokens-css',
      buildPath: output,
      files: [
        {
          destination: 'css/dev/tokens.css.all.css',
          format: 'css/variables',
          filter: 'isNotFigma',
        },
        {
          destination: 'css/dev/tokens.css.global.css',
          format: 'css/variables',
          filter: 'isGlobal',
        },
        {
          destination: 'css/dev/tokens.css.alias.css',
          format: 'css/variables',
          filter: 'isAlias',
        },
        {
          destination: 'css/tokens.css.alias.css',
          format: 'css/variables',
          filter: 'isAlias',
        },
        {
          destination: 'css/dev/tokens.css.cmp.css',
          format: 'css/variables',
          filter: 'isCmp',
        },
        {
          destination: 'css/tokens.css.cmp.css',
          format: 'css/variables',
          filter: 'isCmp',
        },
        {
          destination: 'css/dev/tokens.css.group.css',
          format: 'css/variables',
          filter: 'isGroup',
        },
        {
          destination: 'css/dev/tokens.css.brand.css',
          format: 'css/variables',
          filter: 'isBrand',
        },
      ],
    },
    figma: {
      transformGroup: 'figma-alias',
      buildPath: output,
      files: [
        // new Figma plugin format:
        // https://www.figma.com/community/plugin/843461159747178978/Figma-Tokens
        {
          destination: 'figma/figma_base.json',
          format: 'figma/figmatokens',
          filter: 'isFigmaBase',
        },
        {
          destination: 'figma/figma_scheme.json',
          format: 'figma/figmatokens',
          filter: 'isFigmaScheme',
        },
      ],
    },
  },
});
