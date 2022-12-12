import { terser } from "rollup-plugin-terser";
import scss from 'rollup-plugin-scss'
import pkg from './package.json';

export default {
    input: 'src/js/index.js',
    plugins: [
        terser(),
        scss({
            name: 'flayout.min.css',
            fileName: 'flayout.min.css',
            output: 'dist/flayout.min.css',
            outputStyle: "compressed",
        }),
    ],
    output: [
        {
            name: 'flayout',
            file: pkg.browser,
            format: 'umd',
        },
        { 
            file: pkg.module,
            format: 'es' 
        },         
    ],
};
