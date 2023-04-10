import styled from "@emotion/styled"

const LabelS = styled.label`
    background-color: red;
    opacity: 60%;
    box-shadow: #fff;
    display: block;
    text-align: center;
    color: #fff;
    font-size:25px ;
    font-family: 'lato', sans-serif;
    padding: 8px;
    text-transform: uppercase;

    &::after{
  content: '';
  width: 200px;
  height: 6px;
  background-color: #fff;
  display: block;
  margin: 10px auto auto;
    }
`
const Error = ({children}) => {
  return (
    <LabelS>{children}</LabelS>
  )
}

export default Error