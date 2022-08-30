import { useEffect, useState } from 'react'

type useStackHook = {
  frontEnd: string
  backEnd: string
  changeFrontEnd: (frontEnd: string) => void
  changeBackEnd: (backEnd: string) => void
}

const DEFAULT_FRONT_END = 'React'
const DEFAULT_BACK_END = 'Node'

export const useStack = (): useStackHook => {
  const [frontEnd, setFrontEnd] = useState<string>(DEFAULT_FRONT_END)
  const [backEnd, setBackEnd] = useState<string>(DEFAULT_BACK_END)

  useEffect(() => {
    const frontEndLocalStorage = localStorage.getItem('frontEnd')
    const backEndLocalStorage = localStorage.getItem('backEnd')

    if (frontEndLocalStorage) {
      setFrontEnd(JSON.parse(frontEndLocalStorage))
    }

    if (backEndLocalStorage) {
      setBackEnd(JSON.parse(backEndLocalStorage))
    }
  }, [])

  const changeFrontEnd = (frontEnd: string) => {
    localStorage.setItem('frontEnd', JSON.stringify(frontEnd))
    setFrontEnd(frontEnd)
  }

  const changeBackEnd = (backEnd: string) => {
    localStorage.setItem('backEnd', JSON.stringify(backEnd))
    setFrontEnd(backEnd)
  }

  return { frontEnd, backEnd, changeBackEnd, changeFrontEnd }
}
