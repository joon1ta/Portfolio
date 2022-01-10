import styled from 'styled-components'


export const Container = styled.div `
    width: 100%;
    margin: 2rem auto;
    
    
`
export const WrapperImg = styled.div `
    border-bottom: 1px solid var(--coral);
    border-right: 1px solid var(--coral);
    
    padding: 1rem;
    margin: .5rem;
    
    
    margin-top: 3rem;
`
export const Wrapper = styled.div `
    width: 100%;
  
    color: var(--eggShell);
    text-align: center;
    display: flex;
    flex-direction: column;
    h6 {
        
        
        white-space: nowrap;
        margin: 0 auto;
        padding-top: 1rem;
        width: 39ch;
        color: var(--eggShell);
        overflow: hidden;
        font-size: 1.1rem;
        animation: typing 3s steps(39), blink .5s infinite step-end alternate;

        @keyframes typing {
            from {width: 0}
        }
        
        @keyframes blink {
            50% { border-color: transparent}
        }
    }
    img {
        width: 200px;
        
    }
    h5 {
        font-size: 1.2rem;
        color: var(--coral);
    }
`
