# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.9.0](https://github.com/fullstacksjs/toolbox/compare/v2.8.4...v2.9.0) (2021-12-09)


### Features

* add pruneNullOrEmpty ([4df7908](https://github.com/fullstacksjs/toolbox/commit/4df7908b2a09a211469a8471ee0d8f675f7b3011))
* **test:** add tests for pruneNullOrEmpty ([a47022b](https://github.com/fullstacksjs/toolbox/commit/a47022b719932c3833f667116221556381ec8530))

### [2.8.2](https://github.com/fullstacksjs/toolbox/compare/v2.8.1...v2.8.2) (2021-11-09)


### Bug Fixes

* add lib to files ([0596c5c](https://github.com/fullstacksjs/toolbox/commit/0596c5c4bf03ab510613e1c442a7c826cbb1a956))

## [2.8.0](https://github.com/fullstacksjs/utils/compare/v2.7.2...v2.8.0) (2021-11-08)


### Features

* add getRandom ([5ab299c](https://github.com/fullstacksjs/utils/commit/5ab299c18194b0a616b801d9d75f3532ca8fc56e))
* **array:** add shuffle ([8d84332](https://github.com/fullstacksjs/utils/commit/8d843328c08cfbd9785302889681030bb447d3c6))
* **types:** add Predicate type ([90bdfc2](https://github.com/fullstacksjs/utils/commit/90bdfc258be24e32ff1414b1e87a857f187ffeab))


### Bug Fixes

* fix readme formatting ([f5f4ac3](https://github.com/fullstacksjs/utils/commit/f5f4ac359017972d1091b41ba73500b9930708d4))

### [2.7.2](https://github.com/fullstacksjs/utils/compare/v2.7.1...v2.7.2) (2021-11-01)


### Bug Fixes

* **types:** add types from index.js ([6b69341](https://github.com/fullstacksjs/utils/commit/6b693417012fbc386164e1f231918dc252f9c7ff))

### [2.7.1](https://github.com/fullstacksjs/utils/compare/v2.7.0...v2.7.1) (2021-11-01)


### Bug Fixes

* **types:** remove types from index.js ([5c69c86](https://github.com/fullstacksjs/utils/commit/5c69c8630339646411808cda5b90eb7e83cd7210))

## [2.7.0](https://github.com/fullstacksjs/utils/compare/v2.5.0...v2.7.0) (2021-10-29)


### Features

* **guards:** add isNotNull and isTruthy ([4596e2c](https://github.com/fullstacksjs/utils/commit/4596e2c313c9b4846e57246c983438421d6c928a))
* **types:** add CamelCase type ([b6f9e0a](https://github.com/fullstacksjs/utils/commit/b6f9e0adc83647fcd94a1a47ce53314b7956e2d7))

## [2.6.0](https://github.com/fullstacksjs/utils/compare/v2.5.0...v2.6.0) (2021-10-29)


### Features

* **guards:** add isNotNull and isTruthy ([029a037](https://github.com/fullstacksjs/utils/commit/029a037f9088e1069aebb057c0097d6876f00573))

## [2.5.0](https://github.com/fullstacksjs/utils/compare/v2.0.2...v2.5.0) (2021-10-26)


### Bug Fixes

* **fix**: fix casing functions for upper case strings ([5715ad6](https://github.com/fullstacksjs/utils/commit/5715ad620495564e28f783f93bdb7e1d68057ddd))

## [2.4.0](https://github.com/fullstacksjs/utils/compare/v2.0.2...v2.4.0) (2021-10-25)


### Bug Fixes

* **string:** isNullOrEmpty should accept null and undefined as input ([aad82d6](https://github.com/fullstacksjs/utils/commit/aad82d6c7faae7da1c692ec6164ba72a15a42f3b))

## [2.3.0](https://github.com/fullstacksjs/utils/compare/v2.0.2...v2.3.0) (2021-10-19)


### Bug Fixes

* **function:** fix callAll type ([aa2ef41](https://github.com/fullstacksjs/utils/commit/aa2ef41b2e93d9a54988e8400eb74a2865503414))

## [2.2.0](https://github.com/fullstacksjs/utils/compare/v2.0.2...v2.2.0) (2021-10-19)


### Features

* remove getRequiredEnv fallback value ([91768ed](https://github.com/fullstacksjs/utils/commit/91768edfa8bf3beb60ec0c9d0ddf69188b5c4dd9))


### Bug Fixes

* **function:** fix callAll type ([aa2ef41](https://github.com/fullstacksjs/utils/commit/aa2ef41b2e93d9a54988e8400eb74a2865503414))

## [2.1.0](https://github.com/fullstacksjs/utils/compare/v2.0.2...v2.1.0) (2021-10-17)


### Features

* add removeTrailingSlash ([12a88ff](https://github.com/fullstacksjs/utils/commit/12a88ff23bbd77250696dfc6d44105dafc6fcff2))

### [2.0.2](https://github.com/fullstacksjs/utils/compare/v2.0.1...v2.0.2) (2021-10-17)


### Bug Fixes

* configure test runner for es modules ([8489fa3](https://github.com/fullstacksjs/utils/commit/8489fa331945f150424721171105296abad250b6))
* fix esm module resolve issue ([2f8c318](https://github.com/fullstacksjs/utils/commit/2f8c318ceaddecee36b5d32fdcbc5159a1cf2934))

### [2.0.1](https://github.com/fullstacksjs/utils/compare/v2.0.0...v2.0.1) (2021-10-10)

## [2.0.0](https://github.com/fullstacksjs/utils/compare/v1.3.0...v2.0.0) (2021-10-10)


### ⚠ BREAKING CHANGES

* **env:** remove Env.match now use Env.is
* **env:** `env.isDev` and `env.isProd` now works internally with `Env.is`

### Features

* add cspell to check commit message ([5fbc050](https://github.com/fullstacksjs/utils/commit/5fbc050f9c43872bedd698f6c73c2c2b5d693808))
* add exampl for passesMin ([2514b01](https://github.com/fullstacksjs/utils/commit/2514b014da5bdd9a58d7e840f260dfeb0cc7d43d))
* add hasInvalidCasing ([c4efb0a](https://github.com/fullstacksjs/utils/commit/c4efb0acd25a86aa49d20a7f0ef82fd51e5fa0d0))
* add isNullable ([8701c55](https://github.com/fullstacksjs/utils/commit/8701c551922c9275d7368c13ffc161f856629969))
* add passesMin ([faf7ccb](https://github.com/fullstacksjs/utils/commit/faf7ccb49568bea2bb4992e397510b0784070bfb))
* add testRegex and extract regexes in to its own file ([de676db](https://github.com/fullstacksjs/utils/commit/de676db85fad1e93c036d70b53e657eac055935f))
* add throwErr ([c7040b7](https://github.com/fullstacksjs/utils/commit/c7040b75482c881456d2cf28d47dc526db0caace))
* add toSpaceCase and toCamelCase ([1be7e98](https://github.com/fullstacksjs/utils/commit/1be7e9859c3a385145e3c2b9f25ebdbea92a5895))
* **guards:** rename isNullable to isNull ([fecec3e](https://github.com/fullstacksjs/utils/commit/fecec3e75616f8802112d6d72e86cc8b377c61bf))


### Bug Fixes

* add error to index ([f0bd342](https://github.com/fullstacksjs/utils/commit/f0bd342d9ff04d5aee1a4319f8b1cb8903cbdfee))
* **error:** fix error type ([623b702](https://github.com/fullstacksjs/utils/commit/623b7026d0457a6f4d3a966dacabff4e2f836bb7))
* fix and add all case convertor functions ([b1e3f5f](https://github.com/fullstacksjs/utils/commit/b1e3f5f317505f43cb4d3d54ad2d7b03c1082073))
* fix getInitials ([b809f0b](https://github.com/fullstacksjs/utils/commit/b809f0bc167ef03e540c82e1643bde8ccb519002))
* fix regex before testing too ([d170fa1](https://github.com/fullstacksjs/utils/commit/d170fa1285feb29f691184786e39a392f082cbee))
* fix toPascalCase returning lowercases ([efaa708](https://github.com/fullstacksjs/utils/commit/efaa708565269de8d0d925110b15ea0d42740a4f))
* remove debatable test cases ([3c80b4d](https://github.com/fullstacksjs/utils/commit/3c80b4dbf6cb8a0ec030cc52edc72723b4b7f544))
* remove the log ([97d08e6](https://github.com/fullstacksjs/utils/commit/97d08e6854596df16dd1f9ac88af99fae1884c8c))
* rename clrfToLF to clrfToLf ([0f70f62](https://github.com/fullstacksjs/utils/commit/0f70f62941825fecc00f4d23bacbaacc203d958f))
* tokenizer ([d279e94](https://github.com/fullstacksjs/utils/commit/d279e94db9c8cb1e7723c4e42176f12bd1c42659))


### prune

* **env:** remove match api ([b0c9f46](https://github.com/fullstacksjs/utils/commit/b0c9f46131ee53dffe434171ec88418592f8eda9))

## [1.4.0](https://github.com/fullstacksjs/utils/compare/v1.3.0...v1.4.0) (2021-08-30)


### Features

* add toSpaceCase and toCamelCase ([1be7e98](https://github.com/fullstacksjs/utils/commit/1be7e9859c3a385145e3c2b9f25ebdbea92a5895))

## [1.3.0](https://github.com/fullstacksjs/utils/compare/v1.2.1...v1.3.0) (2021-08-10)


### Features

* **array:** add concatNullableArrays ([729c05e](https://github.com/fullstacksjs/utils/commit/729c05e349dabbb4c42ca9edf3c283f0a32f02f4))

### [1.2.1](https://github.com/fullstacksjs/utils/compare/v1.2.0...v1.2.1) (2021-08-01)

## [1.2.0](https://github.com/fullstacksjs/utils/compare/v1.1.0...v1.2.0) (2021-08-01)


### Features

* **function:** add not function ([673b723](https://github.com/fullstacksjs/utils/commit/673b72335320f1669007e582140e89118c9d7142))

## [1.1.0](https://github.com/fullstacksjs/utils/compare/v1.0.1...v1.1.0) (2021-05-27)


### Features

* isNullOrEmpty now accepts array as well ([e9f14fe](https://github.com/fullstacksjs/utils/commit/e9f14fe1eb26c1bcb95a49b303f907e0b4e501c6))

### [0.3.11](https://github.com/frontendmonster/utils/compare/v0.3.10...v0.3.11) (2020-07-06)


### Features

* **number:** add isInRange function ([c92a188](https://github.com/frontendmonster/utils/commit/c92a18863ec877bce4a3363df07b4cd23d69a73c))

### [0.3.10](https://github.com/frontendmonster/utils/compare/v0.3.9...v0.3.10) (2020-07-06)


### Features

* **number:** add toInteger function ([d1badaf](https://github.com/frontendmonster/utils/commit/d1badaf92aec9fcc02343665200a97e7a8484f8e))

### [0.3.9](https://github.com/frontendmonster/utils/compare/v0.3.8...v0.3.9) (2020-06-21)


### Bug Fixes

* **env:** fix env.isProd returns false ([7936e04](https://github.com/frontendmonster/utils/commit/7936e046ecf3fdd44bb20ce38359fa3379e8e1be))

### [0.3.8](https://github.com/frontendmonster/utils/compare/v0.3.7...v0.3.8) (2020-06-16)


### Bug Fixes

* fix es5 module issue ([c02b576](https://github.com/frontendmonster/utils/commit/c02b576425aa8b33fc2a3b5ac6849405c76c2051))

### [0.3.7](https://github.com/frontendmonster/utils/compare/v0.3.6...v0.3.7) (2020-06-16)

### [0.3.6](https://github.com/frontendmonster/utils/compare/v0.3.5...v0.3.6) (2020-06-15)


### Features

* **env:** add env utils ([e5210de](https://github.com/frontendmonster/utils/commit/e5210de7db417934620a2089c4cc530172da4409))

### [0.3.5](https://github.com/frontendmonster/utils/compare/v0.3.4...v0.3.5) (2020-06-09)


### Bug Fixes

* **package:** fix hasDepType issue ([d37c8b2](https://github.com/frontendmonster/utils/commit/d37c8b2744379305bb3847ca83bf2c8f6dd5b6b1))

### [0.3.4](https://github.com/frontendmonster/utils/compare/v0.3.3...v0.3.4) (2020-06-06)


### Bug Fixes

* fix error on missing dep type ([7267dff](https://github.com/frontendmonster/utils/commit/7267dff0f05a36a249227b2096d19958d0a23d4f))

### [0.3.3](https://github.com/frontendmonster/utils/compare/v0.3.2...v0.3.3) (2020-06-06)


### Bug Fixes

* **packages:** fix ifAnyDep typing ([f70cb88](https://github.com/frontendmonster/utils/commit/f70cb880d3da84f43803226d67bd6220cb3b18a4))

### [0.3.2](https://github.com/frontendmonster/utils/compare/v0.3.1...v0.3.2) (2020-06-06)


### Bug Fixes

* **package:** fix Packages api ([6a3d383](https://github.com/frontendmonster/utils/commit/6a3d383db9be5f01622a73cdd7328fb32f004b72))

### [0.3.1](https://github.com/frontendmonster/utils/compare/v0.3.0...v0.3.1) (2020-06-06)

### [0.2.10](https://github.com/frontendmonster/utils/compare/v0.2.9...v0.2.10) (2020-03-03)


### Bug Fixes

* fix randomInt error ([642ed50](https://github.com/frontendmonster/utils/commit/642ed50fa6f9425be119b5bfc46f41da5e5a2b2c))

### [0.2.9](https://github.com/frontendmonster/utils/compare/v0.2.8...v0.2.9) (2020-03-02)

### Bug Fixes

* fix npm commands ([e0dd080](https://github.com/frontendmonster/utils/commit/e0dd0804950432bf16ca776c40534a24ed93d910))

### [0.2.6](https://github.com/frontendmonster/utils/compare/v0.2.5...v0.2.6) (2020-03-02)

### Features

* **function:** add callAll ([e55f141](https://github.com/frontendmonster/utils/commit/e55f1419c2ec84497ca880d32fce578f133c16fb))

### [0.2.5](https://github.com/frontendmonster/utils/compare/v0.2.4...v0.2.5) (2020-01-19)

### Features

* add noop ([176fbd9](https://github.com/frontendmonster/utils/commit/176fbd91aa138a4f3ee748905029d2429abfed0c))

### [0.2.4](https://github.com/frontendmonster/utils/compare/v0.2.3...v0.2.4) (2020-01-19)

### Bug Fixes

* change randomInt max default paramt to Number.MAX_SAFE_INTEGER ([cdd6250](https://github.com/frontendmonster/utils/commit/cdd62508100c538dd6c6c2bffaa19f143d3770dd))

### [0.2.2](https://github.com/frontendmonster/utils/compare/v0.2.1...v0.2.2) (2020-01-19)


### Features

* add randomInt ([477412d](https://github.com/frontendmonster/utils/commit/477412d66aa69559030207a431d9c9545edcba8d))

### [0.0.4](https://github.com/frontendmonster/utils/compare/v0.0.3...v0.0.4) (2019-10-08)

### Features

- add rang and isNullOrEmpty utils ([beb5f73](https://github.com/frontendmonster/utils/commit/beb5f73))
