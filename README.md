# SDAW_9512

**Alumno:** Pablo Gómez Sánchez 
**Repositorio:** SDAW_9512

## Descripción
Proyecto de ejemplo para la práctica de Git y GitHub. Contiene una pequeña app web con un botón que muestra "Hola Pablo Gómez Sánchez" y un servidor Node.js con Express.

## Estructura de ficheros
```
/SDAW_9512
├── index.html
├── script.js
├── package.json
├── server.js
├── README.md
└── .gitignore
```

## Instrucciones para poder ejecutar localmente el repositorio
1. Reemplazaremos `XXXX` por las últimas 4 cifras de mi NRE en el nombre de la carpeta y en este README.
2. Reemplazaremos `[TU_NOMBRE_AQUI]` por mi nombre completo en el `README.md` y en `package.json`.
3. En la terminal pondremos los siguientes comandos:
   ```bash
   cd SDAW_9512
   npm install
   npm start
   ```
4. Abrir `http://localhost:3000` en mi navegador y pulsar el botón.

<!-- Evidentemente no voy a usar datos personales en los ejemplos aquí en el README -->

## Flujo de trabajo Git
1. Inicializar el repositorio local:
   ```bash
   git init
   git config user.name "Usuario"
   git config user.email "correodeprueba@gmail.com"
   git add .
   git commit -m "Inicial: estructura base del proyecto"
   ```
2. Crear el repositorio remoto en GitHub llamado `SDAW_9512` y conectarlo con el local:
   ```bash
   git remote add origin https://github.com/miusuario/SDAW_9512.git 
   git branch -M main
   git push -u origin main

   *Si tienes algún problema con el `push`, haz un `pull origin main --rebase` 
   para poder estar perfectamente sincronizados entre si los 2 repositorios, 
   dejando así un historial de `commits` más limpio.*
   ```
3. Gestión de versiones:
   ```bash
   git add README.md
   git commit -m "Mejoras en README: explicación de cómo ejecutar"
   git push
   ```
   
   Ahora hasta el momento lo que hemos hecho (como se puede observar arriba), ha sido la inicialización del repositorio local, la creación del remoto, y la vinculación entre ellos. Todo eso está registrado en los comandos que hay arriba. Ahora procederemos con el control de versiones, como por ejemplo creando un `commit` nuevo de
   la edición de este fichero con los comandos nuevos y esta explicación.

   <br>

4. Creando ramas de trabajo:
   ```bash
   git checkout -b rama1_PabloGomez
   git add README.md
   git commit -m "rama1: añadir explicación de comandos Git"
   git push -u origin rama1_PabloGomez
   
   - `git init` : Inicializa un repositorio Git local.
   - `git add <fichero>` : Añade cambios al área de staging.
   - `git commit -m "mensaje"` : Guarda un snapshot en el historial.
   - `git branch <nombre>` : Crea una rama nueva.
   - `git checkout <rama>` : Cambia de rama.
   - `git merge <rama>` : Fusiona una rama en la actual.
   - `git push` : Envía commits al repositorio remoto.
   - `git pull` : Trae y fusiona cambios del remoto.
   ```

   Aquí lo que estamos haciendo es la creación de ramas y trabajar desde ella creando cambios y subiéndolos al repositorio remoto para poder reflejar el trabajo de ambas en el historial de `commits` del repositorio remoto.

   <br>

   ```bash
   git checkout main
   git checkout -b rama2_PabloGomez
   git add README.md git_log_oneline.txt
   git commit -m "rama2: añadir git log --oneline"
   git push -u origin rama2_PabloGomez
   ```

   Aquí podemos leer el contenido del archivo git_log_oneline.txt:

   <br>

   ```bash
   746deda Merge pull request #1 from pablogmsz/rama1_PabloGomez
   4c32f9e rama1: añadir explicación de comandos Git
   4ebf337 Mejoras en README: explicación de cómo ejecutar
   073334e Inicial: estructura base del proyecto
   a803742 Initial commit
   ```