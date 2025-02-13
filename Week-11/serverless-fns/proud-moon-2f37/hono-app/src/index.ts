import { Hono } from 'hono'

const app = new Hono()

app.get("/", (c) =>{
  
    return c.text("Hi there")
})
app.post('/', async (c) => {
  const body = await c.req.json();
  console.log(body)
  console.log(c.req.header("Authorization"))
  console.log(c.req.query("param"))
  
})
app.get("/admin", (c) =>{
  return c.text("Admin panel")
})
export default app
