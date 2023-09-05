import ItemCount from "../ItemCount/ItemCount";
const ItemDetail = ({ producto }) => {
        // Verificar si producto es null antes de acceder a sus propiedades
        if (producto === null) {
          return null; // O cualquier otro mensaje o componente de carga
        }

        return (
          <div>
            <img src={producto.image} alt={producto.title} />
            <h2>{producto.title}</h2>
            <p>${producto.price}</p>
            <p>{producto.description}</p>
            <ItemCount />
          </div>
        );
      };



        export default ItemDetail