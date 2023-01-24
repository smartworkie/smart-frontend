import React, { useState} from 'react';
import {Wrapper, Content} from './header1.styles';
import {FaBars} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';
import {Link} from 'react-router-dom';

const Header1= () => {
const [showpage, setShowpage] = useState(false);
const handleClick = () => setShowpage(!showpage);


return(
   <Wrapper>
       <Content>
           
<button  id ='bar' onClick={handleClick} >
  {!showpage? <FaBars  className = 'bars'/>:<AiOutlineClose  className = 'bars'/>}
        
 </button>

    {showpage && ( 
    <div className ='show'>
    
          <Link to = '/'>  <p className='padding'>Home</p></Link>
           <Link to = '/about'> <p className='padding'>About</p></Link>
           <Link to = '/faq'> <p className='padding'>F.A.Q</p></Link>
          <Link to ='/sample'>  <p className='padding'>Sample</p> </Link>
          <Link to ='/support'><p className='padding'>Support</p></Link>
          </div>)}
    
       
     {!showpage && <div className = "intel">
    
      <p  className ='padding'><Link to = '/'>Home</Link></p>
      <p className ='padding'><Link to = '/about'>About</Link></p>
      <p className ='padding'><Link to = '/faq'>F.A.Q</Link></p>
      <p className ='padding'><Link to ='/sample'>Sample</Link></p> 
      <p className ='padding'><Link to ='/support'>Support</Link></p> 
      
   </div>
}
      
        </Content>
        </Wrapper>    
);}
export default Header1;