# Proyecto Final E-Commerce Deportivo - CoderHouse React JS
## _Camilo Gálvez Vidal_

En este repositorio, se encontrará el código fuente para la tienda e-commerce enfocada en vender productos deportivos. Las características principales que tendrá esta plataforma serán las siguientes:
## Features
- Página de bienvenida
- Productos categorizados
- Página "Mis ordenes" con filtramiento
- Carrito de compra y flujo de checkout
- Fácil navegación y apta para móviles

Para revisar el avance de la plataforma, se puede realizar en https://coderhouse-reactjs.netlify.app. Pero si se desea montar la plataforma en un servidor local, los comandos a ejecutar para dicha instalación son los siguientes:

```sh
npm install
npm start
```

y automaticamente se accederá a http://localhost:3000, donde se encontrará la plataforma ya montada en el servidor local.

## Componentes agregados que fueron recomendados en el proyecto
- **Componentes**
    - Cart
    - CartWidget
    - Item
    - ItemCount
    - ItemDetail
    - ItemList
- **Contenedores**
    - ItemDetailContainer
    - ItemListContainer
    - NavBar
- **Contextos**
    - CartContext

## Componentes agregados de manera autónoma y justificación
- **Componentes**
    - CartElement: vista y lógica para cada uno de los elementos existentes en el carro de compra. Fue agregado para abstraer esté código, del componente *Cart*.
    - OrderDetail: vista y lógica para cada una las ordenes asignadas a un cliente en espécifico. Fue agregado para abstraer esté código, del componente que contendrá la página *Mis ordenes*.
    - OrderList: vista y lógica para el listado de las ordenes asignadas a un cliente. Fue agregado para abstraer esté código, del componente que contendrá la página *Mis ordenes*.
- **Contenedores**
    - HomeContainer: vista y lógica que contiene la página de bienvenida.
    - OrderListContainer: vista y lógica que contendrá las página *Mis ordenes*, en conjunto con sus componentes hijos.
- **Rutas**: Con fines de oprimización de código, se mueven las rutas a un archivo a parte.
- **Servicios**: Se crean dos archivos para la conección con **Firebase**, uno para la configuración de la app *Firestore* y otro con los métodos para acceder a las coleciones y documentos existentes.


## Interacción - Versión Web
**Página Bienvenida**
![Gif Home](https://media.giphy.com/media/PbIxi8sZ2eWG619THD/giphy.gif)

**Productos y categorización**
![Gif items](https://media.giphy.com/media/kKHnmViXTJDG3Xwq5u/giphy.gif)

**Compra exitosa**
![Gif compra exitosa](https://media.giphy.com/media/8YRxb3eZFR7mPvgoJk/giphy.gif)

**Búsqueda de ordenes y filtrado**
![Gif buscar orden](https://media.giphy.com/media/WOoi0nH36y6HqjdkOe/giphy.gif)

**Páginas de error**
![Gif buscar orden](https://media.giphy.com/media/5htRMjX51KRMVuImT8/giphy.gif)

## Interacción - Versión Móvil
**Página Bienvenida y productos**
![Gif Home](https://media.giphy.com/media/zL7gV7DzZe6Ugi5eza/giphy.gif)

**Compra exitosa**
![Gif compra exitosa](https://media.giphy.com/media/QFHmr2QOOeR1chX03O/giphy.gif)

**Búsqueda de ordenes**
![Gif buscar orden](https://media.giphy.com/media/4LMbSESrgwnUiNfqGN/giphy.gif)

**Página de error**
![Gif buscar orden](https://media.giphy.com/media/VkoadouH5Bks6dTVUd/giphy.gif)

## Versiones

| Versiones | Features | Fecha Entrega 
| ------ | ------ | ------ | 
| 1.0 | Se desarrolló lógica para componentes item, catalogo y navbar. Se generá routing para los componentes ya desarrollados| 25-03-2021 |
| 2.0 | Se integra con Firebase, para la obtención de datos. Se agregá página de "Mis ordenes" y página de bienvenida. Se agrega carro de compra con finalización de checkout | 29-04-2021 |

## Contacto

Ante cualquier inquietud acerca del repositorio y su contenido, me pueden contactar a mi [E-mail][E-mail] o a mi contacto en [Slack][Slack].

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [E-mail]: <camilogalvezv@gmail.com>
   [Slack]: <@Camilo Gálvez>