Fri Apr 21 08:55:11 AM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.6Gi       3.7Gi       545Mi       9.0Gi        11Gi
Swap:          8.0Gi       1.1Gi       6.9Gi
System Storage
1017M	.
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
    
Done in 0.56s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.34s.
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
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21 --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.0.0-rc.1/angular-webpack/391c4465271dc79d78e827512f6121f3c12781a0.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.0.0-rc.1/angular-webpack/391c4465271dc79d78e827512f6121f3c12781a0/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1821.506168 ms
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
    467 ms (resolving: 33 ms, restoring: 1 ms, integration: 0 ms, building: 433 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 114 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 114 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [554] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    393 ms (resolving: 33 ms, restoring: 1 ms, integration: 0 ms, building: 359 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    401 ms (resolving: 33 ms, restoring: 1 ms, integration: 0 ms, building: 367 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.445841 ms
<t> runtime requirements.chunks: 0.533067 ms
<t> runtime requirements.entries: 1.542193 ms
<t> runtime requirements.modules: 0.079818 ms
<t> runtime requirements.chunks: 0.020697 ms
<t> runtime requirements.entries: 0.201407 ms
<t> finish module profiles: 7.045831 ms
<t> compute affected modules: 0.004857 ms
<t> finish modules: 17.884353 ms
<t> report dependency errors and warnings: 4.011551 ms
<t> optimize dependencies: 9.614864 ms
<t> create chunks: 3.486033 ms
<t> compute affected modules with chunk graph: 0.003313 ms
<t> optimize: 29.016145 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 7.423718 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 414.443506 ms
<t> runtime requirements.modules: 0.286951 ms
<t> runtime requirements.chunks: 0.085411 ms
<t> runtime requirements.entries: 0.462291 ms
<t> runtime requirements: 1.03189 ms
<t> hashing: initialize hash: 0.008282 ms
<t> hashing: sort chunks: 0.052382 ms
<t> hashing: hash runtime modules: 1.038422 ms
<t> hashing: hash chunks: 1.397655 ms
<t> hashing: hash digest: 0.046028 ms
<t> hashing: process full hash modules: 0.158703 ms
<t> hashing: 2.815325 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.060497 ms
<t> module assets: 0.18001 ms
<t> create chunk assets: 2.922394 ms
<t> process assets: 7490.497508 ms

LOG from webpack.Compiler
<t> make hook: 1862.6145510000001 ms
<t> finish make hook: 0.105431 ms
<t> finish compilation: 28.977982 ms
<t> seal compilation: 7963.243118 ms
<t> afterCompile hook: 0.185737 ms
<t> emitAssets: 4.125264 ms
<t> emitRecords: 0.064725 ms
<t> done hook: 116.410498 ms
<t> beginIdle: 0.382365 ms

LOG from webpack.Compilation.ModuleProfile
     | 65 ms (parallelism 3.6) resolve to new modules > ./src/main.ts
     | 35 ms (parallelism 11.2) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
    419 ms resolve to new modules
     | 34 ms (parallelism 11.3) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    60 ms resolve to existing modules
     |  | 80 ms (parallelism 5.2) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 37 ms (parallelism 2) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 39 ms (parallelism 10.8) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     | 340 ms build modules > 21 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 74 ms (parallelism 5.8) build modules > ./node_modules/zone.js/fesm2015/zone.js
     | 273 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 60 ms (parallelism 6) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 60 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 60 ms (parallelism 6.1) build modules > ./src/styles.scss?ngGlobalStyle
     | 60 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 53 ms (parallelism 6.3) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 53 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 111 ms (parallelism 4.6) build modules > ./src/main.ts
     | 125 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
    940 ms build modules
+ 21 hidden lines

LOG from webpack.ResolverCachePlugin
    32% really resolved (554 real resolves with 0 cached but invalid, 1197 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.190579 ms
<t> figure out provided exports: 8.524017 ms
    94% of exports of modules have been determined (15 no declared exports, 256 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 5 additional calculations due to dependencies)
<t> store provided exports into cache: 1.583548 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 10.414162 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.843644 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.600632 ms
<t> trace exports usage in graph: 4.819355 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.617602 ms
<t> visitModules: visiting: 2.430566 ms
    262 queue items processed (120 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.514575 ms
<t> connectChunkGroups: 0.002605 ms
<t> cleanup: 0.001157 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.03773 ms
<t> modules: 2.569073 ms
<t> queue: 0.00518 ms
<t> maxSize: 0.036902 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.182795 ms
<t> sort relevant modules: 0.148669 ms
<t> find modules to concatenate: 6.04452 ms
<t> sort concat configurations: 0.045899 ms
<t> create concatenated modules: 9.689498 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 263.264152 ms
<t> optimize asset: polyfills.js: 687.047602 ms
<t> optimize asset: main.js: 6842.099465 ms
<t> optimize js assets: 6912.220103 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 13.989149 ms
<t> optimize css assets: 24.423917 ms

LOG from webpack.FileSystemInfo
    813 new snapshots created
    0% root snapshot uncached (0 / 1197)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 111 timestamps 19 hashes 19 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/12) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3371/3999) entries shared via 2 shared snapshots (551 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 61% (188/309) entries shared via 8 shared snapshots (21 times referenced)
    Managed items info in cache: 78 items
    Managed items snapshot optimization: 22% (253/1170) entries shared via 12 shared snapshots (49 times referenced)
    Managed files snapshot optimization: 79% (3307/4170) entries shared via 182 shared snapshots (752 times referenced)
    Managed missing snapshot optimization: 89% (3980/4469) entries shared via 192 shared snapshots (776 times referenced)

2023-04-21 08:55:54: webpack 5.79.0 compiled in 11663 ms (2a7be18bd424799a)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 447.811986 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 20.354176 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1112 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.880619 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 1.688545 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.547513 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 3.752293 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/a11y.mjs': 1.717791 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 1.565538 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 1.805132 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.213135 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators/elementAt.js': 1.00485 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/observable/innerFrom.js': 1.752456 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'FlagDependencyExportsPlugin|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 2.468785 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|82b812f18d8326f6|runtime': 10.255786 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 5.313045 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 220.870054 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1112 items, 1 files, 38 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 305.27 kB |                78.59 kB
styles.css          | styles        | 104.38 kB |                 9.48 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 443.55 kB |                99.27 kB

Build at: 2023-04-21T12:55:56.035Z - Hash: 2a7be18bd424799a - Time: 13101ms
Done in 14.82s.
```
Fri Apr 21 08:56:03 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.4
info New version: 0.0.5
Done in 0.13s.
