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
  { params }: { params: { userId: string } }
) => {
  const { userId } = params;

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) throw new Error("User not found.");

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
  { params }: { params: { userId: string } }
) => {
  const { userId } = params;

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) throw new Error("User not found.");

    const data = await request.json();

    const updatedUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data,
    });

    return NextResponse.json(
      {
        data: updatedUser,
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
  { params }: { params: { userId: string } }
) => {
  const { userId } = params;

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) throw new Error("User not found.");

    const deletedUser = await prisma.user.delete({
      where: {
        id: userId,
      },
    });

    return NextResponse.json(
      {
        data: deletedUser,
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
