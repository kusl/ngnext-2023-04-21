Sat Aug  5 10:00:34 AM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.9Gi       2.8Gi       594Mi       9.6Gi        11Gi
Swap:          8.0Gi       879Mi       7.1Gi
System Storage
712M	.
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
    

Angular CLI: 16.1.7
Node: 18.17.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.1.8
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1601.7
@angular-devkit/build-angular   16.1.7
@angular-devkit/core            16.1.7
@angular-devkit/schematics      16.1.7
@angular/cdk                    16.1.7
@angular/cli                    16.1.7
@angular/material               16.1.7
@schematics/angular             16.1.7
rxjs                            7.8.0
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.59s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.42s.
```
Latest version:     1.0.30001519
Installed version:  1.0.30001519
caniuse-lite is up to date
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
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.1.8/angular-webpack/55636706dd2b2107ea618019468c5b681b3a7bef.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.1.8/angular-webpack/55636706dd2b2107ea618019468c5b681b3a7bef/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 2180.150121 ms
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
    1063 ms (resolving: 209 ms, restoring: 1 ms, integration: 0 ms, building: 853 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 103 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 103 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [262] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1432 ms (resolving: 41 ms, restoring: 0 ms, integration: 0 ms, building: 1391 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1428 ms (resolving: 147 ms, restoring: 0 ms, integration: 0 ms, building: 1281 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.798955 ms
<t> runtime requirements.chunks: 0.732842 ms
<t> runtime requirements.entries: 2.337814 ms
<t> runtime requirements.modules: 0.092504 ms
<t> runtime requirements.chunks: 0.031144 ms
<t> runtime requirements.entries: 0.200322 ms
<t> finish module profiles: 8.51308 ms
<t> compute affected modules: 0.006538 ms
<t> finish modules: 20.855371 ms
<t> report dependency errors and warnings: 4.814504 ms
<t> optimize dependencies: 12.178293 ms
<t> create chunks: 4.093418 ms
<t> compute affected modules with chunk graph: 0.004071 ms
<t> optimize: 28.59238 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 11.778836 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 624.85064 ms
<t> runtime requirements.modules: 0.231096 ms
<t> runtime requirements.chunks: 0.399744 ms
<t> runtime requirements.entries: 1.169087 ms
<t> runtime requirements: 2.756482 ms
<t> hashing: initialize hash: 0.010003 ms
<t> hashing: sort chunks: 0.114615 ms
<t> hashing: hash runtime modules: 1.594324 ms
<t> hashing: hash chunks: 2.192921 ms
<t> hashing: hash digest: 0.043336 ms
<t> hashing: process full hash modules: 0.17802 ms
<t> hashing: 4.766667 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.07288 ms
<t> module assets: 0.354435 ms
<t> create chunk assets: 5.661758 ms
<t> process assets: 9380.810342 ms

LOG from webpack.Compiler
<t> make hook: 7159.718136 ms
<t> finish make hook: 0.139469 ms
<t> finish compilation: 34.242527 ms
<t> seal compilation: 10078.562019 ms
<t> afterCompile hook: 0.186744 ms
<t> emitAssets: 4.223288 ms
<t> emitRecords: 0.092455 ms
<t> done hook: 163.56322 ms
<t> beginIdle: 0.853907 ms

LOG from webpack.Compilation.ModuleProfile
     | 42 ms (parallelism 5.1) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 40 ms (parallelism 5.2) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 106 ms (parallelism 5.1) resolve to new modules > ./src/main.ts
     | 125 ms (parallelism 2.2) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 146 ms (parallelism 8) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 33 ms (parallelism 8) resolve to new modules > ./src/app/name-editor/name-editor.component.ts
     | 170 ms (parallelism 11.4) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 31 ms (parallelism 19.3) resolve to new modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     | 31 ms (parallelism 19.2) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 32 ms (parallelism 20.3) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/cdk.mjs
    1273 ms resolve to new modules
     | 57 ms (parallelism 15.5) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    107 ms resolve to existing modules
<i>  |  | 275 ms (parallelism 5.1) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 275 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 253 ms (parallelism 5.1) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 253 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 44 ms (parallelism 5.1) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 44 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 80 ms (parallelism 5.2) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 80 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 194 ms (parallelism 5.1) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 181 ms (parallelism 8) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 170 ms (parallelism 10.1) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 184 ms (parallelism 8) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 179 ms (parallelism 8) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 180 ms (parallelism 8) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 35 ms (parallelism 18.3) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 41 ms (parallelism 13.8) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 114 ms (parallelism 9.3) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 107 ms (parallelism 9.4) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 107 ms (parallelism 9.4) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 122 ms (parallelism 9.1) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 116 ms (parallelism 9.2) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 120 ms (parallelism 9.4) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     |  | 123 ms (parallelism 12.8) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
<i>  | 2061 ms build modules > 22 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 167 ms (parallelism 5.1) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 116 ms (parallelism 13) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 116 ms (parallelism 13.1) build modules > ./node_modules/rxjs/dist/esm/index.js
     | 1650 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 267 ms (parallelism 4.3) build modules > ./src/main.ts
     |  | 143 ms (parallelism 8) build modules > ./src/app/app.component.ts
<i>  | 463 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i> 4835 ms build modules
+ 20 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (563 real resolves with 0 cached but invalid, 1258 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.185025 ms
<t> figure out provided exports: 13.482448 ms
    95% of exports of modules have been determined (15 no declared exports, 259 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 1.905734 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 11.539699 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.889097 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.616484 ms
<t> trace exports usage in graph: 6.158317 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 2.101165 ms
<t> visitModules: visiting: 2.97752 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 3.072589 ms
<t> connectChunkGroups: 0.005437 ms
<t> cleanup: 0.002411 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.046108 ms
<t> modules: 2.693507 ms
<t> queue: 0.006074 ms
<t> maxSize: 0.050457 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.136734 ms
<t> sort relevant modules: 0.157911 ms
<t> find modules to concatenate: 6.213667 ms
<t> sort concat configurations: 0.040327 ms
<t> create concatenated modules: 7.089852 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 279.302657 ms
<t> optimize asset: polyfills.js: 788.938928 ms
<t> optimize asset: main.js: 8540.205099 ms
<t> optimize js assets: 8634.883943 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 12.618605 ms
<t> optimize css assets: 14.360496 ms

LOG from webpack.FileSystemInfo
    825 new snapshots created
    0% root snapshot uncached (0 / 1258)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 134 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3440/4079) entries shared via 3 shared snapshots (561 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 58% (227/389) entries shared via 11 shared snapshots (30 times referenced)
    Managed items info in cache: 78 items
    Managed items snapshot optimization: 18% (217/1197) entries shared via 11 shared snapshots (38 times referenced)
    Managed files snapshot optimization: 79% (3336/4213) entries shared via 184 shared snapshots (759 times referenced)
    Managed missing snapshot optimization: 87% (3895/4500) entries shared via 195 shared snapshots (776 times referenced)

2023-08-05 10:01:25: webpack 5.86.0 compiled in 19433 ms (5b36ab683f4cc25e)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 871.748531 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 46.446294 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1136 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 3.174133 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 3.532656 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 3.078863 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 2.442438 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 2.03623 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 3.19998 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.404047 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm|request=|./internal/util/pipe': 1.206959 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators/skipUntil.js': 1.42157 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/observable|request=|../util/argsArgArrayOrObject': 1.922979 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'FlagDependencyExportsPlugin|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/animations/fesm2022/browser.mjs': 2.946464 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|bdcffb4806b02a7f|runtime': 11.932315 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 6.044645 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 275.942854 ms
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

Build at: 2023-08-05T14:01:27.856Z - Hash: 5b36ab683f4cc25e - Time: 21453ms
Done in 23.54s.
```
