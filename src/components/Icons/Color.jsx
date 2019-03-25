// @flow
import styled from 'styled-components';

const Color = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid black;
    background: ${(props: { color: string }) => props.color};
    opacity: 0.8;
    margin-left: 5px;
`;

export default Color;
