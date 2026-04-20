import { Video } from "@react95/core";
import Login from "./components/Login";
import { useAuth } from "./store/auth";
import { AGENTS,ClippyProvider } from "@react95/clippy";
import { Amovie2 } from "@react95/icons";
import DesktopIcon from "./components/Desktopicon";

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
              <DesktopIcon icon={<Amovie2/>} name="video">
              <Video w={"420px"} src=""/>
              </DesktopIcon>
              
            </div>
          </ClippyProvider>
        )
      }

    </div>
  )
}

export default App
