### Storybook doesn't work

```bash
yarn storybook
```

This makes infinite build loop. I guess the output is also input, triggering rebuild?


### These work

Run dev:

```bash
yarn start
```

Build prod:

```bash
yarn build
```

Run prod: (after build)

```bash
yarn prod
```

Analyze production bundle sizes:

```bash
yarn analyze
```

Run with [React Profiler](https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html):

```bash
yarn profile
```

Check Packages for duplicates or circular dependencies:

```bash
yarn pkgcheck
```
