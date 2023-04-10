
import styled from "@emotion/styled"
const Container = styled.div`
align-items: center;

    color: #fff;

`
const PStyled =styled.p`
    font-family: 'lato' sans-serif;
    font-size: 700;
    span{
        text-transform: uppercase;
        font-size: 20px;
    }
`
const ImgSt = styled.img`
    position: absolute;
    margin-left: 300px ;
     width:  70px;
    display: block;
`
function ListadoCriptos({cotizacion}) {
    const {
        PRICE,
        LASTUPDATE,
        HIGHDAY,
        CHANGEDAY,
        LOWDAY,
        IMAGEURL
        } = cotizacion
  return (
      <Container>

          <ImgSt src={ ` https://www.cryptocompare.com${IMAGEURL}` } />
          <PStyled>Precio: <span>{PRICE}</span></PStyled>
          <PStyled>Ultimo Actualizacion: <span>{LASTUPDATE}</span></PStyled>
          <PStyled>Precio Mas alto del dia: <span>{HIGHDAY}</span></PStyled>
          <PStyled>Actualizacion: <span>{CHANGEDAY}</span></PStyled>
          <PStyled>Precio  mas bajo <span>{LOWDAY}</span></PStyled>

      </Container>
  )
}

export default ListadoCriptos