import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { userLoginSchema } from "../schemas/zodSchemas";
import { useUserStore } from "../store/useUserStore";
import Back from "../components/Back";
import { useState } from "react";

interface UserLogin {
  email: string
  password: string
}

function Login() {
  const [passwordError, setPasswordError] = useState<null | string>(null)
  const navigate = useNavigate()
  const userLogin = useUserStore(state => state.userLogin)
  const { register, handleSubmit, formState: { errors } } = useForm<UserLogin>({
    resolver: zodResolver(userLoginSchema)
  })

  const onSubmit = handleSubmit(async (data) => {
    console.log('click');

    const json = userLogin(data)

    if (json.error) {
      console.log(json.error);
      return setPasswordError(json.error)
    }
    navigate("/")
  })

  return (
    <div className="relative overflow-hidden flex flex-col gap-10 justify-center items-center w-screen h-screen bg-[#1e1e20aa]">
      {/* bg */}
      <div className="absolute -top-20 -right-5 bg-[#ffffffbb] w-80 h-80 rounded-full opacity-40 shadow-[0px_0px_100px_50px_rgba(255,_255,_255,_1)]" />
      <div className="absolute bottom-0 -left-20 bg-[#ffffffbb] w-80 h-80 rounded-full opacity-40 shadow-[0px_0px_100px_50px_rgba(255,_255,_255,_1)]" />
      <Back />

      <div className="flex flex-col justify-center items-center w-full h-full backdrop-blur-2xl">
        <div className="flex flex-col items-center gap-3">
          <h3 className="font-black text-4xl">OnlyStrings Login</h3>
          <p className="text-lg text-gray-400">You don't have a account? <span className="text-cyan-700 font-medium hover:text-cyan-600"><Link to="/register">let's create an account</Link></span></p>
        </div>
        <form onSubmit={onSubmit} className="flex flex-col gap-4 w-full max-w-2xl mt-20">
          <div className="flex flex-col">
            {/* <label className="text-lg mb-2 font-semibold">Email</label> */}
            <input className="p-3 rounded-2xl border-2 border-gray-700/70 focus-visible:border-gray-600 bg-[#1e1e20]/70 outline-0" type="email" {...register("email")} placeholder="Email" />
            <span className="text-red-400">{errors.email?.message}</span>
          </div>
          <div className="flex flex-col">
            {/* <label className="text-lg mb-2 font-semibold">Password</label> */}
            <input className="p-3 rounded-2xl border-2 border-gray-700/70 focus-visible:border-gray-600 bg-[#1e1e20]/70 outline-0" type="password" {...register("password")} placeholder="Password" />
            <span className="text-red-400">{errors.password?.message}</span>
            {
              passwordError && <p>{passwordError}</p>
            }
          </div>
          <button className="w-full text-center border-2 border-white py-2 px-4 rounded-2xl cursor-pointer transition-colors bg-white text-black/80 font-bold text-lg" type="submit">Enter</button>
        </form>
      </div>

    </div>
  )
}

export default Login