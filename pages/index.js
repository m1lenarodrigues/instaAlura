import styled from 'styled-components'

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

function Title(props){
  return <h1>Titulooo.. {props.titulo}</h1>
}

export default function Home() {
  return <div><Title titulo="Enviando props" /></div>
}