import { useForm } from "react-hook-form"
import { Link } from "react-router"
import { zodResolver } from "@hookform/resolvers/zod"
import { userRegisterSchema } from "../schemas/zodSchemas"

interface UserRegister {
  name: string
  email: string
  password: string
  confirmPassword: string
}

function Register() {
  // const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm<UserRegister>({
    resolver: zodResolver(userRegisterSchema)
  })
  const onSubmit = handleSubmit(async (data) => {
    try {
      console.log(data);
      const res = await fetch("http://localhost:5600/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password
        })
      })
      const json = await res.json()
      console.log(json);
      // navigate("/login")
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
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