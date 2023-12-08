import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  productos: any[] = [];
  nuevoProducto: any = {};
  mostrarFormulario = false;
  mostrarSpinner = false;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(): void {
    this.mostrarOcultarSpinner(true);

    this.http.get<any[]>('http://localhost:3000/productos')
      .subscribe(
        response => {
          this.productos = response;
          this.mostrarOcultarSpinner(false);
        },
        error => {
          console.log('Error al obtener los productos:', error);
          this.mostrarOcultarSpinner(false);
        }
      );
  }

  carrito(equipo: any) {
    this.productos.push(this.nuevoProducto);
    this.enviarProductoAPIDB(this.nuevoProducto);
  }

  //Para carrito

  enviarProductoAPIDB(producto: any): void {
    this.mostrarOcultarSpinner(true);
    this.http.post('https://api-firebase-eight.vercel.app/postProductos', producto)
      .subscribe(
        response => {
          console.log('Producto agregado a la base de datos:', response);
          this.router.navigate(['/productos']);
          this.mostrarOcultarSpinner(false);
          this.mostrarFormulario = false;
        },
        error => {
          console.log('Error al agregar el producto a la base de datos:', error);
          this.mostrarOcultarSpinner(false);
          this.mostrarFormulario = false;
        }
      );
  }

  mostrarOcultarSpinner(mostrar: boolean) {
    this.mostrarSpinner = mostrar;
  }
} {

}
