import styled from 'styled-components';
import AbstractButton from './AbstractButton';

const FooterButton = styled(AbstractButton)`
    background: white;
    color: black;
    border: 1px solid black;
    text-transform: uppercase;

    &:hover {
        color: #00a261;
        border-color: #00a261;
    }
`;

export default FooterButton;
