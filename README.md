Wed Sep 20 02:05:57 PM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       4.0Gi       1.7Gi       230Mi       9.5Gi        10Gi
Swap:          8.0Gi       625Mi       7.4Gi
System Storage
1.1G	.
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
Node: 18.18.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.5
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.2
@angular-devkit/build-angular   16.2.2
@angular-devkit/core            16.2.2
@angular-devkit/schematics      16.2.2
@angular/cdk                    16.2.4
@angular/cli                    16.2.2
@angular/material               16.2.4
@schematics/angular             16.2.2
rxjs                            7.8.0
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.58s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.39s.
```
Latest version:     1.0.30001538
Installed version:  1.0.30001534
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001538
Installed version:  1.0.30001538
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.2.3/angular-webpack/ea5e77da231a768cce801145a14dda31333414f3.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.2.3/angular-webpack/ea5e77da231a768cce801145a14dda31333414f3/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1877.322098 ms
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
    1080 ms (resolving: 39 ms, restoring: 1 ms, integration: 0 ms, building: 1040 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 84.2 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 84.2 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [554] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1262 ms (resolving: 35 ms, restoring: 0 ms, integration: 0 ms, building: 1227 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1187 ms (resolving: 36 ms, restoring: 0 ms, integration: 0 ms, building: 1151 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.459271 ms
<t> runtime requirements.chunks: 0.407358 ms
<t> runtime requirements.entries: 1.61479 ms
<t> runtime requirements.modules: 0.027147 ms
<t> runtime requirements.chunks: 0.016099 ms
<t> runtime requirements.entries: 0.125038 ms
<t> finish module profiles: 8.934477 ms
<t> compute affected modules: 0.225496 ms
<t> finish modules: 16.910276 ms
<t> report dependency errors and warnings: 4.788486 ms
<t> optimize dependencies: 12.46633 ms
<t> create chunks: 5.313572 ms
<t> compute affected modules with chunk graph: 0.113428 ms
<t> optimize: 27.582765 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 10.67332 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 427.111899 ms
<t> runtime requirements.modules: 0.230843 ms
<t> runtime requirements.chunks: 0.306376 ms
<t> runtime requirements.entries: 1.024416 ms
<t> runtime requirements: 2.119236 ms
<t> hashing: initialize hash: 0.009294 ms
<t> hashing: sort chunks: 0.103137 ms
<t> hashing: hash runtime modules: 1.457512 ms
<t> hashing: hash chunks: 2.002126 ms
<t> hashing: hash digest: 0.04437 ms
<t> hashing: process full hash modules: 0.144521 ms
<t> hashing: 4.293578 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.062803 ms
<t> module assets: 0.260272 ms
<t> create chunk assets: 5.367677 ms
<t> process assets: 4495.6717 ms

LOG from webpack.Compiler
<t> make hook: 6678.394313 ms
<t> finish make hook: 0.148586 ms
<t> finish compilation: 31.171415 ms
<t> seal compilation: 4996.805755 ms
<t> afterCompile hook: 0.210964 ms
<t> emitAssets: 11.160874 ms
<t> emitRecords: 0.108689 ms
<t> done hook: 146.854597 ms
<t> beginIdle: 0.866573 ms

LOG from webpack.Compilation.ModuleProfile
     | 40 ms (parallelism 3.6) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 141 ms (parallelism 8) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 41 ms (parallelism 8) resolve to new modules > ./src/app/name-editor/name-editor.component.ts
<i>  | 209 ms (parallelism 9) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 101 ms (parallelism 13.3) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/cdk.mjs
<i> 984 ms resolve to new modules
     | 86 ms (parallelism 10.1) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    108 ms resolve to existing modules
     | 58 ms (parallelism 3) integrate modules > ./src/main.ts
    61 ms integrate modules
<i>  |  | 224 ms (parallelism 5.5) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 224 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 202 ms (parallelism 5.7) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 202 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 178 ms (parallelism 5.8) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 119 ms (parallelism 1.9) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 185 ms (parallelism 8) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 227 ms (parallelism 7.6) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 186 ms (parallelism 8) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 184 ms (parallelism 8) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 183 ms (parallelism 8) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 52 ms (parallelism 11.2) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 107 ms (parallelism 12.5) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 110 ms (parallelism 12.5) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 102 ms (parallelism 12.6) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 65 ms (parallelism 12.9) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 100 ms (parallelism 12.6) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 110 ms (parallelism 12.5) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     |  | 109 ms (parallelism 12.2) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 69 ms (parallelism 21.1) build modules > ./node_modules/@angular/cdk/fesm2022/bidi.mjs
     |  | 69 ms (parallelism 21.3) build modules > ./node_modules/@angular/cdk/fesm2022/platform.mjs
     |  | 68 ms (parallelism 21.6) build modules > ./node_modules/@angular/cdk/fesm2022/keycodes.mjs
<i>  | 2259 ms build modules > 22 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 176 ms (parallelism 5.9) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 108 ms (parallelism 12.3) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 109 ms (parallelism 12.3) build modules > ./node_modules/rxjs/dist/esm/index.js
     | 1532 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 259 ms (parallelism 5.1) build modules > ./src/main.ts
     |  | 140 ms (parallelism 8) build modules > ./src/app/app.component.ts
     |  | 48 ms (parallelism 11.4) build modules > ./src/app/name-editor/name-editor.component.ts
<i>  | 466 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
     |  | 117 ms (parallelism 6.3) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 117 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 30 ms (parallelism 7) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 30 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i> 4835 ms build modules
     | 58 ms (parallelism 3) restore modules > ./src/main.ts
    61 ms restore modules
+ 10 hidden lines

LOG from webpack.ResolverCachePlugin
    32% really resolved (563 real resolves with 0 cached but invalid, 1213 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.495059 ms
<t> figure out provided exports: 9.311214 ms
    95% of exports of modules have been determined (15 no declared exports, 259 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 1.741121 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 9.790969 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.455027 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.576913 ms
<t> trace exports usage in graph: 6.466121 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.851995 ms
<t> visitModules: visiting: 3.029006 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 3.72464 ms
<t> connectChunkGroups: 0.096191 ms
<t> cleanup: 0.033652 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.038313 ms
<t> modules: 2.537453 ms
<t> queue: 0.005201 ms
<t> maxSize: 0.036432 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.21194 ms
<t> sort relevant modules: 0.147973 ms
<t> find modules to concatenate: 6.485978 ms
<t> sort concat configurations: 0.042901 ms
<t> create concatenated modules: 5.411856 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 248.421259 ms
<t> optimize asset: polyfills.js: 750.145535 ms
<t> optimize asset: main.js: 3724.464516 ms
<t> optimize js assets: 3809.679404 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 21.527207 ms
<t> optimize css assets: 24.726471 ms

LOG from webpack.FileSystemInfo
    825 new snapshots created
    0% root snapshot uncached (0 / 1213)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 134 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3433/4082) entries shared via 3 shared snapshots (560 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 62% (243/389) entries shared via 12 shared snapshots (32 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 20% (245/1203) entries shared via 12 shared snapshots (42 times referenced)
    Managed files snapshot optimization: 79% (3342/4220) entries shared via 184 shared snapshots (759 times referenced)
    Managed missing snapshot optimization: 89% (4025/4500) entries shared via 196 shared snapshots (776 times referenced)

2023-09-20 14:06:49: webpack 5.88.2 compiled in 13576 ms (29f5864e9d8c92a3)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1177.7290619999999 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 55.320546 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1136 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.752858 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 2.530529 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 3.808635 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 2.032522 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 3.098791 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/a11y.mjs': 2.021251 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 2.533826 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.114045 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/operators|request=|../internal/operators/combineLatestAll': 1.030786 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/observable/ConnectableObservable.js': 1.479305 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators|request=|../util/mapOneOrManyArgs': 2.301573 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|bdcffb4806b02a7f|runtime': 12.441483 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 6.734554 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 256.427393 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1136 items, 1 files, 39 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 338.97 kB |                85.28 kB
styles.css          | styles        |  82.22 kB |                 8.09 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 455.08 kB |               104.57 kB

Build at: 2023-09-20T18:06:51.962Z - Hash: 29f5864e9d8c92a3 - Time: 16143ms
Done in 17.93s.
```
Wed Sep 20 02:07:11 PM EDT 2023
yarn version v1.22.19
info Current version: 0.0.122
info New version: 0.0.123
Done in 0.12s.
