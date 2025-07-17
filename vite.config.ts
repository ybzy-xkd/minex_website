import { resolve } from 'path';
import {defineConfig, loadEnv, UserConfig} from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer';
import postcsspxtoviewport from 'postcss-px-to-viewport-8-plugin'

// https://vitejs.dev/config/
export default defineConfig((config): UserConfig => {
  const isBuild = process.env.NODE_ENV === 'production';
  const localEnv = loadEnv(config.mode, process.cwd(), 'VITE_');
  return {
    css: {
      postcss: {
        plugins: [
          autoprefixer({
            overrideBrowserslist: ['defaults'],
            grid: true,
          }),
        ]
      }
    },
    resolve: {
      alias: {
        // 设置别名
        '@': resolve(__dirname, './src'),
        // '/^(@?src\/.*)\.js$/': '$1.ts'
      },
    },
    server: {
      port: 8080,
      host: true,
      open: true,
      // proxy: createProxy(localEnv.VITE_APP_BASE_API, localEnv.VITE_APP_URL),
    },
    plugins: [react()],
    build: {
      chunkSizeWarningLimit: 500,
      sourcemap: false,
      minify: 'terser', // esbuild
      cssCodeSplit: true,
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
      rollupOptions: {
        // output: {
        //   sourcemap: true
        // },
        // plugins: createRollupPlugins(),
        treeshake: true,
      }
    },
    define: {
      __ISBUILDPRODUCTION__: isBuild,
      // ROUTES: new TransformPages().routes
    },
  }
})
