'use server'
import UserUsecases from "@/server/UseCases/UserUsecases";
import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  pass: z.string(),
})

export async function POST(request: Request) {
  const data = await request.json()
  try {
    schema.parse(data)

    const token = await UserUsecases.singIn(data)

    return NextResponse.json(token)
  } catch (error) {
    if (error instanceof Error) {
      if (error.name == 'ZodError') {
        return new NextResponse(JSON.stringify({
          Error: 'Error in data validation',
          cause: 'Invalid data sent by the client to the server',
        },), { status: 400 })
      }

      if (error.name == 'UserNotFound') {
        return new NextResponse(JSON.stringify({
          Error: error.message,
          cause: error.cause,
          //@ts-ignore
        }), { status: error.statusCode! })
      }

      return new NextResponse(JSON.stringify({
        Error: error.message,
        cause: error.cause,
        //@ts-ignore
      }), { status: error.statusCode! })
    }
  }
}

