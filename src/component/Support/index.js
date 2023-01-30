import React from 'react';
import {Wrapper, Content} from './Support.styles';

const Support = () => {
    
    return(
        <Wrapper>
            <Content>
            <h1> Leave A Message</h1>
            <div className='boxes'>
                <input type='text' id = 'name' placeholder='Name'/>
                <input type='text' id = 'email' placeholder='Email'/>
                <input type='text' id='message' placeholder='Message'></input>
                <button className='submit'>Submit</button>
          </div>
        </Content>
        </Wrapper>
    )
}


export default Support;