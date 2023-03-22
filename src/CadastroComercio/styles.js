import styled from "styled-components";

export const FormStyled = styled.div`
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 85vh;
display: flex;
align-items: center;

p{
  text-align: center;
  margin-top: 2vh;
  color: black;
  font-weight: bold;
  font-size: 12px;
  text-decoration: underline;
}

h1 , h2 , h3{
    text-align: center;
 }  
  

  form {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width:40vh;
    align-items: center;
    color: #000;
  }

  input {
    background-color: transparent;
    border: 0;
    width: 100%;
    color: #000;
    border-bottom: 1px solid black;
    margin-top: 5vh;
  }
  input:focus {
    border: 0;
    border-bottom: 1px solid black;
    outline: none;
  }

  input::placeholder {
    color: #000;
  }
`

export const ButtonStyled = styled.button`
  border-radius: 50px;
  border: none;
  width: 30vh;
  height: 35px;
  background-color: #0081c9;
  background-image: linear-gradient(160deg, #0081c9 0%, #5bc0f8 100%);
  border: 1px solid #0081c9;
  color: #fff;
  cursor: pointer;
  margin-top: 4vh;
  box-shadow: 0 4px 30px rgba(31, 38, 135, 0.2);

  &:hover{
    transition-duration:200ms;
    transform: scale(1.02);
  }
`;