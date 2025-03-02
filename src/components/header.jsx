import './header.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { PiCalculatorThin } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";
import { TbPercentage } from "react-icons/tb";
import { FaPerson } from "react-icons/fa6";
import { MdCurrencyExchange } from "react-icons/md";
import { GiWeightLiftingUp } from "react-icons/gi";
import { TfiRuler } from "react-icons/tfi";
import { IoMdTime } from "react-icons/io";


 const Header = () => {

    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
    };

    const showSidebar = () => {
        toggleSidebar();
    };

    return(
        <div className="header-container"  onClick={toggleSidebar}>

            <span className='menu' onClick={toggleSidebar}>
            <IoMenu />            
            </span> 


           


            <div className={`sidebar ${isSidebarVisible ? "visible" : ""}`}>

        <ul>
                <li className='close-sidebar'> <IoMenu className='close-icon' />  </li>
                <li style={{fontWeight:"600"}}>  Calculator </li>
                <Link to="/"><li> <PiCalculatorThin className='icons' /> Standard calc </li></Link>
               
                <Link to="/percentage">    <li> <TbPercentage     className='icons' /> Percentage Calc </li> </Link> 
                <Link to="/age"><li> <FaPerson   className='icons' />  Age Calc </li> </Link> 
                  <li style={{fontWeight:"600"}}>  Converter </li>
                                    
                  <Link to="/length">   <li> <TfiRuler  className='icons' /> Length </li></Link> 
                  <Link to="/weight">      <li> <GiWeightLiftingUp  className='icons' /> Weight and Mass </li> </Link> 
                  <Link to="/time" >        <li> <IoMdTime  className='icons' /> Times </li>  </Link>                    
                                        
                </ul>

                <ul className='settings'>
                <Link to="/setting" >         <li> <CiSettings  className='icons' /> Settings </li>   </Link> 
                </ul> 

            </div>  


                 

        </div>
    )
}; export default Header