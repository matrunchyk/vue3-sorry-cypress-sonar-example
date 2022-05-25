import {defineConfig, loadEnv} from 'vite'
import vuePlugin from '@vitejs/plugin-vue'
import path from "path";
import eslintPlugin from 'vite-plugin-eslint';
import istanbulPlugin from 'vite-plugin-istanbul';

export default ({mode}) => {
    process.env = {...process.env, ...loadEnv(mode, process.cwd())};
    // https://vitejs.dev/config/

    const isTest = process.env.NODE_ENV === 'test';

    const testPlugins = isTest ? [
        istanbulPlugin({
            include: 'src/*',
            exclude: ['node_modules', 'tests'],
            cypress: true,
            checkProd: false,
            forceBuildInstrument: true,
        }),
    ] : [];

    return defineConfig({
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
            extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
        },
        define: {
            'process.env': {},
            __isBrowser__: true,
        },
        plugins: [
            vuePlugin(),
            eslintPlugin({
                cache: false,
            }),
            ...testPlugins,
        ],
        server: {
            watch: {
                ignored: [
                    'coverage/**',
                    'dist/**',
                    'dist-e2e/**',
                    '.nyc_output/**',
                ],
            },
        }
    })
}
