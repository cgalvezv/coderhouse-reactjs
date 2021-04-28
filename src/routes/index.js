import HomeContainer from '../containers/HomeContainer/HomeContainer'
import ItemListContainer from '../containers/ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../containers/ItemDetailContainer/ItemDetailContainer'
import OrderListContainer from '../containers/OrderListContainer/OrderListContainer'
import Cart from '../components/Cart/Cart'
import { ResultPage } from '../utils';

const routes = [
    {
        path: '/',
        exact: true,
        component: HomeContainer
    },
    {
        path: '/orders',
        exact: true,
        component: OrderListContainer
    },
    {
        path: '/category',
        exact: true,
        component: ItemListContainer
    },
    {
        path: '/category/:categoryId',
        exact: true,
        component: ItemListContainer
    },
    {
        path: '/category/:categoryId/no-results',
        exact: false,
        component: () => <ResultPage 
                            titleText="No existen elementos para esta categoría"
                            buttonText="Volver al Home"
                            redirectPath="/"
                            useErrorIcon={true} />
    },
    {
        path: '/item/:itemId',
        exact: true,
        component: ItemDetailContainer
    },
    {
        path: '/item/:itemId/no-exists',
        exact: false,
        component: () => <ResultPage 
                            titleText="No existen productos con este código identificador"
                            buttonText="Volver al Home"
                            redirectPath="/"
                            useErrorIcon={true} />
    },
    {
        path: '/cart',
        exact: true,
        component: Cart
    },
    {
        path: '/cart/finished/:orderId',
        exact: false,
        component: () => <ResultPage 
                            titleText="Compra finalizada exitosamente"
                            buttonText="Volver al Home"
                            redirectPath="/"
                            useSuccessfullyIcon={true} />
    },
    {
        path: '*',
        exact: true,
        component: () => <ResultPage 
                            titleText="Página no existente"
                            buttonText="Volver al Home"
                            redirectPath="/"
                            useErrorIcon={true} />
    },
];

export default routes;