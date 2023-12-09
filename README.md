Sat Dec  9 02:47:43 PM EST 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.5Gi       2.0Gi       277Mi        11Gi        12Gi
Swap:          8.0Gi        32Mi       8.0Gi
System Storage
802M	.
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
    

Angular CLI: 17.0.5
Node: 20.10.0
Package Manager: yarn 1.22.21
OS: linux x64

Angular: 17.0.5
... animations, cli, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1700.5
@angular-devkit/build-angular   17.0.5
@angular-devkit/core            17.0.5
@angular-devkit/schematics      17.0.5
@angular/cdk                    17.0.2
@angular/material               17.0.2
@schematics/angular             17.0.5
rxjs                            7.8.0
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.53s.
yarn install v1.22.21
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.33s.
```
```bash
Latest version:     1.0.30001566
Installed version:  1.0.30001566
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.21
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/17.0.6/angular-webpack/d3180eba0918ea2459c9abc3131ef5470455cd5a.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/17.0.6/angular-webpack/d3180eba0918ea2459c9abc3131ef5470455cd5a/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1837.447349 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
asset main.js 342 KiB {179} [emitted] (name: main)
asset styles.css 82.6 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 343 KiB = runtime.js 912 bytes main.js 342 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 83.5 KiB = runtime.js 912 bytes styles.css 82.6 KiB
chunk {179} (runtime: runtime) main.js (main) 2.79 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2022/init.mjs + 1 modules [614] 29.9 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 115 modules [607] 2.76 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:15
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1276 ms (resolving: 31 ms, restoring: 1 ms, integration: 0 ms, building: 1244 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 85.2 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 85.2 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [554] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1452 ms (resolving: 28 ms, restoring: 0 ms, integration: 0 ms, building: 1424 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1374 ms (resolving: 28 ms, restoring: 1 ms, integration: 0 ms, building: 1345 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.38026 ms
<t> runtime requirements.chunks: 0.425732 ms
<t> runtime requirements.entries: 1.426545 ms
<t> runtime requirements.modules: 0.024248 ms
<t> runtime requirements.chunks: 0.014409 ms
<t> runtime requirements.entries: 0.128011 ms
<t> finish module profiles: 5.606704 ms
<t> compute affected modules: 0.005556 ms
<t> finish modules: 15.922185 ms
<t> report dependency errors and warnings: 4.655753 ms
<t> optimize dependencies: 12.806143 ms
<t> create chunks: 3.130767 ms
<t> compute affected modules with chunk graph: 0.003181 ms
<t> optimize: 22.533471 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 7.352808 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 600.8053 ms
<t> runtime requirements.modules: 0.252109 ms
<t> runtime requirements.chunks: 0.087078 ms
<t> runtime requirements.entries: 0.488425 ms
<t> runtime requirements: 1.236454 ms
<t> hashing: initialize hash: 0.007526 ms
<t> hashing: sort chunks: 0.059509 ms
<t> hashing: hash runtime modules: 1.064702 ms
<t> hashing: hash chunks: 1.232812 ms
<t> hashing: hash digest: 0.01599 ms
<t> hashing: process full hash modules: 0.206352 ms
<t> hashing: 2.692769 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.061946 ms
<t> module assets: 0.162484 ms
<t> create chunk assets: 2.847348 ms
<t> process assets: 4173.986672 ms

LOG from webpack.Compiler
<t> make hook: 6256.558314 ms
<t> finish make hook: 0.120317 ms
<t> finish compilation: 26.231828 ms
<t> seal compilation: 4829.408508 ms
<t> afterCompile hook: 0.111397 ms
<t> emitAssets: 4.053938 ms
<t> emitRecords: 0.069063 ms
<t> done hook: 109.552751 ms
<t> beginIdle: 0.397215 ms

LOG from webpack.Compilation.ModuleProfile
     | 62 ms (parallelism 3.3) resolve to new modules > ./src/main.ts
     | 33 ms (parallelism 3.9) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 121 ms (parallelism 8) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 66 ms (parallelism 12.8) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 48 ms (parallelism 19) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/cdk.mjs
    688 ms resolve to new modules
     | 66 ms (parallelism 12.8) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    132 ms resolve to existing modules
<i>  |  | 258 ms (parallelism 5.5) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 258 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 235 ms (parallelism 5.7) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 235 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 212 ms (parallelism 5.8) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 119 ms (parallelism 1.9) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 166 ms (parallelism 8) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 184 ms (parallelism 8.4) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 182 ms (parallelism 8.4) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 183 ms (parallelism 8.4) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 182 ms (parallelism 8.4) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 68 ms (parallelism 12.9) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 42 ms (parallelism 10.3) build modules > ./node_modules/@angular/core/fesm2022/primitives/signals.mjs
     |  | 43 ms (parallelism 10.2) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 48 ms (parallelism 9.8) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 103 ms (parallelism 12.1) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 99 ms (parallelism 12.2) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 73 ms (parallelism 12.9) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 97 ms (parallelism 12.3) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 71 ms (parallelism 16.7) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 38 ms (parallelism 23.8) build modules > ./node_modules/@angular/cdk/fesm2022/bidi.mjs
     |  | 38 ms (parallelism 23.7) build modules > ./node_modules/@angular/cdk/fesm2022/platform.mjs
     |  | 38 ms (parallelism 23.8) build modules > ./node_modules/@angular/cdk/fesm2022/keycodes.mjs
<i>  | 2003 ms build modules > 23 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 212 ms (parallelism 5.9) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 95 ms (parallelism 12.3) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 73 ms (parallelism 12.9) build modules > ./node_modules/rxjs/dist/esm/index.js
<i>  | 1388 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 156 ms (parallelism 6.1) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 156 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 284 ms (parallelism 5.2) build modules > ./src/main.ts
     |  | 120 ms (parallelism 8) build modules > ./src/app/app-routing.module.ts
     |  | 120 ms (parallelism 8) build modules > ./src/app/app.component.ts
<i>  | 560 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i> 4630 ms build modules
+ 12 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (564 real resolves with 0 cached but invalid, 1265 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 0.996455 ms
<t> figure out provided exports: 9.405922 ms
    95% of exports of modules have been determined (15 no declared exports, 260 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 1.816709 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 10.953914 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 6.762535 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.491001 ms
<t> trace exports usage in graph: 5.115383 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.537684 ms
<t> visitModules: visiting: 2.256213 ms
    267 queue items processed (123 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.325903 ms
<t> connectChunkGroups: 0.002718 ms
<t> cleanup: 0.001224 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.040189 ms
<t> modules: 2.266888 ms
<t> queue: 0.005833 ms
<t> maxSize: 0.029078 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.936151 ms
<t> sort relevant modules: 0.134362 ms
<t> find modules to concatenate: 4.848669 ms
<t> sort concat configurations: 0.039892 ms
<t> create concatenated modules: 5.187686 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 162.717023 ms
<t> optimize asset: polyfills.js: 490.289347 ms
<t> optimize asset: main.js: 3452.862372 ms
<t> optimize js assets: 3517.588245 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 12.07421 ms
<t> optimize css assets: 12.886619 ms

LOG from webpack.FileSystemInfo
    827 new snapshots created
    0% root snapshot uncached (0 / 1265)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 130 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3446/4090) entries shared via 3 shared snapshots (562 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 57% (222/389) entries shared via 12 shared snapshots (31 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 20% (245/1205) entries shared via 13 shared snapshots (43 times referenced)
    Managed files snapshot optimization: 79% (3335/4227) entries shared via 184 shared snapshots (760 times referenced)
    Managed missing snapshot optimization: 86% (3892/4502) entries shared via 194 shared snapshots (775 times referenced)

2023-12-09 14:48:33: webpack 5.89.0 compiled in 12934 ms (19d40ad71cde2915)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1270.4828360000001 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 55.730354 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1138 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 2.442943 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.745118 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 3.86232 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.418461 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 1.759601 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/http.mjs': 1.093795 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/operators/index.js': 2.251888 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators/skipWhile.js': 1.468698 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/layout.mjs': 2.11328 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|6fbab3001b309b4f|runtime': 11.231194 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 6.000642 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 202.899539 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1138 items, 1 files, 41 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 341.96 kB |                86.07 kB
styles.css          | styles        |  82.65 kB |                 8.08 kB
polyfills.js        | polyfills     |  32.97 kB |                10.63 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 458.47 kB |               105.29 kB

Build at: 2023-12-09T19:48:35.522Z - Hash: 19d40ad71cde2915 - Time: 15206ms
Done in 16.90s.
```
