[![Board Status](https://dev.azure.com/carlosdano120234/c29e3ff7-57bf-42c9-9c33-7398044af7f3/18e63e8d-0773-4488-970f-27ed31e30997/_apis/work/boardbadge/56a711fd-1cd0-463b-8d41-dd790a5b56ef)](https://dev.azure.com/carlosdano120234/c29e3ff7-57bf-42c9-9c33-7398044af7f3/_boards/board/t/18e63e8d-0773-4488-970f-27ed31e30997/Microsoft.RequirementCategory)
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
