# ast-challenge

Welcome! We're excited that you're interested in working with us, we hope you enjoy this challenge :)
## Instructions

1. create a cloned version of this repo (don't fork it publicly)
2. keep the original git history and only add new commits to your clone
3. make sure to include all of the [deliverables](#deliverables) mentioned in [challenge](#challenge)

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

Take the input and output below, and make a function that can generate this code using babel ASTs:

### function input

```json
  {
    "Pools": {
        "requestType": "QueryPoolsRequest",
        "responseType": "QueryPoolsResponse"
    }
  }
```

### function output

```ts
export interface UsePoolsQuery<TData> extends ReactQueryParams<QueryPoolsResponse, TData> {
    request?: QueryPoolsRequest;
}
const usePools = <TData = QueryPoolsResponse,>({
    request,
    options
}: UsePoolsQuery<TData>) => {
    return useQuery<QueryPoolsResponse, Error, TData>(["poolsQuery", request], () => {
        if (!queryService) throw new Error("Query Service not initialized");
        return queryService.pools(request);
    }, options);
};
```

### HINTS

1. [example for converting AST to Typescript](#ast---ts-example)
2. [example for converting Typescript to AST](#ts---ast-example)

#### deliverables

You'll be writing a function to generate code, and we'll be writing a test as well as the code:

- [ ] create a new test, call it `ast-challenge.test.ts` inside of [`__tests__`](./__tests__/) folder
- [ ] write code for the creation of the AST inside of `src/index.ts`
- [ ] write code for the converting AST into Typesript code inside of `__tests__/ast-challenge.test.ts`
- [ ] use `expect(resultingCode).toMatchSnapshot()` to store output of code generation

After completing the function, parameterize (meaning make function arguments to make dynamic) the following properties, so that a developer can use this method to generate many of these hooks. Be sure to include parameterization of these fields:

- [ ] Query interface (`UsePoolsQuery`)
- [ ] hook name (`usePools`)
- [ ] request type (`QueryPoolsRequest`)
- [ ] response type (`QueryPoolsResponse`)
- [ ] queryService method name (`queryService.pools()`)
- [ ] key name  (`poolsQuery`)

#### bonus

- [ ] add a test case in a new test that uses all methods from [`./example-methods.json`](./example-methods.json)
- [ ] in the test case, use `expect(resultingCode).toMatchSnapshot()` and save the snapshot for all the code