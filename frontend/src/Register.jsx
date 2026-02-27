import React from 'react'
import { useForm } from "react-hook-form"
import regSchema from './Zod/zod'
import {zodResolver} from "@hookform/resolvers/zod"

const Register = () => {

// storing all sort of RHF
    const {register,
        handleSubmit,
        watch,
        formState:{errors}
        }=useForm({
          resolver:zodResolver(regSchema)
        })
    const onSubmit=(data)=>{console.log(data)}
    const inputstyl='border-4 border-solid border-indigo-500 rounded-lg'

//storing data

return (
    <div >
      <form onSubmit={handleSubmit(onSubmit)}className='flex flex-col gap-8 justify-center'>
        <div>
        <label>Name:</label>
        <input type="text" {...register("name")} className={inputstyl}/>
        {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
        <label>Age</label>
        <input type="text" {...register("age") } className={inputstyl}/>
        {errors.age && <p>{errors.age.message}</p>}
        </div>
        <div>
        <label>gender</label>
        <select {...register("gender")}>
            <option value="">select gender</option>
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="other">other</option>
        </select>
        {errors.gender && <p>{errors.gender.message}</p>}
        </div>
        <div>
        <label>phone</label>
        <input type="text" {...register("phone")} className={inputstyl}/>
        {errors.phone && <p>{errors.phone.message}</p>}
        </div>
        <div>
        <label>adhar number</label>
        <input type="text" {...register("adhar")} className={inputstyl}/>
        {errors.adhar && <p>{errors.adhar.message}</p>}
        </div>
        <button>submit</button>
      </form>
    </div>
  )
}

export default Register
