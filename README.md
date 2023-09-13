Wed Sep 13 11:24:54 AM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.2Gi       3.5Gi       274Mi       9.6Gi        12Gi
Swap:          8.0Gi       1.0Mi       8.0Gi
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
    

Angular CLI: 16.2.1
Node: 18.17.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.4
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.1
@angular-devkit/build-angular   16.2.1
@angular-devkit/core            16.2.1
@angular-devkit/schematics      16.2.1
@angular/cdk                    16.2.3
@angular/cli                    16.2.1
@angular/material               16.2.3
@schematics/angular             16.2.1
rxjs                            7.8.0
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.57s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.40s.
```
Latest version:     1.0.30001534
Installed version:  1.0.30001532
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
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
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.2.2/angular-webpack/e3d76a33746101b932174de27faf32d44998750a.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.2.2/angular-webpack/e3d76a33746101b932174de27faf32d44998750a/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1829.9959159999999 ms
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
    1048 ms (resolving: 40 ms, restoring: 1 ms, integration: 0 ms, building: 1007 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 84.2 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 84.2 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [554] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1245 ms (resolving: 36 ms, restoring: 0 ms, integration: 0 ms, building: 1209 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1154 ms (resolving: 37 ms, restoring: 1 ms, integration: 0 ms, building: 1116 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.406986 ms
<t> runtime requirements.chunks: 0.412821 ms
<t> runtime requirements.entries: 1.461341 ms
<t> runtime requirements.modules: 0.026778 ms
<t> runtime requirements.chunks: 0.015275 ms
<t> runtime requirements.entries: 0.124999 ms
<t> finish module profiles: 13.008175 ms
<t> compute affected modules: 0.007182 ms
<t> finish modules: 16.004802 ms
<t> report dependency errors and warnings: 4.369537 ms
<t> optimize dependencies: 16.559532 ms
<t> create chunks: 5.464658 ms
<t> compute affected modules with chunk graph: 0.00348 ms
<t> optimize: 31.748497 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 7.871995 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 467.954621 ms
<t> runtime requirements.modules: 0.257056 ms
<t> runtime requirements.chunks: 0.128122 ms
<t> runtime requirements.entries: 0.494301 ms
<t> runtime requirements: 1.057948 ms
<t> hashing: initialize hash: 0.007376 ms
<t> hashing: sort chunks: 0.048604 ms
<t> hashing: hash runtime modules: 1.048824 ms
<t> hashing: hash chunks: 1.21714 ms
<t> hashing: hash digest: 0.056611 ms
<t> hashing: process full hash modules: 0.262678 ms
<t> hashing: 2.73877 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.063027 ms
<t> module assets: 0.16719 ms
<t> create chunk assets: 3.250445 ms
<t> process assets: 4698.942845 ms

LOG from webpack.Compiler
<t> make hook: 6453.042358 ms
<t> finish make hook: 0.140184 ms
<t> finish compilation: 33.430851 ms
<t> seal compilation: 5240.524951 ms
<t> afterCompile hook: 0.188709 ms
<t> emitAssets: 3.889456 ms
<t> emitRecords: 0.063811 ms
<t> done hook: 146.125642 ms
<t> beginIdle: 0.824929 ms

LOG from webpack.Compilation.ModuleProfile
     | 72 ms (parallelism 3.4) resolve to new modules > ./src/main.ts
     | 44 ms (parallelism 3.6) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 157 ms (parallelism 7.1) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 35 ms (parallelism 8) resolve to new modules > ./src/app/name-editor/name-editor.component.ts
     | 172 ms (parallelism 10.7) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 46 ms (parallelism 17) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/cdk.mjs
    1077 ms resolve to new modules
     | 55 ms (parallelism 15.2) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    92 ms resolve to existing modules
<i>  |  | 227 ms (parallelism 5.3) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 227 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 199 ms (parallelism 5.6) build modules > ./src/styles.scss?ngGlobalStyle
     | 199 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 174 ms (parallelism 5.7) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 123 ms (parallelism 1.9) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 195 ms (parallelism 7.3) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 175 ms (parallelism 9.4) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 191 ms (parallelism 7.3) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 194 ms (parallelism 7.3) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 194 ms (parallelism 7.3) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 78 ms (parallelism 11.9) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 91 ms (parallelism 10.9) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 88 ms (parallelism 10.9) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 87 ms (parallelism 10.9) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 93 ms (parallelism 10.9) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 105 ms (parallelism 12.9) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 109 ms (parallelism 13) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     |  | 109 ms (parallelism 13) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
<i>  | 2063 ms build modules > 22 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 173 ms (parallelism 5.8) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 100 ms (parallelism 13.3) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 99 ms (parallelism 13.3) build modules > ./node_modules/rxjs/dist/esm/index.js
     | 1470 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 107 ms (parallelism 6.2) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 107 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 260 ms (parallelism 4.9) build modules > ./src/main.ts
<i>  | 316 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i> 4413 ms build modules
+ 19 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (563 real resolves with 0 cached but invalid, 1260 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.150397 ms
<t> figure out provided exports: 8.799256 ms
    95% of exports of modules have been determined (15 no declared exports, 259 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 1.692498 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 13.748587 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.099028 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.546539 ms
<t> trace exports usage in graph: 11.418219 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 2.762069 ms
<t> visitModules: visiting: 4.045914 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 4.17179 ms
<t> connectChunkGroups: 0.003391 ms
<t> cleanup: 0.001708 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.070806 ms
<t> modules: 3.948648 ms
<t> queue: 0.01837 ms
<t> maxSize: 0.052689 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.69646 ms
<t> sort relevant modules: 0.213114 ms
<t> find modules to concatenate: 9.400593 ms
<t> sort concat configurations: 0.054391 ms
<t> create concatenated modules: 6.137379 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 341.724511 ms
<t> optimize asset: polyfills.js: 704.504036 ms
<t> optimize asset: main.js: 3918.147256 ms
<t> optimize js assets: 4004.885872 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 13.956588 ms
<t> optimize css assets: 20.817995 ms

LOG from webpack.FileSystemInfo
    825 new snapshots created
    0% root snapshot uncached (0 / 1260)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 134 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3440/4082) entries shared via 3 shared snapshots (561 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 58% (227/389) entries shared via 11 shared snapshots (30 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 18% (222/1203) entries shared via 11 shared snapshots (40 times referenced)
    Managed files snapshot optimization: 79% (3342/4220) entries shared via 184 shared snapshots (759 times referenced)
    Managed missing snapshot optimization: 87% (3895/4500) entries shared via 195 shared snapshots (776 times referenced)

2023-09-13 11:25:47: webpack 5.88.2 compiled in 13540 ms (3bcfd5f936742cc4)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1192.211573 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 46.544853 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1136 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 4.095951 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 2.032368 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 3.161968 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 2.371332 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/a11y.mjs': 1.179693 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 2.509941 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 2.3453 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.478012 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators/skipLast.js': 1.516007 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|bdcffb4806b02a7f|runtime': 10.180017 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 5.33295 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 253.844484 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1136 items, 1 files, 39 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 339.41 kB |                85.34 kB
styles.css          | styles        |  82.22 kB |                 8.09 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 455.52 kB |               104.63 kB

Build at: 2023-09-13T15:25:50.052Z - Hash: 3bcfd5f936742cc4 - Time: 16010ms
Done in 17.91s.
```
Wed Sep 13 11:26:10 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.115
info New version: 0.0.116
Done in 0.12s.
