Wed Nov 29 07:16:01 PM EST 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       4.1Gi       1.9Gi       434Mi        10Gi        11Gi
Swap:          8.0Gi       271Mi       7.7Gi
System Storage
795M	.
```
```bash
yarn run v1.22.21
$ ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 17.0.4
Node: 20.10.0
Package Manager: yarn 1.22.21
OS: linux x64

Angular: 17.0.5
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1700.4
@angular-devkit/build-angular   17.0.4
@angular-devkit/core            17.0.4
@angular-devkit/schematics      17.0.4
@angular/cdk                    17.0.1
@angular/cli                    17.0.4
@angular/material               17.0.1
@schematics/angular             17.0.4
rxjs                            7.8.0
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.54s.
yarn install v1.22.21
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.34s.
```
```bash
Latest version:     1.0.30001565
Installed version:  1.0.30001565
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.21
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/17.0.5/angular-webpack/5beeb6097391248f956554b60f8ca81128af2e56.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/17.0.5/angular-webpack/5beeb6097391248f956554b60f8ca81128af2e56/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 2048.621214 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
asset main.js 342 KiB {179} [emitted] (name: main)
asset styles.css 83.4 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 343 KiB = runtime.js 912 bytes main.js 342 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 84.2 KiB = runtime.js 912 bytes styles.css 83.4 KiB
chunk {179} (runtime: runtime) main.js (main) 2.79 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2022/init.mjs + 1 modules [614] 29.9 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 115 modules [607] 2.76 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:15
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1342 ms (resolving: 32 ms, restoring: 1 ms, integration: 0 ms, building: 1309 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 85.4 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 85.4 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [554] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1530 ms (resolving: 28 ms, restoring: 0 ms, integration: 0 ms, building: 1502 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1448 ms (resolving: 29 ms, restoring: 1 ms, integration: 0 ms, building: 1418 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.515886 ms
<t> runtime requirements.chunks: 0.535409 ms
<t> runtime requirements.entries: 1.672578 ms
<t> runtime requirements.modules: 0.02693 ms
<t> runtime requirements.chunks: 0.016166 ms
<t> runtime requirements.entries: 0.128422 ms
<t> finish module profiles: 6.661954 ms
<t> compute affected modules: 0.005104 ms
<t> finish modules: 18.923515 ms
<t> report dependency errors and warnings: 4.786183 ms
<t> optimize dependencies: 11.040441 ms
<t> create chunks: 3.2749 ms
<t> compute affected modules with chunk graph: 0.002934 ms
<t> optimize: 25.917664 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 7.244574 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 577.812832 ms
<t> runtime requirements.modules: 0.243512 ms
<t> runtime requirements.chunks: 0.091442 ms
<t> runtime requirements.entries: 0.49141 ms
<t> runtime requirements: 1.227028 ms
<t> hashing: initialize hash: 0.008163 ms
<t> hashing: sort chunks: 0.058737 ms
<t> hashing: hash runtime modules: 1.051782 ms
<t> hashing: hash chunks: 1.25762 ms
<t> hashing: hash digest: 0.017111 ms
<t> hashing: process full hash modules: 0.205285 ms
<t> hashing: 2.701928 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.0645 ms
<t> module assets: 0.165681 ms
<t> create chunk assets: 2.864904 ms
<t> process assets: 4183.429309 ms

LOG from webpack.Compiler
<t> make hook: 6257.539367 ms
<t> finish make hook: 0.165032 ms
<t> finish compilation: 30.418944 ms
<t> seal compilation: 4817.315738 ms
<t> afterCompile hook: 0.091199 ms
<t> emitAssets: 3.501028 ms
<t> emitRecords: 0.057652 ms
<t> done hook: 118.389419 ms
<t> beginIdle: 0.376965 ms

LOG from webpack.Compilation.ModuleProfile
     | 65 ms (parallelism 3.4) resolve to new modules > ./src/main.ts
     | 36 ms (parallelism 3.8) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 132 ms (parallelism 7.1) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 64 ms (parallelism 13.1) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
    721 ms resolve to new modules
     | 64 ms (parallelism 13.1) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    107 ms resolve to existing modules
<i>  |  | 266 ms (parallelism 5.6) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 266 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 242 ms (parallelism 5.9) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 242 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 218 ms (parallelism 6) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 92 ms (parallelism 2.2) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 196 ms (parallelism 7.8) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 182 ms (parallelism 7.7) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 193 ms (parallelism 7.8) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 191 ms (parallelism 7.8) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 191 ms (parallelism 7.8) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 66 ms (parallelism 13.1) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 84 ms (parallelism 10.2) build modules > ./node_modules/@angular/core/fesm2022/primitives/signals.mjs
     |  | 86 ms (parallelism 10.2) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 89 ms (parallelism 9.9) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 103 ms (parallelism 11.3) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 101 ms (parallelism 11.2) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 99 ms (parallelism 11.1) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 104 ms (parallelism 11.3) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 105 ms (parallelism 11.6) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
<i>  | 2117 ms build modules > 23 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 217 ms (parallelism 6) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 103 ms (parallelism 11.4) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 103 ms (parallelism 11.4) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
<i>  | 1487 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 197 ms (parallelism 6.1) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 197 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 285 ms (parallelism 5.4) build modules > ./src/main.ts
     |  | 132 ms (parallelism 7.1) build modules > ./src/app/app.component.ts
     |  | 66 ms (parallelism 13.1) build modules > ./src/app/name-editor/name-editor.component.ts
<i>  | 499 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i> 4833 ms build modules
+ 17 hidden lines

LOG from webpack.ResolverCachePlugin
    32% really resolved (564 real resolves with 0 cached but invalid, 1198 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.314451 ms
<t> figure out provided exports: 12.43298 ms
    95% of exports of modules have been determined (15 no declared exports, 260 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 1.497147 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 10.20826 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.904359 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.586556 ms
<t> trace exports usage in graph: 6.093746 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.609354 ms
<t> visitModules: visiting: 2.339501 ms
    267 queue items processed (123 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.440303 ms
<t> connectChunkGroups: 0.003621 ms
<t> cleanup: 0.001145 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.039383 ms
<t> modules: 2.242257 ms
<t> queue: 0.003974 ms
<t> maxSize: 0.029809 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.961224 ms
<t> sort relevant modules: 0.117518 ms
<t> find modules to concatenate: 4.909142 ms
<t> sort concat configurations: 0.038309 ms
<t> create concatenated modules: 5.434815 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 180.452083 ms
<t> optimize asset: polyfills.js: 629.148664 ms
<t> optimize asset: main.js: 3473.224029 ms
<t> optimize js assets: 3536.915315 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 11.961343 ms
<t> optimize css assets: 12.734438 ms

LOG from webpack.FileSystemInfo
    827 new snapshots created
    0% root snapshot uncached (0 / 1198)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 130 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3446/4090) entries shared via 3 shared snapshots (562 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 62% (243/389) entries shared via 12 shared snapshots (32 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 20% (247/1205) entries shared via 13 shared snapshots (41 times referenced)
    Managed files snapshot optimization: 79% (3335/4227) entries shared via 184 shared snapshots (760 times referenced)
    Managed missing snapshot optimization: 90% (4030/4502) entries shared via 197 shared snapshots (775 times referenced)

2023-11-29 19:16:45: webpack 5.89.0 compiled in 13140 ms (d9dd784b7683859c)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1262.27442 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 54.006951 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1138 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.739425 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 2.513988 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 2.50925 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.165645 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 1.90594 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/http.mjs': 1.092597 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 2.176886 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators/windowCount.js': 1.483243 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/scheduled/scheduled.js': 2.177722 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|6fbab3001b309b4f|runtime': 10.794856 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 6.286289 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 189.55663 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1138 items, 1 files, 41 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 341.90 kB |                86.01 kB
styles.css          | styles        |  83.35 kB |                 8.15 kB
polyfills.js        | polyfills     |  32.97 kB |                10.63 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 459.11 kB |               105.30 kB

Build at: 2023-11-30T00:16:47.219Z - Hash: d9dd784b7683859c - Time: 15102ms
Done in 16.89s.
```
