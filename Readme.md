# Next.js Intercepting Routes Demo

This repository demonstrates different strategies for implementing intercepting routes in Next.js 14+. Each branch showcases a unique approach to handling modal-like experiences with URL-based navigation.

## Available Strategies

### 1. No Root Prefix (`working-no-root-prefix`)

- Simplest approach
- Uses direct route interception without any prefix
- Best for simple modal implementations
- [Preview Deployment](https://github.com/BOTKooper/next-parallel-intercepting-routes/pull/1)

### 2. Global Prefix (`working-with-global-prefix`)

- Uses a global prefix for all intercepted routes
- Provides consistent URL structure
- Good for applications with multiple modal types
- [Preview Deployment](https://github.com/BOTKooper/next-parallel-intercepting-routes/pull/2)

### 3. Partial Prefix (`working-with-partial-prefix`)

- Uses selective prefixing for specific routes
- Offers flexibility in URL structure
- Ideal for mixed modal and full-page experiences
- [Preview Deployment](https://github.com/BOTKooper/next-parallel-intercepting-routes/pull/3)

## How to Use

1. Clone this repository
2. Check out the branch that matches your preferred strategy:
   ```bash
   git checkout working-no-root-prefix  # or any other branch
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```
4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
    # or
   bun run dev
   ```

## Key Features

- URL-based navigation
- Browser history support
- Deep linking capabilities
- SEO-friendly
- Progressive enhancement

## Contributing

Feel free to open pull requests with improvements or additional strategies. Each PR will automatically get a preview deployment for easy testing.

## License

MIT
