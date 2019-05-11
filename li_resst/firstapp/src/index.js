import React, {Component} from 'react';
import { render } from 'react-dom';

let bookList = [
    {"title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260},
    {"title": "White Teeth", "author": "Zadie Smith", "pages": 480},
    {"title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304}
]

const Book = ({title, author, pages}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>by: {author}</p>
            <p>Pages: {pages} page</p>
        </section>
    )
}

class Library extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }

    render() {
        console.log(this.state)
        const { books } = this.props
        return (
            <div>
                <h1>Welcome to the Library</h1>
                <p>The library is {this.state.open ? "open": "closed"}.</p>
                {books.map(
                    (book, i) => <Book
                        key={i} 
                        title={book.title} 
                        author={book.author} 
                        pages={book.pages}
                        />
                )}          
            </div>
        )
    }
}

render(
    <Library books={bookList} />,
    document.getElementById('root')
)
