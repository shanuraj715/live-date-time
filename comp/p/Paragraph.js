import React, { Component } from 'react'

export default class Paragraph extends Component {
    render() {
        return (
            <p id={ this.props.id } 
                className={ this.props.className }
                onClick={ () => this.click( this.props.onClick ) }
                >{ this.props.time }</p>
        )
    }
}
