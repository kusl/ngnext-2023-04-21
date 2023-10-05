Thu Oct  5 12:03:16 PM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       1.8Gi       1.7Gi       241Mi        11Gi        12Gi
Swap:          8.0Gi       0.0Ki       8.0Gi
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
    

Angular CLI: 16.2.4
Node: 18.18.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.7
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.4
@angular-devkit/build-angular   16.2.4
@angular-devkit/core            16.2.4
@angular-devkit/schematics      16.2.4
@angular/cdk                    16.2.6
@angular/cli                    16.2.4
@angular/material               16.2.6
@schematics/angular             16.2.4
rxjs                            7.8.0
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.57s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.39s.
```
Latest version:     1.0.30001546
Installed version:  1.0.30001543
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001546
Installed version:  1.0.30001546
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.2.5/angular-webpack/19a6e84a9063503dab5d3ffcba252d980346ad59.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.2.5/angular-webpack/19a6e84a9063503dab5d3ffcba252d980346ad59/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1907.71515 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
asset main.js 341 KiB {179} [emitted] (name: main)
asset styles.css 82.2 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 342 KiB = runtime.js 912 bytes main.js 341 KiB
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
    1138 ms (resolving: 39 ms, restoring: 1 ms, integration: 0 ms, building: 1098 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 84.2 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 84.2 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [554] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1236 ms (resolving: 35 ms, restoring: 0 ms, integration: 0 ms, building: 1201 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1158 ms (resolving: 35 ms, restoring: 1 ms, integration: 0 ms, building: 1122 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.436379 ms
<t> runtime requirements.chunks: 0.449989 ms
<t> runtime requirements.entries: 1.643115 ms
<t> runtime requirements.modules: 0.02721 ms
<t> runtime requirements.chunks: 0.015361 ms
<t> runtime requirements.entries: 0.126157 ms
<t> finish module profiles: 11.945681 ms
<t> compute affected modules: 0.005314 ms
<t> finish modules: 14.969373 ms
<t> report dependency errors and warnings: 4.345744 ms
<t> optimize dependencies: 16.675778 ms
<t> create chunks: 5.673385 ms
<t> compute affected modules with chunk graph: 0.003261 ms
<t> optimize: 30.984379 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 7.531004 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 470.279214 ms
<t> runtime requirements.modules: 0.26501 ms
<t> runtime requirements.chunks: 0.073913 ms
<t> runtime requirements.entries: 0.46584 ms
<t> runtime requirements: 1.003856 ms
<t> hashing: initialize hash: 0.007437 ms
<t> hashing: sort chunks: 0.054931 ms
<t> hashing: hash runtime modules: 1.077431 ms
<t> hashing: hash chunks: 1.220396 ms
<t> hashing: hash digest: 0.016563 ms
<t> hashing: process full hash modules: 0.238446 ms
<t> hashing: 2.713722 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.063548 ms
<t> module assets: 0.172865 ms
<t> create chunk assets: 3.238489 ms
<t> process assets: 4508.224021 ms

LOG from webpack.Compiler
<t> make hook: 6482.066187 ms
<t> finish make hook: 0.142698 ms
<t> finish compilation: 31.305455 ms
<t> seal compilation: 5048.556935 ms
<t> afterCompile hook: 0.111641 ms
<t> emitAssets: 4.516033 ms
<t> emitRecords: 0.072146 ms
<t> done hook: 146.688523 ms
<t> beginIdle: 0.418429 ms

LOG from webpack.Compilation.ModuleProfile
     | 66 ms (parallelism 3.4) resolve to new modules > ./src/main.ts
     | 54 ms (parallelism 2.8) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 180 ms (parallelism 7.4) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 35 ms (parallelism 16.1) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 31 ms (parallelism 17) resolve to new modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     | 31 ms (parallelism 16.9) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 41 ms (parallelism 9.9) resolve to new modules > ./node_modules/rxjs/dist/esm/index.js
     | 41 ms (parallelism 9.9) resolve to new modules > ./node_modules/rxjs/dist/esm/operators/index.js
     | 101 ms (parallelism 12.6) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/cdk.mjs
    905 ms resolve to new modules
     | 35 ms (parallelism 16.1) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    68 ms resolve to existing modules
<i>  |  | 218 ms (parallelism 5.5) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 218 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 195 ms (parallelism 5.7) build modules > ./src/styles.scss?ngGlobalStyle
     | 195 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 183 ms (parallelism 5.8) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 109 ms (parallelism 2.2) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 185 ms (parallelism 7.4) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 165 ms (parallelism 10) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 180 ms (parallelism 7.4) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 185 ms (parallelism 7.4) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 184 ms (parallelism 7.4) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 49 ms (parallelism 14.7) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 43 ms (parallelism 9.9) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 109 ms (parallelism 12.4) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 104 ms (parallelism 12.5) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 98 ms (parallelism 12.6) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 94 ms (parallelism 12.5) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 100 ms (parallelism 12.6) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 90 ms (parallelism 12.9) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     |  | 102 ms (parallelism 12.5) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 91 ms (parallelism 14.3) build modules > ./node_modules/@angular/cdk/fesm2022/platform.mjs
     |  | 91 ms (parallelism 14.4) build modules > ./node_modules/@angular/cdk/fesm2022/bidi.mjs
     |  | 87 ms (parallelism 15.1) build modules > ./node_modules/@angular/cdk/fesm2022/keycodes.mjs
<i>  | 2263 ms build modules > 22 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 191 ms (parallelism 5.7) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 102 ms (parallelism 12.9) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 102 ms (parallelism 12.8) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     | 1478 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 275 ms (parallelism 5) build modules > ./src/main.ts
     |  | 155 ms (parallelism 7.1) build modules > ./src/app/app.component.ts
<i>  | 462 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
     |  | 119 ms (parallelism 6.3) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 119 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 30 ms (parallelism 7) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 30 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i> 4770 ms build modules
+ 11 hidden lines

LOG from webpack.ResolverCachePlugin
    32% really resolved (563 real resolves with 0 cached but invalid, 1223 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.097888 ms
<t> figure out provided exports: 8.458712 ms
    95% of exports of modules have been determined (15 no declared exports, 259 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 1.627852 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 9.862405 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.164259 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.539017 ms
<t> trace exports usage in graph: 11.503141 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 2.814276 ms
<t> visitModules: visiting: 4.13758 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 4.258922 ms
<t> connectChunkGroups: 0.00359 ms
<t> cleanup: 0.00175 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.045727 ms
<t> modules: 4.03265 ms
<t> queue: 0.007728 ms
<t> maxSize: 0.05285 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.754219 ms
<t> sort relevant modules: 0.213963 ms
<t> find modules to concatenate: 9.482086 ms
<t> sort concat configurations: 0.042311 ms
<t> create concatenated modules: 5.2128 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 236.53244 ms
<t> optimize asset: polyfills.js: 731.650829 ms
<t> optimize asset: main.js: 3731.620624 ms
<t> optimize js assets: 3821.534413 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 8.225263 ms
<t> optimize css assets: 8.959672 ms

LOG from webpack.FileSystemInfo
    825 new snapshots created
    0% root snapshot uncached (0 / 1223)
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
    Managed missing snapshot optimization: 89% (4009/4500) entries shared via 194 shared snapshots (779 times referenced)

2023-10-05 12:04:09: webpack 5.88.2 compiled in 13455 ms (51a25f72a897e216)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1257.471157 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 54.560731 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1136 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.340462 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 2.180934 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/animations.mjs': 1.042096 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 3.502193 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 2.000937 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 2.753353 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/a11y.mjs': 1.407523 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 4.868889 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.246994 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/observable/ConnectableObservable.js': 1.493007 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators|request=|../util/pipe': 2.044325 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|bdcffb4806b02a7f|runtime': 11.693459 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 6.842837 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 284.12771 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1136 items, 1 files, 39 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 341.15 kB |                85.35 kB
styles.css          | styles        |  82.22 kB |                 8.09 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 457.26 kB |               104.64 kB

Build at: 2023-10-05T16:04:12.768Z - Hash: 51a25f72a897e216 - Time: 16587ms
Done in 18.48s.
```
