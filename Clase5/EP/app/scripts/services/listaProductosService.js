/**
 * Created by aurso on 8/31/16.
 */

angular.module("exeprac1App").service("listaProductosService", function() {
  this.getListaProductos = function() {
    return [
      {
        id: '1',
        sku: '0001',
        nombre: "Producto 1",
        price: 2500
      },
      {
        id: '2',
        sku: '0002',
        nombre: "Producto 2",
        price: 4500
      },
      {
        id: '3',
        sku: '0003',
        nombre: "Producto 3",
        price: 8000
      },
      {
        id: '4',
        sku: '0004',
        nombre: "Producto 4",
        price: 12500
      },
      {
        id: '5',
        sku: '0005',
        nombre: "Producto 5",
        price: 9900
      },
      {
        id: '6',
        sku: '0006',
        nombre: "Producto 6",
        price: 3990
      },
      {
        id: '7',
        sku: '0007',
        nombre: "Producto 7",
        price: 4590
      },
      {
        id: '8',
        sku: '0008',
        nombre: "Producto 8",
        price: 3590
      }
    ]
  }
});
