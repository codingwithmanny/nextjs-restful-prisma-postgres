// Imports
// ========================================================
import { PrismaClient } from "@prisma/client";

// Config
// ========================================================
const prisma = new PrismaClient();

// Main Page
// ========================================================
const Home = async () => {
  // Requests
  const users = await prisma.user.findMany();

  // Render
  return (
    <>
      <main className="w-full">
        <div className="p-8">
          <h1 className="text-4xl text-zinc-800 tracking-tight font-bold mb-4">
            Next.JS13 AppRouter + TypeScript + RESTful API + Postgres
          </h1>
          
          <p className="text-zinc-500 mb-8">
            An example of a RESTful API in Next.JS 13 App Router
          </p>

          <hr className="mb-8" />

          <h2 className="text-2xl text-zinc-800 font-bold mb-8">Users</h2>

          <h3 className="text-lg text-zinc-500 mb-4 font-semibold">List</h3>

          <div className="w-full overflow-scroll mb-8">
          <table className="w-full border-separate border-spacing-0 text-left">
            <thead>
              <tr>
                <th className="bg-zinc-100 border border-zinc-300 p-2 rounded-tl-md">ID</th>
                <th className="bg-zinc-100 border-t border-r border-b border-zinc-300 p-2">Name</th>
                <th className="bg-zinc-100 border-t border-r border-b border-zinc-300 p-2">Email</th>
                <th className="bg-zinc-100 border-t border-r border-b border-zinc-300 p-2">Password</th>
                <th className="bg-zinc-100 border-t border-r border-b border-zinc-300 p-2">Created At</th>
                <th className="bg-zinc-100 border-r border-b border-t border-zinc-300 p-2 rounded-tr-md">Updated At</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, key) => (
                <tr key={key}>
                  <td className="border-l p-2 border-r border-b border-zinc-300">{user.id}</td>
                  <td className="p-2 border-r border-b border-zinc-300">{user.name}</td>
                  <td className="p-2 border-r border-b border-zinc-300">{user.email}</td>
                  <td className="p-2 border-r border-b border-zinc-300">{user.password}</td>
                  <td className="p-2 border-r border-b border-zinc-300">{user.createdAt.toLocaleDateString()}</td>
                  <td className="p-2 border-r border-b border-zinc-300">{user.updatedAt.toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          <hr className="mb-8" />
          <h3 className="text-lg text-zinc-500 mb-4 font-semibold">Create</h3>
          <hr className="mb-8" />
          <h3 className="text-lg text-zinc-500 mb-4 font-semibold">Read</h3>
          <hr className="mb-8" />
          <h3 className="text-lg text-zinc-500 mb-4 font-semibold">Update</h3>
          <hr className="mb-8" />
          <h3 className="text-lg text-zinc-500 mb-4 font-semibold">Delete</h3>
        </div>
      </main>
    </>
  );
};

// Exports
// ========================================================
export default Home;
