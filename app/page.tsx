// Imports
// ========================================================
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

// Config
// ========================================================
const prisma = new PrismaClient();

const formInputs = {
  name: undefined,
  email: undefined,
  password: undefined,
};

// Main Page
// ========================================================
const Home = async () => {
  // Requests
  const users = await prisma.user.findMany();

  // Server Actions / Functions
  const handleCreateUser = async (formData: FormData) => {
    "use server";
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    formData.set("name", "");

    try {
      await prisma.user.create({
        data: {
          name: name as string,
          email: email as string,
          password: password as string,
        },
      });
      revalidatePath("/");
    } catch (error: any) {
      console.log({ error });
    }
  };

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
                  <th className="bg-zinc-100 border border-zinc-300 p-2 rounded-tl-md">
                    ID
                  </th>
                  <th className="bg-zinc-100 border-t border-r border-b border-zinc-300 p-2">
                    Name
                  </th>
                  <th className="bg-zinc-100 border-t border-r border-b border-zinc-300 p-2">
                    Email
                  </th>
                  <th className="bg-zinc-100 border-t border-r border-b border-zinc-300 p-2">
                    Password
                  </th>
                  <th className="bg-zinc-100 border-t border-r border-b border-zinc-300 p-2">
                    Created At
                  </th>
                  <th className="bg-zinc-100 border-r border-b border-t border-zinc-300 p-2 rounded-tr-md">
                    Updated At
                  </th>
                </tr>
              </thead>
              <tbody>
                {users?.map((user, key) => (
                  <tr key={key}>
                    <td className="border-l p-2 border-r border-b border-zinc-300">
                      {user.id}
                    </td>
                    <td className="p-2 border-r border-b border-zinc-300">
                      {user.name}
                    </td>
                    <td className="p-2 border-r border-b border-zinc-300">
                      {user.email}
                    </td>
                    <td className="p-2 border-r border-b border-zinc-300">
                      {user.password}
                    </td>
                    <td className="p-2 border-r border-b border-zinc-300">
                      {user.createdAt.toLocaleDateString()}
                    </td>
                    <td className="p-2 border-r border-b border-zinc-300">
                      {user.updatedAt.toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <hr className="mb-8" />

          <h3 className="text-lg text-zinc-500 mb-4 font-semibold">Create</h3>

          <form action={handleCreateUser}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-zinc-400"
              >
                Name
              </label>
              <input
              value={formInputs.name}
                type="text"
                name="name"
                id="name"
                className="border border-zinc-300 text-zinc-600 rounded-md leading-10 px-3"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-zinc-400"
              >
                Email
              </label>
              <input
              value={formInputs.email}
                type="email"
                name="email"
                id="email"
                className="border border-zinc-300 text-zinc-600 rounded-md leading-10 px-3"
                placeholder="john@example.com"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-zinc-400"
              >
                Password
              </label>
              <input
              value={formInputs.password}
                type="password"
                name="password"
                id="password"
                className="border border-zinc-300 text-zinc-600 rounded-md leading-10 px-3"
                placeholder="********"
              />
            </div>
            <div className="mb-4">
              <button
                className="rounded-md bg-zinc-800 text-white leading-10 px-4 hover:bg-zinc-600"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>

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
