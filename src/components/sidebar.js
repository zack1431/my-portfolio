import {Link} from "react-router-dom";
import './sidebar.css'
import logo from '../profile2.jpg';

function Sidebar(props){
    return (
        <>
            
            <div className="sidebar">
                <div className="pt-5">
                    <div className="text-center round-img">
                        <img src={logo} className="img-fluid" alt="..."/>
                        <h4 className="prim-head pt-2">Jakir Shaikh</h4>
                    </div>
                    <div id="header-nav" className="">
                        <ul className="nav">
                            <li className="nav-item"><Link to="/">Home</Link></li>
                            <li className="nav-item"><Link to="/about">About Me</Link></li>
                            <li className="nav-item"><Link to="/skills">My Skills</Link></li>
                            <li className="nav-item"><Link to="/portfolio">Portfolio</Link></li>
                            <li className="nav-item"><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Sidebar;