import { useMsal } from "@azure/msal-react";

const SignOutButton = () => {
  const { instance } = useMsal();

  async function getAccountInfo(): Promise<MsalAccount | null> {
    try {
      const account = await instance.getAllAccounts()[0];
      console.log("Account:", account); // Use the account information here
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div>
      <button type="button"
        onClick={() => instance.logoutPopup().catch(e => { console.error(e); return null; })}
      >
        Logout by Popup
      </button>
      <button
        type="button"
        onClick={() => instance.logoutPopup().catch(e => { console.error(e); return null; })}
      >
        Logout by Redirect
      </button>

      <button 
        type="button"
        onClick={() => getAccountInfo()}
      >
        GetOID
        </button>
    </div>
  )
}

export default SignOutButton
