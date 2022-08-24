import {Link} from "react-router-dom";
import logo from '../profile2.jpg';
function Footer(props){

    function MobileFooter(){
        if(props.isMobile){
            return  <footer className="footer d-flex">
                        <span className="width20"><Link to='/'><i className="clr-1 fas fa-home fa-lg pr-10 align"></i></Link></span>
                        <span className="width20"><Link to='/skills'><i className="clr-1 fas fa-code fa-lg pr-10 align"></i></Link></span>
                        <span className="width20"><Link to='/portfolio'><i className="clr-1 fas fa-images fa-lg pr-10 align"></i></Link></span>
                        <span className="width20"><Link to='/contact'><i className="clr-1 fas fa-portrait fa-lg pr-10 align"></i></Link></span>
                        <span className="pd-5 width20"><div className='profile-img'><Link to='/about'><img src={logo} width='100%' height='100%'alt='profile-img'/></Link></div></span>
                    </footer>
        }
        else
        {
            return  <footer className="footer">
                        <div className="copyright"><span className="span">Copyright © 2022 <span className="clr-1">Jakir Shaikh.</span> All Rights Reserved.</span></div>
                    </footer>
        }
    }
    return (
        <>
            <MobileFooter/>
        </>
    )
}

export default Footer;