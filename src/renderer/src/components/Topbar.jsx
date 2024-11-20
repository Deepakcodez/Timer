import { Menu, Minus, X } from 'lucide-react'
import { useContext } from 'react'
import { appContext } from '../Context'

const Topbar = () => {
  const { themeColor, setIsOverlay } = useContext(appContext)

  const handleCloseWindow = () => {
    window.electron.ipcRenderer.send('close-window')
  }
  const handleMinimizeWindow = () => {
    window.electron.ipcRenderer.send('minimize-window')
  }
  return (
    <div className={`flex justify-between items-center h-5  text-white rounded-t-xl ${themeColor}`}>
      <h1 className="font-bold p-2">Timer</h1>

      <div className={`w-full h-full ${themeColor} `} style={{ WebkitAppRegion: 'drag' }} />
      <div
        className={`flex justify-between items-center w-fit px-2 h-full  rounded-t-xl ${themeColor}`}
      >
        <div className="flex items-center gap-2 ">
          <div className="hover:bg-white/30" onClick={handleMinimizeWindow}>
            <Minus size={15} className="translate-y-[0.28rem] " />
          </div>
          <div className="hover:bg-white/30" onClick={() => setIsOverlay((prev) => !prev)}>
            <Menu size={15} />
          </div>
          <div className="hover:bg-white/30 " onClick={handleCloseWindow}>
            <X size={15} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Topbar
