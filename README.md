Sat Jul 29 12:36:33 AM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.2Gi       2.3Gi       367Mi        10Gi        12Gi
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
    

Angular CLI: 16.1.5
Node: 18.17.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.1.6
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1601.5
@angular-devkit/build-angular   16.1.5
@angular-devkit/core            16.1.5
@angular-devkit/schematics      16.1.5
@angular/cdk                    16.1.5
@angular/cli                    16.1.5
@angular/material               16.1.5
@schematics/angular             16.1.5
rxjs                            7.8.0
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.58s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.41s.
```
Latest version:     1.0.30001517
Installed version:  1.0.30001517
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001517
Installed version:  1.0.30001517
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.1.6/angular-webpack/8026b686970733268ec71ba75177161a12a76dca.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.1.6/angular-webpack/8026b686970733268ec71ba75177161a12a76dca/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1885.013887 ms
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
    846 ms (resolving: 161 ms, restoring: 0 ms, integration: 0 ms, building: 685 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 103 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 103 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [262] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1108 ms (resolving: 32 ms, restoring: 0 ms, integration: 0 ms, building: 1076 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1107 ms (resolving: 117 ms, restoring: 1 ms, integration: 0 ms, building: 989 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.404462 ms
<t> runtime requirements.chunks: 0.403509 ms
<t> runtime requirements.entries: 1.524317 ms
<t> runtime requirements.modules: 0.027447 ms
<t> runtime requirements.chunks: 0.015647 ms
<t> runtime requirements.entries: 0.127546 ms
<t> finish module profiles: 12.294885 ms
<t> compute affected modules: 0.006151 ms
<t> finish modules: 17.854244 ms
<t> report dependency errors and warnings: 4.338669 ms
<t> optimize dependencies: 12.027839 ms
<t> create chunks: 5.444219 ms
<t> compute affected modules with chunk graph: 0.003316 ms
<t> optimize: 35.372998 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 8.715599 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 559.74126 ms
<t> runtime requirements.modules: 0.198173 ms
<t> runtime requirements.chunks: 0.31521 ms
<t> runtime requirements.entries: 1.005841 ms
<t> runtime requirements: 2.241298 ms
<t> hashing: initialize hash: 0.009318 ms
<t> hashing: sort chunks: 0.096222 ms
<t> hashing: hash runtime modules: 1.397208 ms
<t> hashing: hash chunks: 1.923416 ms
<t> hashing: hash digest: 0.034938 ms
<t> hashing: process full hash modules: 0.143371 ms
<t> hashing: 4.131064 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.056097 ms
<t> module assets: 0.248647 ms
<t> create chunk assets: 4.714954 ms
<t> process assets: 8747.978404 ms

LOG from webpack.Compiler
<t> make hook: 6124.140795 ms
<t> finish make hook: 0.146311 ms
<t> finish compilation: 34.532991 ms
<t> seal compilation: 9382.961393 ms
<t> afterCompile hook: 0.193691 ms
<t> emitAssets: 4.366812 ms
<t> emitRecords: 0.063021 ms
<t> done hook: 141.673697 ms
<t> beginIdle: 0.769213 ms

LOG from webpack.Compilation.ModuleProfile
     | 33 ms (parallelism 5.1) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 31 ms (parallelism 5.2) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 79 ms (parallelism 5.1) resolve to new modules > ./src/main.ts
     | 44 ms (parallelism 2.3) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 131 ms (parallelism 8) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 179 ms (parallelism 10.1) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 37 ms (parallelism 13) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/bidi.mjs
     | 37 ms (parallelism 13) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/platform.mjs
     | 37 ms (parallelism 13) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/keycodes.mjs
     | 58 ms (parallelism 17.3) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/cdk.mjs
    1065 ms resolve to new modules
     | 66 ms (parallelism 12.5) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    100 ms resolve to existing modules
     |  | 194 ms (parallelism 5.5) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 194 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 177 ms (parallelism 5.6) build modules > ./src/styles.scss?ngGlobalStyle
     | 177 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 32 ms (parallelism 5.1) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 32 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 145 ms (parallelism 5.7) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 145 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 135 ms (parallelism 5.7) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 115 ms (parallelism 1.9) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
<i>  |  | 211 ms (parallelism 7.5) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 166 ms (parallelism 8) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 161 ms (parallelism 8) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 160 ms (parallelism 8) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 165 ms (parallelism 8) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 44 ms (parallelism 14.3) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 43 ms (parallelism 15.7) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 78 ms (parallelism 11.6) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 80 ms (parallelism 12.7) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 80 ms (parallelism 11.7) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 79 ms (parallelism 11.7) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 78 ms (parallelism 11.6) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 84 ms (parallelism 14.8) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     |  | 94 ms (parallelism 14.4) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
<i>  | 1839 ms build modules > 22 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 117 ms (parallelism 5.9) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 76 ms (parallelism 15.3) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 75 ms (parallelism 15.3) build modules > ./node_modules/rxjs/dist/esm/index.js
     | 1315 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 214 ms (parallelism 4.7) build modules > ./src/main.ts
     |  | 130 ms (parallelism 8) build modules > ./src/app/app.component.ts
     |  | 44 ms (parallelism 14.3) build modules > ./src/app/name-editor/name-editor.component.ts
<i>  | 403 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i> 4111 ms build modules
+ 15 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (563 real resolves with 0 cached but invalid, 1260 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.087579 ms
<t> figure out provided exports: 11.447066 ms
    95% of exports of modules have been determined (15 no declared exports, 259 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 1.609107 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 8.97379 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.145706 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.532053 ms
<t> trace exports usage in graph: 6.891564 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 2.71677 ms
<t> visitModules: visiting: 3.925637 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 4.054767 ms
<t> connectChunkGroups: 0.003523 ms
<t> cleanup: 0.001711 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.045439 ms
<t> modules: 3.979645 ms
<t> queue: 0.007505 ms
<t> maxSize: 0.047142 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.640592 ms
<t> sort relevant modules: 0.216478 ms
<t> find modules to concatenate: 9.441538 ms
<t> sort concat configurations: 0.043481 ms
<t> create concatenated modules: 5.304625 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 238.18792 ms
<t> optimize asset: polyfills.js: 654.889669 ms
<t> optimize asset: main.js: 7974.50383 ms
<t> optimize js assets: 8070.192307 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 17.793319 ms
<t> optimize css assets: 22.396535 ms

LOG from webpack.FileSystemInfo
    825 new snapshots created
    0% root snapshot uncached (0 / 1260)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 134 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3454/4079) entries shared via 3 shared snapshots (563 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 56% (216/389) entries shared via 12 shared snapshots (30 times referenced)
    Managed items info in cache: 78 items
    Managed items snapshot optimization: 18% (213/1197) entries shared via 10 shared snapshots (38 times referenced)
    Managed files snapshot optimization: 79% (3336/4213) entries shared via 184 shared snapshots (759 times referenced)
    Managed missing snapshot optimization: 87% (3895/4500) entries shared via 195 shared snapshots (776 times referenced)

2023-07-29 00:37:22: webpack 5.86.0 compiled in 17411 ms (b534422a4cc03ae7)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 781.916706 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 40.797708 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1136 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 2.131265 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.348315 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 2.602791 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.897657 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 3.049739 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/a11y.mjs': 1.733336 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 2.791241 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.029404 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators/skipUntil.js': 1.409105 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/observable|request=|../util/argsArgArrayOrObject': 1.873236 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|bdcffb4806b02a7f|runtime': 10.309904 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 5.153733 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 242.26193 ms
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

Build at: 2023-07-29T04:37:24.523Z - Hash: b534422a4cc03ae7 - Time: 19860ms
Done in 21.72s.
```
Sat Jul 29 12:37:43 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.83
info New version: 0.0.84
Done in 0.12s.
