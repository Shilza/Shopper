import styled from 'styled-components';
import React from 'react';
import Search from '../Icons/Search';

const StyledSearchBar = styled.div`
    display: flex;
    ${Search}:first-child {
        margin-right: 10px;
    }
`;

const SearchBar = () => (
    <StyledSearchBar>
        <Search />
        <span>Search</span>
    </StyledSearchBar>
);

export default SearchBar;
