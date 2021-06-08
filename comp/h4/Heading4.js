import React, { Component } from 'react'

export default class Heading4 extends Component {
    render() {
        return (
            <h4 id={ this.props.id } 
                className={ this.props.className }
                onClick={ () => this.click( this.props.onClick ) }
                >{ this.props.time }</h4>
        )
    }
}
