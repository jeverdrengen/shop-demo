import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import Button from '../form/button';
import './collection-item.styles.scss'


const CollectionItem = ({item, addItem}) => {
    const { name, price, imageUrl } = item;
    return (
        <div 
            className="collection-item"
            //onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button onClick={() => addItem(item)} type="button" inverted>Add to cart</Button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
   addItem: item => dispatch(addItem(item)) 
})

export default connect(null, mapDispatchToProps)(CollectionItem);