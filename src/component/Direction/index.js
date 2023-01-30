import React , {useContext} from 'react';

import { Wrapper, Content } from './Direction.styles';
import {Link} from 'react-router-dom';
import {Context} from '../../context';

//Images
import Paystack from '../../images/paystack logo.png';
import Download from '../../images/download.png';
import Account from '../../images/account-icon-12 (1).jpg';
import Upload from '../../images/upload.png';


const Direction = () => {
const [user] = useContext(Context);

return (
<Wrapper>
    <Content>
        <section>
           <div><Link  to ={user?'/account':'/login'}>
                <h5> Step One</h5>
                <p>Create Your Account</p>
                <br/><br/><br/>
                <img id = 'account' src={Account} alt='prop'/>

                </Link></div>
          <div><Link to={user?'/account':'/login'} >
                <h5>Step Two</h5>
                <p> Upload Materials to Work With in Format of Your Choice (images, word, pdf, ppt or xsl) </p>
                <img src = {Upload} alt=''/>
                </Link> </div>
            <div><Link to={user?'/account':'/login'}>
                <h5>Step Three</h5>
                <p>Payment for Services </p> 
                <br/><br/><br/>
                <img id = 'enlarge' src = {Paystack} alt='enlarge'/>
                </Link> </div>
            <div className='last'><Link to={user?'/account':'/login'}>
                <h5>Step Four</h5>
                <p>Download Professional Documents in Format of Your Choice</p>
                <br/>
                <img id = 'download' src = {Download} alt='download'/>
                </Link>    </div>
        </section>
    </Content>
</Wrapper>
);
};

export default Direction;