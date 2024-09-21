## 1. Add .npmrc

- Add `.npmrc` to the root

## 2. Update package.json

## 3. Generate auth token in the Github

- User -> Setting -> Developer Settings -> Personal access tokens -> Tokens (classic) -> Generate new token
- At the New personal access token, select `write:packages`. After generating, copy the token

## 4. Login to Github via CLI

```
  npm login --scope=@NAMESPACE --auth-type=legacy --registry=https://npm.pkg.github.com
  username: github username
  password: auth token
```

## 5. Generate build workflow

- Go to `Github -> Action -> Publish Node.js Package to GitHub Packages` to generate and commit the workflow
- Make sure the `files, main, module and types` props are available on the `package.json`

```
  "main": "dist/cjs/index.js",
  "module": "dist/esm/index.js",
  "types": "dist/index.d.ts",
  "files": [
    "dist"
  ],
```

## 6. Publish

- Change the package version using `npm version <patch>`
- Run `npm publish`
