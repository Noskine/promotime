'use server'

import { hashPassword } from "@/lib/bcrypt";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
    const { password } = await request.json()

    const response  = await hashPassword(password)

    return NextResponse.json(response);
  }

  