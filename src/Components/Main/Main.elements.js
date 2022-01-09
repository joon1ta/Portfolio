import styled from 'styled-components'


export const Container = styled.div `
    width: 100%;
    height: 30%;
   display: ${({open}) => open ? 'none' : 'flex' };
    
`