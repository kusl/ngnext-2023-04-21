Thu Jun 22 09:08:36 AM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.2Gi       1.6Gi       537Mi        10Gi        11Gi
Swap:          8.0Gi       2.0Mi       8.0Gi
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
    

Angular CLI: 16.1.0
Node: 18.16.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.1.1
... animations, cdk, common, compiler, compiler-cli, core, forms
... localize, material, platform-browser
... platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1601.0
@angular-devkit/build-angular   16.1.0
@angular-devkit/core            16.1.0
@angular-devkit/schematics      16.1.0
@angular/cli                    16.1.0
@schematics/angular             16.1.0
rxjs                            7.8.0
typescript                      5.0.4
    
Done in 0.60s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.36s.
```
Latest version:     1.0.30001506
Installed version:  1.0.30001504
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001506
Installed version:  1.0.30001506
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.1.0/angular-webpack/2e2d5f6623fcfab96fbe2f920b62a71f7f5d3be4.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.1.0/angular-webpack/2e2d5f6623fcfab96fbe2f920b62a71f7f5d3be4/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 2069.403104 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
asset main.js 337 KiB {179} [emitted] (name: main)
asset styles.css 105 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 338 KiB = runtime.js 912 bytes main.js 337 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 106 KiB = runtime.js 912 bytes styles.css 105 KiB
chunk {179} (runtime: runtime) main.js (main) 2.57 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2022/init.mjs + 1 modules [614] 38 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 114 modules [368] 2.53 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    924 ms (resolving: 162 ms, restoring: 0 ms, integration: 0 ms, building: 762 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 112 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 112 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [262] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1187 ms (resolving: 32 ms, restoring: 0 ms, integration: 0 ms, building: 1155 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1190 ms (resolving: 120 ms, restoring: 0 ms, integration: 0 ms, building: 1070 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.403246 ms
<t> runtime requirements.chunks: 0.450493 ms
<t> runtime requirements.entries: 1.535138 ms
<t> runtime requirements.modules: 0.0266 ms
<t> runtime requirements.chunks: 0.015311 ms
<t> runtime requirements.entries: 0.125778 ms
<t> finish module profiles: 14.239641 ms
<t> compute affected modules: 0.301012 ms
<t> finish modules: 17.629389 ms
<t> report dependency errors and warnings: 4.441825 ms
<t> optimize dependencies: 15.340147 ms
<t> create chunks: 5.176472 ms
<t> compute affected modules with chunk graph: 0.111666 ms
<t> optimize: 28.501502 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 8.343799 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 552.397118 ms
<t> runtime requirements.modules: 0.209667 ms
<t> runtime requirements.chunks: 0.33796 ms
<t> runtime requirements.entries: 1.072921 ms
<t> runtime requirements: 2.455344 ms
<t> hashing: initialize hash: 0.010159 ms
<t> hashing: sort chunks: 0.105172 ms
<t> hashing: hash runtime modules: 1.507232 ms
<t> hashing: hash chunks: 2.097759 ms
<t> hashing: hash digest: 0.04102 ms
<t> hashing: process full hash modules: 0.163886 ms
<t> hashing: 4.475976 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.061742 ms
<t> module assets: 0.282743 ms
<t> create chunk assets: 5.198402 ms
<t> process assets: 8685.232452 ms

LOG from webpack.Compiler
<t> make hook: 6868.43117 ms
<t> finish make hook: 0.361772 ms
<t> finish compilation: 37.430891 ms
<t> seal compilation: 9310.060393 ms
<t> afterCompile hook: 0.215574 ms
<t> emitAssets: 3.956378 ms
<t> emitRecords: 0.062416 ms
<t> done hook: 139.393739 ms
<t> beginIdle: 0.780721 ms

LOG from webpack.Compilation.ModuleProfile
     | 32 ms (parallelism 5.1) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 31 ms (parallelism 5.2) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 81 ms (parallelism 5.1) resolve to new modules > ./src/main.ts
     | 107 ms (parallelism 2.2) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
<i>  | 201 ms (parallelism 7.9) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 80 ms (parallelism 10.4) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 53 ms (parallelism 13) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/bidi.mjs
     | 53 ms (parallelism 13) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/platform.mjs
     | 53 ms (parallelism 13) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/keycodes.mjs
     | 61 ms (parallelism 14.8) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/cdk.mjs
<i> 1215 ms resolve to new modules
     | 63 ms (parallelism 11.1) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    85 ms resolve to existing modules
<i>  |  | 208 ms (parallelism 5.5) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 208 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 38 ms (parallelism 5.2) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 38 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 191 ms (parallelism 5.6) build modules > ./src/styles.scss?ngGlobalStyle
     | 191 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 164 ms (parallelism 5.7) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 164 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 132 ms (parallelism 5.9) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
<i>  |  | 216 ms (parallelism 7.9) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 258 ms (parallelism 7.6) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
<i>  |  | 210 ms (parallelism 7.9) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
<i>  |  | 254 ms (parallelism 7.7) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
<i>  |  | 254 ms (parallelism 7.7) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 62 ms (parallelism 11) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 68 ms (parallelism 11.7) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 106 ms (parallelism 11.3) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 108 ms (parallelism 11.3) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 100 ms (parallelism 11.6) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     |  | 110 ms (parallelism 11.9) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 105 ms (parallelism 11.8) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 100 ms (parallelism 11.7) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 111 ms (parallelism 11.9) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
<i>  | 2242 ms build modules > 22 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 131 ms (parallelism 5.8) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 97 ms (parallelism 12.4) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 97 ms (parallelism 12.4) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     | 1542 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 200 ms (parallelism 4.9) build modules > ./src/main.ts
     |  | 179 ms (parallelism 8) build modules > ./src/app/app-routing.module.ts
     |  | 179 ms (parallelism 8) build modules > ./src/app/app.component.ts
<i>  | 594 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
     |  | 52 ms (parallelism 1.8) build modules > ./node_modules/tslib/tslib.es6.js
     | 52 ms build modules > 1 x javascript/auto
<w> 5032 ms build modules
+ 15 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (563 real resolves with 0 cached but invalid, 1259 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.657847 ms
<t> figure out provided exports: 9.262231 ms
    95% of exports of modules have been determined (15 no declared exports, 259 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 1.640325 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 9.769154 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.330511 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.714787 ms
<t> trace exports usage in graph: 9.430519 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.811439 ms
<t> visitModules: visiting: 2.955212 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 3.636076 ms
<t> connectChunkGroups: 0.088844 ms
<t> cleanup: 0.03543 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.032916 ms
<t> modules: 2.540678 ms
<t> queue: 0.005931 ms
<t> maxSize: 0.041782 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.267116 ms
<t> sort relevant modules: 0.154093 ms
<t> find modules to concatenate: 6.030301 ms
<t> sort concat configurations: 0.038669 ms
<t> create concatenated modules: 6.297074 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 225.981896 ms
<t> optimize asset: polyfills.js: 708.904003 ms
<t> optimize asset: main.js: 7920.237434 ms
<t> optimize js assets: 8008.362647 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 14.861143 ms
<t> optimize css assets: 21.533357 ms

LOG from webpack.FileSystemInfo
    825 new snapshots created
    0% root snapshot uncached (0 / 1259)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 134 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3440/4079) entries shared via 3 shared snapshots (561 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 55% (215/389) entries shared via 10 shared snapshots (30 times referenced)
    Managed items info in cache: 78 items
    Managed items snapshot optimization: 20% (234/1197) entries shared via 11 shared snapshots (41 times referenced)
    Managed files snapshot optimization: 79% (3336/4213) entries shared via 184 shared snapshots (759 times referenced)
    Managed missing snapshot optimization: 86% (3875/4500) entries shared via 192 shared snapshots (781 times referenced)

2023-06-22 09:09:30: webpack 5.86.0 compiled in 18269 ms (b240ec51002d2a9b)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 933.24873 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 49.955834 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1136 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.381719 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 2.661422 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 3.910514 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 2.138396 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 3.068377 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 2.723607 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/a11y.mjs': 1.754955 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.063931 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators/skipUntil.js': 1.459546 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/observable|request=|./innerFrom': 2.146088 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|bdcffb4806b02a7f|runtime': 12.298506 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 7.0645 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 246.892808 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1136 items, 1 files, 38 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 337.07 kB |                84.73 kB
styles.css          | styles        | 104.77 kB |                 9.55 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 475.74 kB |               105.48 kB

Build at: 2023-06-22T13:09:32.395Z - Hash: b240ec51002d2a9b - Time: 20471ms
Done in 22.28s.
```
