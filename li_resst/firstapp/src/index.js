import React from 'react';
import { render } from 'react-dom';
import { Library } from './Library';

let bookList = [
    {"title": "Why we sleep", "author": "Matthew Walker", "pages": 360},       
    {"title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260},
    {"title": "White Teeth", "author": "Zadie Smith", "pages": 480},
    {"title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304}
];

render(
    <Library books={bookList} visitorStep={3} />,
    document.getElementById('root')
)
