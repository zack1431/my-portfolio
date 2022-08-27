import cv from '../zs_resume2.docx'
function About(props){
    return (
        <>
            <section className="contact-section container overflowY pb-100 bgclr-2">
                <div className="position-relative d-flex text-center mb-2 pt-2">
                    <h2 className="text-24 text-white-50 opacity-1 text-uppercase fw-600 w-100 mb-0 about-title">About Me</h2>
                    <p className="text-9 text-white fw-600 position-absolute w-100 align-self-center lh-base mb-0 text-uppercase ">Know Me More
                        <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"></span> 
                    </p>
                </div>
                <div className="d-flex mt-3 pl-20 mobile">
                    <div className={props.isMobile ? "width100 p-2" : "width70 p-2" }>
                        <h3 className="clr-2 fw-b mb-2">I'm <span className="clr-1 fw-b text-capitalize">Jakir Shaikh, </span>
                            a Full Stack Developer.
                        </h3>
                        <p className="clr-3 lineHeight2 fs-20">For the past 2 years i've been working as a full stack developer at vizlitics technologies pvt ltd, Based in pune. I've some background in computer science with a degree in Bachelor of computer application from poona college. Here my roles & responsibilities is to look after the product User interface, design, functionality, user experience and implementing server side scripts and rest api's with the client side. With the app(product) based on ionic & angular, Managing the application code with the help of code versioning tool Git. </p>
                        <p className="clr-3 lineHeight2 fs-20">Delivering work within time in a team environment.</p>
                        <p className="clr-3 lineHeight2 fs-20">I have more than 3 years of experience working with web technologies and skills such as javscript,angular,html,css,scss,rest apis, nodejs. In which angular is the major technology i've used in my career til date.</p>
                    </div>
                    <div className={props.isMobile ? "width100 p-2" : "width30 p-2" }>
                        <ul className={props.isMobile ? "fs-20" : "pl-20 fs-20" }>
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
                <div className='pl-20 mt-3 mb-5'>
                    <h2 className={props.isMobile ? 'clr-2 m-0 text-center' : 'clr-2'}>Past Experiences</h2>
                    <span className="heading-separator-line border-bottom border-3 border-primary d-block mt-1 m-0 width20"></span>
                </div>
                <div className="pl-20 d-flex mobile">
                    
                    <div className="progress1 d-flex bgclr-3 p-5 mb-2">
                        <div className="">
                            <span className='badge p-2 bgclr-4 mb-2'>2018-2020</span>
                            <h4 className="clr-2 fw-b">Front End Developer(Agile)</h4>
                            <p className='clr-1'>Parmar Excellence Pvt Ltd</p>
                            <p className="clr-2 lineHeight2">I started my career as a web developer with parmar excellence, and have wonderful experiences on variety of projects.</p>
                        </div>
                    </div>
                    <div className="progress2 d-flex bgclr-3 p-5 mb-2">
                        <div className="">
                        <span className='badge p-2 bgclr-4 mb-2'>2020 - till date</span>
                            <h4 className="clr-2 fw-b">Full Stack Developer (Angular)</h4>
                            <p className='clr-1'>Vizlitics Technologies Pvt Ltd</p>
                            <p className="clr-2 lineHeight2">Got a wonderful opportunity to work with health based industry. Vizlitics is a product based firm focusing on products for cancer hospital</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;