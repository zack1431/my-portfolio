function Skills(){
    return (
        <>
            <section className="contact-section container overflowY pb-100">
                <div className="position-relative d-flex text-center mb-2 pt-2">
                    <h2 className="text-24 text-white-50 opacity-1 text-uppercase fw-600 w-100 mb-0">My Skills</h2>
                    <p className="text-9 text-white fw-600 position-absolute w-100 align-self-center lh-base mb-0">What I Do
                        <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"></span> 
                    </p>
                </div>
                <div className="pl-20 d-flex mb-5">
                    <div className="progress1 d-flex bg-dark p-5">
                        <div className=" ">
                            <i className="skillIcon bgclr-1  fas fa-paint-brush clr-2 fa-lg p-3"></i>
                        </div>
                        <div className="">
                            <h4 className="clr-2 fw-b">UI/UX Design & Development</h4>
                            <p className="clr-2 lineHeight2">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                        </div>
                    </div>
                    <div className="progress2 d-flex bg-dark p-5">
                        <div className="">
                            <i className="bgclr-1 skillIcon p-3 fas fa-desktop clr-2 fa-lg"></i>
                        </div>
                        <div className="">
                            <h4 className="clr-2 fw-b">App Design & Development</h4>
                            <p className="clr-2 lineHeight2">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                        </div>
                    </div>
                </div>
                <div className="pl-20">
                    <div className="heading  mb-4">
                        <h4 className="clr-2 fw-b">My Skills</h4>
                    </div>
                    <div className=" d-flex gx-5">
                        <div className="progress1">
                            <p className="text-light fw-600 text-start mb-2">Web Design <span className="float-end">85%</span></p>
                            <div className="progress progress-sm bg-dark mb-4">
                            <div className="progress-bar" role="progressbar" style={{width: "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p className="text-light fw-600 text-start mb-2">HTML/CSS <span className="float-end">95%</span></p>
                            <div className="progress progress-sm bg-dark mb-4">
                            <div className="progress-bar" role="progressbar" style={{width: "95%"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p className="text-light fw-600 text-start mb-2">JavaScript <span className="float-end">80%</span></p>
                            <div className="progress progress-sm bg-dark mb-4">
                            <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="progress2">
                            <p className="text-light fw-600 text-start mb-2">React JS <span className="float-end">70%</span></p>
                            <div className="progress progress-sm bg-dark mb-4">
                            <div className="progress-bar" role="progressbar" style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p className="text-light fw-600 text-start mb-2">Angular <span className="float-end">85%</span></p>
                            <div className="progress progress-sm bg-dark mb-4">
                            <div className="progress-bar" role="progressbar" style={{width: "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p className="text-light fw-600 text-start mb-2">Bootstrap <span className="float-end">99%</span></p>
                            <div className="progress progress-sm bg-dark mb-4">
                            <div className="progress-bar" role="progressbar" style={{width: "99%"}} aria-valuenow="99" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Skills;