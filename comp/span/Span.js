import React, { Component } from 'react'

export default class Span extends Component {
    render() {
        return (
            <span id={ this.props.id } 
                className={ this.props.className }
                onClick={ () => this.click( this.props.onClick ) }
                >{ this.props.time }</span>
        )
    }
}
