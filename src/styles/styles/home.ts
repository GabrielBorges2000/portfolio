import styled from 'styled-components';
//import styled from 'styled-components/native';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    margin: 0 150px;

    @media (max-width: 768px) {
        margin: 0 30px;
        flex-direction: column;
    }
`;



