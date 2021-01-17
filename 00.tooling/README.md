# TypeScript Tooling in 5 minutes

## install

```sh
$ npm install -g typescript
```

## helloworld

- `greeter.ts`
```ts
function greeter(person) {
  return "Hello, " + person;
}

let user = "Jane User";

document.body.textContent = greeter(user);
```

## compiling

```sh
$ tsc greeter.ts
```


