import React, { Component } from 'react'

export default class Heading1 extends Component {
    render() {
        return (
            <h1 id={ this.props.id } 
                className={ this.props.className }
                onClick={ () => this.click( this.props.onClick ) }
                >{ this.props.time }</h1>
        )
    }
}
