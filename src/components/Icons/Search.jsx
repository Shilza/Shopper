import styled from 'styled-components';

const Search = styled.div`
    color: #000;
    margin-top: 2px;
    margin-left: 3px;
    width: 12px;
    height: 12px;
    border: solid 1px currentColor;
    border-radius: 100%;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);

    :before {
        content: '';
        position: absolute;
        top: 12px;
        left: 5px;
        height: 6px;
        width: 1px;
        background-color: currentColor;
    }
`;

export default Search;
