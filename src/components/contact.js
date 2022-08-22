function Contact(){
    return (
        <>      
            <section className="contact-section overflowY">
                <div className="position-relative d-flex text-center mb-2 pt-2">
                    <h2 className="text-24 text-white-50 opacity-1 text-uppercase fw-600 w-100 mb-0">Contact</h2>
                    <p className="text-9 text-white fw-600 position-absolute w-100 align-self-center lh-base mb-0">Get In Touch
                        <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"></span> 
                    </p>
                </div>
                <div className="container d-flex">
                    <div className="col-md-4 pl-20">
                        <h4 className="clr-2">Address</h4>
                        <div className="clr-2 mb-4">
                            <p className="lineHeight2">Sr No 5, Lane No 7, Ashraf Nagar,<br/> Behind Gausulwara Masjid,<br/> Kondhwa, Pune - 48, Maharashtra, India</p>
                        </div>
                        <div className="social-icons">
                            <p><i className="clr-1 fas fa-phone fa-lg pr-10"></i><a className="tel-icon clr-2" href="tel:8668905926">+91 866-8905-926</a></p>
                            <p><i className="clr-1 fas fa-envelope fa-lg pr-10"></i><a className="tel-icon clr-2" href="mailto:zakrshkh16@gmail.com">zakrskh07@gmail.com</a></p>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <h4 className="clr-2 pb-4 text-uppercase">Send us a note</h4>
                        <div className="d-flex">
                            <div className="inputText">
                                <input type="text" className="form-control clr-2" placeholder="Name" id="inputPassword4"/>
                            </div>
                            <div className="inputText2">
                                <input type="email" className="form-control clr-2" placeholder="Email" id="inputEmail4"/>
                            </div>
                        </div>
                        <div className="col-md-12 mt-3">
                            <textarea resize="false" rows='4' className="form-control" placeholder="Leave a comment here...." id="floatingTextarea"></textarea>
                        </div>
                        <div className="col-12 mt-3">
                            <div className="sendbtn">
                                <button type="submit" className="btn bgclr-1 submitbtn fw-600">Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact;