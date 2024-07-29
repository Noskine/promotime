import { compare, hash } from "bcrypt";

const saltRounds = 10;

export async function hashPassword(password: string): Promise<string> {
    const hashedPassword = await hash(password, saltRounds);
    return hashedPassword;
  }

export async function comparePassword(password: string, hash: string): Promise<boolean> {
    const match = await compare(password, hash);
    return match;
  }