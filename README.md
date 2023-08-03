Thu Aug  3 02:08:03 PM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.3Gi       2.8Gi       319Mi        10Gi        12Gi
Swap:          8.0Gi        37Mi       8.0Gi
System Storage
950M	.
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
    

Angular CLI: 16.1.6
Node: 18.17.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.1.7
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1601.6
@angular-devkit/build-angular   16.1.6
@angular-devkit/core            16.1.6
@angular-devkit/schematics      16.1.6
@angular/cdk                    16.1.6
@angular/cli                    16.1.6
@angular/material               16.1.6
@schematics/angular             16.1.6
rxjs                            7.8.0
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.56s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.38s.
```
Latest version:     1.0.30001519
Installed version:  1.0.30001518
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
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
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.1.7/angular-webpack/28477c93dad590174be5eb4e2f822b5eeaad5a6a.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.1.7/angular-webpack/28477c93dad590174be5eb4e2f822b5eeaad5a6a/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1912.261274 ms
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
chunk {179} (runtime: runtime) main.js (main) 2.57 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2022/init.mjs + 1 modules [614] 38 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 114 modules [368] 2.54 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    810 ms (resolving: 171 ms, restoring: 0 ms, integration: 0 ms, building: 639 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 103 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 103 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [262] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1082 ms (resolving: 33 ms, restoring: 1 ms, integration: 0 ms, building: 1048 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1080 ms (resolving: 135 ms, restoring: 0 ms, integration: 0 ms, building: 945 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.413264 ms
<t> runtime requirements.chunks: 0.403686 ms
<t> runtime requirements.entries: 1.469427 ms
<t> runtime requirements.modules: 0.026177 ms
<t> runtime requirements.chunks: 0.015352 ms
<t> runtime requirements.entries: 0.129806 ms
<t> finish module profiles: 7.254679 ms
<t> compute affected modules: 0.004671 ms
<t> finish modules: 17.743237 ms
<t> report dependency errors and warnings: 4.474485 ms
<t> optimize dependencies: 13.198008 ms
<t> create chunks: 3.577693 ms
<t> compute affected modules with chunk graph: 0.003012 ms
<t> optimize: 29.134419 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 7.878006 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 571.133786 ms
<t> runtime requirements.modules: 0.213088 ms
<t> runtime requirements.chunks: 0.35398 ms
<t> runtime requirements.entries: 1.108378 ms
<t> runtime requirements: 2.474804 ms
<t> hashing: initialize hash: 0.009997 ms
<t> hashing: sort chunks: 0.10497 ms
<t> hashing: hash runtime modules: 1.545781 ms
<t> hashing: hash chunks: 2.072045 ms
<t> hashing: hash digest: 0.041333 ms
<t> hashing: process full hash modules: 0.161954 ms
<t> hashing: 4.556721 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.06163 ms
<t> module assets: 0.293311 ms
<t> create chunk assets: 5.411434 ms
<t> process assets: 8731.095916 ms

LOG from webpack.Compiler
<t> make hook: 5990.710568 ms
<t> finish make hook: 0.099873 ms
<t> finish compilation: 29.510073 ms
<t> seal compilation: 9371.690766 ms
<t> afterCompile hook: 0.25252 ms
<t> emitAssets: 4.124469 ms
<t> emitRecords: 0.067335 ms
<t> done hook: 147.653059 ms
<t> beginIdle: 0.812017 ms

LOG from webpack.Compilation.ModuleProfile
     | 34 ms (parallelism 5.1) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 33 ms (parallelism 5.2) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 84 ms (parallelism 5.1) resolve to new modules > ./src/main.ts
     | 108 ms (parallelism 2.8) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 127 ms (parallelism 8) resolve to new modules > ./src/app/name-editor/name-editor.component.ts
     | 162 ms (parallelism 10.1) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 33 ms (parallelism 14.9) resolve to new modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     | 33 ms (parallelism 14.9) resolve to new modules > ./node_modules/@angular/common/fesm2022/http.mjs
     | 36 ms (parallelism 14.5) resolve to new modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     | 37 ms (parallelism 14.5) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 49 ms (parallelism 13) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/platform.mjs
     | 49 ms (parallelism 13) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/bidi.mjs
     | 49 ms (parallelism 13) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/keycodes.mjs
     | 90 ms (parallelism 13.6) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/cdk.mjs
    1228 ms resolve to new modules
     | 162 ms (parallelism 10.1) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    193 ms resolve to existing modules
     |  | 196 ms (parallelism 5.3) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 196 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 39 ms (parallelism 5.2) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 39 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 176 ms (parallelism 5.4) build modules > ./src/styles.scss?ngGlobalStyle
     | 176 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 108 ms (parallelism 5.6) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 108 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 118 ms (parallelism 5.5) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 149 ms (parallelism 8) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 166 ms (parallelism 8.7) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 150 ms (parallelism 8) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 148 ms (parallelism 8.1) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 147 ms (parallelism 8) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 48 ms (parallelism 13.4) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 101 ms (parallelism 11.7) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 103 ms (parallelism 11.9) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 104 ms (parallelism 11.9) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 97 ms (parallelism 11.7) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 101 ms (parallelism 11.8) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 105 ms (parallelism 12) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     |  | 105 ms (parallelism 12.5) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 1730 ms build modules > 22 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 115 ms (parallelism 5.5) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 96 ms (parallelism 12.8) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 96 ms (parallelism 12.8) build modules > ./node_modules/rxjs/dist/esm/index.js
     | 1439 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 192 ms (parallelism 4.6) build modules > ./src/main.ts
     |  | 37 ms (parallelism 14.4) build modules > ./src/app/name-editor/name-editor.component.ts
     | 263 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i> 3960 ms build modules
+ 9 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (563 real resolves with 0 cached but invalid, 1255 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 3.838049 ms
<t> figure out provided exports: 8.644045 ms
    95% of exports of modules have been determined (15 no declared exports, 259 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 1.527933 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 10.135307 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.101465 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.865346 ms
<t> trace exports usage in graph: 7.745599 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.682695 ms
<t> visitModules: visiting: 2.474894 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.558743 ms
<t> connectChunkGroups: 0.00255 ms
<t> cleanup: 0.001119 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.048873 ms
<t> modules: 2.59675 ms
<t> queue: 0.004908 ms
<t> maxSize: 0.037074 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.241211 ms
<t> sort relevant modules: 0.15278 ms
<t> find modules to concatenate: 5.871202 ms
<t> sort concat configurations: 0.03685 ms
<t> create concatenated modules: 8.795741 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 238.88138 ms
<t> optimize asset: polyfills.js: 790.126736 ms
<t> optimize asset: main.js: 7956.678715 ms
<t> optimize js assets: 8043.303992 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 18.48271 ms
<t> optimize css assets: 24.779982 ms

LOG from webpack.FileSystemInfo
    825 new snapshots created
    0% root snapshot uncached (0 / 1255)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 134 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3440/4079) entries shared via 3 shared snapshots (561 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 53% (207/389) entries shared via 10 shared snapshots (29 times referenced)
    Managed items info in cache: 78 items
    Managed items snapshot optimization: 18% (220/1197) entries shared via 10 shared snapshots (39 times referenced)
    Managed files snapshot optimization: 79% (3336/4213) entries shared via 184 shared snapshots (759 times referenced)
    Managed missing snapshot optimization: 86% (3891/4500) entries shared via 194 shared snapshots (776 times referenced)

2023-08-03 14:08:59: webpack 5.86.0 compiled in 17289 ms (5b36ab683f4cc25e)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 815.324575 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 41.539837 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1136 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.838878 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 1.837731 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 3.056436 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.870414 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 2.807881 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/animations/fesm2022/browser.mjs': 2.236163 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/a11y.mjs': 1.326257 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 2.294545 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.027065 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators/skipUntil.js': 1.56317 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/observable|request=|../util/lift': 2.115673 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|bdcffb4806b02a7f|runtime': 14.749542 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 5.298678 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 234.886504 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1136 items, 1 files, 38 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 336.89 kB |                84.55 kB
styles.css          | styles        |  98.87 kB |                 8.92 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 469.66 kB |               104.67 kB

Build at: 2023-08-03T18:09:01.621Z - Hash: 5b36ab683f4cc25e - Time: 19288ms
Done in 21.27s.
```
Thu Aug  3 02:09:19 PM EDT 2023
yarn version v1.22.19
info Current version: 0.0.88
info New version: 0.0.89
Done in 0.12s.
