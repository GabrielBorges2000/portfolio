import styled from 'styled-components';

export const Dev = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 30px;
    color: black;
    background-color: yellow;
    gap: 10px;
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;

`;

export const Container = styled.header`
    margin-top: 30px;
    width: 100%;
    height: 80px;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;


    background-color: ${({ theme }) => theme.white};
    box-shadow: ${({ theme }) => theme.shadow};

    z-index: 2;
    position: fixed;
    left: 0;
    top: 0;

    @media screen and (max-width: 768px){
        justify-content: space-between;
        padding: 20px 50px;     
    } 
`;

export const Nav = styled.div`
    display: flex;
    gap: 2rem;

    font-weight: bold;   

    @media screen and (max-width: 768px){
        display: none;      
    }  

    a {
        text-decoration: none;
    }
    
`;

export const NavHidden = styled.div`
    display: flex;
    gap: 2rem;

    font-weight: bold;

    

    @media screen and (max-width: 768px){
        flex-direction: column;
        align-items: flex-start;

        padding-left: 18px;

        padding-top: 30px;

        width: 200px;
        height: 110vh;

        position: absolute;
        right: 0;
        top: 0;
        z-index: 10;

        box-shadow: ${({ theme }) => theme.shadow};

        background-color: ${({ theme }) => theme.white};        
    }    

    a {
        text-decoration: none;
    }
`;

export const Arrow = styled.button`
    border: 0;
    background-color: transparent;

    display: none;
    color: ${({ theme }) => theme.blue_100};

    @media screen and (max-width: 768px){
        display: block;
    }
`;

export const Page = styled.p`
    color: ${({ theme }) => theme.blue_100};

    display: flex;
    gap: 10px;

    font-size: 20px;

    @media(max-width: 768px){
        font-size: 18px;
    }
`;

export const Button = styled.button`

    display: none;
    border: 0;
    background-color: transparent;
    color: ${({ theme }) => theme.blue_600};

    font-weight: bold;
    
    @media screen and (max-width: 768px){
        display: block;
    }

`;

export const Overlay = styled.div`
    width: 100vw;
    height: 110vh;
    left: 0;
    top: 0;

    position: absolute;
    z-index: 9;

    background-color: ${({theme}) => theme.black};
    opacity: 0.5;
`;

