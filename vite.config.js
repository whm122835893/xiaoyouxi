import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    // 允许通过任意域名访问（开发服务器在远程/代理环境下会被 Host 校验拦截）
    allowedHosts: true,
  },
})