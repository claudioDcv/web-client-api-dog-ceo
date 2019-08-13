# Cliente para api dog.ceo
 
## Features
- permite buscar por multiples razas
- permite buscar por sub razas
- concatena los resultados
- se despliegan en una lista de imágenes
- es un cliente adaptativo
 
## Iniciar programa
- clonar proyecto: `git clone https://github.com/claudioDcv/web-client-api-dog-ceo.git test_proj`
- ingresar en directorio `cd test_proj`
- instalar dependencias `npm install` o `yarn`
- iniciar proyecto `npm start` o `yarn start`
- copiar archivo de variables de ambiente de ejemplo `cp .env.example .env`
- configurar variables de ambiente en `./.env`
 
![https://github.com/claudioDcv/web-client-api-dog-ceo/blob/develop/example01.PNG](https://github.com/claudioDcv/web-client-api-dog-ceo/blob/develop/example01.PNG)
 
La intención de este cliente web es permitir buscar y filtrar perros ya sea por su raza y subraza inclusive
 
## Librerías:
- React JS
- Bootstrap 4
- Reactstrap
 
## Justificaciones
 
### Bootstrap 4
Se elige la utilización de Bootstrap 4, puesto que:
- Actualmente es el framework css, más extendido en el mercado
- ya va en la versión 4 y tiene mucho camino recorrido donde se ha pulido y vuelto más organizado
- su grilla de 12 columnas lo hace ideal para sitios de todo tipo
- en conjunto con librerías como Reactstrap permite codear un código con un alto enfoque semántico
- posee gran cantidad de helpers para realizar tareas repetitivas de manera sencilla
- tiene una amplia documentación oficial
- tiene cdn con lo que de ser necesario se puede externalizar los SCRIPTs y CSSs obteniendo la velocidad de carga gracias al cache del cdn
 
### React JS
Se elige la utilización de React, puesto que:
- el cliente no para consumir la api, no requiere una gran infra a nivel de software para mostrar la información, por tanto se eligió una librería solo para la vista. Con esto dejamos fuera a los framework que nos ofrecen herramientas que para este menester no se requieren
- La comunidad de react es más grande y activa, por lo que mantener un software creado con esta librería, permite en el mediano y largo plazo tener desarrolladores que puedan mantener el programa
- su curva de aprendizaje es baja, puesto que al ser solo responsable de la vista, la lógica recae en JS, de esta manera un desarrollador JS, podría asumir la mantención y adición de nuevos features en poco tiempo (1 semana es lo que dicta la experiencia)
- Está basado en estándares web
- La gran comunidad permite tener librerías para casi cualquier funcionalidad
- Hace uso de la programación funcional y la promueve, logrando componentes menos complejos
- tiene cdn con lo que de ser necesario se puede externalizar los SCRIPTs obteniendo la velocidad de carga gracias al cache del cdn
 

