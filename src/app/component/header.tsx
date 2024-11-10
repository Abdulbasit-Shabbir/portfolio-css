import { link } from "fs"
import Link from "next/link"


 export default function Header (){
    return(

  <div>
        <nav className="navbar">
            <a href="a" className="logo">Portfolio..</a>
            <ul className="active">
        <li>
            <Link href="/" className="main">Portfolio</Link>
          </li>
          
          <li>
            <Link href="/about-us">About us</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact us</Link>
          </li>
         
        </ul>
           
        </nav>



        </div>
    )     
}