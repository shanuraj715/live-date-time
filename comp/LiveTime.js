import React from 'react'
import live from '../lib/live'

import P from './p/Paragraph'
import Span from './span/Span'
import List from './li/List'
import Heading1 from './h1/Heading1'
import Heading2 from './h2/Heading2'
import Heading3 from './h3/Heading3'
import Heading4 from './h4/Heading4'
import Heading5 from './h5/Heading5'
import Heading6 from './h6/Heading6'

export default class LiveTime extends React.Component{
    tag = () => {
        let tags = ["p", 'span', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']
        if( this.props.element ){
            let tag = this.props.element
            return tags.includes( tag ) ? tag : 'span'
        }
        else{
            return 'span'
        }
    }

    click = func => {
        if( typeof func === 'function' ){
            func()
        }
    }

    state = {
        tagName: this.tag(),
        time: ''
    }

    componentDidMount() {
        this.inter = setInterval(() => {
            this.setState({
                time: live(this.props['data-pattern'], new Date(), {
                    twoDigitTime: this.props.two_digit_time,
                    twoDigitDate: this.props.two_digit_date
                })
            })
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval( this.inter )
    }

    render(){
        return(
            <React.Fragment>
                { this.state.tagName === 'p' ? <P {...this.props} time={ this.state.time } />: null }

                { this.state.tagName === 'span' ? <Span {...this.props} time={ this.state.time } /> : null }
                { this.state.tagName === 'li' ? <List {...this.props} time={ this.state.time } />: null }
                { this.state.tagName === 'h1' ? <Heading1 {...this.props} time={ this.state.time } />: null }
                { this.state.tagName === 'h2' ? <Heading2 {...this.props} time={ this.state.time } />: null }
                { this.state.tagName === 'h3' ? <Heading3 {...this.props} time={ this.state.time } />: null }
                { this.state.tagName === 'h4' ? <Heading4 {...this.props} time={ this.state.time } />: null }
                { this.state.tagName === 'h5' ? <Heading5 {...this.props} time={ this.state.time } />: null }
                { this.state.tagName === 'h6' ? <Heading6 {...this.props} time={ this.state.time } />: null }

                

            </React.Fragment>
        )
    }
}