import React from 'react';
import emailjs from '@emailjs/browser';


import './styles.css';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';
import { ThemeContext } from '../../context';

const Contact = () => {
  
  const formRef = React.useRef();
  const [done, setDone] = React.useState(false);
  const theme = React.useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) =>
  {
    e.preventDefault();
    emailjs.sendForm('service_swtq6gq', 'template_845mavf', formRef.current, 'SEwxagTzp9_NG1rZc')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <div
      className='contact'>
        <div
          className='c-bg'/>
        <div
          className='c-wrapper'>
            <div
              className='c-wrapper-left'>
                <h1
                  className='c-w-left-title'>
                    let's discuss your project
                </h1>
                <div
                  className='c-info'>
                    <div
                      className='c-info-item'>
                        <img 
                          src={Phone}
                          alt=""
                          className='c-icon' />
                        +1 1234 556 75
                    </div>
                </div>
                <div
                  className='.c-info'>
                    <div
                      className='c-info-item'>
                        <img 
                          src={Email}
                          alt=""
                          className='c-icon' />
                        younisabuzayed@gmail.com
                    </div>
                </div>
                <div
                  className='.c-info'>
                    <div
                      className='c-info-item'>
                        <img 
                          src={Address}
                          alt=""
                          className='c-icon' />
                        Avcilar, Istanbul, Turkey
                    </div>
                </div>
            </div>
            <div
              className='c-wrapper-right'>
                <p className="c-w-desc">
                    <b>What’s your story?</b> Get in touch. Always available for
                    freelancing if the right project comes along. me.
                </p>
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}>
                    <input
                      type={'text'}
                      placeholder='Name'
                      name='user_name'
                      style={{ backgroundColor: darkMode && '#333'}} />
                    <input
                      type={'text'}
                      placeholder='Subject'
                      name='user_subject'
                      style={{ backgroundColor: darkMode && '#333'}} />
                    <input
                      type={'text'}
                      placeholder='Email'
                      name='user_email'
                      style={{ backgroundColor: darkMode && '#333'}} />
                    <textarea 
                      rows='5'
                      placeholder='Message'
                      name='message'
                      style={{ backgroundColor: darkMode && '#333'}} />
                    <button>Submit</button>
                    {done && 
                        <text 
                          className='text-done'>the message is sent</text>
                    }
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact;