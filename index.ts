import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // ... you will write your Prisma Client queries here

    // Create user
    // const user = await prisma.user.create({
    //     data: {
    //         name: "John Doe",
    //         email: "john@sample.com"
    //     }
    // })

    // Get all users
    // const users = await prisma.user.findMany({
    //     include: {
    //         articles: true
    //     }
    // });
    // console.log('users', users)

    // Create articles and associate it with user
    // const article = await prisma.article.create({
    //     data: {
    //         title: "This is articles 1",
    //         body: "This is body article",
    //         author: {
    //             connect: {
    //                 id: 1
    //             }
    //         }
    //     }
    // })

    // Get all artilces
    // const articles = await prisma.article.findMany({
    //     where: {
    //         authorId: 3
    //     }
    // })
    // console.log('articles', articles)

    // create user and article and associate them
    // const user = await prisma.user.create({
    //     data: {
    //         name: "Sara Smith",
    //         email: "sara@sample.com",
    //         articles: {
    //             create: {
    //                 title: "This is articles 2",
    //                 body: "This is body article",
    //             }
    //         }
    //     }
    // })

    // console.log('user', user)

    // Create another article
    // const article = await prisma.article.create({
    //     data: {
    //         title: "This is article 3",
    //         body: "This is a sample article",
    //         author: {
    //             connect: {
    //                 id: 3
    //             }
    //         }
    //     }
    // })
    // console.log('article', article)

    // Update data
    // const user = await prisma.user.update({
    //     where: {
    //         id: 1
    //     },
    //     data: {
    //         name: "John Doe Jr."
    //     }
    // })

    // console.log('user', user)

    // Remove article
    const aritcle = await prisma.article.delete({
        where: {
            id: 3
        }
    })

    console.log('aritcle', aritcle)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })