import { comparePassword } from "@/lib/bcrypt"
import UserRepository from "../Repositories/UserRepository"
import { sign } from "jsonwebtoken"
import ErrorCustom from "@/utils/erros"

class UserUsecase {
  private repository = UserRepository

  async singIn({ email, pass }: { email: string, pass: string }) {
    const user = await this.repository.GetUser({ email })

    if (user != null) {
      const compare = await comparePassword(pass, user.password)

      if (compare) {
        const token = sign({ id: user.id, email}, process.env.JWT_SECRET!, { expiresIn: '10s' })

        return token
      }
      throw new ErrorCustom("Incorrect password", { name:'IncorrectPassword', statusCode: 401, cause: "Wrong data entry" });
    }
    throw new ErrorCustom("User not found", { name: 'UserNotFound', statusCode: 404, cause: "Bad database connection",  });

  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new UserUsecase()