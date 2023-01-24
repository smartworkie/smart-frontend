import styled from 'styled-components';

export const Wrapper = styled.div`
background-color: grey;
height: 180px;
overflow: hidden;
display:flex;
justify-content:center;
`;

export const Content = styled.div`

a {
    text-decoration:none;
    colour:inherit;
    }
section{
    display: grid;
    grid-template-columns: 200px 200px;
    grid-gap: 350px;
    margin:0 auto;
    text-align:center;
    

    @media screen and (max-width: 800px) {
        width: 300px;
        grid-template-columns: 120px 120px;
        grid-gap: 100px;
    }
}
.copyright {
    margin-top: 20px;
   text-align: center;
     @media screen and (max-width: 800px) {
         text-align: center;}

}
div {
    margin: 0 auto;
}
p{
    color: white;
    margin: 0 auto;
    
    : hover {
        opacity: 0.6;
    }
}
    @media screen and (max-width: 400px) {
        section {
            grid-template-columns: 120px 120px;
            grid-gap: 50px;
            text-align: justify;
        }
        }

`;

