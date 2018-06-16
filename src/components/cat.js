import React, { Component } from 'react'


class Cat extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <button className="btn" onClick={() => this.props.handleClick(this.props.id)}>
                <img className="img-thumbnail albums"
                    src={this.props.src}
                    alt={this.props.name}
                />
            </button>
        )
    }
}

export default Cat;