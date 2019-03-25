import styled from 'styled-components';

const RightArrow = styled.div`
    color: #000;
    position: absolute;
    width: 16px;
    height: 1px;
    background-color: currentColor;

    &:before {
        content: '';
        position: absolute;
        right: 1px;
        top: -5px;
        width: 10px;
        height: 10px;
        border-top: solid 1px currentColor;
        border-right: solid 1px currentColor;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`;

export default RightArrow;
