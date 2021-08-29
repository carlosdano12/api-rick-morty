## Estructura del proyecto

```
├── dist
│   ├── application
│   │   ├── data
│   │   ├── services
│   │   └── util
│   ├── configuration
│   ├── domain
│   │   ├── entities
│   │   ├── exceptions
│   │   ├── repository
│   │   ├── response
│   │   └── services
│   ├── infrastructure
│   │   ├── api
│   │   │   ├── middlewares
│   │   │   ├── routers
│   │   │   ├── schemas
│   │   │   └── util
│   │   └── repositories
│   │       └── mongo
│   │           ├── adapter
│   │           └── dao
│   └── util
├── manifests
├── src
│   ├── application
│   │   ├── data
│   │   │   ├── in
│   │   │   └── out
│   │   ├── services
│   │   └── util
│   ├── configuration
│   ├── domain
│   │   ├── entities
│   │   ├── exceptions
│   │   ├── repository
│   │   ├── response
│   │   └── services
│   ├── infrastructure
│   │   ├── api
│   │   │   ├── middlewares
│   │   │   ├── routers
│   │   │   ├── schemas
│   │   │   └── util
│   │   └── repositories
│   │       └── mongo
│   │           ├── adapter
│   │           └── dao
│   └── util
└── test
```

# Recomendaciones

-   ## Gestor de paquetes

        El gestor de paquetes utilizado es [Yarn](https://yarnpkg.com/)

### Ejecutar el proyecto

Solo tienes que ejecutar el comando `yarn dev` y dirigirse a un navegador con la url **http://localhost:8080/api/v1** o **http://localhost:8080/docs**

## Scripts

### test

```zsh
# Se utiliza para ejecutar los tests
yarn test
```

---
