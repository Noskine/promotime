'use client'

import LoginForm from "../../components/login-form"

export default function Login() {
    return (
        <main className="flex items-center justify-center flex-col h-[90vh] dark:bg-zinc-800 dark:text-zinc-50 text-zinc-800">
            <h1 className="font-black">Fazer Login</h1>
            <LoginForm />
        </main>
    )
}