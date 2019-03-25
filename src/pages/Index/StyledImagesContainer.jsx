import styled from 'styled-components';

const StyledImagesContainer = styled.div`
    position: relative;
    display: flex;

    img {
        height: 10%;
        flex: 1;
        width: ${({ scale }) => 100 / scale}%;
    }
`;

export default StyledImagesContainer;
