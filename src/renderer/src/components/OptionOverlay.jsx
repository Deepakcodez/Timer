import { useContext } from 'react'
import { appContext } from '../Context'

const OptionOverlay = () => {
  const { setThemeColor } = useContext(appContext)
  return (
    <div className="h-[calc(100vh-1.25rem)] w-full bg-black   flex justify-center items-center px-2">
      <div className="flex w-ful gap-2  ">
        <div className='flex flex-col gap-2'>
        <div
          className="w-4 aspect-square bg-emerald-500  rounded-full "
          onClick={() => setThemeColor('bg-emerald-500')}
        />
        <div
          className="w-4 aspect-square bg-violet-500 rounded-full "
          onClick={() => setThemeColor('bg-violet-500')}
        />
        </div>

        <div className='flex flex-col gap-2'>
        <div
          className="w-4 aspect-square bg-pink-500 rounded-full "
          onClick={() => setThemeColor('bg-pink-500')}
        />
        <div
          className="w-4 aspect-square bg-blue-500 rounded-full "
          onClick={() => setThemeColor('bg-blue-500')}
        />
        </div>

      </div>
      <div className='w-full'></div>
      <div className='w-full '></div>
    </div>
  )
}
export default OptionOverlay
