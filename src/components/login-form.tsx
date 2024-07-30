import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { useRouter } from "next/navigation";
import axios from "axios";
import GetItemLocalStorage from "@/functions/localstorage";

const loginFormSchema = z.object({
    email: z.string().email(),
    pass: z.string(),
})

type LoginHandlerProps = z.infer<typeof loginFormSchema>


export default function LoginForm() {
    'use client'

    const { push } = useRouter();
    const { register, handleSubmit } = useForm<LoginHandlerProps>({
        resolver: zodResolver(loginFormSchema),
    });


    const handlerDataSubmit = ({ email, pass }: LoginHandlerProps) => {
        axios.post('/api/signin', {
            email,
            pass,
        }).then((e) => {
            localStorage.setItem("token_auth", e.data)

            push('/dashboard')
        })
    }

    return (
        <form onSubmit={handleSubmit(handlerDataSubmit)} className="flex flex-col" >
            <label htmlFor="email">email</label>
            <input type="email" className="" {...register('email')} />
            <label htmlFor="pass">password</label>
            <input type="password" className="!bg-red-600" {...register('pass')} />
            <input type="submit" />
        </form >
    )
}