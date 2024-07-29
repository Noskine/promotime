'use server'
import { comparePassword } from "@/utils /bcrypt"
import User from "../Repository/User"

class UserUsecase {
    async Login({email, pass}: {email: string, pass: string}) {
        const user = await User.GetByEmail(email);
        if (user) {
            const compare = await comparePassword(pass, user?.Pass!);
            if (compare) {
                return user.Id;
            } else  {
                return new Error("Error when trying to log in", {
                    cause: "The email or password field is probably incorrect"
                })
            }
        }
    }

    async ListenUsers() {
        const user = await User.GetAll()
        return user;
    }                                                                   
}

export default UserUsecase