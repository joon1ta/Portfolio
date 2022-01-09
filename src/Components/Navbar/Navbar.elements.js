import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 70px;
    z-index: 1;
    
`;

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    height: 100%;
    display: flex;
    justify-content: flex-end; 
`;


export const Menu = styled.ul`
    height: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;

    @media screen and (max-width: 960px) {
        position: absolute;
        top: 70px;
        left: ${({open}) => open ? '0' : '-120%' };
        width: 100%;
        height: 40vh;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        transition: 0.5s all ease;
        background: var(--navyBlue);
    }
`;

export const MenuItem = styled.li`
    height: 100%;

    @media screen and (max-width: 960px) {
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
`;

export const MenuItemLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0.5rem 2.5rem;
    color: var(--eggShell);
    font-size: 1rem;
    cursor: pointer;
    transition: 0.5s all ease;

    button {
        background: transparent;
        border-radius: 5px;
        padding: .5rem;
        font-size: .7rem;
        color: var(--coral);
        display: block;
        border: 1px solid var(--coral);
    }

    div{
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        display: flex;

        svg {
            display: none;
            fill: var(--eggShell);
            
        }
    }

    &:hover {
        color: var(--coral);
        transition: 0.5s all ease;
    }

    @media screen and (max-width: 960px) {
        width: 100%;
        div {
            width: 30%;
            justify-content: left;

            svg {
                display: flex;
            }
        }

    }
    @media screen and (max-width: 880px) {
    div {
      width: 40%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 500px) {
    div {
      width: 75%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 260px) {
    div {
      width: 100%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
`;


export const MobileIcon = styled.div `
    display: none;

    @media screen and (max-width: 960px){
        display: flex;
        align-items: center;
        cursor: pointer;

        svg{
           fill: var(--eggShell);
           margin-right: 0.5rem;
        }
    }
`