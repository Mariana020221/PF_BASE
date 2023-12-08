import { Component } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  productos = [ {nombre: 'Producto 1', precio: 10, cantidad: 1}, ];

  eliminarProducto(index: number) { this.productos.splice(index, 1); }

  realizarCompra() { // Aquí puedes agregar el código para realizar la compra, como enviar los datos del carrito al servidor alert('Compra realizada'); }
  
  }
}
