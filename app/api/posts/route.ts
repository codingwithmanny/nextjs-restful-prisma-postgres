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
  const order = ["id", "content", "authorId", "createdAt", "updatedAt"].includes(
    orderKey
  )
    ? orderKey
    : "id";
  const sort = ["asc", "desc"].includes(sortKey) ? sortKey : "asc";

  // Query
  // - Default values
  let findManyPostData: Prisma.PostFindManyArgs = {
    take: limit,
    skip: offset,
    orderBy: {
      [order]: sort,
    },
  };

  // - Search value to filter
  if (search) {
    findManyPostData.where = {
      ...(findManyPostData?.where ?? {}),
      content: {
        contains: search,
        mode: "insensitive",
      },
    };
  }

  // - Get data
  const posts = await prisma.post.findMany(findManyPostData);

  // Return
  return NextResponse.json(
    {
      data: posts,
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
  const { content, authorId } = await request.json();

  try {
    const post = await prisma.post.create({
      data: {
        content,
        authorId,
      },
    });

    return NextResponse.json(
      {
        data: post,
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
