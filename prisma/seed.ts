// Imports
// ========================================================
import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

// Config
// ========================================================
const prisma = new PrismaClient();

// Main Seed
// ========================================================
const main = async () => {
  console.group(
    "Seeding\n========================================================"
  );

  // Users
  let users = [];
  for (let i = 0; i < 10; i++) {
    const newUser = await prisma.user.create({
      data: {
        name: faker.lorem.words(2),
        email: faker.internet.email(),
        password: faker.internet.password(),
      },
    });
    users.push(newUser);
  }

  // Posts
  let posts = [];
  for (let i = 0; i < 10; i++) {
    const newPost = await prisma.post.create({
      data: {
        content: faker.lorem.paragraph(),
        authorId: users[i].id,
      },
    });
    posts.push(newPost);
  }

  console.log(`Users created: ${users.length}`);
  console.log(`Posts created: ${posts.length}`);
  console.groupEnd();
};

// Init
// ========================================================
main()
  .then(() => {
    console.log("Seed success!");
    prisma.$disconnect();
  })
  .catch((error) => {
    console.error(error);
    prisma.$disconnect();
    process.exit(1);
  });
