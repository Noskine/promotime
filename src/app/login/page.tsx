'use client'

import LoginForm from "../../components/login-form"

export default function Login() {
    return (
        <main className="flex items-center justify-center flex-col h-screen bg-zinc-800 text-zinc-50">
            <h1 className="font-black">Fazer Login</h1>
            <LoginForm />
        </main>
    )
}