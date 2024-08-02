import { prisma } from "@/lib/prisma";

class UserRepository {
    async GetUser({ email }: { email: string }) {
        return await prisma.user.findUnique({
            where: {
                email,
            },
            select: {
                id: true,
                password: true,
            }
        })
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new UserRepository();