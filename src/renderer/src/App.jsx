import { useState } from 'react'
import { Clock, OptionOverlay, Topbar } from './components'
import { appContext } from './Context'
function App() {
  // const ipcHandle = () => window.electron.ipcRenderer.send('ping')
  const [themeColor, setThemeColor] = useState('bg-violet-500')
  const [isOverlay, setIsOverlay] = useState(true)
  return (
    <>
      <appContext.Provider value={{ themeColor, setThemeColor, isOverlay, setIsOverlay }}>
        <Topbar />
        {isOverlay ? <OptionOverlay /> : <Clock />}
      </appContext.Provider>
    </>
  )
}

export default App
