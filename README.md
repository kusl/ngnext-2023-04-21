Fri Sep  1 08:14:32 PM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.1Gi       2.7Gi       338Mi        10Gi        12Gi
Swap:          8.0Gi       5.0Mi       8.0Gi
System Storage
1.8G	.
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
    

Angular CLI: 16.2.0
Node: 18.17.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.2
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.0
@angular-devkit/build-angular   16.2.0
@angular-devkit/core            16.2.0
@angular-devkit/schematics      16.2.0
@angular/cdk                    16.2.1
@angular/cli                    16.2.0
@angular/material               16.2.1
@schematics/angular             16.2.0
rxjs                            7.8.0
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.58s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.37s.
```
Latest version:     1.0.30001525
Installed version:  1.0.30001524
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001525
Installed version:  1.0.30001525
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.2.1/angular-webpack/a3c1d27730f222192b8196bc5f6647f4bc39ace7.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.2.1/angular-webpack/a3c1d27730f222192b8196bc5f6647f4bc39ace7/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1845.9017549999999 ms
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
    1034 ms (resolving: 41 ms, restoring: 0 ms, integration: 0 ms, building: 993 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 84.2 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 84.2 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [554] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1142 ms (resolving: 37 ms, restoring: 0 ms, integration: 0 ms, building: 1105 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1067 ms (resolving: 38 ms, restoring: 0 ms, integration: 0 ms, building: 1029 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.434459 ms
<t> runtime requirements.chunks: 0.406156 ms
<t> runtime requirements.entries: 1.47028 ms
<t> runtime requirements.modules: 0.027228 ms
<t> runtime requirements.chunks: 0.020569 ms
<t> runtime requirements.entries: 0.124512 ms
<t> finish module profiles: 7.62778 ms
<t> compute affected modules: 0.209183 ms
<t> finish modules: 15.758782 ms
<t> report dependency errors and warnings: 4.325416 ms
<t> optimize dependencies: 11.94546 ms
<t> create chunks: 5.17042 ms
<t> compute affected modules with chunk graph: 0.107563 ms
<t> optimize: 30.276906 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 7.709545 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 566.316017 ms
<t> runtime requirements.modules: 0.210067 ms
<t> runtime requirements.chunks: 0.33795 ms
<t> runtime requirements.entries: 1.095578 ms
<t> runtime requirements: 2.441862 ms
<t> hashing: initialize hash: 0.010343 ms
<t> hashing: sort chunks: 0.108537 ms
<t> hashing: hash runtime modules: 1.522276 ms
<t> hashing: hash chunks: 2.113649 ms
<t> hashing: hash digest: 0.040094 ms
<t> hashing: process full hash modules: 0.156215 ms
<t> hashing: 4.515725 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.064728 ms
<t> module assets: 0.291778 ms
<t> create chunk assets: 5.284276 ms
<t> process assets: 4617.316803 ms

LOG from webpack.Compiler
<t> make hook: 6367.459945 ms
<t> finish make hook: 0.135982 ms
<t> finish compilation: 28.206655 ms
<t> seal compilation: 5253.975702 ms
<t> afterCompile hook: 0.177485 ms
<t> emitAssets: 4.114325 ms
<t> emitRecords: 0.063464 ms
<t> done hook: 138.453816 ms
<t> beginIdle: 0.798729 ms

LOG from webpack.Compilation.ModuleProfile
     | 65 ms (parallelism 3.4) resolve to new modules > ./src/main.ts
     | 52 ms (parallelism 2.9) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 156 ms (parallelism 8) resolve to new modules > ./src/app/name-editor/name-editor.component.ts
     | 158 ms (parallelism 11.3) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
    984 ms resolve to new modules
     | 158 ms (parallelism 11.3) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    193 ms resolve to existing modules
<i>  |  | 203 ms (parallelism 5.5) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 203 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 180 ms (parallelism 5.7) build modules > ./src/styles.scss?ngGlobalStyle
     | 180 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 169 ms (parallelism 5.8) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 106 ms (parallelism 2.1) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 160 ms (parallelism 10.1) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 176 ms (parallelism 8) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 172 ms (parallelism 8) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 169 ms (parallelism 8) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 168 ms (parallelism 8) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 30 ms (parallelism 18.5) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 59 ms (parallelism 12.4) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 117 ms (parallelism 10.3) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 114 ms (parallelism 10.2) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 119 ms (parallelism 10.4) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 120 ms (parallelism 10.4) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 122 ms (parallelism 10.4) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 121 ms (parallelism 10.7) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     |  | 120 ms (parallelism 11.3) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
<i>  | 2056 ms build modules > 22 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 173 ms (parallelism 5.7) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 110 ms (parallelism 11.4) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 110 ms (parallelism 11.4) build modules > ./node_modules/rxjs/dist/esm/index.js
     | 1566 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 108 ms (parallelism 6.2) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 108 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 256 ms (parallelism 4.9) build modules > ./src/main.ts
<i>  | 316 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i> 4458 ms build modules
+ 18 hidden lines

LOG from webpack.ResolverCachePlugin
    32% really resolved (563 real resolves with 0 cached but invalid, 1205 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.439183 ms
<t> figure out provided exports: 8.672616 ms
    95% of exports of modules have been determined (15 no declared exports, 259 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 1.618227 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 9.33025 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.062849 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.670838 ms
<t> trace exports usage in graph: 6.331451 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.863335 ms
<t> visitModules: visiting: 2.97978 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 3.615391 ms
<t> connectChunkGroups: 0.092424 ms
<t> cleanup: 0.044866 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.043791 ms
<t> modules: 2.545898 ms
<t> queue: 0.00615 ms
<t> maxSize: 0.036132 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.294995 ms
<t> sort relevant modules: 0.14523 ms
<t> find modules to concatenate: 9.721745 ms
<t> sort concat configurations: 0.036298 ms
<t> create concatenated modules: 4.991209 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 250.630777 ms
<t> optimize asset: polyfills.js: 612.256864 ms
<t> optimize asset: main.js: 3823.56336 ms
<t> optimize js assets: 3914.421742 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 16.756026 ms
<t> optimize css assets: 22.474352 ms

LOG from webpack.FileSystemInfo
    825 new snapshots created
    0% root snapshot uncached (0 / 1205)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 134 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3440/4082) entries shared via 3 shared snapshots (561 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 58% (226/389) entries shared via 13 shared snapshots (31 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 21% (255/1203) entries shared via 14 shared snapshots (42 times referenced)
    Managed files snapshot optimization: 79% (3340/4220) entries shared via 183 shared snapshots (759 times referenced)
    Managed missing snapshot optimization: 89% (4025/4500) entries shared via 196 shared snapshots (776 times referenced)

2023-09-01 20:15:30: webpack 5.88.2 compiled in 13479 ms (28a7a00a16d5e438)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1149.156716 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 49.091546 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1136 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 2.674123 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.541283 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/slide-toggle.mjs': 1.023869 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 2.969628 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 2.015257 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 2.849872 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/animations/fesm2022/browser.mjs': 1.015713 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 1.994273 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.032677 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/observable/ConnectableObservable.js': 1.464307 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|bdcffb4806b02a7f|runtime': 10.710089 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 5.252869 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 233.295998 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1136 items, 1 files, 39 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 338.77 kB |                85.20 kB
styles.css          | styles        |  82.22 kB |                 8.09 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 454.88 kB |               104.48 kB

Build at: 2023-09-02T00:15:37.733Z - Hash: 28a7a00a16d5e438 - Time: 21136ms
Done in 23.05s.
```
