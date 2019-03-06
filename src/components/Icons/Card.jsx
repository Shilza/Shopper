import styled from 'styled-components';

const Card = styled.div`
    color: #000;
    position: relative;
    margin-left: 2px;
    margin-top: 4px;
    width: 15px;
    height: 10px;
    border-radius: 1px;
    border: solid 1px currentColor;

    :before {
        content: '';
        position: absolute;
        top: 1px;
        left: -1px;
        width: 17px;
        height: 2px;
        background-color: currentColor;
    }
    :after {
        content: '';
        position: absolute;
        right: 1px;
        bottom: 2px;
        width: 4px;
        height: 1px;
        background-color: currentColor;
    }
`;

export default Card;
