import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import postcss from "rollup-plugin-postcss";
import cssnano from "cssnano";
import pkg from './package.json';
export default {
  input: './src/index.ts',
  output: [
    {
      // cjs（commonjs nodejs模块）
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
    {
      // esm（es模块）
      file: pkg.module,
      format: 'es',
      sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
    {
      // （自执行函数）
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
    postcss({
      plugins: [cssnano()],
      extract: 'message.css'
    })
  ],
};
