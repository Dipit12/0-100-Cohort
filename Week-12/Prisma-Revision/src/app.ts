import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();
async function createTodo(title:string, description:string, userId:number){
    const todo = await prisma.todo.create({
        data:{
            title,
            description,
            userId
        }
    })
    console.log(todo)
};

// createTodo("learn ts", "from its docs",1); // todo for Dipit
// createTodo("learn rust", "from its docs",1); // todo for dipit
// createTodo("learn js", "from its docs",2);// todo for tithi
// createTodo("learn py", "from its docs",3); // todo for aarav

async function getAllTodosById(userId:number){
    const todos = await prisma.todo.findUnique({
        where:{
            id: userId
        }
    })
    console.log(todos)
}

async function getAllTodosAndUsers(userId:number){
    const response = await prisma.todo.findMany({
        where: {
            userId: userId,
        },
        select: {
            user: true,
            title: true,
            description: true
        }
    });
    console.log(response);
}
// getAllTodosById(1);
getAllTodosAndUsers(1);