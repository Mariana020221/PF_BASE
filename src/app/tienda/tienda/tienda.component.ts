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

    this.http.get<any[]>('http://172.16.113.56:/productos')
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
    localStorage.setItem('productos', JSON.stringify(this.productos));
  }

  mostrarOcultarSpinner(mostrar: boolean) {
    this.mostrarSpinner = mostrar;
  }
} {

}
