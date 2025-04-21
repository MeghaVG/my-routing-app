import { useContext } from "react"
import { MainContainer } from "./styles"
import { UserContext } from "./HomePage"
import { useOutletContext } from "react-router-dom"
import { useSelector } from "react-redux"

const AboutPage=()=>{
    // const {sharedData,setSharedData}=useOutletContext()

    const sharedValue = useSelector((state) => state.sharedData.value);

    const userdata=localStorage.getItem('User')
    console.log(userdata)
    return(
        <MainContainer>About Page {sharedValue}</MainContainer>
    )
}
export default AboutPage