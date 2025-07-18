import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';

export default [
  // JS bundle: ESM, UMD, and minified
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/browserux-pwa-ui.esm.js',
        format: 'es',
        sourcemap: true
      },
      {
        file: 'dist/browserux-pwa-ui.umd.js',
        format: 'umd',
        name: 'BrowserUXPWAUI',
        sourcemap: true
      },
      {
        file: 'dist/browserux-pwa-ui.min.js',
        format: 'umd',
        name: 'BrowserUXPWAUI',
        plugins: [terser()],
        sourcemap: false
      }
    ],
    plugins: [
      nodeResolve(),
      typescript({ tsconfig: './tsconfig.json' })
    ]
  },

  // Type declarations
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/browserux-pwa-ui.d.ts',
      format: 'es'
    },
    plugins: [dts()]
  }
];
