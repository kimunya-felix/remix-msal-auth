import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import SignInButton from "~/components/buttons/SignInButton";
import SignInSignOutButton from "~/components/buttons/SignInSignOutButton";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
        <p>Anyone can see this paragraph.</p>
            <AuthenticatedTemplate>
                <p>At least one account is signed in!</p>
                <Link to="/profile">Profile</Link>
                <SignInSignOutButton />
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <p>Please sign-in to see your profile information!</p>
                <SignInSignOutButton />
                
            </UnauthenticatedTemplate>
    </>
  );
}
