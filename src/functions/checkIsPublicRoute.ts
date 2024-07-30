import { APP_ROUTES } from "@/constants/app-routes"

/**
 * 
 * @param asPath string
 * @returns boolean
 */
export const checkIsPrivateRoute = (asPath: string) => {
    const NotPublicRoutes = Object.values(APP_ROUTES.private);

    return NotPublicRoutes.includes(asPath);
}