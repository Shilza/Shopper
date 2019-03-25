import styled from 'styled-components';

const AbstractButton = styled.button`
    cursor: pointer;
    border: 0;
    outline: 0;
    height: 6%;
    min-height: 30px;
    transition: 0.5s;

    @media (max-width: 768px) {
        width: 50%;
        max-width: 400px;
        margin: 0 auto 15px auto;
    }
`;

export default AbstractButton;
