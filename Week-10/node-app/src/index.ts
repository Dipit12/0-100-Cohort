// write a function to create a users table in your db

import { Client } from 'pg'

// first connect to your database

const client = new Client({
    connectionString : "postgresql://neondb_owner:npg_BouC6n9ViyQH@ep-polished-lake-a8rlpr08-pooler.eastus2.azure.neon.tech/neondb?sslmode=require"
})



async function createUserTable(){
    await client.connect()
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
        
        
    `)
    console.log(result)
}
async function insertData(){
    await client.connect()
    const result = await client.query(`
        CREATE TABLE users2 (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
        
        
    `)
    console.log(result)
    try{
    // prone to SQL injection
    // const query = 'INSERT INTO users2 (username, email, password) VALUES ("Dipit", "dipitmadan@gmail.com", "12345")'
    const query = 'INSERT INTO users2 (username, email, password) VALUES (`$1`, `$2`, `$3`)'
    const values = ["Dipit", "dipitmadan@gmail.com", "12345"]
    const res = await client.query(query,values);
    console.log("Insertion success", res)
    }catch(err){
        console.log(err)
    }finally{
        await client.end()
    }
    
}
// createUserTable()
insertData()