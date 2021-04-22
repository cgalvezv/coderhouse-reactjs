import { 
    getFirestoreCollection,
    getFirestoreDate,
    getFirestoreBatch
} from '../db/firebase';

export const getItems = () => {
    const itemCollection = getFirestoreCollection('items');
    return itemCollection;
} 

export const getItem = (id) => {
    const itemCollection = getFirestoreCollection('items');
    const item = itemCollection.doc(id)
    return item;
}

export const getCategories = () => {
    const categoriesCollection = getFirestoreCollection('categories');
    return categoriesCollection;
} 

export const addOrder = (order) => {
    const orders = getFirestoreCollection('orders');
    order.date = getFirestoreDate(new Date());
    console.log('Se agregará la siguiente orden');
    console.log(JSON.stringify(order, null, 2));
    return orders.add(order)
}

export const triggerMassiveStockUpdate = (cart) => {
    const batch = getFirestoreBatch();
    for (const cartItem of cart) {
        const docRef = getFirestoreCollection('items').doc(cartItem.item.id);
        batch.update(docRef, {
            stock: cartItem.item.stock - cartItem.quantity
        });
    }
    return batch.commit()
}