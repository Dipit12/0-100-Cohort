const zod = require("zod")

function validate(arr){
    const schema = zod.array(zod.string());

    const response = schema.safeParse(arr);
    console.log(response);
}

validate([1,2,"Dipit"]);

const schema_1 = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8)
})

