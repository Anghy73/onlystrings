import { useForm } from "react-hook-form"
import { z } from 'zod'
import { Link } from "react-router"
import { zodResolver } from "@hookform/resolvers/zod"

const userRegisterSchema = z.object({
  name: z.string({
    required_error: "name field is required",
    invalid_type_error: "type of data incorrect",
  }).min(1, {
    message: "Name field is required"
  }).max(30, {
    message: "Must be 30 or fewer characters long"
  }),
  email: z.string({
    required_error: "email field is required",
    invalid_type_error: "type of data incorrect",
  }).min(1, {
    message: "Email field is required"
  }).email({
    message: "contains invalid characters"
  }),
  password: z.string({
    required_error: "password field is required",
    invalid_type_error: "type of data incorrect",
  }).min(6, {
    message: "Must be 6 or more characters long"
  }),
  confirmPassword: z.string({
    required_error: "confirm password field is required",
    invalid_type_error: "type of data incorrect",
  }).min(1, {
    message: "Confirm Password field is required"
  })
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
})

interface UserRegister {
  name: string
  email: string
  password: string
  confirmPassword: string
}

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm<UserRegister>({
    resolver: zodResolver(userRegisterSchema)
  })
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  })

  return (
    <div className="flex flex-col gap-10 justify-center items-center w-screen h-screen px-20">
      <div className="flex flex-col items-center gap-3">
        <h3 className="font-black text-4xl">OnlyStrings Register</h3>
        {/* <p className="text-lg text-gray-400">You don't have a account? <span className="text-cyan-700 font-medium hover:text-cyan-600"><Link to="/register">let's create an account</Link></span></p> */}
        <p className="text-lg text-gray-400">You have a account? <span className="text-cyan-700 font-medium hover:text-cyan-600"><Link to="/login">let's enter</Link></span></p>
      </div>
      <form onSubmit={onSubmit} className="flex flex-col gap-4 w-full max-w-2xl">
        <div className="flex flex-col">
          <label className="text-lg mb-2 font-semibold">Name</label>
          <input className="p-2 rounded-lg border-2 border-cyan-950 focus-visible:border-cyan-600 outline-0" type="text" {...register("name")} />
          {/* { errors.name ?? <span>{errors.name}</span>} */}
          <span className="text-red-400">{errors.name?.message}</span>
        </div>
        <div className="flex flex-col">
          <label className="text-lg mb-2 font-semibold">Email</label>
          <input className="p-2 rounded-lg border-2 border-cyan-950 focus-visible:border-cyan-600 outline-0" type="email" {...register("email")} />
          <span className="text-red-400">{errors.email?.message}</span>
        </div>
        <div className="flex flex-col">
          <label className="text-lg mb-2 font-semibold">Password</label>
          <input className="p-2 rounded-lg border-2 border-cyan-950 focus-visible:border-cyan-600 outline-0" type="password" {...register("password")} />
          <span className="text-red-400">{errors.password?.message}</span>
        </div>
        <div className="flex flex-col">
          <label className="text-lg mb-2 font-semibold">Confirm Password</label>
          <input className="p-2 rounded-lg border-2 border-cyan-950 focus-visible:border-cyan-600 outline-0" type="password" {...register("confirmPassword")} />
          <span className="text-red-400">{errors.confirmPassword?.message}</span>
        </div>
        <button className="bg-cyan-950 p-3 rounded-md cursor-pointer font-semibold text-xl hover:bg-cyan-900 mt-4" type="submit">Enter</button>
      </form>
    </div>
  )
}

export default Register