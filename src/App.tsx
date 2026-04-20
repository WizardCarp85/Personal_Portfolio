import Login from "./components/Login";
import { useAuth } from "./store/auth";
import { AGENTS,ClippyProvider } from "@react95/clippy";

function App() {
  const authenticated = useAuth((state)=>state.authenticated);

  return (
    <div style={{width:"100%",background:"#098684",minHeight:"100vh",position:"relative"}}>
      <img src="/logo.png" width={400} style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}/>
      {/* login page if the user is unauthenticated */}
      {!authenticated && <Login/>}

      {/* main page authenticated */}
      {
        authenticated && (
          <ClippyProvider agentName={AGENTS.MERLIN}>
            <div className="fixed">
              {/* Desktop icons */}
            </div>
          </ClippyProvider>
        )
      }

    </div>
  )
}

export default App
