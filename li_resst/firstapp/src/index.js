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
            open: false,
            visitors: 0
        }
        this.toggleOpenClosed = this.toggleOpenClosed.bind(this);
    }

    toggleOpenClosed() {
        // setState is asynchronous
        this.setState( (prevState, props) => ({
            open: !prevState.open,
            visitors: prevState.visitors + props.visitorStep
        }))
    }

    render() {
        console.log(this.state)
        const { books } = this.props
        return (
            <div>
                <h1>Welcome to the Library</h1>
                <p>The library is <strong>{this.state.open ? "open": "closed"}</strong>.</p>
                <p>We have had {this.state.visitors} visitors.</p>
               <button onClick={this.toggleOpenClosed}>Change</button>        
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
    <Library books={bookList} visitorStep={2} />,
    document.getElementById('root')
)
