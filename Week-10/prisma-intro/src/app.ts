import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(email:string, firstName:string, lastName:string, password:string) {
    const res = await prisma.user.create({
        data: {
            email,
            firstName,
            lastName,
            password
        }
    })
    console.log(res)
}

async function updateUser(){
    const res = await prisma.user.update({
        where: {
            email: "dipit@gmail.com"
        },
        data: {
            email: "dipitmadan@gmail.com"
        }
    })
    console.log(res)
}

async function deleteUser(){
    const deletedUser = await prisma.user.delete({
        where:{
            email:'random@gmail.com'
        }
    });
    console.log(deletedUser)
}

async function getAllUsers(){
    const getUsers = await prisma.user.findMany();
    console.log(getUsers)
}

// insertUser("dipit@gmail.com", "Dipit", "Madan", "123456");
// updateUser()
insertUser("random@gmail.com", "random", "Madan", "1234");
insertUser("random1@gmail.com", "random1", "Madan", "12345");
deleteUser();
getAllUsers();

