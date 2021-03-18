import React, { Component } from 'react'
import { ItemCount } from './Item/ItemCount'

export class ItemListContainer extends Component {
    render() {
        return (
            <div>
                <p>{this.props.greetings}</p>
                <ItemCount stock="10" initial="1" />
            </div>
        )
    }
}

export default ItemListContainer
