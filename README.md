This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). This project is only for personal purpose and not intended to be use in any other way.

## How to run the project

- Clone the repository
- Install the dependencies: `npm install`
- Run the development server: `npm run dev`
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stacks

- Typescript
- React + Next.js
- Jest + React Testing Library
- @tanstack/react-query (API request utility)
- clsx (classname utility)
- dayjs (date utility)
- use-debounce (debounce and throttle utility)
- @ant-design/icons (icons)

## Key Decisions

### Typescript
Typescript simply ease development process. While we need to create types manually and correctly, it provides autocomplete and early error detection vanilla Javascript cannot.

### React Context
This project only use React Context as the state management. Since the only state we need to share is watchlist, React Context is more than enough to share the state and prevent drilling props deeply. It also reduce complexity and prevent unnecessary increase of bundle size.

### React Query
React Query is used in this project to ease fetching concerns mainly caching and isomorphic fetching for SSR. While it's loading and error handling capabilities are not used in this project, it will be used regularly in normal project.

## Vercel Link

[Deployed on Vercel](https://disney-hotstar-clone-rho.vercel.app/)
