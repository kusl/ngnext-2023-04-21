Wed Nov  8 10:10:45 AM EST 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       4.2Gi       1.4Gi       862Mi       9.7Gi       9.9Gi
Swap:          8.0Gi       1.7Gi       6.3Gi
System Storage
1.4G	.
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
    

Angular CLI: 16.2.9
Node: 20.9.0 (Unsupported)
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.12
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.9
@angular-devkit/build-angular   16.2.9
@angular-devkit/core            16.2.9
@angular-devkit/schematics      16.2.9
@angular/cdk                    16.2.11
@angular/cli                    16.2.9
@angular/material               16.2.11
@schematics/angular             16.2.9
rxjs                            7.8.0
typescript                      5.0.4
zone.js                         0.13.0
    
Warning: The current version of Node (20.9.0) is not supported by Angular.
Done in 0.61s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.37s.
```
The --update-db command is deprecated.
Please use npx update-browserslist-db@latest instead.
Browserslist DB update will still be made.
Latest version:     1.0.30001561
Installed version:  1.0.30001561
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
The --update-db command is deprecated.
Please use npx update-browserslist-db@latest instead.
Browserslist DB update will still be made.
Latest version:     1.0.30001561
Installed version:  1.0.30001561
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/17.0.0/angular-webpack/33f1298a344581f07fc7cf412baa9b043dbf5c97.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/17.0.0/angular-webpack/33f1298a344581f07fc7cf412baa9b043dbf5c97/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 2026.125203 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
asset main.js 342 KiB {179} [emitted] (name: main)
asset styles.css 83.3 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 343 KiB = runtime.js 912 bytes main.js 342 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 84.2 KiB = runtime.js 912 bytes styles.css 83.3 KiB
chunk {179} (runtime: runtime) main.js (main) 2.79 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2022/init.mjs + 1 modules [614] 29.8 KiB {179} [built] [code generated]
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
    1530 ms (resolving: 37 ms, restoring: 1 ms, integration: 0 ms, building: 1492 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 85.4 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 85.4 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [554] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1728 ms (resolving: 33 ms, restoring: 0 ms, integration: 0 ms, building: 1695 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1640 ms (resolving: 34 ms, restoring: 1 ms, integration: 0 ms, building: 1605 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.381402 ms
<t> runtime requirements.chunks: 0.422505 ms
<t> runtime requirements.entries: 1.436765 ms
<t> runtime requirements.modules: 0.02416 ms
<t> runtime requirements.chunks: 0.014469 ms
<t> runtime requirements.entries: 0.125968 ms
<t> finish module profiles: 7.591066 ms
<t> compute affected modules: 0.005725 ms
<t> finish modules: 21.726528 ms
<t> report dependency errors and warnings: 5.685036 ms
<t> optimize dependencies: 14.377271 ms
<t> create chunks: 3.314567 ms
<t> compute affected modules with chunk graph: 0.003947 ms
<t> optimize: 28.70341 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 7.862759 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 495.679915 ms
<t> runtime requirements.modules: 0.237134 ms
<t> runtime requirements.chunks: 0.083485 ms
<t> runtime requirements.entries: 0.496455 ms
<t> runtime requirements: 1.017113 ms
<t> hashing: initialize hash: 0.007896 ms
<t> hashing: sort chunks: 0.048209 ms
<t> hashing: hash runtime modules: 1.054867 ms
<t> hashing: hash chunks: 1.234405 ms
<t> hashing: hash digest: 0.017087 ms
<t> hashing: process full hash modules: 0.20811 ms
<t> hashing: 2.669872 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.064319 ms
<t> module assets: 0.21039 ms
<t> create chunk assets: 2.928355 ms
<t> process assets: 4380.466689 ms

LOG from webpack.Compiler
<t> make hook: 6499.597358 ms
<t> finish make hook: 0.135455 ms
<t> finish compilation: 35.057486 ms
<t> seal compilation: 4939.437746 ms
<t> afterCompile hook: 0.124272 ms
<t> emitAssets: 4.476951 ms
<t> emitRecords: 0.0812 ms
<t> done hook: 148.592141 ms
<t> beginIdle: 0.417285 ms

LOG from webpack.Compilation.ModuleProfile
     | 71 ms (parallelism 3.5) resolve to new modules > ./src/main.ts
     | 43 ms (parallelism 4.2) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 122 ms (parallelism 8) resolve to new modules > ./src/app/name-editor/name-editor.component.ts
     | 145 ms (parallelism 11.5) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 64 ms (parallelism 12) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/bidi.mjs
     | 83 ms (parallelism 11.8) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/platform.mjs
     | 83 ms (parallelism 11.8) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/keycodes.mjs
     | 78 ms (parallelism 15.7) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/cdk.mjs
    1091 ms resolve to new modules
     | 145 ms (parallelism 11.5) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    181 ms resolve to existing modules
<i>  |  | 306 ms (parallelism 5.5) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 306 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 280 ms (parallelism 5.7) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 280 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 246 ms (parallelism 5.9) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 105 ms (parallelism 2) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 154 ms (parallelism 8) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 154 ms (parallelism 8.2) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 154 ms (parallelism 9.7) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 153 ms (parallelism 8) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 152 ms (parallelism 8) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 44 ms (parallelism 16.2) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 106 ms (parallelism 11.5) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 109 ms (parallelism 11.5) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 99 ms (parallelism 11.5) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 110 ms (parallelism 11.5) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 101 ms (parallelism 11.5) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 109 ms (parallelism 11.9) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
<i>  | 1879 ms build modules > 23 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 254 ms (parallelism 5.9) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 100 ms (parallelism 12.3) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 100 ms (parallelism 12.3) build modules > ./node_modules/rxjs/dist/esm/index.js
<i>  | 1447 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 176 ms (parallelism 6.2) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 176 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 329 ms (parallelism 5.3) build modules > ./src/main.ts
<i>  | 377 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i> 4504 ms build modules
+ 13 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (564 real resolves with 0 cached but invalid, 1257 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.312167 ms
<t> figure out provided exports: 14.44531 ms
    95% of exports of modules have been determined (15 no declared exports, 260 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 5 additional calculations due to dependencies)
<t> store provided exports into cache: 1.844278 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 11.135568 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.844324 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.933049 ms
<t> trace exports usage in graph: 8.010203 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.536682 ms
<t> visitModules: visiting: 2.304181 ms
    267 queue items processed (123 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.374934 ms
<t> connectChunkGroups: 0.003055 ms
<t> cleanup: 0.001294 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.042739 ms
<t> modules: 5.096428 ms
<t> queue: 0.008053 ms
<t> maxSize: 0.080776 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.020546 ms
<t> sort relevant modules: 0.130408 ms
<t> find modules to concatenate: 6.471992 ms
<t> sort concat configurations: 0.034593 ms
<t> create concatenated modules: 5.701362 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 193.220825 ms
<t> optimize asset: polyfills.js: 640.245566 ms
<t> optimize asset: main.js: 3617.186283 ms
<t> optimize js assets: 3684.243058 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 11.342719 ms
<t> optimize css assets: 12.047507 ms

LOG from webpack.FileSystemInfo
    827 new snapshots created
    0% root snapshot uncached (0 / 1257)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 130 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3446/4090) entries shared via 3 shared snapshots (562 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 60% (232/389) entries shared via 11 shared snapshots (31 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 19% (228/1205) entries shared via 11 shared snapshots (40 times referenced)
    Managed files snapshot optimization: 79% (3335/4227) entries shared via 183 shared snapshots (760 times referenced)
    Managed missing snapshot optimization: 86% (3894/4502) entries shared via 194 shared snapshots (775 times referenced)

2023-11-08 10:11:52: webpack 5.89.0 compiled in 13486 ms (4b1f8419fa8a16f3)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1676.573272 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 55.194012 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1138 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.937244 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 3.812493 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/slide-toggle.mjs': 1.538247 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 3.259238 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.718403 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 2.458451 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/a11y.mjs': 1.961028 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/http.mjs': 1.26071 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 3.246919 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.294499 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/layout.mjs': 1.429724 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/scheduled/scheduled.js': 2.920709 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators/refCount.js': 1.665268 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/operators|request=|../internal/operators/withLatestFrom': 2.130788 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|6fbab3001b309b4f|runtime': 14.307639 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 8.373422 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 244.028661 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1138 items, 1 files, 41 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 341.86 kB |                86.09 kB
styles.css          | styles        |  83.31 kB |                 8.13 kB
polyfills.js        | polyfills     |  32.97 kB |                10.63 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 459.03 kB |               105.37 kB

Build at: 2023-11-08T15:11:55.239Z - Hash: 4b1f8419fa8a16f3 - Time: 16003ms
Done in 18.01s.
```
