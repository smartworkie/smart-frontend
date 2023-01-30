import styled from "styled-components";

export const Wrapper = styled.div`
margin-top:100px;
color:orange;
font-family: cursive;
margin:0 auto;
text-align: center;
margin-bottom:20px;
`;

export const Content = styled.div`
h1{
    margin-top:60px;
}
.boxes{
    display:flex;
    flex-direction: column;
    margin:0 auto;
    width:30%;
    gap:10%;
    @media screen and (max-width:769px){
    width:250px;
    }
}
#name, #email, #message{
    height:30px;
    margin:10px;
    border-radius: 10px;
    border:1px solid orange;
   outline:none;
   padding:0.3em;

}

#message{
    height:70px;
    align-content: flex-start;
}
.submit{
    margin-bottom:20px;
    width:50%;
    margin:0 auto;
    height:30px;
    color:white;
    background:orange;
    border-radius:30px;
    cursor:pointer;
    font-size:15px;
    border:none;
    
}
.submit:hover{
    background:blue;
}
`;
