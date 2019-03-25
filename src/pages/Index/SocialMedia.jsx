// @flow

import * as React from 'react';
import styled from 'styled-components';

const SocialMediaStyled = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 20px auto 40px auto;
    width: 300px;
`;

const MediaLink = styled.a`
    position: absolute;
    cursor: pointer;
    transition: 200ms;
    text-decoration: none;
    color: black;

    :hover {
        transform: scale(1.4);
    }
`;

type PropTypes = {
    className: string,
    href: string
};

const Icon = ({ className, href }: PropTypes) => (
    <div>
        <MediaLink href={href} className={className} />
    </div>
);

const SocialMedia = () => (
    <SocialMediaStyled>
        <Icon className="fab fa-vk" href="https://vk.com" />
        <Icon className="fab fa-facebook-f" href="https://facebook.com" />
        <Icon className="fab fa-twitter" href="https://twitter.com" />
        <Icon className="fab fa-instagram" href="https://instagram.com" />
        <Icon className="fab fa-pinterest" href="https://pinterest.com" />
    </SocialMediaStyled>
);

export default SocialMedia;
