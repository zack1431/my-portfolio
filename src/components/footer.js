function Footer(props){

    function MobileFooter(){
        if(props.isMobile){
            return  <footer className="footer">
                        <span><i className="clr-1 fas fa-phone fa-lg pr-10"></i></span>
                        <span><i className="clr-1 fas fa-phone fa-lg pr-10"></i></span>
                        <span><i className="clr-1 fas fa-phone fa-lg pr-10"></i></span>
                        <span><i className="clr-1 fas fa-phone fa-lg pr-10"></i></span>
                        <span><i className="clr-1 fas fa-phone fa-lg pr-10"></i></span>
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