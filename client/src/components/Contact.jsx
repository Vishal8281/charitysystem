import React, { Component } from "react";
import { Fade } from 'react-reveal';
import ContactUsForm from "./ContactUsForm";



class Contact extends Component {
  render() {
    return (
      <>
        <Fade bottom duration={2000} distance="100px">
          <div className="grid md:grid-cols-2">
            <div className="m-5">
              <ContactUsForm />
            </div>
           
           
          </div>
        </Fade>    </>
    );
  }
}
export default Contact;