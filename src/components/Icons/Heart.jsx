import styled from 'styled-components';

const Heart = styled.div`
    color: #000;
    margin-top: 6px;
    margin-left: 5px;
    width: 9px;
    height: 9px;
    border-left: solid 1px currentColor;
    border-bottom: solid 1px currentColor;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);

    :before {
        content: '';
        position: absolute;
        top: -5px;
        left: -1px;
        width: 8px;
        height: 5px;
        border-radius: 5px 5px 0 0;
        border-top: solid 1px currentColor;
        border-left: solid 1px currentColor;
        border-right: solid 1px currentColor;
    }

    :after {
        content: '';
        position: absolute;
        top: 0px;
        left: 8px;
        width: 5px;
        height: 8px;
        border-radius: 0 5px 5px 0;
        border-top: solid 1px currentColor;
        border-right: solid 1px currentColor;
        border-bottom: solid 1px currentColor;
    }
`;

export default Heart;
