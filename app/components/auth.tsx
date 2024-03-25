import { MsalProvider } from "@azure/msal-react"
import { msalInstance } from "~/authprovider/authConfig"


export const AuthProvider= ({children}: { children: React.ReactNode }) => {
    return (
        <MsalProvider instance={msalInstance}>
            {children}
        </MsalProvider>
    )
}
