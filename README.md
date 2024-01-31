Wed Jan 31 03:28:34 PM EST 2024

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       4.6Gi       1.2Gi       1.2Gi        11Gi        10Gi
Swap:          8.0Gi       768Ki       8.0Gi
System Storage
1.6G	.
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
    

Angular CLI: 17.1.1
Node: 20.11.0
Package Manager: yarn 1.22.21
OS: linux x64

Angular: 17.1.1
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1701.1
@angular-devkit/build-angular   17.1.1
@angular-devkit/core            17.1.1
@angular-devkit/schematics      17.1.1
@schematics/angular             17.1.1
rxjs                            7.8.0
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.52s.
yarn install v1.22.21
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.36s.
```
```bash
Latest version:     1.0.30001581
Installed version:  1.0.30001581
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.21
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/17.1.1/angular-webpack/8031c57e93b576b06acb6c61983b312c4bcf2422.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/17.1.1/angular-webpack/8031c57e93b576b06acb6c61983b312c4bcf2422/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 2629.024818 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
asset main.js 344 KiB {179} [emitted] (name: main)
asset styles.css 76.1 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 345 KiB = runtime.js 912 bytes main.js 344 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 77 KiB = runtime.js 912 bytes styles.css 76.1 KiB
chunk {179} (runtime: runtime) main.js (main) 2.81 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2022/init.mjs + 1 modules [614] 29.9 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 114 modules [515] 2.78 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:15
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1551 ms (resolving: 45 ms, restoring: 1 ms, integration: 0 ms, building: 1505 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 78.4 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 78.4 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [554] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1804 ms (resolving: 40 ms, restoring: 0 ms, integration: 0 ms, building: 1764 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1693 ms (resolving: 41 ms, restoring: 1 ms, integration: 0 ms, building: 1651 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.541913 ms
<t> runtime requirements.chunks: 0.539092 ms
<t> runtime requirements.entries: 1.919587 ms
<t> runtime requirements.modules: 0.035911 ms
<t> runtime requirements.chunks: 0.020693 ms
<t> runtime requirements.entries: 0.203994 ms
<t> finish module profiles: 16.322096 ms
<t> compute affected modules: 0.009606 ms
<t> finish modules: 27.527001 ms
<t> report dependency errors and warnings: 10.342424 ms
<t> optimize dependencies: 17.196981 ms
<t> create chunks: 5.8418 ms
<t> compute affected modules with chunk graph: 0.009275 ms
<t> optimize: 46.213734 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 11.818185 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 823.546908 ms
<t> runtime requirements.modules: 0.290479 ms
<t> runtime requirements.chunks: 0.10336 ms
<t> runtime requirements.entries: 0.677904 ms
<t> runtime requirements: 1.341953 ms
<t> hashing: initialize hash: 0.008556 ms
<t> hashing: sort chunks: 0.074934 ms
<t> hashing: hash runtime modules: 1.439718 ms
<t> hashing: hash chunks: 1.797402 ms
<t> hashing: hash digest: 0.02308 ms
<t> hashing: process full hash modules: 0.29727 ms
<t> hashing: 3.79886 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.093496 ms
<t> module assets: 0.219709 ms
<t> create chunk assets: 4.111002 ms
<t> process assets: 7276.548967 ms

LOG from webpack.Compiler
<t> make hook: 7636.94411 ms
<t> finish make hook: 0.152743 ms
<t> finish compilation: 54.270106 ms
<t> seal compilation: 8193.268884 ms
<t> afterCompile hook: 0.091766 ms
<t> emitAssets: 4.043386 ms
<t> emitRecords: 0.066991 ms
<t> done hook: 133.404607 ms
<t> beginIdle: 0.538998 ms

LOG from webpack.Compilation.ModuleProfile
     | 87 ms (parallelism 3.3) resolve to new modules > ./src/main.ts
     | 32 ms (parallelism 2.7) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
<i>  | 242 ms (parallelism 10.4) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 50 ms (parallelism 16) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     | 46 ms (parallelism 16.2) resolve to new modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     | 46 ms (parallelism 16.2) resolve to new modules > ./node_modules/@angular/common/fesm2022/http.mjs
     | 57 ms (parallelism 15.4) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 51 ms (parallelism 19.8) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/cdk.mjs
     | 123 ms (parallelism 16.8) resolve to new modules > ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
<i> 1181 ms resolve to new modules
     | 31 ms (parallelism 22) resolve to existing modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  | 242 ms (parallelism 10.4) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
<i> 326 ms resolve to existing modules
<i>  |  | 313 ms (parallelism 5.6) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 313 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 281 ms (parallelism 5.9) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 281 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 267 ms (parallelism 6) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
<i>  |  | 217 ms (parallelism 1.7) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
<i>  |  | 234 ms (parallelism 8.8) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
<i>  |  | 237 ms (parallelism 8.9) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 243 ms (parallelism 10.4) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
<i>  |  | 234 ms (parallelism 8.8) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
<i>  |  | 233 ms (parallelism 8.8) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
<i>  |  | 243 ms (parallelism 11.1) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 106 ms (parallelism 13.6) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 78 ms (parallelism 11) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 71 ms (parallelism 11.4) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 72 ms (parallelism 11.6) build modules > ./node_modules/@angular/core/fesm2022/primitives/signals.mjs
     |  | 96 ms (parallelism 15.9) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 92 ms (parallelism 16.1) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 85 ms (parallelism 16.1) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 39 ms (parallelism 22.5) build modules > ./node_modules/@angular/cdk/fesm2022/bidi.mjs
     |  | 38 ms (parallelism 23) build modules > ./node_modules/@angular/cdk/fesm2022/platform.mjs
     |  | 40 ms (parallelism 21.4) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 38 ms (parallelism 22.8) build modules > ./node_modules/@angular/cdk/fesm2022/keycodes.mjs
<i>  | 2682 ms build modules > 23 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 247 ms (parallelism 6.1) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 52 ms (parallelism 18.7) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 53 ms (parallelism 18.7) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
<i>  | 651 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 226 ms (parallelism 6.2) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 226 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 34 ms (parallelism 7) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 34 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 324 ms (parallelism 5.5) build modules > ./src/main.ts
<i>  |  | 206 ms (parallelism 9.1) build modules > ./src/app/name-editor/name-editor.component.ts
<i>  | 545 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i> 4753 ms build modules
+ 14 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (564 real resolves with 0 cached but invalid, 1251 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.667099 ms
<t> figure out provided exports: 17.140716 ms
    95% of exports of modules have been determined (15 no declared exports, 260 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 5 additional calculations due to dependencies)
<t> store provided exports into cache: 2.792201 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 17.620878 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 6.877254 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.902125 ms
<t> trace exports usage in graph: 8.509584 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 2.61148 ms
<t> visitModules: visiting: 3.93785 ms
    270 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 4.131727 ms
<t> connectChunkGroups: 0.005237 ms
<t> cleanup: 0.002466 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.063251 ms
<t> modules: 4.02893 ms
<t> queue: 0.009377 ms
<t> maxSize: 0.069428 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 5.344465 ms
<t> sort relevant modules: 0.393168 ms
<t> find modules to concatenate: 7.92649 ms
<t> sort concat configurations: 0.056803 ms
<t> create concatenated modules: 10.10165 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 254.064212 ms
<t> optimize asset: polyfills.js: 1064.345446 ms
<t> optimize asset: main.js: 6270.783452 ms
<t> optimize js assets: 6370.924055 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 18.375239 ms
<t> optimize css assets: 19.058326 ms

LOG from webpack.FileSystemInfo
    827 new snapshots created
    0% root snapshot uncached (0 / 1251)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 130 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3447/4091) entries shared via 3 shared snapshots (562 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 57% (228/403) entries shared via 11 shared snapshots (33 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 21% (247/1202) entries shared via 15 shared snapshots (43 times referenced)
    Managed files snapshot optimization: 79% (3339/4226) entries shared via 183 shared snapshots (759 times referenced)
    Managed missing snapshot optimization: 87% (3895/4497) entries shared via 195 shared snapshots (774 times referenced)

2024-01-31 15:29:25: webpack 5.89.0 compiled in 18488 ms (dcc7a4947e77cd79)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 2213.160053 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 69.741526 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1138 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.326162 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 3.867648 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/slide-toggle.mjs': 1.026954 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/progress-spinner.mjs': 1.154368 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 3.302806 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 2.034078 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 2.466925 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/a11y.mjs': 1.937024 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/animations/fesm2022/browser.mjs': 1.163916 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/http.mjs': 1.175672 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 2.802706 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.302427 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/platform.mjs': 1.313653 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators/mergeWith.js': 1.982295 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators/withLatestFrom.js': 2.460292 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|7ff5cd077499eca3|runtime': 15.266839 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 8.56595 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 295.291286 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1138 items, 1 files, 41 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 344.35 kB |                86.35 kB
styles.css          | styles        |  76.13 kB |                 7.22 kB
polyfills.js        | polyfills     |  32.97 kB |                10.63 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 454.34 kB |               104.71 kB

Build at: 2024-01-31T20:29:28.291Z - Hash: dcc7a4947e77cd79 - Time: 21616ms
Done in 23.53s.
```
Wed Jan 31 03:29:50 PM EST 2024
yarn version v1.22.21
info Current version: 0.0.425
info New version: 0.0.426
Done in 0.16s.
