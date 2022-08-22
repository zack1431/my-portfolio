import cv from '../zs_resume2.docx'
function About(){
    return (
        <>
            <section className="contact-section container overflowY pb-100 bgclr-2">
                <div className="position-relative d-flex text-center mb-2 pt-2">
                    <h2 className="text-24 text-white-50 opacity-1 text-uppercase fw-600 w-100 mb-0">About Me</h2>
                    <p className="text-9 text-white fw-600 position-absolute w-100 align-self-center lh-base mb-0 text-uppercase">Know Me More
                        <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"></span> 
                    </p>
                </div>
                <div className="d-flex mt-3 pl-20">
                    <div className="width70 p-2">
                        <h3 className="clr-2 fw-b mb-2">I'm <span className="clr-1 fw-b text-capitalize">Jakir Shaikh, </span>
                            a Full Stack Developer.
                        </h3>
                        <p className="clr-3 lineHeight2 fs-20">I help you build brand for your business at an affordable price. Number of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p className="clr-3 lineHeight2 fs-20">Delivering work within time and budget which meets client’s requirements is our moto.</p>
                    </div>
                    <div className="width30">
                        <ul className="pl-20 fs-20">
                            <li className="text-left brdr-bm">
                                <span className="clr-2 fw-b">Name: </span><span className="clr-3">Jakir Shaikh</span>
                            </li>
                            <li className="text-left brdr-bm">
                                <span className="clr-2 fw-b">Email: </span><span className="clr-1">zakrshkh16@gmail.com</span>
                            </li>
                            <li className="text-left brdr-bm">
                                <span className="clr-2 fw-b">From: </span><span className="clr-3">Pune, Maharashtra, India</span>
                            </li>
                        </ul>
                        <div className="">
                            <button type="submit" className="btn bgclr-1 submitbtn fw-600 width60 ml-2"><a href={cv} download>Download CV</a></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;