import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import css from 'rollup-plugin-css-only';
import pkg from './package.json';
export default {
  input: './src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
    {
      file: pkg.unpkg,
      format: 'iife',
      sourcemap: true,
      name: 'Message',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
  ],
  external: [...Object.keys(pkg.peerDependencies || {}), 'react', 'react-dom'],
  plugins: [
    resolve(),
    typescript({ useTsconfigDeclarationDir: true }),
    css({ output: 'message.css' })
  ],
};
