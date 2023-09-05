import data from "../data/productos.json";

const pedirProducto = (itemId) => {
  return new Promise((resolve, reject) => {
    if (itemId) {
      // Si se proporciona un itemId, busca y devuelve un producto específico
      const productoEncontrado = data.find((producto) => producto.id === itemId);
      if (productoEncontrado) {
        resolve(productoEncontrado);
      } else {
        reject(new Error("Producto no encontrado"));
      }
    } else {
      // Si no se proporciona un itemId, devuelve todos los productos
      resolve(data);
    }
  });
};

export default pedirProducto;



