import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Book } from './Book'
import { Hiring } from './Hiring'
import { NotHiring } from './NotHiring'

class Library extends Component {
    static defaultProps = {
        books: [
            {"title": "Tahoe Tales", "author": "Chet Whitley", "pages": 1000}
        ],
        visitorStep: 1
    }

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
        console.log(this.state);
        const { books } = this.props;
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
                        {this.state.data.map(product => {
                            return(
                                <div key={product.id}>
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
        );
    }
};

Library.propTypes = {
    books: PropTypes.array,
    visitorStep: PropTypes.number
};

export {Library};