
## The Wild Oasis

The Wild Oasis is a modern, full-stack React application built with Next.js for booking luxury cabins in the wilderness. It features user authentication, cabin browsing, reservation management, and a beautiful UI designed with Tailwind CSS.

### Features

- Browse and book luxury cabins
- User authentication with Supabase
- Reservation management
- Responsive design with Tailwind CSS
- Modern React with Next.js App Router

### Technologies Used

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)


## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm, yarn, pnpm, or bun
- A Supabase account and project

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Asmaa-204/the-wild-oasis-client.git
cd the-wild-oasis-client
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory and add your Supabase credentials:
```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_KEY=your_supabase_anon_key
```

4. Set up the Supabase database:
- Create a new Supabase project
- Run the SQL migrations to create the necessary tables (cabins, bookings, guests, settings)
- Configure authentication settings

### Running the Development Server

Run the development server:

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
