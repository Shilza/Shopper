// @flow
import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    height: 100%;
`;

const DowWrapper = styled.div`
    position: absolute;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
`;

const Dot = styled.div`
    width: 14px;
    height: 14px;
    font-size: 0.8em;
    background: orange;
    color: white;
    border-radius: 50%;
    margin-left: 5px;
`;

type PropTypes = {
    count: number,
    children: Node
};

const Badge = ({ count, children }: PropTypes) => (
    <Container>
        {children}
        {!!count && (
            <DowWrapper>
                <Dot>{count}</Dot>
            </DowWrapper>
        )}
    </Container>
);

export default Badge;
