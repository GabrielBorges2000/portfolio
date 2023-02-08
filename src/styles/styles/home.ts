import styled from 'styled-components';
//import styled from 'styled-components/native';

export const Container = styled.main`
    display: flex;
    flex-direction: column;    

    @media (max-width: 768px) {
        margin: 0 30px;
        flex-direction: column;
    }
`;



