import styled from 'styled-components'

export const Wrapper = styled.div`
margin: 0 auto;
height: 50px;
overflow: hidden;
`;

export const Content = styled.div`
position: fixed;
top: 0;
background-color: #eee;
display: flex;
flex-direction: row;
align-items: center;
width: 100%;

@media screen and (max-width:768px){
    cursor: none;
}

.image{
    width: 70px;
    height: 40px;
    margin: 5px 5px 5px 30px;

@media screen and (max-width: 700px){
    margin-left:2px;
}

@media screen and (max-width: 480px){
    width: 80px;
}
}
#logo {
    font-family: Apple Chancery, cursive;   
    position: relative;
    top: -17px;

@media screen and (max-width:700px){
margin-left:2px;
}
@media screen and (max-width:480px){
    display: none;
    margin-left: 0px;
}
}
a{
    text-decoration: none;
    color: inherit;
}


#login, #signup, #logout {
    border: 2px solid white;
    padding: 5px 5px;
    border-radius: 20%;
    position: relative;
    background:white;
    left: 90%;
    top: -17px;
    
    :hover{
    opacity: 0.6;
    background-color: white;
    color:black;

    }
    @media screen and (max-width:1100px) {
        position: relative;
        left: 40vw;
         }
    @media screen and (max-width:990px){
        left:50%;
    }
    @media screen and (max-width:875px){
        left:30%
    }
    @media screen and (max-width:768px){
        left:40%;
    }
    @media screen and (max-width:576px) {
        left:15%;
    }
    @media screen and (max-width:480px){
        left:30%;
    }
    @media screen and (max-width:410px){
        left:20%;
    }
        @media screen and (max-width: 400px){

        left: 10%;
        }
    @media screen and (max-width: 390px){
       
        left: 9%;
    }
    @media screen and (max-width:350px) {
        left:5%;
    }
        
}


}
 
.logged {
   position: relative;
   bottom: 14px;
  left:0;
  right:0;

}

p {
    font-size: 20px;
    margin-left: 50px;
    display: inline;
    position: relative;
    top: 10px;
    @media screen and (max-width: 768px){
        font-size: 14px;
    }
    : hover {
        opacity: 0.7;
    }
}
@media screen and (max-width: 768px){
   
    #login, #signup, #logout {
        border: 2px solid #FF2312;
        padding: 1px 1px;
        border-radius: 20%;
        background-color: #FF2312 ;
        color:white;
}  
    p {
        font-size: 14px;
        margin-left: 50px;
        display: inline;
        position: relative;
        top: 15px;
        : hover {
            opacity: 0.7;
        }
    
}


`;
