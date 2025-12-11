import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GANTI 'nama-repo-anda' dengan nama repository GitHub Anda nanti.
  // Contoh: jika repo anda namanya 'ruang-ekspresi', maka: base: '/ruang-ekspresi/',
  base: '/https://github.com/user240093/24000016089_Ahmad-Raka-Putra-Pratama_A/', 
})