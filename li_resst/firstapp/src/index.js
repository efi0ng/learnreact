import React from 'react';
import { render } from 'react-dom';
import { Library, bookList } from './Library';

render(
    <Library books={bookList} visitorStep={1} />,
    document.getElementById('root')
)
