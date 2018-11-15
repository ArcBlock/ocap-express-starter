# ocap-express-starter

![](https://img.shields.io/badge/powered%20by-arcblock-brightgreen.svg)

> OCAP express.js starter template with [@arcblock/ocap-js](https://github.com/ArcBlock/ocap-javascript-sdk/tree/master/packages/ocap-js) integrated, a simple http server that transform OCAP API to rest API

## Usage

```shell
git clone https://github.com/ArcBlock/ocap-express-starter.git
cd ocap-express-starter
yarn dev
```

Then visit `http://localhost:3000/ocap/eth/account/0x1866151577f7bd9bf31c7efb094d11c83bddcd98` to see result.

> If you are from China, use a mirror npm registry maybe better: `yarn --registry=https://registry.npm.taobao.org`

## OCAP SDK Usage Example

- SDK Initialize: [src/libs/ocap.js](./src/libs/ocap.js)
- Query Demo: [src/pages/Query/index.js](./src/pages/Query/index.js)
- Subscription Demo: [src/pages/Subscription/index.js](./src/pages/Subscription/index.js)

## OCAP SDK Documentation

- [SDK Homepage](https://github.com/ArcBlock/ocap-javascript-sdk/tree/master/packages/ocap-js)
- [SDK API Specification](https://github.com/ArcBlock/ocap-javascript-sdk/blob/master/packages/ocap-js/docs/spec.md)
- [Bitcoin API and Response Formats](https://github.com/ArcBlock/ocap-javascript-sdk/blob/master/packages/ocap-js/docs/btc.md)
- [Ethereum API and Response Formats](https://github.com/ArcBlock/ocap-javascript-sdk/blob/master/packages/ocap-js/docs/eth.md)

## Other OCAP Tools

- [OCAP Playground](https://ocap.arcblock.io)
- [OCAP Playbook](https://ocap.arcblock.io)
