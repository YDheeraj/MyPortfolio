import React from 'react'
import './contact.css';
import {AiOutlineMail} from 'react-icons/ai';
import {BsWhatsapp} from 'react-icons/bs';
import  { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8vd3dr6', 'template_t2dtfp8', form.current, 'UFpVZMDYHi-j5inpm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact</h2>
        <div className='container contact-container'>
          <div className='contact-options'>
            <article className='contact-option'>
              <AiOutlineMail className='contact-option-icons'></AiOutlineMail>
              <h4>Email</h4>
              <h5>yadavdheeraj2002@gamil.com</h5>
              <a href='mailto:dummyegator@gmail.com'>Send a message</a>
            </article>
            <article className='contact-option'>
              <BsWhatsapp className='contact-option-icons'></BsWhatsapp>
              <h4>Whatsapp</h4>
              <h5>+919616218451</h5>
              <a href='https://wa.me/+919616218451'>Send a message</a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail}> 
            <input type="text" placeholder='Enter Full Name' name='name' required></input>
            <input type='email' name='email' placeholder='Your Email' required></input>
            <textarea name='message' placeholder='Your Message' required></textarea>
            <button className='btn btn-primary'>Send Message</button>
          </form>
        </div>
    </section>
  )
}

export default Contact;