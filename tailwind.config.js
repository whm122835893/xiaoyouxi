/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        lime: {
          DEFAULT: '#DFED5C',
          deep: '#D5E733',
          light: '#F0F7AA',
          top: '#D7F37C',
          btn: '#DDEB4E',
        },
        purple: {
          DEFAULT: '#7B5CF0',
          light: '#A697FF',
        },
        ink: '#1F1F1F',
        deeppurple: '#373155',
        // 谷灵游乐场（游戏页）底色
        game: '#7462DA',
        page: '#F2F2F2',
        secondary: '#9E9E9E',
        pink: '#F9C8F5',
        red: '#F26D6D',
        star: '#FFD54F',
      },
      fontFamily: {
        variety: ['"ZCOOL KuaiLe"', '"Noto Sans SC"', '"PingFang SC"', 'sans-serif'],
        sans: ['"PingFang SC"', '"Noto Sans SC"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '24px',
        panel: '16px',
      },
    },
  },
  plugins: [],
}