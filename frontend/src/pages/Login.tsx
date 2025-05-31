import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { userLoginSchema } from "../schemas/zodSchemas";
import { useTokenStore } from "../store/useTokenStore";

interface UserLogin {
  email: string
  password: string
}

function Login() {
  const navigate = useNavigate()
  const setUser = useTokenStore(state => state.setUser)
  const { register, handleSubmit, formState: { errors } } = useForm<UserLogin>({
    resolver: zodResolver(userLoginSchema)
  })
  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await fetch("http://localhost:5600/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password
        })
      })
      const json = await res.json()
      console.log(json);
      if (json.error) {
        console.log(json.error);

      } else {
        navigate("/")
        setUser(json.user)
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  })

  return (
    <div className="flex flex-col gap-10 justify-center items-center w-screen h-screen px-20">
      <div className="flex flex-col items-center gap-3">
        <h3 className="font-black text-4xl">OnlyStrings Login</h3>
        <p className="text-lg text-gray-400">You don't have a account? <span className="text-cyan-700 font-medium hover:text-cyan-600"><Link to="/register">let's create an account</Link></span></p>
      </div>
      <form onSubmit={onSubmit} className="flex flex-col gap-4 w-full max-w-2xl">
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
        <button className="bg-cyan-950 p-3 rounded-md cursor-pointer font-semibold text-xl hover:bg-cyan-900 mt-4" type="submit">Enter</button>
      </form>
    </div>
  )
}

export default Login