import styled from 'styled-components';

const StyledListItem = styled.li`
    display: inline;
    padding: 15px 0;
    cursor: pointer;
    list-style-type: none;
    transition: 200ms;
    text-transform: uppercase;
    font-size: 0.9em;

    :hover {
        color: black;
        font-weight: 600;
    }

    :nth-child(3) {
        color: red;
    }
`;

export default StyledListItem;
