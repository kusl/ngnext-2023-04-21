Mon Jul 31 03:46:02 PM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.3Gi       3.1Gi       352Mi       9.8Gi        12Gi
Swap:          8.0Gi       1.0Mi       8.0Gi
System Storage
751M	.
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
    
Done in 0.65s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.35s.
```
Latest version:     1.0.30001518
Installed version:  1.0.30001517
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001518
Installed version:  1.0.30001518
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.1.6/angular-webpack/dd479bc82a3d2a82c910ecb50d50561faf83bd3f.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.1.6/angular-webpack/dd479bc82a3d2a82c910ecb50d50561faf83bd3f/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1934.2381719999998 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
asset main.js 337 KiB {179} [emitted] (name: main)
asset styles.css 99 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 338 KiB = runtime.js 912 bytes main.js 337 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 99.9 KiB = runtime.js 912 bytes styles.css 99 KiB
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
    829 ms (resolving: 163 ms, restoring: 0 ms, integration: 0 ms, building: 666 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 103 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 103 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [262] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1071 ms (resolving: 32 ms, restoring: 0 ms, integration: 0 ms, building: 1039 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1072 ms (resolving: 120 ms, restoring: 0 ms, integration: 0 ms, building: 952 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.59885 ms
<t> runtime requirements.chunks: 0.60558 ms
<t> runtime requirements.entries: 1.573636 ms
<t> runtime requirements.modules: 0.027198 ms
<t> runtime requirements.chunks: 0.015435 ms
<t> runtime requirements.entries: 0.123247 ms
<t> finish module profiles: 6.929766 ms
<t> compute affected modules: 0.005022 ms
<t> finish modules: 17.610294 ms
<t> report dependency errors and warnings: 4.139166 ms
<t> optimize dependencies: 10.569109 ms
<t> create chunks: 3.565471 ms
<t> compute affected modules with chunk graph: 0.002919 ms
<t> optimize: 26.423408 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 10.270511 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 540.237641 ms
<t> runtime requirements.modules: 0.263975 ms
<t> runtime requirements.chunks: 0.134379 ms
<t> runtime requirements.entries: 0.523615 ms
<t> runtime requirements: 1.335854 ms
<t> hashing: initialize hash: 0.008199 ms
<t> hashing: sort chunks: 0.049508 ms
<t> hashing: hash runtime modules: 1.047753 ms
<t> hashing: hash chunks: 1.256157 ms
<t> hashing: hash digest: 0.038384 ms
<t> hashing: process full hash modules: 0.2623 ms
<t> hashing: 2.768389 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.064354 ms
<t> module assets: 0.182178 ms
<t> create chunk assets: 6.107283 ms
<t> process assets: 8794.036576 ms

LOG from webpack.Compiler
<t> make hook: 5918.168877 ms
<t> finish make hook: 0.097022 ms
<t> finish compilation: 28.715555 ms
<t> seal compilation: 9397.496369 ms
<t> afterCompile hook: 0.204219 ms
<t> emitAssets: 3.931657 ms
<t> emitRecords: 0.084846 ms
<t> done hook: 154.453547 ms
<t> beginIdle: 0.743495 ms

LOG from webpack.Compilation.ModuleProfile
     | 33 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 32 ms (parallelism 5.1) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 78 ms (parallelism 5.1) resolve to new modules > ./src/main.ts
     | 36 ms (parallelism 2) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 136 ms (parallelism 7.1) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 77 ms (parallelism 10.1) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 31 ms (parallelism 18.6) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/cdk.mjs
    899 ms resolve to new modules
     | 77 ms (parallelism 10.1) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    106 ms resolve to existing modules
     |  | 187 ms (parallelism 5.6) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 187 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 169 ms (parallelism 5.6) build modules > ./src/styles.scss?ngGlobalStyle
     | 169 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 30 ms (parallelism 5.1) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 30 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 142 ms (parallelism 5.7) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 142 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 134 ms (parallelism 5.7) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 101 ms (parallelism 2.2) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 166 ms (parallelism 7.3) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 218 ms (parallelism 6.7) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 168 ms (parallelism 7.2) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 165 ms (parallelism 7.2) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 164 ms (parallelism 7.2) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 54 ms (parallelism 11) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 90 ms (parallelism 11.6) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 85 ms (parallelism 10.6) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 79 ms (parallelism 9.9) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 82 ms (parallelism 10) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 84 ms (parallelism 10.3) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 81 ms (parallelism 9.9) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 96 ms (parallelism 12.1) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     |  | 104 ms (parallelism 12.6) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
<i>  | 1902 ms build modules > 22 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 113 ms (parallelism 5.9) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 93 ms (parallelism 13) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 94 ms (parallelism 13) build modules > ./node_modules/rxjs/dist/esm/index.js
     | 1359 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 204 ms (parallelism 4.7) build modules > ./src/main.ts
     |  | 135 ms (parallelism 7.1) build modules > ./src/app/app.component.ts
<i>  | 370 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i> 4164 ms build modules
+ 15 hidden lines

LOG from webpack.ResolverCachePlugin
    32% really resolved (563 real resolves with 0 cached but invalid, 1204 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.066786 ms
<t> figure out provided exports: 11.517133 ms
    95% of exports of modules have been determined (15 no declared exports, 259 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 1.538369 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 9.333913 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.132218 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.497417 ms
<t> trace exports usage in graph: 5.409122 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.665315 ms
<t> visitModules: visiting: 2.432241 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.51748 ms
<t> connectChunkGroups: 0.002928 ms
<t> cleanup: 0.00135 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.044169 ms
<t> modules: 2.456193 ms
<t> queue: 0.005461 ms
<t> maxSize: 0.037171 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.070652 ms
<t> sort relevant modules: 0.136754 ms
<t> find modules to concatenate: 6.132121 ms
<t> sort concat configurations: 0.045293 ms
<t> create concatenated modules: 6.259303 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 248.873337 ms
<t> optimize asset: polyfills.js: 639.918907 ms
<t> optimize asset: main.js: 8015.04608 ms
<t> optimize js assets: 8096.89364 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 14.638385 ms
<t> optimize css assets: 16.731805 ms

LOG from webpack.FileSystemInfo
    825 new snapshots created
    0% root snapshot uncached (0 / 1204)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 134 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3440/4079) entries shared via 3 shared snapshots (561 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 57% (223/389) entries shared via 11 shared snapshots (29 times referenced)
    Managed items info in cache: 78 items
    Managed items snapshot optimization: 20% (242/1197) entries shared via 12 shared snapshots (40 times referenced)
    Managed files snapshot optimization: 79% (3336/4213) entries shared via 184 shared snapshots (759 times referenced)
    Managed missing snapshot optimization: 89% (4027/4500) entries shared via 196 shared snapshots (776 times referenced)

2023-07-31 15:46:42: webpack 5.86.0 compiled in 17262 ms (b534422a4cc03ae7)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 873.655163 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 44.921914 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1136 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.80434 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 1.8676 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 2.908049 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.739962 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 2.857394 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 2.095049 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/observable/bindCallback.js': 1.550351 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators|request=|./filter': 1.862103 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/scheduler/AsapScheduler.js': 2.495785 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|bdcffb4806b02a7f|runtime': 10.002375 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 5.568623 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 232.020134 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1136 items, 1 files, 38 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 336.89 kB |                84.58 kB
styles.css          | styles        |  98.98 kB |                 8.94 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 469.77 kB |               104.71 kB

Build at: 2023-07-31T19:46:45.121Z - Hash: b534422a4cc03ae7 - Time: 19593ms
Done in 21.38s.
```
Mon Jul 31 03:47:03 PM EDT 2023
yarn version v1.22.19
info Current version: 0.0.84
info New version: 0.0.85
Done in 0.14s.
