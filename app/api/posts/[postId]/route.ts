// Imports
// ========================================================
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Config
// ========================================================
const prisma = new PrismaClient();

// Endpoints
// ========================================================
/**
 * Read
 * @param request
 */
export const GET = async (
  _request: NextRequest,
  { params }: { params: { postId: string } }
) => {
  const { postId } = params;

  try {
    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });

    if (!post) throw new Error("Post not found.");

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
        message: error.message,
      },
      {
        status: 404,
      }
    );
  }
};

/**
 * Update
 * @param request
 * @param param1
 * @returns
 */
export const PUT = async (
  request: NextRequest,
  { params }: { params: { postId: string } }
) => {
  const { postId } = params;

  try {
    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });

    if (!post) throw new Error("Post not found.");

    const data = await request.json();

    const updatedPost = await prisma.post.update({
      where: {
        id: postId,
      },
      data,
    });

    return NextResponse.json(
      {
        data: updatedPost,
      },
      {
        status: 200,
      }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 404,
      }
    );
  }
};

/**
 * Delete
 * @param _request
 * @param param1
 * @returns
 */
export const DELETE = async (
  _request: NextRequest,
  { params }: { params: { postId: string } }
) => {
  const { postId } = params;

  try {
    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });

    if (!post) throw new Error("Post not found.");

    const deletedPost = await prisma.post.delete({
      where: {
        id: postId,
      },
    });

    return NextResponse.json(
      {
        data: deletedPost,
      },
      {
        status: 200,
      }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 404,
      }
    );
  }
};
