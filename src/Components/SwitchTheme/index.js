import { useContext } from "react"
import { SessionContext } from "../../contexts/sessionContex"

export const SwitchTheme = ({children}) => {
  const { switchTheme }  = useContext(SessionContext)
  return(
    children({switchTheme})
  )
}
