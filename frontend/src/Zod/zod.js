import {z} from "zod"
const regSchema=z.object({
    name:z.string().min(3),
    age:z.string().max(3).min(2),
    gender:z.enum(['male',"female","others"]),
    phone:z.string().min(10).max(10),
    adhar:z.string().min(12).max(12)
})
export default regSchema