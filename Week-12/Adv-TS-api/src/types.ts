interface User{
    id:number,
    name:string,
    age:number,
    email:string,
    password:string
}

type updateCreds = Pick<User, 'name' | 'age' | 'password'>