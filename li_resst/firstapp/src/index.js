import React, {Component} from 'react';
import { render } from 'react-dom';

let bookList = [
    {"title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260},
    {"title": "White Teeth", "author": "Zadie Smith", "pages": 480},
    {"title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304}
]

const Book = ({title, author, pages, freeBookmark}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>by: {author}</p>
            <p>Pages: {pages} page</p>
            <p>Free Bookmark Today: {freeBookmark ? 'yes!' : 'no!'}</p>
        </section>
    )
}

const Hiring = () => 
    <div>
        <p>The library is hiring. Go to www.library.com/jobs for more.</p>
    </div>

const NotHiring = () =>
    <div>
        <p>The library is not hiring. Check back later for more info.</p>
    </div>

class Library extends Component {
    state = {
        open: true,
        visitors: 0,
        freeBookmark: true,
        hiring: true,
        data: [],
        loading: false
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
            .then(data => data.json())
            .then(data => this.setState({data, loading:false}))
    }

    componentDidUpdate() {
        console.log("The component just updated.")
    }

    // arrow functions automatically bind
    toggleOpenClosed = () => {
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
                <button onClick={this.toggleOpenClosed}>Change</button>        
                <p>We have had {this.state.visitors} visitors.</p>
                {this.state.hiring ? <Hiring /> : <NotHiring />}
                {this.state.loading 
                    ? "loading..."
                    : <div>
                        {this.state.data.map((product, i) => {
                            return(
                                <div key={i}>
                                    <h3>Library Product of the Week!</h3>
                                    <h4>{product.name}</h4>
                                    <img src={product.image} height={100} alt={product.name}/>
                                </div>
                            )
                        })}
                    </div>
                }
                {books.map(
                    (book, i) => <Book
                        key={i} 
                        title={book.title} 
                        author={book.author} 
                        pages={book.pages}
                        freeBookmark={this.state.freeBookmark}
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
