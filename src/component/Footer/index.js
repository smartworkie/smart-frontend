import React, {useContext} from 'react';

//Styles
import { Wrapper, Content } from './Footer.styles';
import {Link} from 'react-router-dom';
import {Context} from '../../context'

const Footer = () => {
    const [user] = useContext(Context)
    return(

    <Wrapper>
        <Content>
            <section>
            <div><h5>GETTING STARTED</h5>
                <Link to ='/'>  <p>Home</p> </Link>
                  <Link to ={user? '/account': '/signup'}>  <p>Sign Up</p> </Link>
                   <Link to ={user?'/account' : '/login'}> <p>Log In </p> </Link>
                </div>
            <div><h5>OUR COMPANY</h5>
                 <Link to='/faq'> <p>F.A.Q.</p></Link>
                   <Link to='/sample'> <p>Sample</p></Link>
                    <Link to = '/privacy'><p>Privacy Policy</p></Link>
                
            </div>
            </section>
            <h5 className = 'copyright'>Copyright 2023. All Rights Reserved</h5>
            
        </Content>
    </Wrapper>
)
        };

export default Footer;