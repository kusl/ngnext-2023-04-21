Wed Nov 29 06:23:19 PM EST 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       4.3Gi       1.8Gi       404Mi       9.8Gi        10Gi
Swap:          8.0Gi       225Mi       7.8Gi
System Storage
794M	.
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
    

Angular CLI: 17.0.3
Node: 20.10.0
Package Manager: yarn 1.22.21
OS: linux x64

Angular: 17.0.4
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1700.3
@angular-devkit/build-angular   17.0.3
@angular-devkit/core            17.0.3
@angular-devkit/schematics      17.0.3
@angular/cdk                    17.0.1
@angular/cli                    17.0.3
@angular/material               17.0.1
@schematics/angular             17.0.3
rxjs                            7.8.0
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.55s.
yarn install v1.22.21
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.35s.
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
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/17.0.4/angular-webpack/03e7574cf2276beea20f0133ae5e71699313df84.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/17.0.4/angular-webpack/03e7574cf2276beea20f0133ae5e71699313df84/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1934.167759 ms
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
    1400 ms (resolving: 32 ms, restoring: 0 ms, integration: 0 ms, building: 1368 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 85.4 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 85.4 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [554] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1500 ms (resolving: 29 ms, restoring: 0 ms, integration: 0 ms, building: 1471 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1421 ms (resolving: 30 ms, restoring: 0 ms, integration: 0 ms, building: 1391 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.388797 ms
<t> runtime requirements.chunks: 0.438881 ms
<t> runtime requirements.entries: 1.454757 ms
<t> runtime requirements.modules: 0.025853 ms
<t> runtime requirements.chunks: 0.015555 ms
<t> runtime requirements.entries: 0.125444 ms
<t> finish module profiles: 6.19765 ms
<t> compute affected modules: 0.008698 ms
<t> finish modules: 15.572524 ms
<t> report dependency errors and warnings: 4.972075 ms
<t> optimize dependencies: 14.325303 ms
<t> create chunks: 3.25308 ms
<t> compute affected modules with chunk graph: 0.003267 ms
<t> optimize: 23.74996 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 7.534297 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 475.514829 ms
<t> runtime requirements.modules: 0.244407 ms
<t> runtime requirements.chunks: 0.082967 ms
<t> runtime requirements.entries: 0.491679 ms
<t> runtime requirements: 1.015951 ms
<t> hashing: initialize hash: 0.006927 ms
<t> hashing: sort chunks: 0.057963 ms
<t> hashing: hash runtime modules: 1.421774 ms
<t> hashing: hash chunks: 1.325834 ms
<t> hashing: hash digest: 0.018153 ms
<t> hashing: process full hash modules: 0.229406 ms
<t> hashing: 3.170464 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.070994 ms
<t> module assets: 0.163004 ms
<t> create chunk assets: 3.15057 ms
<t> process assets: 4301.941917 ms

LOG from webpack.Compiler
<t> make hook: 6491.20202 ms
<t> finish make hook: 0.098808 ms
<t> finish compilation: 26.847267 ms
<t> seal compilation: 4835.618261 ms
<t> afterCompile hook: 0.090345 ms
<t> emitAssets: 4.378073 ms
<t> emitRecords: 0.083706 ms
<t> done hook: 125.445651 ms
<t> beginIdle: 0.401194 ms

LOG from webpack.Compilation.ModuleProfile
     | 66 ms (parallelism 3.3) resolve to new modules > ./src/main.ts
     | 47 ms (parallelism 3) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 125 ms (parallelism 8) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 60 ms (parallelism 13.7) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 53 ms (parallelism 18.5) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/cdk.mjs
    668 ms resolve to new modules
     | 44 ms (parallelism 16.1) resolve to existing modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     | 60 ms (parallelism 13.7) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    140 ms resolve to existing modules
<i>  |  | 264 ms (parallelism 5.6) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 264 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 241 ms (parallelism 5.8) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 241 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 229 ms (parallelism 5.8) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 118 ms (parallelism 1.9) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 177 ms (parallelism 8.5) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 155 ms (parallelism 8) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 179 ms (parallelism 8.5) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 176 ms (parallelism 8.5) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 180 ms (parallelism 8.5) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 62 ms (parallelism 13.6) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 47 ms (parallelism 14.8) build modules > ./node_modules/@angular/core/fesm2022/primitives/signals.mjs
     |  | 46 ms (parallelism 10) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 49 ms (parallelism 10) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 90 ms (parallelism 13.5) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 103 ms (parallelism 12.9) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 92 ms (parallelism 13.4) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 88 ms (parallelism 13.6) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 87 ms (parallelism 13.5) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 51 ms (parallelism 19.2) build modules > ./node_modules/@angular/cdk/fesm2022/bidi.mjs
     |  | 51 ms (parallelism 19.1) build modules > ./node_modules/@angular/cdk/fesm2022/platform.mjs
     |  | 51 ms (parallelism 19) build modules > ./node_modules/@angular/cdk/fesm2022/keycodes.mjs
<i>  | 2049 ms build modules > 23 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 237 ms (parallelism 5.8) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 88 ms (parallelism 13.5) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 88 ms (parallelism 13.5) build modules > ./node_modules/rxjs/dist/esm/index.js
<i>  | 1494 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 309 ms (parallelism 5.2) build modules > ./src/main.ts
     |  | 124 ms (parallelism 8) build modules > ./src/app/app-routing.module.ts
     |  | 124 ms (parallelism 8) build modules > ./src/app/app.component.ts
     |  | 35 ms (parallelism 16.1) build modules > ./src/app/name-editor/name-editor.component.ts
<i>  | 600 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
     |  | 172 ms (parallelism 6.1) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 172 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i> 4847 ms build modules
+ 11 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (564 real resolves with 0 cached but invalid, 1258 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 0.965606 ms
<t> figure out provided exports: 9.109753 ms
    95% of exports of modules have been determined (15 no declared exports, 260 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 1.718411 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 11.800339 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.813406 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.811065 ms
<t> trace exports usage in graph: 9.258077 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.582577 ms
<t> visitModules: visiting: 2.303002 ms
    267 queue items processed (123 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.379607 ms
<t> connectChunkGroups: 0.003013 ms
<t> cleanup: 0.001228 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.032922 ms
<t> modules: 2.217145 ms
<t> queue: 0.004226 ms
<t> maxSize: 0.03043 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.449433 ms
<t> sort relevant modules: 0.240683 ms
<t> find modules to concatenate: 5.33613 ms
<t> sort concat configurations: 0.04276 ms
<t> create concatenated modules: 5.252776 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 157.877158 ms
<t> optimize asset: polyfills.js: 600.654084 ms
<t> optimize asset: main.js: 3566.483584 ms
<t> optimize js assets: 3629.685678 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 9.828328 ms
<t> optimize css assets: 10.507288 ms

LOG from webpack.FileSystemInfo
    827 new snapshots created
    0% root snapshot uncached (0 / 1258)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 130 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3446/4090) entries shared via 3 shared snapshots (562 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 57% (223/389) entries shared via 10 shared snapshots (33 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 22% (261/1205) entries shared via 14 shared snapshots (45 times referenced)
    Managed files snapshot optimization: 79% (3335/4227) entries shared via 184 shared snapshots (760 times referenced)
    Managed missing snapshot optimization: 86% (3892/4502) entries shared via 194 shared snapshots (775 times referenced)

2023-11-29 18:24:06: webpack 5.89.0 compiled in 13274 ms (d9dd784b7683859c)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1278.410358 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 51.948671 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1138 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.799486 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 2.389222 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 2.80949 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.167472 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 1.867088 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/a11y.mjs': 1.191625 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/operators/index.js': 1.807114 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 1.019573 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators/skipWhile.js': 1.343553 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/layout.mjs': 1.980366 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|6fbab3001b309b4f|runtime': 11.865657 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 6.250614 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 196.150677 ms
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

Build at: 2023-11-29T23:24:08.883Z - Hash: d9dd784b7683859c - Time: 15261ms
Done in 17.04s.
```
