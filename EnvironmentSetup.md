`npx create-next-app portfoblog`

prisma init command
`npm i --save-dev dotenv.cli`
`npx dotenv -e .env.local -- npx prisma migrate dev --name postgres-init`


package.json
```json
  "scripts": {
    "dev": "next dev -p 19985", /*modify this line*/
    "build": "next build",
   ...
```

tailwind.config.js
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}

```


src/app/global.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```