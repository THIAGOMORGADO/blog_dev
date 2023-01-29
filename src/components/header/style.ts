import styled from "styled-components";


export const Container = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 2rem;

a{
  font-size: 2rem;
  font-weight: bold;
}
nav{
  ul{
    display: flex;
    align-items: center;
    gap: 2rem;
    font-size: 1rem;
  }
}
`