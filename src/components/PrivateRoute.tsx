import { APP_ROUTES } from "@/constants/app-routes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react"

interface PrivateRouteProps {
    children: ReactNode;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
    const { push } = useRouter();
    const [auth, setAuth] = useState(false)
    useEffect(() => {
        const token = localStorage.getItem('token_auth')

        if (!token) {
            push(APP_ROUTES.login)
        } else {
            axios.post('/api/auth', {
                token
            }).then(() => {
                setAuth(true)
            }).catch(() => {
                push(APP_ROUTES.login)
            })
        }
    }, [push, auth])

    return (
        <>
            {!auth && null}
            {auth && children}
        </>
    )
}