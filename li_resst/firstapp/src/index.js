import React, { Component } from 'react';
import { render } from 'react-dom';

let skiData = {
    total: 50,
    powder: 20,
    backcountry: 10,
    goal: 100
}

// component as an ES6 class

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
        )
    }
}

// now the same component as a function

const getPercent = decimal => {
    return decimal * 100 + '%';
}

const calcGoalProgress = (total, goal) => {
    return getPercent(total/goal);
}

const style = {
    color: 'blue'
}

const SkiDayCounter2 = ({ total, powder, backcountry, goal }) => {
    return (
        <section style={style}>
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
            <p>Goal Progress: {calcGoalProgress(total, goal)}</p>
        </div>
        </section>
    )
}

render(
    <div>
        <SkiDayCounter data={skiData} />
        <SkiDayCounter2 
            total={skiData.total} 
            powder={skiData.powder}
            backcountry = {skiData.backcountry} 
            goal={skiData.goal} 
        />
    </div>,
    document.getElementById('root')
)
