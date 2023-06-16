Fri Jun 16 09:13:03 AM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       1.8Gi       3.1Gi       738Mi        10Gi        12Gi
Swap:          8.0Gi       0.0Ki       8.0Gi
System Storage
805M	.
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
Node: 18.16.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.1.0
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1601.0
@angular-devkit/build-angular   16.1.0
@angular-devkit/core            16.1.0
@angular-devkit/schematics      16.1.0
@schematics/angular             16.1.0
rxjs                            7.8.0
typescript                      5.0.4
    
Done in 0.57s.
yarn install v1.22.19
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
Done in 3.26s.
```
Latest version:     1.0.30001503
Installed versions: 1.0.30001502, 1.0.30001503
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001503
Installed version:  1.0.30001503
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.1.0/angular-webpack/61307edcaaa8900e419f2857d5f60d977ad12230.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.1.0/angular-webpack/61307edcaaa8900e419f2857d5f60d977ad12230/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1990.269409 ms
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
    875 ms (resolving: 347 ms, restoring: 0 ms, integration: 0 ms, building: 527 ms, storing: 1 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 112 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 112 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [262] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    897 ms (resolving: 32 ms, restoring: 0 ms, integration: 0 ms, building: 865 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    898 ms (resolving: 120 ms, restoring: 0 ms, integration: 0 ms, building: 778 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.421291 ms
<t> runtime requirements.chunks: 0.411794 ms
<t> runtime requirements.entries: 1.542391 ms
<t> runtime requirements.modules: 0.027762 ms
<t> runtime requirements.chunks: 0.015631 ms
<t> runtime requirements.entries: 0.122848 ms
<t> finish module profiles: 8.634186 ms
<t> compute affected modules: 0.005438 ms
<t> finish modules: 15.955994 ms
<t> report dependency errors and warnings: 4.246664 ms
<t> optimize dependencies: 14.591043 ms
<t> create chunks: 3.519917 ms
<t> compute affected modules with chunk graph: 0.004406 ms
<t> optimize: 30.849621 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 7.527188 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 460.824098 ms
<t> runtime requirements.modules: 0.33326 ms
<t> runtime requirements.chunks: 0.145131 ms
<t> runtime requirements.entries: 0.570721 ms
<t> runtime requirements: 1.286642 ms
<t> hashing: initialize hash: 0.011773 ms
<t> hashing: sort chunks: 0.06329 ms
<t> hashing: hash runtime modules: 1.143826 ms
<t> hashing: hash chunks: 1.348785 ms
<t> hashing: hash digest: 0.054475 ms
<t> hashing: process full hash modules: 0.261613 ms
<t> hashing: 3.015073 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.069077 ms
<t> module assets: 0.185015 ms
<t> create chunk assets: 3.380398 ms
<t> process assets: 9185.089708 ms

LOG from webpack.Compiler
<t> make hook: 5666.348192 ms
<t> finish make hook: 0.138225 ms
<t> finish compilation: 28.879995 ms
<t> seal compilation: 9712.431207 ms
<t> afterCompile hook: 0.197735 ms
<t> emitAssets: 4.182742 ms
<t> emitRecords: 0.063008 ms
<t> done hook: 171.091434 ms
<t> beginIdle: 0.789487 ms

LOG from webpack.Compilation.ModuleProfile
     | 57 ms (parallelism 6.1) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 56 ms (parallelism 6.2) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 74 ms (parallelism 5.9) resolve to new modules > ./src/main.ts
     | 38 ms (parallelism 2) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 40 ms (parallelism 4) resolve to new modules > ./node_modules/@angular/core/fesm2022/core.mjs
     | 40 ms (parallelism 4) resolve to new modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     | 37 ms (parallelism 8) resolve to new modules > ./src/app/name-editor/name-editor.component.ts
     | 183 ms (parallelism 11.9) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
    1037 ms resolve to new modules
     | 182 ms (parallelism 11.9) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    247 ms resolve to existing modules
     |  | 156 ms (parallelism 5.5) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 156 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 32 ms (parallelism 6.9) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 32 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 139 ms (parallelism 5.6) build modules > ./src/styles.scss?ngGlobalStyle
     | 139 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 56 ms (parallelism 6.3) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 56 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 127 ms (parallelism 4.9) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 106 ms (parallelism 3) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
<i>  |  | 205 ms (parallelism 8) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 194 ms (parallelism 10) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
<i>  |  | 211 ms (parallelism 8) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 210 ms (parallelism 8) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
<i>  |  | 204 ms (parallelism 8) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 151 ms (parallelism 12.6) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 125 ms (parallelism 10.2) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 130 ms (parallelism 10.1) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 133 ms (parallelism 10.3) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 130 ms (parallelism 10.2) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 93 ms (parallelism 10) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 129 ms (parallelism 10.1) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 132 ms (parallelism 10.4) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     |  | 132 ms (parallelism 10.8) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
<i>  | 2421 ms build modules > 22 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 108 ms (parallelism 4.9) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 131 ms (parallelism 10.9) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 131 ms (parallelism 10.9) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     | 552 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 191 ms (parallelism 4) build modules > ./src/main.ts
     | 230 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i> 3605 ms build modules
+ 13 hidden lines

LOG from webpack.ResolverCachePlugin
    32% really resolved (563 real resolves with 0 cached but invalid, 1212 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.120556 ms
<t> figure out provided exports: 9.134569 ms
    95% of exports of modules have been determined (15 no declared exports, 259 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 5 additional calculations due to dependencies)
<t> store provided exports into cache: 1.758834 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 9.757663 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 7.866591 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.743274 ms
<t> trace exports usage in graph: 5.534173 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.738365 ms
<t> visitModules: visiting: 2.506436 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.587273 ms
<t> connectChunkGroups: 0.004124 ms
<t> cleanup: 0.001287 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.038353 ms
<t> modules: 2.413773 ms
<t> queue: 0.004841 ms
<t> maxSize: 0.037744 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.056889 ms
<t> sort relevant modules: 0.145026 ms
<t> find modules to concatenate: 5.93806 ms
<t> sort concat configurations: 0.039387 ms
<t> create concatenated modules: 9.527144 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 244.235516 ms
<t> optimize asset: polyfills.js: 725.054014 ms
<t> optimize asset: main.js: 8340.878376 ms
<t> optimize js assets: 8422.721632 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 12.877855 ms
<t> optimize css assets: 14.895391 ms

LOG from webpack.FileSystemInfo
    825 new snapshots created
    0% root snapshot uncached (0 / 1212)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 134 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3433/4079) entries shared via 3 shared snapshots (560 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 57% (222/389) entries shared via 12 shared snapshots (30 times referenced)
    Managed items info in cache: 78 items
    Managed items snapshot optimization: 21% (246/1197) entries shared via 13 shared snapshots (42 times referenced)
    Managed files snapshot optimization: 79% (3326/4210) entries shared via 183 shared snapshots (758 times referenced)
    Managed missing snapshot optimization: 90% (4029/4500) entries shared via 197 shared snapshots (777 times referenced)

2023-06-16 09:13:59: webpack 5.86.0 compiled in 17381 ms (a604070c055f574a)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 994.149739 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 52.92615 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1136 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 2.449572 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.838878 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 3.057295 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.771633 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 2.961243 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/a11y.mjs': 1.572079 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 2.463051 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.122359 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators/zip.js': 2.560638 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/observable/bindCallback.js': 1.366543 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators|request=|./distinctUntilChanged': 2.083583 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|bdcffb4806b02a7f|runtime': 10.475961 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 5.26404 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 251.250882 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1136 items, 1 files, 38 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 337.26 kB |                84.75 kB
styles.css          | styles        | 104.77 kB |                 9.55 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 475.93 kB |               105.50 kB

Build at: 2023-06-16T13:14:08.291Z - Hash: a604070c055f574a - Time: 26239ms
Done in 28.57s.
```
