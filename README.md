Wed Aug  9 07:16:29 PM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.0Gi       1.8Gi       538Mi        10Gi        11Gi
Swap:          8.0Gi       974Mi       7.0Gi
System Storage
961M	.
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
    

Angular CLI: 16.1.8
Node: 18.17.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.0
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1601.8
@angular-devkit/build-angular   16.1.8
@angular-devkit/core            16.1.8
@angular-devkit/schematics      16.1.8
@angular/cdk                    16.1.8
@angular/cli                    16.1.8
@angular/material               16.1.8
@schematics/angular             16.1.8
rxjs                            7.8.0
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.55s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.35s.
```
Latest version:     1.0.30001519
Installed version:  1.0.30001519
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001519
Installed version:  1.0.30001519
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.2.0/angular-webpack/1dd3c11d063dce3ce8c5028eb494f6b3b75415f2.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.2.0/angular-webpack/1dd3c11d063dce3ce8c5028eb494f6b3b75415f2/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1924.6167719999999 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
asset main.js 337 KiB {179} [emitted] (name: main)
asset styles.css 98.9 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 338 KiB = runtime.js 912 bytes main.js 337 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 99.8 KiB = runtime.js 912 bytes styles.css 98.9 KiB
chunk {179} (runtime: runtime) main.js (main) 2.62 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2022/init.mjs + 1 modules [614] 37.3 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 114 modules [368] 2.59 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1081 ms (resolving: 39 ms, restoring: 1 ms, integration: 0 ms, building: 1041 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 103 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 103 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [554] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1280 ms (resolving: 36 ms, restoring: 0 ms, integration: 0 ms, building: 1244 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1201 ms (resolving: 36 ms, restoring: 1 ms, integration: 0 ms, building: 1164 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.397638 ms
<t> runtime requirements.chunks: 0.410002 ms
<t> runtime requirements.entries: 1.507519 ms
<t> runtime requirements.modules: 0.027113 ms
<t> runtime requirements.chunks: 0.015524 ms
<t> runtime requirements.entries: 0.124867 ms
<t> finish module profiles: 8.081494 ms
<t> compute affected modules: 0.004637 ms
<t> finish modules: 18.604997 ms
<t> report dependency errors and warnings: 4.574716 ms
<t> optimize dependencies: 10.559734 ms
<t> create chunks: 3.279671 ms
<t> compute affected modules with chunk graph: 0.002981 ms
<t> optimize: 27.41781 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 7.607117 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 537.723566 ms
<t> runtime requirements.modules: 0.184618 ms
<t> runtime requirements.chunks: 0.301707 ms
<t> runtime requirements.entries: 1.042636 ms
<t> runtime requirements: 2.296399 ms
<t> hashing: initialize hash: 0.009229 ms
<t> hashing: sort chunks: 0.101624 ms
<t> hashing: hash runtime modules: 1.507098 ms
<t> hashing: hash chunks: 2.036698 ms
<t> hashing: hash digest: 0.038862 ms
<t> hashing: process full hash modules: 0.149523 ms
<t> hashing: 4.381941 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.062954 ms
<t> module assets: 0.28573 ms
<t> create chunk assets: 5.160612 ms
<t> process assets: 4461.81221 ms

LOG from webpack.Compiler
<t> make hook: 6579.683498 ms
<t> finish make hook: 0.100655 ms
<t> finish compilation: 31.301061 ms
<t> seal compilation: 5062.983994 ms
<t> afterCompile hook: 0.200464 ms
<t> emitAssets: 4.552197 ms
<t> emitRecords: 0.062833 ms
<t> done hook: 145.350471 ms
<t> beginIdle: 0.788342 ms

LOG from webpack.Compilation.ModuleProfile
     | 69 ms (parallelism 3.4) resolve to new modules > ./src/main.ts
     | 35 ms (parallelism 2.4) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 40 ms (parallelism 8) resolve to new modules > ./src/app/name-editor/name-editor.component.ts
     | 181 ms (parallelism 10.2) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
    838 ms resolve to new modules
     | 57 ms (parallelism 15.1) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    93 ms resolve to existing modules
<i>  |  | 224 ms (parallelism 5.5) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 224 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 201 ms (parallelism 5.8) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 201 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 189 ms (parallelism 5.9) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 125 ms (parallelism 1.9) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
<i>  |  | 218 ms (parallelism 6.6) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 189 ms (parallelism 8.9) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
<i>  |  | 220 ms (parallelism 6.6) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
<i>  |  | 216 ms (parallelism 6.6) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
<i>  |  | 219 ms (parallelism 6.6) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 30 ms (parallelism 18.7) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 62 ms (parallelism 12.3) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 115 ms (parallelism 9.8) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 111 ms (parallelism 9.7) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 108 ms (parallelism 9.5) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 118 ms (parallelism 9.8) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 109 ms (parallelism 9.6) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 113 ms (parallelism 12.6) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     |  | 121 ms (parallelism 12.4) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
<i>  | 2308 ms build modules > 22 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 173 ms (parallelism 6) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 103 ms (parallelism 12.8) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 104 ms (parallelism 12.8) build modules > ./node_modules/rxjs/dist/esm/index.js
     | 1469 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 148 ms (parallelism 6.2) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 148 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 261 ms (parallelism 5.1) build modules > ./src/main.ts
<i>  | 320 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i> 4698 ms build modules
+ 20 hidden lines

LOG from webpack.ResolverCachePlugin
    32% really resolved (563 real resolves with 0 cached but invalid, 1203 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.141189 ms
<t> figure out provided exports: 9.053154 ms
    95% of exports of modules have been determined (15 no declared exports, 259 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 1.926406 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 9.472993 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.217481 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.621612 ms
<t> trace exports usage in graph: 5.283252 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.631944 ms
<t> visitModules: visiting: 2.312713 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.391406 ms
<t> connectChunkGroups: 0.002016 ms
<t> cleanup: 0.001079 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.033139 ms
<t> modules: 2.299542 ms
<t> queue: 0.004498 ms
<t> maxSize: 0.030712 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.044368 ms
<t> sort relevant modules: 0.123572 ms
<t> find modules to concatenate: 5.710413 ms
<t> sort concat configurations: 0.036372 ms
<t> create concatenated modules: 8.581157 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 226.23158 ms
<t> optimize asset: polyfills.js: 650.556708 ms
<t> optimize asset: main.js: 3676.488765 ms
<t> optimize js assets: 3758.514205 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 14.759057 ms
<t> optimize css assets: 26.36559 ms

LOG from webpack.FileSystemInfo
    825 new snapshots created
    0% root snapshot uncached (0 / 1203)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 134 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3440/4082) entries shared via 3 shared snapshots (561 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 61% (237/389) entries shared via 12 shared snapshots (31 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 20% (244/1203) entries shared via 13 shared snapshots (41 times referenced)
    Managed files snapshot optimization: 79% (3342/4220) entries shared via 184 shared snapshots (759 times referenced)
    Managed missing snapshot optimization: 89% (4025/4500) entries shared via 196 shared snapshots (776 times referenced)

2023-08-09 19:17:19: webpack 5.88.2 compiled in 13584 ms (0dd77d0a22ca8463)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1235.957784 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 50.387371 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1136 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.095081 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 1.893736 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 3.089129 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.90212 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 2.984125 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/a11y.mjs': 1.195676 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/animations/fesm2022/browser.mjs': 1.147937 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 2.893703 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.08764 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/observable/combineLatest.js': 1.526963 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators|request=|./delayWhen': 2.24194 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|bdcffb4806b02a7f|runtime': 11.453541 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 5.290186 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 244.879542 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1136 items, 1 files, 39 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 337.21 kB |                84.63 kB
styles.css          | styles        |  98.87 kB |                 8.92 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 469.98 kB |               104.75 kB

Build at: 2023-08-09T23:17:22.141Z - Hash: 0dd77d0a22ca8463 - Time: 16164ms
Done in 18.06s.
```
