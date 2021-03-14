import React, { Component } from 'react'

export class ItemListContainer extends Component {
    render() {
        return (
            <div>
                <p>{this.props.greetings}</p>
            </div>
        )
    }
}

export default ItemListContainer
