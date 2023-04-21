Fri Apr 21 07:15:57 AM EDT 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       4.6Gi       2.3Gi       888Mi       8.4Gi       9.5Gi
Swap:          8.0Gi       1.4Gi       6.6Gi
System Storage
656M	.
```
```bash
yarn run v1.22.19
$ ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 16.0.0-rc.1
Node: 18.16.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.0.0-rc.2
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1600.0-rc.1
@angular-devkit/build-angular   16.0.0-rc.1
@angular-devkit/core            16.0.0-rc.1
@angular-devkit/schematics      16.0.0-rc.1
@angular/cdk                    16.0.0-rc.1
@angular/cli                    16.0.0-rc.1
@angular/material               16.0.0-rc.1
@schematics/angular             16.0.0-rc.1
rxjs                            7.8.0
typescript                      5.0.4
    
Done in 0.59s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.37s.
```
Latest version:     1.0.30001481
Installed version:  1.0.30001481
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001481
Installed version:  1.0.30001481
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.0.0-rc.1/angular-webpack/f209d09ec93b6946de6b5d0eabbc0e0bdb48bd34.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.0.0-rc.1/angular-webpack/f209d09ec93b6946de6b5d0eabbc0e0bdb48bd34/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 2331.1070760000002 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
asset main.js 305 KiB {179} [emitted] (name: main)
asset styles.css 104 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 306 KiB = runtime.js 912 bytes main.js 305 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 105 KiB = runtime.js 912 bytes styles.css 104 KiB
chunk {179} (runtime: runtime) main.js (main) 2.54 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2022/init.mjs + 1 modules [564] 38 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 112 modules [909] 2.5 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [583] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    601 ms (resolving: 37 ms, restoring: 1 ms, integration: 0 ms, building: 563 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 114 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 114 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [554] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    804 ms (resolving: 33 ms, restoring: 1 ms, integration: 0 ms, building: 770 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    716 ms (resolving: 34 ms, restoring: 1 ms, integration: 0 ms, building: 681 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.437406 ms
<t> runtime requirements.chunks: 0.417832 ms
<t> runtime requirements.entries: 2.05025 ms
<t> runtime requirements.modules: 0.098717 ms
<t> runtime requirements.chunks: 0.020113 ms
<t> runtime requirements.entries: 0.139334 ms
<t> finish module profiles: 7.430388 ms
<t> compute affected modules: 0.00508 ms
<t> finish modules: 14.728506 ms
<t> report dependency errors and warnings: 4.198547 ms
<t> optimize dependencies: 12.832432 ms
<t> create chunks: 3.611613 ms
<t> compute affected modules with chunk graph: 0.004786 ms
<t> optimize: 28.122775 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 7.524168 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 474.330181 ms
<t> runtime requirements.modules: 0.27935 ms
<t> runtime requirements.chunks: 0.084798 ms
<t> runtime requirements.entries: 0.503606 ms
<t> runtime requirements: 1.078006 ms
<t> hashing: initialize hash: 0.008645 ms
<t> hashing: sort chunks: 0.059175 ms
<t> hashing: hash runtime modules: 1.091892 ms
<t> hashing: hash chunks: 1.421416 ms
<t> hashing: hash digest: 0.043661 ms
<t> hashing: process full hash modules: 0.166167 ms
<t> hashing: 2.908682 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.068262 ms
<t> module assets: 0.173347 ms
<t> create chunk assets: 3.101187 ms
<t> process assets: 8217.084239 ms

LOG from webpack.Compiler
<t> make hook: 3340.961005 ms
<t> finish make hook: 0.099336 ms
<t> finish compilation: 26.393272 ms
<t> seal compilation: 8752.808463 ms
<t> afterCompile hook: 0.178126 ms
<t> emitAssets: 8.31022 ms
<t> emitRecords: 0.101704 ms
<t> done hook: 234.525085 ms
<t> beginIdle: 0.981953 ms

LOG from webpack.Compilation.ModuleProfile
     | 70 ms (parallelism 3.4) resolve to new modules > ./src/main.ts
     | 34 ms (parallelism 2) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 58 ms (parallelism 8.3) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
    797 ms resolve to new modules
     | 51 ms (parallelism 8.6) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    73 ms resolve to existing modules
     |  | 145 ms (parallelism 5.3) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 145 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 118 ms (parallelism 5.8) build modules > ./src/styles.scss?ngGlobalStyle
     | 118 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 113 ms (parallelism 5.8) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 116 ms (parallelism 2.1) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 45 ms (parallelism 5.9) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 66 ms (parallelism 7.9) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 46 ms (parallelism 6) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 43 ms (parallelism 6.1) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 59 ms (parallelism 11) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 56 ms (parallelism 10.9) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 40 ms (parallelism 10.9) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 61 ms (parallelism 12.1) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 61 ms (parallelism 12.2) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 59 ms (parallelism 11.8) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 59 ms (parallelism 11.8) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 61 ms (parallelism 12.3) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     | 922 ms build modules > 21 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 91 ms (parallelism 6.2) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 61 ms (parallelism 12.4) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 61 ms (parallelism 12.3) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     | 504 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 73 ms (parallelism 6.4) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 73 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 186 ms (parallelism 4.7) build modules > ./src/main.ts
     | 218 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i> 2009 ms build modules
+ 10 hidden lines

LOG from webpack.ResolverCachePlugin
    32% really resolved (554 real resolves with 0 cached but invalid, 1173 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.054948 ms
<t> figure out provided exports: 8.550269 ms
    94% of exports of modules have been determined (15 no declared exports, 256 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 1.591007 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 9.254128 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 7.417572 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.468703 ms
<t> trace exports usage in graph: 4.61267 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.723055 ms
<t> visitModules: visiting: 2.537278 ms
    262 queue items processed (120 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.624732 ms
<t> connectChunkGroups: 0.002352 ms
<t> cleanup: 0.001323 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.031953 ms
<t> modules: 2.391736 ms
<t> queue: 0.004316 ms
<t> maxSize: 0.032705 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.990466 ms
<t> sort relevant modules: 0.122727 ms
<t> find modules to concatenate: 7.60799 ms
<t> sort concat configurations: 0.098933 ms
<t> create concatenated modules: 6.225955 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 276.884904 ms
<t> optimize asset: polyfills.js: 756.071407 ms
<t> optimize asset: main.js: 7488.042125 ms
<t> optimize js assets: 7584.809665 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 14.908825 ms
<t> optimize css assets: 28.45667 ms

LOG from webpack.FileSystemInfo
    813 new snapshots created
    0% root snapshot uncached (0 / 1173)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 111 timestamps 19 hashes 19 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/12) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3371/3999) entries shared via 2 shared snapshots (551 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 60% (186/309) entries shared via 8 shared snapshots (21 times referenced)
    Managed items info in cache: 78 items
    Managed items snapshot optimization: 22% (260/1170) entries shared via 12 shared snapshots (50 times referenced)
    Managed files snapshot optimization: 79% (3309/4170) entries shared via 183 shared snapshots (752 times referenced)
    Managed missing snapshot optimization: 89% (3984/4469) entries shared via 193 shared snapshots (776 times referenced)

2023-04-21 07:16:50: webpack 5.79.0 compiled in 14440 ms (b4779c0333f2a209)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 782.493818 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 37.696457 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1112 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.139202 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 2.379551 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.881218 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 3.079329 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/http.mjs': 1.212808 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/a11y.mjs': 1.034785 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 1.206333 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.708083 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators/endWith.js': 1.006564 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/observable/innerFrom.js': 1.705425 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'FlagDependencyExportsPlugin|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 2.59865 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|82b812f18d8326f6|runtime': 10.601256 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 5.515207 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 234.972231 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1112 items, 1 files, 38 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 305.27 kB |                78.58 kB
styles.css          | styles        | 104.38 kB |                 9.48 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 443.55 kB |                99.26 kB

Build at: 2023-04-21T11:16:52.333Z - Hash: b4779c0333f2a209 - Time: 16582ms
Done in 18.65s.
```
Fri Apr 21 07:16:53 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.0
info New version: 0.0.1
Done in 0.16s.
