import React, {useState, useRef} from 'react';
import {Wrapper, Content} from './Support.styles';
import Spinner from '../Loading'
import emailjs from '@emailjs/browser';

const Support = () => {
    const [contact, setContact] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
        setLoading(true);
      emailjs.sendForm(process.env.REACT_APP_SERVICE, process.env.REACT_APP_TEMPLATE, form.current, process.env.REACT_APP_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            setContact(true);
            setLoading(false);
        }, (error) => {
            console.log(error.text);
           setError(true);
           setLoading(false);
        });
    }
    return(
        <form onSubmit={sendEmail} ref={form}>
        <Wrapper>
            <Content>
               
               
            <h1> Leave A Message</h1>
            {loading && <Spinner/>}
                {contact && <p id="message1">Message Received!</p>}
                {error && <p id="message1">Error! Try Again or Check Your Connection</p>}
            <div className='boxes'>
                <input type='text' id = 'name' name='user_name' placeholder='Name'/>
                <input type='text' id = 'email' name='user_email' placeholder='Email'/>
                <input type='text' id='message' name = 'message' placeholder='Message'></input>
                <button className='submit'>Submit</button>
          </div>
        </Content>
        </Wrapper>
        </form>
    )
}


export default Support;