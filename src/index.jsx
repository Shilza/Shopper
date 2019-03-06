// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import '../static/normalize.css';
import Router from './Routes';

const root = document.getElementById('root');

if (root !== null) ReactDOM.render(<Router />, root);
