# ast-challenge

## setup

```
yarn install
```

## run tests

```
yarn test:watch
```

## AST -> TS example

look inside of `__tests__/pure.test.ts` to see how to make ASTs with babel.

## TS -> AST example

edit `./scripts/fixture.ts`, and then run

```
yarn test:ast
```

then, look at the `./scripts/test-output.json` for the result

# challenge

Convert the snippet below into a function:

```ts
export function useSg721AllTokensQuery<TData = AllTokensResponse>({
  client,
  args,
  options
}: Sg721AllTokensQuery<TData>) {
  return useQuery<AllTokensResponse, Error, TData>(["sg721AllTokens", client.contractAddress, JSON.stringify(args)], () => client.allTokens({
    limit: args.limit,
    startAfter: args.startAfter
  }), options);
}
```

after completing, parameterize (meaning make function arguments to make dynamic) the following properties

- [ ] function name (`useSg721AllTokensQuery`)
- [ ] return type (`Sg721AllTokensQuery`)
- [ ] response type (`AllTokensResponse`)

#### bonus

- [ ] function name (`allTokens`)
- [ ] arguments (`limit`, `startAfter`)
