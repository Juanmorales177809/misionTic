# misionTic
Ciclo 3

<<<<<<< HEAD
   
    Juan José Basante Navarro ;      email:	juanoser1997@gmail.com
    
    David Andrés Barón Espitia ;     email:	dabaron776@gmail.com
    
    Sebastián Camilo Cogario Ramos ;	email:  cogario0901@gmail.com
    
    Jessica Astrid Mayorga Barrera ; email:	jessicamayorgab@gmail.com
    
    Juan Carlos Morales Guerra ;     email:	mutaharmorales@gmail.com


Proyecto

Para el desarrollo de la aplicación web, tiene que contar con los siguientes modulos:

● Módulo administrador de ventas. Permite ingresar o registrar los pedidos realizados por cada uno de los clientes. Deberá tener un identificador único de venta, almacenar el valor total de la venta y la descripción detallada de la misma y tener una fecha inicial y una fecha futura de pago. Además, deberá contar con un encargado de gestionar dicha venta (responsable).

● Módulo para registrar el estado de la venta. Permite establecer los diferentes estados de la venta a lo largo del ciclo de vida de la línea de producción (creación, embalaje, despacho, ruta, ubicación, recepción).  

● Gestión de vendedores. Permite ingresar la información básica de los vendedores que participan en un negocio de ventas. La información a registrar sería el identificador único del vendedor, el nombre, la especialidad, el número de celular y la fecha de ingreso.

● Gestión de ingreso al sistema de información. El sistema contendrá una pantalla de ingreso con login y password.

Este módulo hará la integración de los demás módulos del sistema para garantizar que los roles de los usuarios se ajusten a las distintas opciones de cada menú o formulario. Se contempla la identificación y el desarrollo de los casos de uso relacionados con la seguridad, así como el análisis de requisitos y el diseño del módulo.

● Gestión de usuarios y roles. Deberá contener un identificador único del usuario, el nombre y el rol en el sistema de información (vendedor, administrador, ejecutivo, operario, director, gerente comercial) con el fin de restringir/otorgar accesos al sistema de información.




Rol Función del rol 

1. Desarrollador  Generar las fuentes para el frontend y el backend 

2. Analista  Levantar las necesidades del negocio para 
convertirlas en requerimientos del sistema  

3. Product Owner Conocer el producto software que se va a elaborar 
en el proyecto  

4. Administrador de BD Gestionar y disponer el motor de base de datos 
para el proyecto de desarrollo de software 

5. Scrum master Gestionar todas las ceremonias y actividades de la 
metodología Scrum, y asignar los recursos a cada 
rol 
=======
Juan Carlos Morales Guerra ;     email:	mutaharmorales@gmail.com

Juan José Basante Navarro ;      email:	juanoser1997@gmail.com

David Andrés Barón Espitia ;     email:	dabaron776@gmail.com

Sebastián Camilo Cogario Ramos ;	email:  cogario0901@gmail.com

Jessica Astrid Mayorga Barrera ; email:	jessicamayorgab@gmail.com

Planteamiento de la situación problema a desarrollar 

Se  propone  analizar,  diseñar  y  construir  una  aplicación  de  software  que  permita realizar el seguimiento de las ventas de un producto y/o servicio en una empresa (cada  equipo  podrá  acordar  con  el  tutor  el  tipo  de  productos  y/o  servicios  que vende la empresa) y hacerles el correspondiente seguimiento.

3. ¿Qué debo alcanzar para desarrollar la aplicación web?

Realizar el seguimiento de las ventas requiere la construcción de unas interfaces de usuario que permitan: el ingreso a la aplicación, registro de productos, maestro 
de productos, registro de venta, maestro de las ventas y maestro de usuarios.
Para que puedas desarrollar el proyecto que se te planteó, la aplicación web debe contar con los siguientes módulos: 

• Gestión de ingreso al sistema de información. El sistema tendrá una interfaz gráfica para el ingreso a la aplicación (registro e inicio de sesión), la autorización 
   de ingreso a la aplicación estaría a cargo de un tercero (Gmail) mediante “Oauth 2”; todos los usuarios que se registran entran en estado pendiente.

• Módulo administrador de productos. El sistema tendrá una interfaz gráfica para el registro de productos y otra para listar, buscar y actualizar productos, 
   cada uno debe contar con los siguientes atributos: Identificador único (Inmutable), descripción, valor unitario y estado (disponible, no disponible).

• Módulo administrador de ventas. El sistema tendrá una interfaz gráfica para el registro de las ventas y otra para listar, buscar y actualizar las ventas realizadas (Actualizar se refiere a establecer los diferentes estados de la venta: En proceso, cancelada o entregada, o editar alguno de sus otros campos modificables). Cada venta debe contar con los siguientes atributos: Identificador único de venta (Inmutable), el valor total de la venta, identificador, cantidad y precio unitario de cada producto, fecha de venta, el documento de identificación y nombre del cliente, y, además, deberá contar con un encargado de gestionar dicha venta (vendedor).

• Gestión de usuarios. Permite ver y actualizar el rol (administrador y vendedor) y el estado del usuario (pendiente/autorizado/no autorizado)
        Precisiones. 

1. Se requiere que el proyecto cumpla con las historias de usuario presentadas en este documento, pero se da libertad para que el equipo de desarrollo 
        pueda acordar con el tutor cualquier funcionalidad adicional.


2. No se requiere módulo de inventario, clientes o uno diferente a los que se presenta anteriormente. 


3. No se requiere contemplar impuestos o valores adicionales en la venta.


4. La palabra usuario es usada en el contexto del proyecto como una persona cualquiera que se registra en su aplicativo web, esta puede ser alguien que no 
  tiene relación con la empresa, por lo que por defecto el usuario tiene estado pendiente y no tiene rol, dicha persona solo podrá ingresar a la aplicación 
  exitosamente cuando el administrador le cambie el estado a autorizado y le asigne un rol. El administrador tiene acceso total a la aplicación, mientras que 
  el vendedor únicamente a las interfaces de usuario correspondientes a la de registro y maestro de ventas. 
>>>>>>> e78c9eb715cbef9867eed9f4f739648a542e2dcb
