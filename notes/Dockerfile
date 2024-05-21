# Utiliza una imagen base de Python
FROM python:3.9-slim

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo de requisitos y el código de la aplicación
COPY requirements.txt requirements.txt
COPY app.py app.py

# Instala las dependencias
RUN pip install -r requirements.txt

# Expone el puerto 5000
EXPOSE 5000

# Define el comando de ejecución
CMD ["python", "app.py"]
