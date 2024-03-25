import { useMsal } from "@azure/msal-react"
import { loginRequest } from "~/authprovider/authConfig";

const SignInButton = () => {
  const { instance } = useMsal();

  return (
    <div>
      <button type="button"
        onClick={() => instance.loginPopup(loginRequest).catch(e => { console.error(e); return null; })}
      >
        Login by Popup
      </button>
      <button
        type="button"
        onClick={() => instance.loginPopup(loginRequest).catch(e => { console.error(e); return null; })}
      >
        Login by Redirect
      </button>
    </div>
  );
}


export default SignInButton
