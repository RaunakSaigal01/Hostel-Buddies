function Contact(){
    return(
        <section id="contact" className="contact" data-aos="zoom-out">
        <div className="container">
            <h2 className="section-title">Get In Touch <i className="fa-regular fa-message"></i></h2>
            <div className="contact-content">
                <div className="contact-info">
                    <h3 id="beta">Let's Connect!</h3>
                    <p id="alpha">
                        I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                        or just chat about algorithms and competitive programming.
                    </p>
                    <div className="contact-methods">
                        <div className="contact-method">
                            <i className="fas fa-envelope"></i>
                            <span>shashwat@gmail.com</span>
                        </div>
                        <div className="contact-method">
                            <i className="fas fa-envelope"></i>
                            <span>raunaksaigal@gmail.com</span>
                        </div>
                        <div className="contact-method">
                            <i className="fab fa-linkedin"></i>
                            <span>www.linkedin.com/in/shashwat</span>
                        </div>
                        <div className="contact-method">
                            <i className="fab fa-linkedin"></i>
                            <span>www.linkedin.com/in/Raunak</span>
                        </div>
                        <div className="contact-method">
                            <i className="fab fa-github"></i>
                            <span>https://github.com/shashwat</span>
                        </div>
                        <div className="contact-method">
                            <i className="fab fa-github"></i>
                            <span>https://github.com/raunak</span>
                        </div>
                        <div className="contact-method">
                            <i className="fas fa-code"></i>
                            <span>https://codeforces.com/profile/shashwat</span>
                        </div>
                        <div className="contact-method">
                            <i className="fas fa-code"></i>
                            <span>https://codeforces.com/profile/raunak</span>
                        </div>
                    </div>
                </div>
                <button type="" className="btn btn-primary">
                            <span
  onClick={() =>
    (window.location.href =
      "https://mail.google.com/mail/u/1/#inbox?compose=DmwnWrRmTwnQwPCrzNFzzzqJpMqFcdMXvBDPxBXJPwTWJhRDhjRXXGNcqMjNSbFFsxMFfrWBDSLg")}>Send Message</span>

                            <i className="fas fa-paper-plane"></i>
                </button>
            </div>
        </div>
    </section>
    )
}
export default Contact;