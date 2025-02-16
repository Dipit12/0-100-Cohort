import {PrismaClient} from '@prisma/client'
import { get } from 'http';

const prisma = new PrismaClient();

async function insertUser(username:string,email:string,password:string, firstName:string, lastName:string) {
    const res = await prisma.user.create({
        data: {
            username,
            email,
            password,
            firstName,
            lastName
        }
    })
    console.log(res);
};

async function getAllUsers(){
    const res = await prisma.user.findMany();
    console.log(res);
}

async function updateUser(){
    const updateUser = await prisma.user.update({
        where: {
            email:"aarav@gmail.com",
        },
        data:{
            email:"aaravraina@gmail.com"
        }
    })
}
async function deleteUser(){
    const deletedUser = await prisma.user.delete({
        where: {
            email:"aaravraina@gmail.com"
        }
    })
    
}
// insertUser("Dipit12", "dipit@gmail.com", "123456", "Dipit", "Madan");
// insertUser("tithi21", "tithi@gmail.com", "123456", "Tithi", "shah");
// insertUser("aarav03", "aarav@gmail.com", "123456", "Aarav", "Raina");
updateUser();
getAllUsers();
deleteUser();
getAllUsers();
