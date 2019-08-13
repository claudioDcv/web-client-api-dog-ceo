# Cliente para api dog.ceo

## Features
- permite buscar por multiples razas
- permite buscar por sub razas
- concatena los resultados
- se despliegan en una lista de imagenes
- es un cliente adaptativo

![https://github.com/claudioDcv/web-client-api-dog-ceo/blob/develop/example01.PNG](https://github.com/claudioDcv/web-client-api-dog-ceo/blob/develop/example01.PNG)

La intencion de este cliente web es permitir buscar y filtrar perros ya sea por su raza y subraza inclusive

## Librerias:
- React JS
- Bootstrap 4
- Reactstrap

## Justificaciones

### Bootstrap 4
Se elige la utilizacion de Bootstrap 4, puesto que:
- Actualmente es el framework css, mas extendido en el mercado
- ya va en la version 4 y tiene mucho camino recorrido donde se ha pulido y vuelto mas organizado
- su grilla de 12 columnas lo hace ideal para sitios de todo tipo
- en conjunto con librerias como Reactstrap permite codear un codigo con un alto enfoque semantico
- posee gran cantidad de helpers para realizar tareas repetitivas de manera sencilla
- tiene una amplia documentacion oficial
- tiene cdn con lo que de ser necesario se puede externalizar los SCRIPTs y CSSs obteniendo la velocidad de carga gracias al cache del cdn

### React JS
Se elige la utilizacion de React, puesto que:
- el cliente no para consumir la api, no requiere una gran infra a nivel de software para mostrar la informacion, por tanto se eligio una libreria solo para la vista. Con esto dejamos fuera a los framework que nos ofrecen heramientas que para este menester no se requieren
- La comunidad de react es mas grande y activa, por lo que mantener un software creado con esta libreria, permite en el mediano y largo plazo tener desarrolladores que puedan mantener el programa
- su curva de aprendizaje es baja, puesto que al ser solo responsable de la vista, la logica recae en JS, de esta manera un desarrollador JS, podria asumir la mantencion y adicion de nuevos features en poco tiempo (1 semana es lo que dicta la experiencia)
- Esta basado en estandares web
- La gran comunidad permite tener librerias para casi cualquier funcionalidad
- Hace uso de la programacion funcional y la promueve, logrando componentes menos complejos
- tiene cdn con lo que de ser necesario se puede externalizar los SCRIPTs obteniendo la velocidad de carga gracias al cache del cdn
