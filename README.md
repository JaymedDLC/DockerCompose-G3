# DockerCompose-G3

## Descripción

Este proyecto implementa un ambiente con tres contenedores que ofrecen servicios web distribuidos. El objetivo es tener un proxy que redirija las solicitudes a dos servicios: uno de autenticación y otro de gestión de notas.


## Instrucciones

1. Clona el repositorio:
    ```sh
    git clone https://github.com/JaymedDLC/DockerCompose-G3
    cd proyecto-docker-compose
    ```

2. Construye y levanta los contenedores:
    ```sh
    docker-compose up --build
    ```

3. Accede a los servicios:
    - Proxy: `http://localhost`
    - Servicio de autenticación: `http://localhost/auth`
    - Servicio de notas: `http://localhost/notes`

## Servicios

### Servicio de Autenticación

- **Registro de usuario:**
    ```sh
    POST /signup
    Body: { "username": "usuario", "password": "contraseña" }
    ```

- **Inicio de sesión:**
    ```sh
    POST /login
    Body: { "username": "usuario", "password": "contraseña" }
    ```

### Servicio de Notas

- **Crear nota:**
    ```sh
    POST /notes
    Body: { "student_id": "id", "note": "nota" }
    ```

- **Obtener nota:**
    ```sh
    GET /notes/{student_id}
    ```

- **Actualizar nota:**
    ```sh
    PUT /notes/{student_id}
    Body: { "note": "nota" }
    ```

- **Eliminar nota:**
    ```sh
    DELETE /notes/{student_id}
    ```
