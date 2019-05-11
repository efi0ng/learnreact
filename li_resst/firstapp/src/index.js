import React, { Component } from 'react';
import { render } from 'react-dom';

let skiData = {
    total: 50,
    powder: 20,
    backcountry: 10,
    goal: 100
};

class SkiDayCounter extends Component {
    getPercent = decimal => {
        return decimal * 100 + '%';
    }

    calcGoalProgress = (total, goal) => {
        return this.getPercent(total/goal);
    }

    render() {
        // destructure props object - ES6
        const { total, powder, backcountry, goal} = this.props.data;

        return (
            <section>
                <div>
                    <p>Total days: {total}</p>
                </div>
                <div>
                    <p>Power days: {powder}</p>
                </div>
                <div>
                    <p>Backcountry days: {backcountry}</p>
                </div>
                <div>
                    <p>Goal Progress: {this.calcGoalProgress(total, goal)}</p>
                </div>
            </section>
        );
    }
}

render(
  <SkiDayCounter data={skiData} />,
  document.getElementById('root')
)
