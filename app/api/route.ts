// Imports
// ========================================================
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Functions
// ========================================================
/**
 * @param request
 * @returns
 */
export const GET = (request: NextRequest) => {
  // Return
  return NextResponse.json(
    {
      data: {
        version: "1.0.0",
      },
    },
    {
      status: 200,
    }
  );
};
