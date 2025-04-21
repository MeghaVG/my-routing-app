import { useContext } from "react"
import { MainContainer } from "./styles"
import { UserContext } from "./HomePage"
import { useOutletContext } from "react-router-dom"

const AboutPage=()=>{
    const {sharedData,setSharedData}=useOutletContext()
    return(
        <MainContainer>About Page {sharedData}</MainContainer>
    )
}
export default AboutPage