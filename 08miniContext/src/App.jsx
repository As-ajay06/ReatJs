
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile/Profile'
import Login from './components/Login/Login'



function App() {


  return (
    <UserContextProvider>
    <Login />
    <Profile />
    </UserContextProvider>
  )
}

export default App
