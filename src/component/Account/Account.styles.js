import styled from 'styled-components';

export const Wrapper = styled.div`
background-color: white;
margin-top:70px;
`;
export const Button = styled.button`
height: 5px;
`;

export const Content = styled.div`
#dashboard{
font-size: 30px;
font-family: Times New Roman;
}
.form{
    background-color: #add8e6;
    width: 60%;
    border-radius: 5%;
    box-sizing: border-box;
    margin: 0 auto;
    margin-bottom: 20px;
    padding: 10px;

@media screen and (max-width:500px){
    width: 70%;
}
      }
.underline{
    width: 4rem;
    height: 0.25rem;
    margin-bottom: 0px;
    margin-top: -20px;
    background: blue;
    margin-left: auto;
    margin-right: auto;
}

#active{
background: #d4d4d4;
border-radius: 20px;
}
li { 
    display:inline;
    padding: 10px;
}
.btn {
    background: transparent;
    font-size: 20px; 
    color: orange;
    border-color: transparent;
    cursor: pointer;
    outline-color: hsl(210,36%,96%);
   
    @media screen and (max-width:500px){
   
    margin-left: 2px;
    }
}

.btn:hover{
    background-color: grey;
    color: orange;
   
}

#text {
    height: 100px;
    width: 90%;
   margin-top: 2px;
   border:1px solid transparent;
   outline:none;
}
#task, #submit{
    border-radius: 5%;
    border: none;
    width: 200px;
    height: 30px;
    background-color: #FCA61F;
    cursor: pointer;
    color:white;
    outline:none;
    :hover{
        opacity: 0.7;
    }
   }
   #image{
    margin-left: 15%;
  
   }
`;