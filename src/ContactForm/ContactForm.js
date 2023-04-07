import React, { useState } from "react";
import './ContactForm.css'
import emailjs from '@emailjs/browser';

function ContactForm() {  
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(toSend)
  
    emailjs.sendForm(
      'service_ggcbmvg', 
      'template_fvew76f', 
      toSend, 
      '4Kpkd49_rae_lH0rx')
    .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
    };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return(
    <div>

<form onSubmit={onSubmit}>
  <input
    type='text'
    name='from_name'
    placeholder='from name'
    value={toSend.from_name}
    onChange={handleChange}
  />
  <input
    type='text'
    name='to_name'
    placeholder='to name'
    value={toSend.to_name}
    onChange={handleChange}
  />
  <input
    type='text'
    name='message'
    placeholder='Your message'
    value={toSend.message}
    onChange={handleChange}
  />
  <input
    type='text'
    name='reply_to'
    placeholder='Your email'
    value={toSend.reply_to}
    onChange={handleChange}
  />
  <button type="submit">Submit</button>
  </form>
  </div>

  )
}

export default ContactForm;