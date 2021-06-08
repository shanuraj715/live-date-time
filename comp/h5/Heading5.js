import React, { Component } from 'react'

export default class Heading5 extends Component {
    render() {
        return (
            <h5 id={ this.props.id } 
                className={ this.props.className }
                onClick={ () => this.click( this.props.onClick ) }
                >{ this.props.time }</h5>
        )
    }
}
