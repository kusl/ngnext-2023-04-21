Thu Sep 14 11:12:12 AM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.3Gi       3.3Gi       317Mi       9.7Gi        12Gi
Swap:          8.0Gi       1.0Mi       8.0Gi
System Storage
788M	.
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
    

Angular CLI: 16.2.2
Node: 18.17.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.4
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.2
@angular-devkit/build-angular   16.2.2
@angular-devkit/core            16.2.2
@angular-devkit/schematics      16.2.2
@angular/cdk                    16.2.3
@angular/cli                    16.2.2
@angular/material               16.2.3
@schematics/angular             16.2.2
rxjs                            7.8.0
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.57s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.36s.
```
Latest version:     1.0.30001534
Installed version:  1.0.30001534
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001534
Installed version:  1.0.30001534
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.2.2/angular-webpack/6bd67a06726c153ec26a3e03cfdff2b7fda93756.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.2.2/angular-webpack/6bd67a06726c153ec26a3e03cfdff2b7fda93756/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1836.10064 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
asset main.js 339 KiB {179} [emitted] (name: main)
asset styles.css 82.2 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 340 KiB = runtime.js 912 bytes main.js 339 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 83.1 KiB = runtime.js 912 bytes styles.css 82.2 KiB
chunk {179} (runtime: runtime) main.js (main) 2.63 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2022/init.mjs + 1 modules [614] 37.3 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 114 modules [368] 2.6 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    787 ms (resolving: 39 ms, restoring: 1 ms, integration: 0 ms, building: 747 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 84.2 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 84.2 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [554] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    984 ms (resolving: 36 ms, restoring: 0 ms, integration: 0 ms, building: 948 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    894 ms (resolving: 35 ms, restoring: 1 ms, integration: 0 ms, building: 858 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.404721 ms
<t> runtime requirements.chunks: 0.456136 ms
<t> runtime requirements.entries: 1.51987 ms
<t> runtime requirements.modules: 0.02689 ms
<t> runtime requirements.chunks: 0.015451 ms
<t> runtime requirements.entries: 0.125614 ms
<t> finish module profiles: 7.256282 ms
<t> compute affected modules: 0.005173 ms
<t> finish modules: 19.020955 ms
<t> report dependency errors and warnings: 4.387204 ms
<t> optimize dependencies: 11.142039 ms
<t> create chunks: 3.871685 ms
<t> compute affected modules with chunk graph: 0.003739 ms
<t> optimize: 29.385003 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 7.422588 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 555.40859 ms
<t> runtime requirements.modules: 0.192594 ms
<t> runtime requirements.chunks: 0.315704 ms
<t> runtime requirements.entries: 1.028966 ms
<t> runtime requirements: 2.308002 ms
<t> hashing: initialize hash: 0.009238 ms
<t> hashing: sort chunks: 0.098003 ms
<t> hashing: hash runtime modules: 1.381093 ms
<t> hashing: hash chunks: 1.913603 ms
<t> hashing: hash digest: 0.058098 ms
<t> hashing: process full hash modules: 0.135508 ms
<t> hashing: 4.096963 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.054727 ms
<t> module assets: 0.248581 ms
<t> create chunk assets: 4.552981 ms
<t> process assets: 4607.236695 ms

LOG from webpack.Compiler
<t> make hook: 4897.1203590000005 ms
<t> finish make hook: 0.103796 ms
<t> finish compilation: 30.702917 ms
<t> seal compilation: 5227.995101 ms
<t> afterCompile hook: 0.226481 ms
<t> emitAssets: 4.065154 ms
<t> emitRecords: 0.063398 ms
<t> done hook: 139.592324 ms
<t> beginIdle: 0.819432 ms

LOG from webpack.Compilation.ModuleProfile
     | 71 ms (parallelism 3.4) resolve to new modules > ./src/main.ts
     | 31 ms (parallelism 2) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 141 ms (parallelism 9.2) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
    709 ms resolve to new modules
     | 139 ms (parallelism 9.2) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    159 ms resolve to existing modules
     |  | 175 ms (parallelism 5.4) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 175 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 148 ms (parallelism 5.8) build modules > ./src/styles.scss?ngGlobalStyle
     | 148 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 143 ms (parallelism 5.9) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 151 ms (parallelism 1.7) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 141 ms (parallelism 9) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 141 ms (parallelism 9.1) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 148 ms (parallelism 12.2) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 141 ms (parallelism 8.9) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 140 ms (parallelism 8.9) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 141 ms (parallelism 12.5) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 102 ms (parallelism 12) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 98 ms (parallelism 11.9) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 84 ms (parallelism 10) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 95 ms (parallelism 11.7) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 101 ms (parallelism 12) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 103 ms (parallelism 12.3) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 102 ms (parallelism 12) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     | 1845 ms build modules > 22 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 123 ms (parallelism 6.1) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 103 ms (parallelism 12.4) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 102 ms (parallelism 12.4) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     | 498 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 106 ms (parallelism 6.2) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 106 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 183 ms (parallelism 5.2) build modules > ./src/main.ts
     |  | 139 ms (parallelism 12.5) build modules > ./src/app/name-editor/name-editor.component.ts
     | 333 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i> 3134 ms build modules
+ 12 hidden lines

LOG from webpack.ResolverCachePlugin
    32% really resolved (563 real resolves with 0 cached but invalid, 1212 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.19118 ms
<t> figure out provided exports: 12.564319 ms
    95% of exports of modules have been determined (15 no declared exports, 259 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 5 additional calculations due to dependencies)
<t> store provided exports into cache: 1.58995 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 12.485854 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.187104 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.503271 ms
<t> trace exports usage in graph: 6.009375 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.922227 ms
<t> visitModules: visiting: 2.778419 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.866244 ms
<t> connectChunkGroups: 0.003573 ms
<t> cleanup: 0.001695 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.044207 ms
<t> modules: 2.49028 ms
<t> queue: 0.005692 ms
<t> maxSize: 0.040226 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.076895 ms
<t> sort relevant modules: 0.138669 ms
<t> find modules to concatenate: 5.894375 ms
<t> sort concat configurations: 0.044453 ms
<t> create concatenated modules: 6.26013 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 219.247472 ms
<t> optimize asset: polyfills.js: 629.816816 ms
<t> optimize asset: main.js: 3859.073599 ms
<t> optimize js assets: 3943.256883 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 11.150755 ms
<t> optimize css assets: 18.819934 ms

LOG from webpack.FileSystemInfo
    825 new snapshots created
    0% root snapshot uncached (0 / 1212)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 134 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3440/4082) entries shared via 3 shared snapshots (561 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 57% (223/389) entries shared via 12 shared snapshots (29 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 23% (279/1203) entries shared via 16 shared snapshots (51 times referenced)
    Managed files snapshot optimization: 79% (3334/4220) entries shared via 182 shared snapshots (759 times referenced)
    Managed missing snapshot optimization: 90% (4029/4500) entries shared via 197 shared snapshots (777 times referenced)

2023-09-14 11:12:53: webpack 5.88.2 compiled in 11976 ms (7d090920e189ca17)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1213.258366 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 46.338347 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1136 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.14643 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 1.699569 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 3.010895 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 3.396194 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.304724 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/http.mjs': 1.083696 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 2.135084 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.087525 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm|request=|./internal/operators/connect': 2.199711 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/observable/ConnectableObservable.js': 1.306122 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators|request=|../util/mapOneOrManyArgs': 1.934787 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|bdcffb4806b02a7f|runtime': 10.736484 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 5.239117 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 226.988469 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1136 items, 1 files, 39 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 339.01 kB |                85.26 kB
styles.css          | styles        |  82.22 kB |                 8.09 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 455.12 kB |               104.55 kB

Build at: 2023-09-14T15:12:56.184Z - Hash: 7d090920e189ca17 - Time: 14500ms
Done in 16.71s.
```
