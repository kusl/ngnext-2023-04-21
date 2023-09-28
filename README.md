Thu Sep 28 01:36:31 PM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.4Gi       3.6Gi       280Mi       9.3Gi        12Gi
Swap:          8.0Gi       1.0Mi       8.0Gi
System Storage
816M	.
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
    

Angular CLI: 16.2.4
Node: 18.18.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.6
... animations, cdk, common, compiler, compiler-cli, core, forms
... localize, material, platform-browser
... platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.4
@angular-devkit/build-angular   16.2.4
@angular-devkit/core            16.2.4
@angular-devkit/schematics      16.2.4
@angular/cli                    16.2.4
@schematics/angular             16.2.4
rxjs                            7.8.0
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.55s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.36s.
```
Latest version:     1.0.30001541
Installed version:  1.0.30001540
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001541
Installed version:  1.0.30001541
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.2.4/angular-webpack/56ea75bb0e7931b79a79cdc880f206626451ebb9.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.2.4/angular-webpack/56ea75bb0e7931b79a79cdc880f206626451ebb9/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1970.9692519999999 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
asset main.js 341 KiB {179} [emitted] (name: main)
asset styles.css 82.2 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 342 KiB = runtime.js 912 bytes main.js 341 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 83.1 KiB = runtime.js 912 bytes styles.css 82.2 KiB
chunk {179} (runtime: runtime) main.js (main) 2.64 MiB [initial] [rendered]
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
    1115 ms (resolving: 36 ms, restoring: 1 ms, integration: 0 ms, building: 1078 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 84.2 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 84.2 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [554] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1304 ms (resolving: 32 ms, restoring: 0 ms, integration: 0 ms, building: 1272 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1230 ms (resolving: 33 ms, restoring: 1 ms, integration: 0 ms, building: 1196 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.44175 ms
<t> runtime requirements.chunks: 0.402675 ms
<t> runtime requirements.entries: 1.450293 ms
<t> runtime requirements.modules: 0.027386 ms
<t> runtime requirements.chunks: 0.015399 ms
<t> runtime requirements.entries: 0.129255 ms
<t> finish module profiles: 8.164558 ms
<t> compute affected modules: 0.006201 ms
<t> finish modules: 15.668575 ms
<t> report dependency errors and warnings: 4.286124 ms
<t> optimize dependencies: 13.739054 ms
<t> create chunks: 3.299457 ms
<t> compute affected modules with chunk graph: 0.002812 ms
<t> optimize: 24.758784 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 7.313668 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 427.183581 ms
<t> runtime requirements.modules: 0.263508 ms
<t> runtime requirements.chunks: 0.074638 ms
<t> runtime requirements.entries: 0.474702 ms
<t> runtime requirements: 1.009864 ms
<t> hashing: initialize hash: 0.00685 ms
<t> hashing: sort chunks: 0.049007 ms
<t> hashing: hash runtime modules: 1.048437 ms
<t> hashing: hash chunks: 1.198363 ms
<t> hashing: hash digest: 0.01574 ms
<t> hashing: process full hash modules: 0.277295 ms
<t> hashing: 2.694767 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.063264 ms
<t> module assets: 0.164985 ms
<t> create chunk assets: 3.225494 ms
<t> process assets: 4515.686482 ms

LOG from webpack.Compiler
<t> make hook: 6178.836368 ms
<t> finish make hook: 0.101477 ms
<t> finish compilation: 28.163994 ms
<t> seal compilation: 5001.229404 ms
<t> afterCompile hook: 0.131597 ms
<t> emitAssets: 4.756997 ms
<t> emitRecords: 0.075536 ms
<t> done hook: 145.902084 ms
<t> beginIdle: 0.365764 ms

LOG from webpack.Compilation.ModuleProfile
     | 66 ms (parallelism 3.4) resolve to new modules > ./src/main.ts
     | 56 ms (parallelism 3.4) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 189 ms (parallelism 7.1) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 46 ms (parallelism 15.6) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 90 ms (parallelism 12.9) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/cdk.mjs
    835 ms resolve to new modules
<i>  |  | 226 ms (parallelism 5.6) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 226 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 204 ms (parallelism 5.9) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 204 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 175 ms (parallelism 6) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 192 ms (parallelism 7.1) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 169 ms (parallelism 9.4) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 188 ms (parallelism 7.1) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 191 ms (parallelism 7) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 186 ms (parallelism 7.1) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 93 ms (parallelism 12.8) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 89 ms (parallelism 12.9) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 86 ms (parallelism 13) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     |  | 76 ms (parallelism 13) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 100 ms (parallelism 12.6) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 86 ms (parallelism 13) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 98 ms (parallelism 12.6) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 73 ms (parallelism 16.3) build modules > ./node_modules/@angular/cdk/fesm2022/bidi.mjs
     |  | 72 ms (parallelism 16.5) build modules > ./node_modules/@angular/cdk/fesm2022/platform.mjs
     |  | 72 ms (parallelism 16.5) build modules > ./node_modules/@angular/cdk/fesm2022/keycodes.mjs
<i>  | 2044 ms build modules > 22 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 177 ms (parallelism 6.1) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 93 ms (parallelism 12.6) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 93 ms (parallelism 12.5) build modules > ./node_modules/rxjs/dist/esm/index.js
     | 1448 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 156 ms (parallelism 6.2) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 156 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 30 ms (parallelism 7) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 30 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 248 ms (parallelism 5.3) build modules > ./src/main.ts
     |  | 156 ms (parallelism 7.1) build modules > ./src/app/app.component.ts
<i>  | 461 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i> 4579 ms build modules
+ 16 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (563 real resolves with 0 cached but invalid, 1260 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.087598 ms
<t> figure out provided exports: 8.701209 ms
    95% of exports of modules have been determined (15 no declared exports, 259 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 1.615624 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 10.379134 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 7.254294 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.5475 ms
<t> trace exports usage in graph: 5.535613 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.598406 ms
<t> visitModules: visiting: 2.352992 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.429129 ms
<t> connectChunkGroups: 0.003088 ms
<t> cleanup: 0.001728 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.039849 ms
<t> modules: 2.417168 ms
<t> queue: 0.004735 ms
<t> maxSize: 0.033762 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.088279 ms
<t> sort relevant modules: 0.142493 ms
<t> find modules to concatenate: 6.116649 ms
<t> sort concat configurations: 0.041627 ms
<t> create concatenated modules: 5.611241 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 242.56231 ms
<t> optimize asset: polyfills.js: 672.57334 ms
<t> optimize asset: main.js: 3748.489402 ms
<t> optimize js assets: 3831.705296 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 11.11467 ms
<t> optimize css assets: 11.936421 ms

LOG from webpack.FileSystemInfo
    825 new snapshots created
    0% root snapshot uncached (0 / 1260)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 134 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3440/4082) entries shared via 3 shared snapshots (561 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 55% (215/389) entries shared via 10 shared snapshots (30 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 20% (243/1203) entries shared via 12 shared snapshots (43 times referenced)
    Managed files snapshot optimization: 79% (3342/4220) entries shared via 184 shared snapshots (759 times referenced)
    Managed missing snapshot optimization: 86% (3891/4500) entries shared via 194 shared snapshots (776 times referenced)

2023-09-28 13:37:17: webpack 5.88.2 compiled in 13165 ms (793cd5a6b7d29226)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1225.600126 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 53.877115 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1136 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 4.507251 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 1.698883 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/slide-toggle.mjs': 1.061065 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 3.3687 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 2.08842 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 2.992919 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/a11y.mjs': 1.427855 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 2.433572 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.066498 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm|request=|./internal/scheduler/asap': 1.117504 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators/single.js': 1.425809 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators|request=|../observable/concat': 2.763831 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|bdcffb4806b02a7f|runtime': 11.420357 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 6.537419 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 260.75252 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1136 items, 1 files, 39 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 341.15 kB |                85.35 kB
styles.css          | styles        |  82.22 kB |                 8.09 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 457.26 kB |               104.63 kB

Build at: 2023-09-28T17:37:20.041Z - Hash: 793cd5a6b7d29226 - Time: 15853ms
Done in 17.67s.
```
