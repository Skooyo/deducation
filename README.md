# Deducation

Deducation is a decentralized learning protocol that connects students, teachers, and industries.

We strive to solve education problem by:
- Providing a platform for students to connect with industry
- Incentivize students to learn & get practical experience through a combination of course & bounty projects
- Provide direct connection to industries
- Create Quadratic Funding to support educators to provide better quality education

## Aptos Smart Contract

Smart Contract:
- bounty.move: Manages Bounty Initialization
- course.move: Manage Course Initialization
- funding.move: Manage Funding Pool
- learn_token.move: Utility token of deducation ($LEARN)
- user.move: Manage User & Certificate Initialization

Check out the Smart Contract here: [https://explorer.aptoslabs.com/account/0x40e80ab1a052677c01e512d65eff6f535d5c421101973d49b789c3a1047feb5f/modules/code/user?network=testnet](https://explorer.aptoslabs.com/account/0x40e80ab1a052677c01e512d65eff6f535d5c421101973d49b789c3a1047feb5f/modules/code/user?network=testnet)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
