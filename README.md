Mon Nov 20 03:06:54 PM EST 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       4.3Gi       1.6Gi       547Mi        10Gi        10Gi
Swap:          8.0Gi       1.0Mi       8.0Gi
System Storage
790M	.
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
    

Angular CLI: 17.0.1
Node: 20.9.0
Package Manager: yarn 1.22.21
OS: linux x64

Angular: 17.0.3
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1700.1
@angular-devkit/build-angular   17.0.1
@angular-devkit/core            17.0.1
@angular-devkit/schematics      17.0.1
@angular/cdk                    17.0.1
@angular/cli                    17.0.1
@angular/material               17.0.1
@schematics/angular             17.0.1
rxjs                            7.8.0
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.55s.
yarn install v1.22.21
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.37s.
```
```bash
Latest version:     1.0.30001563
Installed version:  1.0.30001563
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.21
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/17.0.2/angular-webpack/45c292c1dfda7cab22dd540cd7128479861778db.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/17.0.2/angular-webpack/45c292c1dfda7cab22dd540cd7128479861778db/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 2000.106703 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
asset main.js 342 KiB {179} [emitted] (name: main)
asset styles.css 83.4 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 343 KiB = runtime.js 912 bytes main.js 342 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 84.2 KiB = runtime.js 912 bytes styles.css 83.4 KiB
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
    1308 ms (resolving: 32 ms, restoring: 1 ms, integration: 0 ms, building: 1275 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 85.4 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 85.4 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [554] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1489 ms (resolving: 28 ms, restoring: 0 ms, integration: 0 ms, building: 1461 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1408 ms (resolving: 29 ms, restoring: 0 ms, integration: 0 ms, building: 1379 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.509081 ms
<t> runtime requirements.chunks: 0.544306 ms
<t> runtime requirements.entries: 1.397879 ms
<t> runtime requirements.modules: 0.024218 ms
<t> runtime requirements.chunks: 0.014539 ms
<t> runtime requirements.entries: 0.17158 ms
<t> finish module profiles: 5.711867 ms
<t> compute affected modules: 0.005101 ms
<t> finish modules: 15.391175 ms
<t> report dependency errors and warnings: 4.616232 ms
<t> optimize dependencies: 9.649626 ms
<t> create chunks: 3.110921 ms
<t> compute affected modules with chunk graph: 0.004318 ms
<t> optimize: 24.836059 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 6.929073 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 468.040892 ms
<t> runtime requirements.modules: 0.306802 ms
<t> runtime requirements.chunks: 0.079408 ms
<t> runtime requirements.entries: 0.493678 ms
<t> runtime requirements: 1.077424 ms
<t> hashing: initialize hash: 0.007817 ms
<t> hashing: sort chunks: 0.043664 ms
<t> hashing: hash runtime modules: 1.078031 ms
<t> hashing: hash chunks: 1.183736 ms
<t> hashing: hash digest: 0.014729 ms
<t> hashing: process full hash modules: 0.202897 ms
<t> hashing: 2.629552 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.064559 ms
<t> module assets: 0.15825 ms
<t> create chunk assets: 2.909855 ms
<t> process assets: 4252.551158 ms

LOG from webpack.Compiler
<t> make hook: 6161.334625 ms
<t> finish make hook: 0.102348 ms
<t> finish compilation: 25.76648 ms
<t> seal compilation: 4773.526016 ms
<t> afterCompile hook: 0.127409 ms
<t> emitAssets: 6.308232 ms
<t> emitRecords: 0.063392 ms
<t> done hook: 251.266517 ms
<t> beginIdle: 0.394276 ms

LOG from webpack.Compilation.ModuleProfile
     | 63 ms (parallelism 3.3) resolve to new modules > ./src/main.ts
     | 36 ms (parallelism 3.8) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 140 ms (parallelism 8.2) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 36 ms (parallelism 14.3) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 79 ms (parallelism 12) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/bidi.mjs
     | 79 ms (parallelism 12) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/platform.mjs
     | 79 ms (parallelism 12) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/keycodes.mjs
     | 93 ms (parallelism 12.6) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/cdk.mjs
    1002 ms resolve to new modules
     | 36 ms (parallelism 14.3) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    51 ms resolve to existing modules
<i>  |  | 257 ms (parallelism 5.7) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 257 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 234 ms (parallelism 5.9) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 234 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 211 ms (parallelism 6) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 105 ms (parallelism 1.9) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 144 ms (parallelism 8.1) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 143 ms (parallelism 10.1) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 140 ms (parallelism 8.2) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 142 ms (parallelism 8.2) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 142 ms (parallelism 8.1) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 40 ms (parallelism 14.4) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 39 ms (parallelism 11.6) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 39 ms (parallelism 11.4) build modules > ./node_modules/@angular/core/fesm2022/primitives/signals.mjs
     |  | 124 ms (parallelism 11.8) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 120 ms (parallelism 11.8) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 132 ms (parallelism 11.7) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 118 ms (parallelism 11.8) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 135 ms (parallelism 11.6) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 105 ms (parallelism 12.1) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
<i>  | 1909 ms build modules > 23 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 210 ms (parallelism 6.1) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 108 ms (parallelism 12.2) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 108 ms (parallelism 12.2) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
<i>  | 1428 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 192 ms (parallelism 6.1) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 192 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 278 ms (parallelism 5.4) build modules > ./src/main.ts
     |  | 118 ms (parallelism 8) build modules > ./src/app/app-routing.module.ts
     |  | 118 ms (parallelism 8) build modules > ./src/app/app.component.ts
<i>  | 539 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i> 4589 ms build modules
+ 11 hidden lines

LOG from webpack.ResolverCachePlugin
    32% really resolved (564 real resolves with 0 cached but invalid, 1221 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 0.989069 ms
<t> figure out provided exports: 9.12425 ms
    95% of exports of modules have been determined (15 no declared exports, 260 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 1.732929 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 10.291098 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.876204 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.582561 ms
<t> trace exports usage in graph: 4.773604 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.543089 ms
<t> visitModules: visiting: 2.23285 ms
    267 queue items processed (123 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.282289 ms
<t> connectChunkGroups: 0.002745 ms
<t> cleanup: 0.001415 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.048062 ms
<t> modules: 4.860264 ms
<t> queue: 0.007236 ms
<t> maxSize: 0.065864 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.010107 ms
<t> sort relevant modules: 0.125279 ms
<t> find modules to concatenate: 4.809142 ms
<t> sort concat configurations: 0.033399 ms
<t> create concatenated modules: 4.986211 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 176.329735 ms
<t> optimize asset: polyfills.js: 604.702272 ms
<t> optimize asset: main.js: 3560.444408 ms
<t> optimize js assets: 3623.5677530000003 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 12.676 ms
<t> optimize css assets: 13.272848 ms

LOG from webpack.FileSystemInfo
    827 new snapshots created
    0% root snapshot uncached (0 / 1221)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 130 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3446/4090) entries shared via 3 shared snapshots (562 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 61% (236/389) entries shared via 11 shared snapshots (33 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 24% (289/1205) entries shared via 14 shared snapshots (52 times referenced)
    Managed files snapshot optimization: 79% (3337/4227) entries shared via 184 shared snapshots (760 times referenced)
    Managed missing snapshot optimization: 89% (4010/4502) entries shared via 194 shared snapshots (778 times referenced)

2023-11-20 15:07:38: webpack 5.89.0 compiled in 12949 ms (787a4edcd61448dc)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1224.014325 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 54.804655 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1138 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.789417 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 2.387639 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 3.921243 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.184286 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 1.228905 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/a11y.mjs': 1.260162 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 2.963557 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/layout.mjs': 1.036717 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators/switchMapTo.js': 2.658075 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators/windowTime.js': 1.430074 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/scheduled/scheduled.js': 2.06353 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|6fbab3001b309b4f|runtime': 11.585865 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 6.139077 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 199.278573 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1138 items, 1 files, 41 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 341.97 kB |                86.17 kB
styles.css          | styles        |  83.35 kB |                 8.15 kB
polyfills.js        | polyfills     |  32.97 kB |                10.63 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 459.19 kB |               105.46 kB

Build at: 2023-11-20T20:07:41.160Z - Hash: 787a4edcd61448dc - Time: 15354ms
Done in 17.10s.
```
Mon Nov 20 03:07:59 PM EST 2023
yarn version v1.22.21
info Current version: 0.0.237
info New version: 0.0.238
Done in 0.12s.
