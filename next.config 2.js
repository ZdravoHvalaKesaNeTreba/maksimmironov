/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Используем базовый путь, если деплоим не в корень домена
  // basePath: process.env.NODE_ENV === 'production' ? '/maksimmironov' : '',
}

module.exports = nextConfig
