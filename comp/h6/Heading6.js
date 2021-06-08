import React, { Component } from 'react'

export default class Heading6 extends Component {
    render() {
        return (
            <h6 id={ this.props.id } 
                className={ this.props.className }
                onClick={ () => this.click( this.props.onClick ) }
                >{ this.props.time }</h6>
        )
    }
}
