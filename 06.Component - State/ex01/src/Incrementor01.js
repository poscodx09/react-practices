import React, { Component } from 'react';

export default class extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button onClick={this.props.onPlus}>{'+'}</button>
                {' '}
                {this.props.value}
                {' '}
                <button onClick={this.props.onMinus}>{'-'}</button>
            </div>
        );
    }
}