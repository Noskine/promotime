import prisma from "../Database/PrismaClient";

class User {
    private db = prisma;

    async GetAll() {
        return await this.db.user.findMany();
    }

    async GetById(Id: string) {
        return await this.db.user.findUnique({ where: { Id } });
    }
    
    async GetByEmail(Email: string) {
        return await this.db.user.findUnique({where: { Email }})
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new User();