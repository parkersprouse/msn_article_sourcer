#!/usr/bin/env node
/* eslint-disable no-console */
import { dirname, join, resolve } from 'node:path';
import { readFile, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcss from 'postcss';
import postcssPresetEnv from 'postcss-preset-env';

const __dirname = dirname(fileURLToPath(import.meta.url));
const __root_dir = resolve(__dirname, '..');
const __source_dir = join(__root_dir, 'src');
const __output_dir = join(__root_dir, 'dist');

const source_scripts = join(__source_dir, 'scripts.js');
const source_styles = join(__source_dir, 'styles.css');
const output_styles = join(__output_dir, 'styles.css');

/* Esbuild - Shared Config Options */
const shared = {
  bundle: true,
  minify: true,
  sourcemap: true,
};

/**
 * [Step 1] Clean Old Files
 */
// console.log('[Step 1] Clean Old Files');
// await rm(__output_dir, { force: true });
// ---
// const old_files = await readdir(__output_dir, { withFileTypes: true });
// for (const file of old_files) {
//   if (file.isDirectory() || file.isSymbolicLink()) continue;
//   const file_path = join(__output_dir, file.name);
//   console.log(`Cleaning ${file_path}`);
//   await rm(file_path, { force: true });
// }

/**
 * [Step 2] PostCSS
 */
console.log('[Step 2] PostCSS');
const css_contents = await readFile(source_styles, 'utf8');
const css_processor = postcss([autoprefixer, cssnano({ preset: 'default' }), postcssPresetEnv()]);
const { css } = await css_processor.process(css_contents, { from: source_styles });

/**
 * [Step 3] esbuild - CSS
 */
console.log('[Step 3] esbuild - CSS');
await build({
  ...shared,
  outfile: output_styles,
  stdin: {
    contents: css,
    loader: 'css',
    resolveDir: __output_dir,
    sourcefile: source_styles,
  },
  write: true,
});

/**
 * [Step 4] esbuild - JS
 */
console.log('[Step 4] esbuild - JS');
await build({
  ...shared,
  entryNames: '[dir]/[name]',
  entryPoints: [source_scripts],
  format: 'esm',
  outdir: __output_dir,
  platform: 'browser',
  write: true,
});