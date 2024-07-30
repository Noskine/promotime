import { compare, hash } from "bcrypt";

const saltRounds = 10;

  async function hashPassword(password: string): Promise<string> {
    const hashedPassword = await hash(password, saltRounds);
    return hashedPassword;
  }

  async function comparePassword(password: string, hash: string): Promise<boolean> {
    const match = await compare(password, hash);
    return match;
  }

export {hashPassword, comparePassword}