import React, { Component } from 'react'

export default class BlockItem extends Component {
    render() {
        const colors=['#1890FF', '#2FC25B', '#FACC14', 'rgb(223,4,81)']
        return (
            <div style={{height:100,backgroundColor:colors[this.props.index]}}>
                
            </div>
        )
    }
}
