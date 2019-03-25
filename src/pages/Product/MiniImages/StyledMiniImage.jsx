import styled from 'styled-components';

const StyledMiniImage = styled.img`
    width: 50%;
    height: 60%;
    margin-bottom: 30px;
    cursor: pointer;
    transition: 0.3s;
    ${({ border }) => border && 'border: 2px solid black;'}

    @media (max-width: 768px) {
        width: auto;
        margin: 0 10px;
    }
`;

export default StyledMiniImage;
