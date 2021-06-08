import React, { Component } from 'react'

export default class Heading2 extends Component {
    render() {
        return (
            <h2 id={ this.props.id } 
                className={ this.props.className }
                onClick={ () => this.click( this.props.onClick ) }
                >{ this.props.time }</h2>
        )
    }
}
