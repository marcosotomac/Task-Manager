# Task-Manager

Task-Manager is a web application designed to help users efficiently manage and track their tasks. Built with modern web technologies, it offers a seamless experience for organizing daily activities.

## Features

- **Task Creation**: Easily add new tasks with titles and descriptions.
- **Task Editing**: Modify existing tasks to update details or statuses.
- **Task Deletion**: Remove tasks that are no longer needed.
- **Task Listing**: View all tasks in a consolidated list.

## Technologies Used

- **Frontend**:
  - [Next.js](https://nextjs.org/): A React framework for server-side rendering and static site generation.
  - [TypeScript](https://www.typescriptlang.org/): A statically typed superset of JavaScript.
  - [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for styling.

- **Backend**:
  - [Prisma](https://www.prisma.io/): An ORM for database management.
  - SQLite: Relational DataBase

## Getting Started

To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/marcosotomac/Task-Manager.git
   cd Task-Manager
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up the database**:
   - Ensure you have a PostgreSQL database running.
   - Configure the database connection in the `.env` file.
   - Run Prisma migrations:
     ```bash
     npx prisma migrate dev
     ```

4. **Start the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Access the application**:
   Open [http://localhost:3000](http://localhost:3000) in your browser to use the Task-Manager.

## Project Structure

The project's structure is as follows:

```
.
├── app
│   ├── layout.tsx
│   ├── page.tsx
│   └── ...
├── components
│   ├── TaskItem.tsx
│   ├── TaskList.tsx
│   └── ...
├── libs
│   └── prisma.ts
├── prisma
│   ├── schema.prisma
│   └── ...
├── public
│   └── ...
├── styles
│   ├── globals.css
│   └── ...
├── .eslintrc.js
├── next.config.js
├── package.json
└── ...
```

- **app/**: Contains the main application pages and layouts.
- **components/**: Holds reusable React components like `TaskItem` and `TaskList`.
- **libs/**: Includes library configurations, such as Prisma setup.
- **prisma/**: Contains Prisma schema and migration files.
- **public/**: Stores static assets like images.
- **styles/**: Includes global and component-specific CSS files.




