import React, {useContext} from 'react';
import {  Wrapper, Content } from './body.styles';

import Pdf from '../../images/pdf.png';
import Word from '../../images/word.jpeg';
import Powerpoint from '../../images/powerpoint.png';
import Excel from '../../images/excel.png';
import fileConversion from '../../images/best-conversion.png';
import {Link} from 'react-router-dom';
import {Context} from '../../context'

const Body = () => {
 const [user] = useContext(Context) 
return(
<Wrapper>
    <Content>
      <br/>
      <h5>Create Professional</h5>
      
         <section>
           <div><Link to = {user? '/account':'/login'}>
             <img src={Word} alt='word'/>
          <p id="fe">WORD DOCUMENTS</p>
          </Link>  </div>
  
    <div><Link to = {user? '/account':'/login'}>
     <img src={Pdf} alt='pdf' /> 
    <p id="le"> PDF DOCUMENTS</p></Link>
    </div>
    
    <div> <Link to = {user? '/account':'/login'}>
     <img src={Excel} alt= 'excel'/> 
     <p id="se"> EXCEL DOCUMENTS</p> </Link>
     </div>
    
      <div><Link to = {user? '/account':'/login'}>
      <img src={Powerpoint} alt = 'powerpoint'/> 
      <p id="ne"> POWERPOINT PRESENTATION</p>
      </Link> </div>
     
       <div><Link to = {user? '/account':'/login'}>
      <img src={fileConversion} alt = 'file'/>
      <p id="co">FILE CONVERSION</p> 
      </Link> </div>
      
      </section>
      </Content>
          </Wrapper>


)};
export default Body;