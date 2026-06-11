/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // 깃허브 페이지는 자체 이미지 최적화를 지원하지 않으므로 이 옵션을 반드시 켜야 합니다.
  },
};

module.exports = nextConfig;