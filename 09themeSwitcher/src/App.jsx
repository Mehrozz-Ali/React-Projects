import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/themeBtn'
import Card from './components/card'


function App() {
  // const [themeMode,setThemeMode]=useState("light")

  // const lightMode =()=>{
  //   setThemeMode("light")
  // }

  // const darkMode =()=>{
  //   setThemeMode("dark")
  // }

  // // Actual change in Theme 
  // useEffect(()=>{
  //   document.querySelector('html').classList.remove("light","dark")
  //   document.querySelector('html').classList.add(themeMode)
  // },[themeMode])

    const [themeMode,setThemeMode]=useState("light")
    const lightMode=()=>{
      setThemeMode("light")
    }
    const darkMode=()=>{
      setThemeMode("dark")
    }
    // actual theme change 
    useEffect(()=>{
      document.querySelector('html').classList.remove("light","dark")
      document.querySelector('html').classList.add(themeMode)
    },[themeMode])
  return (
  
    <ThemeProvider value={{themeMode,darkMode,lightMode}}>
    <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
              </div>

              <div className="w-full max-w-sm mx-auto">
                       <Card/>
              </div>
        </div>
    </div>
    </ThemeProvider>

  
  )
}

export default App
