import Login from "./pages/login/Login"
import Painel from "./pages/painel/Painel"
import { useAuth } from "./contexts/AuthContext"

function App() {

  const {isLoggedIn} = useAuth();

  return (
    <>
      { !isLoggedIn ? 
        ( 
          <Login /> 
        ) :  
        (
          <Painel /> 
        ) 
      }
    </>
  )
}

export default App
