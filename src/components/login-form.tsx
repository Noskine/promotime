import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

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
            console.log(e   )
            localStorage.setItem("token_auth", e.data)

            push('/dashboard')
        })
    }

    return (
        <form onSubmit={handleSubmit(handlerDataSubmit)} className="w-1/3 flex flex-col space-y-3" >
            <div>
                <label htmlFor="email" className="capitalize text-sm">email</label>
                <Input type="email" {...register('email')} className="w-full bg-transparent border-2 rounded-[100px] text-zinc-50" />
            </div>
            <div>
                <label htmlFor="pass" className="capitalize text-sm">senha</label>
                <Input type="password" {...register('pass')} className="w-full bg-transparent border-2 rounded-[100px] text-zinc-50" />
            </div>
            <Button type="submit" className="rounded-[100px] bg-zinc-900 hover:bg-neutral-900 dark:text-zinc-50">Login</Button>
        </form >
    )
}