import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  // Declaración de tus variables
  username: string = '';
  password: string = '';
  loginFailed: boolean = false;
  apellido1: string = '';
  apellido2: string = '';
  correo: string = '';

  enviarSolicitudHTTP(): void {
    const url: string = 'http://172.16.114.96:5000/crear_archivo';

    // Datos a enviar en el cuerpo de la solicitud
    const datos = {
      nombre_archivo: 'usuarios.json',
      contenido_archivo: {
        nombre: this.username,
        apellido1: this.apellido1,
        apellido2: this.apellido2,
        correo: this.correo
      }
    };

    // Configurar la solicitud
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error al crear el archivo. Código de respuesta: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log(data.mensaje); // Manejar la respuesta del servidor
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  enviarSolicitudHTTPAuth(): void {
    const url: string = 'http://172.16.114.96:5000/crear_archivo';

    // Datos a enviar en el cuerpo de la solicitud
    const datos = {
      nombre_archivo: 'auth.json',
      contenido_archivo: {
        correo: this.correo, 
        contra: this.password
      }
    };

    // Configurar la solicitud
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error al crear el archivo. Código de respuesta: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log(data.mensaje); // Manejar la respuesta del servidor
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  enviarDatos(): void {
    this.enviarSolicitudHTTP();
    this.enviarSolicitudHTTPAuth();
    // Aquí puedes añadir más lógica si es necesaria después de enviar la solicitud
  }

  // Función para mostrar la tabla de usuarios
  mostrarTablaUsuarios(data: any): void {
    // Aquí se puede implementar la lógica para mostrar la tabla de usuarios
    console.log('Mostrar tabla de usuarios:', data);
  }
}
