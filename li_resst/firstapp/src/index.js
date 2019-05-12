import React from 'react';
import { render } from 'react-dom';

class FaveColourForm extends React.Component {
    state = { value: '' }

    newColor = e => this.setState({value: e.target.value });

    submit = e => {
        console.log(`New colour: ${this.state.value}`);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <label>Favourite Colour:
                    <input type="color" onChange={this.newColor}/>
                </label>
                <button>Submit</button>
            </form>
        );
    }
}

render(
    <FaveColourForm />,
    document.getElementById('root')
)
