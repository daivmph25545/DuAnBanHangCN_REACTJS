import { Outlet } from "react-router-dom"
import UserHeader from "./header"
import Menuheader from "./menu"
import ProductDetail from "../productDetail"
import UserFooter from "./footer"

const DetailLayout = () =>{
    return <div>
        <UserHeader/>
        <Menuheader/>
        <ProductDetail/>
        <Outlet/>
        <UserFooter/>
    </div>
}
export default DetailLayout