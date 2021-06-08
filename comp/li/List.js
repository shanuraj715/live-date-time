import React, { Component } from 'react'

export default class List extends Component {
    render() {
        return (
            <li id={ this.props.id } 
                className={ this.props.className }
                onClick={ () => this.click( this.props.onClick ) }
                >{ this.props.time }</li>
        )
    }
}
