// Imports
// ========================================================
import { PrismaClient, Prisma } from "@prisma/client";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Config
// ========================================================
const prisma = new PrismaClient();

// Endpoints
// ========================================================
// @TODO add support cors

/**
 * List
 * @param request
 * @returns
 */
export const GET = async (request: NextRequest) => {
  // Get default values for parsing data
  const { searchParams } = new URL(request.nextUrl);
  const search = searchParams.get("search") as string;
  const limit = parseInt(searchParams.get("limit") as string, 0) || 10;
  const offset = parseInt(searchParams.get("offset") as string, 0) || 0;
  const orderKey = searchParams.get("order") as string;
  const sortKey = searchParams.get("sort") as string;
  const order = ["id", "username", "email", "createdAt", "updatedAt"].includes(
    orderKey
  )
    ? orderKey
    : "id";
  const sort = ["asc", "desc"].includes(sortKey) ? sortKey : "asc";

  // Query
  // - Default values
  let findManyUserData: Prisma.UserFindManyArgs = {
    take: limit,
    skip: offset,
    orderBy: {
      [order]: sort,
    },
  };

  // - Search value to filter
  if (search) {
    findManyUserData.where = {
      ...(findManyUserData?.where ?? {}),
      email: {
        contains: search,
        mode: "insensitive",
      },
    };
  }

  // - Get data
  const users = await prisma.user.findMany(findManyUserData);

  // Return
  return NextResponse.json(
    {
      data: users,
    },
    {
      status: 200,
    }
  );
};

/**
 * Create
 * @param request
 */
export const POST = async (request: NextRequest) => {
  // Get data
  const { name, email, password } = await request.json();

  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    return NextResponse.json(
      {
        data: user,
      },
      {
        status: 200,
      }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error?.message ?? "Something went wrong",
      },
      {
        status: 200,
      }
    );
  }
};
