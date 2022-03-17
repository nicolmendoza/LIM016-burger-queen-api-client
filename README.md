# Burger House (API Client)

## Índice

* [1. Burger House](#1-burger-house)
* [2. Descripción](#2-Descripción)
* [3. Diseño de la Interfaz](#3-Diseño-de-la-Interfaz)
* [4. Test](#4-Test)
* [5. PWA](#5-PWA)
* [6. Fuentes](#6-Fuentes)
* [7. Autores](#7-Autores)

***

## 1. Burger House

### Descripción del proyecto
Burger House es una aplicación responsive diseñada para un pequeño restaurante de hamburguesas en crecimiento que necesita un sistema con el que puedan tomar pedidos y enviarlos a la cocina para que se preparen de manera ordenada y eficiente.
Cuenta con un sistema de autenticación que permite tener diferentes vistas y funciones dependiendo del rol del usuario.

Este proyecto es una aplicación web progresiva(PWA) que funciona sin conexión, que se integra con una  REST API (creación propia) y que utiliza React como Librería, Style Component para los estilos, React Testing Library para el testing y Figma para el prototipado.

### Roles y Vistas
La aplicación y su desarrollo se hicieron basándonos en los requerimientos e historias de usuario planteadas, cada usuario dependiendo de su rol, tendrá acceso a ciertas rutas. Existen tres diferentes tipos de roles, Administradxr, cocinerx y meserx, los cuales se describen a continuación:


Rol Mesero:
Visualización de sección de creación de ordenes, donde tendrá visualizacion de todos los productos y podrá realizar las órdenes. 
Visualización de ordenes (vista Mesero), donde tendrá visualización de todas las ordenes y podrá cancelar y entregar ordenes.
Visualización de Perfil, donde podrá visualizar su información personal (correo,contraseña,nombre,imagen).

Rol Cocinero:
Visualización de ordenes (vista Chef), donde tendrá visualización de las ordenes pendientes y podrá marcarlas como listas.
Visualización de Perfil, donde podrá visualizar su información personal (correo,contraseña,nombre,imagen).


Rol Administrador:
Visualización de Dahsboard, donde encontrará información acerca de las ordenes, ganacias, clientes y estadisiticas.
Visualización de sección de creación de ordenes.
Visualización de ordenes (vista Chef y Mesero).
Visualización de sección de configuraciones, donde podrá administrar usuarios, productos. 
Visualización de Perfil, donde podrá visualizar su información personal (correo,contraseña,nombre,imagen).

## 2. Descripción



## 4. Test
Se realizaron los test utilizando React Testing Library.
<div align=center><img src="./burger-queen/src/img/test1.JPG" width=60%></div>
<div align=center><img src="./burger-queen/src/img/test2.JPG" width=40%></div>

## 5. PWA
<div align=center><img src="./burger-queen/src/img/pwa.JPG" width=70%></div>

## 6. Fuentes
### Herramientas Utilizadas
* [React](https://reactjs.org/)
* [PWA](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/?hl=es)
* [Service Workers](https://developer.mozilla.org/es/docs/Web/API/Service_Worker_API/Using_Service_Workers)