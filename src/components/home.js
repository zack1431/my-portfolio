import {Link} from "react-router-dom";
function Home(props){
    return (
        <>
            
            <section className="homeSection position-relative">
                <div className=" bg-opc"></div>
                <div className="home-content position-absolute typewriter justify-content-center lineHeight2">
                    <h2 className="clr-2 fw-b">Welcome</h2>
                    <h1 className="clr-2 fw-b h1">I'm Jakir Shaikh.</h1>
                    <p className={props.isMobile ? "clr-2 fw-b fs-16" : 'clr-2 fw-b fs-20'}>I'm a Full Stack Developer</p>
                    <p className={props.isMobile ? "clr-2 fw-b fs-16" : 'clr-2 fw-b fs-20'}>based in Pune, Maharashtra.</p>
                    <div className="">
                        <button type="submit" className={props.isMobile ? "btn bgclr-1 submitbtn fw-600 width30 brdr-1" : "btn bgclr-1 submitbtn fw-600 width20 brdr-1"}><Link to="/contact">Hire Me</Link></button>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home;