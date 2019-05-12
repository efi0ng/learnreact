import React, {Component} from 'react';
import { render } from 'react-dom';
import {Library, bookList} from './Library';

render(
    <Library books={bookList} visitorStep={2} />,
    document.getElementById('root')
)
