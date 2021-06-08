import React, { Component } from 'react'

export default class Heading3 extends Component {
    render() {
        return (
            <h3 id={ this.props.id } 
                className={ this.props.className }
                onClick={ () => this.click( this.props.onClick ) }
                >{ this.props.time }</h3>
        )
    }
}
