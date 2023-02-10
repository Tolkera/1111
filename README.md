# 2123

The project uses Vue3 Composition API. The test coverage is exemplary, only a couple of components have tests.

## Functionality

The project uses 2 dynamic endpoints for Posts and Todos. 
Since Todos endpoint returns the dynamic user ids (they change according to some interval) and the requirements didn't include creating a todo, in order to ensure that there are always todos available, the user id had to be mocked.

## Deployment

The project is deployed to Github pages https://tolkera.github.io/1111/. 
A simple Github Actions Pipeline is used to run the test https://github.com/Tolkera/1111/actions

## Running locally

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Run Unit Tests

```sh
npm run test:unit
```