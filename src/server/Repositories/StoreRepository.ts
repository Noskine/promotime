import { prisma } from "@/lib/prisma"

class StoreRepository {
    async GetStore({ name }: { name: string }) {
        return await prisma.store.findUnique({ where: { name } })
    }

    async RegisterStore({ name }: { name: string, url: string }){
        return await prisma.store.create({
            data: {
                name
            },
            select: {
                id: true,
            }         
        })
    }

    async GetAll() {
        return await prisma.store.findMany()
    }
}


// eslint-disable-next-line import/no-anonymous-default-export
export default new StoreRepository()