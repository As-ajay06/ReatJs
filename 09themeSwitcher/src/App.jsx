import { useContext, useEffect, useState } from 'react'
import './App.css'
import Card from './compenents/Card'
import ThemeBtn from './compenents/ThemeBtn'
import { ThemeProvider } from './contexts/theme'

function App() {

  const [themeMode, setThemeMode] = useState('light')

  const lightTheme = () => {
    setThemeMode('light')
  }

  const darkTheme = () => {
    console.log(setThemeMode)
    setThemeMode('dark')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light')
    document.querySelector('html').classList.add(themeMode) 
  }, [themeMode])

  
  return (
    <>
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  {/* Card */}
                  <Card />
              </div>
                <ThemeBtn />
                  {/* Theme */}
              <div className="w-full max-w-sm mx-auto">
                
              </div>
          </div>
      </div>
      
    </ThemeProvider>

    </>
  )
}
export default App