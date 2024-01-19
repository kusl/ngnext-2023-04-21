Fri Jan 19 01:12:29 PM EST 2024

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       1.9Gi       5.6Gi       295Mi       8.4Gi        13Gi
Swap:          8.0Gi          0B       8.0Gi
System Storage
844M	.
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
    

Angular CLI: 17.1.0
Node: 20.11.0
Package Manager: yarn 1.22.21
OS: linux x64

Angular: 17.1.0
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1701.0
@angular-devkit/build-angular   17.1.0
@angular-devkit/core            17.1.0
@angular-devkit/schematics      17.1.0
@schematics/angular             17.1.0
rxjs                            7.8.0
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.56s.
yarn install v1.22.21
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
Done in 2.60s.
```
```bash
Latest version:     1.0.30001579
Installed version:  1.0.30001578
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.21
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 2545.562663 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/node_modules/babel-plugin-polyfill-corejs3/node_modules/@babel invalidated because it does no longer exist
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/node_modules/babel-plugin-polyfill-corejs3/node_modules/@babel invalidated because hashes differ (null != directory)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/package.json invalidated because hashes differ (dd573b16e16f80b7 != 3f161a01d7aabfa1)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@babel/core/node_modules/electron-to-chromium invalidated because hashes differ (electron-to-chromium@1.4.637 != electron-to-chromium@1.4.638)
    [webpack.cache.PackFileCacheStrategy] Restored pack from /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/17.1.0/angular-webpack/62746a622956666867a189ce732941b343a251ac.pack, but build dependencies have changed.
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/node_modules/babel-plugin-polyfill-corejs3/node_modules/@babel/helper-define-polyfill-provider invalidated because hashes differ (*missing != @babel/helper-define-polyfill-provider@0.4.4)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/node_modules/babel-plugin-polyfill-regenerator invalidated because hashes differ (babel-plugin-polyfill-regenerator@0.5.4 != babel-plugin-polyfill-regenerator@0.5.5)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/node_modules/babel-plugin-polyfill-corejs2 invalidated because hashes differ (babel-plugin-polyfill-corejs2@0.4.7 != babel-plugin-polyfill-corejs2@0.4.8)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve invalidated because hashes differ (resolve@1.22.8 != resolve@1.22.2)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@babel/helper-define-polyfill-provider invalidated because hashes differ (@babel/helper-define-polyfill-provider@0.4.4 != @babel/helper-define-polyfill-provider@0.5.0)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/node_modules/babel-plugin-polyfill-corejs3/node_modules/@babel/helper-compilation-targets invalidated because hashes differ (*missing != @babel/helper-compilation-targets@7.22.10)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/node_modules/babel-plugin-polyfill-corejs3/node_modules/lru-cache invalidated because hashes differ (*missing != lru-cache@5.1.1)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/node_modules/babel-plugin-polyfill-corejs3/node_modules/@babel/helper-validator-option invalidated because hashes differ (*missing != @babel/helper-validator-option@7.22.5)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/node_modules/babel-plugin-polyfill-corejs3/node_modules/yallist invalidated because hashes differ (*missing != yallist@3.1.1)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/node_modules/babel-plugin-polyfill-corejs3/node_modules/@babel/helper-compilation-targets/node_modules/browserslist invalidated because hashes differ (*missing != browserslist@4.21.10)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/node_modules/babel-plugin-polyfill-corejs3/node_modules/@babel/helper-compilation-targets/node_modules/electron-to-chromium invalidated because hashes differ (*missing != electron-to-chromium@1.4.489)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@babel/preset-env/node_modules/electron-to-chromium invalidated because hashes differ (electron-to-chromium@1.4.637 != electron-to-chromium@1.4.638)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@babel/plugin-transform-classes/node_modules/electron-to-chromium invalidated because hashes differ (electron-to-chromium@1.4.637 != electron-to-chromium@1.4.638)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/node_modules/babel-plugin-polyfill-corejs3/node_modules/@babel/helper-compilation-targets/node_modules invalidated because hashes differ (*missing != *node_modules)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve/node_modules invalidated because hashes differ (*node_modules != *missing)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@babel/helper-define-polyfill-provider/node_modules/resolve invalidated because hashes differ (resolve@1.22.2 != *missing)
    [webpack.cache.PackFileCacheStrategy] Restored pack from /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/17.1.0/angular-webpack/62746a622956666867a189ce732941b343a251ac.pack, but build dependencies resolve to different locations.
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 964.923097 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
asset main.js 345 KiB {179} [emitted] (name: main)
asset styles.css 79.2 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 346 KiB = runtime.js 912 bytes main.js 345 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 80.1 KiB = runtime.js 912 bytes styles.css 79.2 KiB
chunk {179} (runtime: runtime) main.js (main) 2.81 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2022/init.mjs + 1 modules [614] 29.9 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 113 modules [596] 2.78 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:15
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1655 ms (resolving: 1034 ms, restoring: 1 ms, integration: 0 ms, building: 620 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 81.5 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 81.5 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [554] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1686 ms (resolving: 1034 ms, restoring: 1 ms, integration: 0 ms, building: 651 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1625 ms (resolving: 1035 ms, restoring: 1 ms, integration: 0 ms, building: 589 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 1.103641 ms
<t> runtime requirements.chunks: 1.132844 ms
<t> runtime requirements.entries: 3.22684 ms
<t> runtime requirements.modules: 0.053172 ms
<t> runtime requirements.chunks: 0.031426 ms
<t> runtime requirements.entries: 0.232379 ms
<t> finish module profiles: 10.066599 ms
<t> compute affected modules: 0.008673 ms
<t> finish modules: 27.472858 ms
<t> report dependency errors and warnings: 7.166009 ms
<t> optimize dependencies: 15.234182 ms
<t> create chunks: 4.693382 ms
<t> compute affected modules with chunk graph: 0.005031 ms
<t> optimize: 40.620499 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 10.543954 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 599.170327 ms
<t> runtime requirements.modules: 0.286037 ms
<t> runtime requirements.chunks: 0.095315 ms
<t> runtime requirements.entries: 0.582808 ms
<t> runtime requirements: 1.196329 ms
<t> hashing: initialize hash: 0.009045 ms
<t> hashing: sort chunks: 0.051668 ms
<t> hashing: hash runtime modules: 1.280743 ms
<t> hashing: hash chunks: 1.385753 ms
<t> hashing: hash digest: 0.018072 ms
<t> hashing: process full hash modules: 0.256953 ms
<t> hashing: 3.132027 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.082514 ms
<t> module assets: 0.181139 ms
<t> create chunk assets: 3.487423 ms
<t> process assets: 5503.428318 ms

LOG from webpack.Compiler
<t> make hook: 3878.562903 ms
<t> finish make hook: 0.160794 ms
<t> finish compilation: 44.77694 ms
<t> seal compilation: 6183.829761 ms
<t> afterCompile hook: 0.090834 ms
<t> emitAssets: 3.871838 ms
<t> emitRecords: 0.084242 ms
<t> done hook: 124.827908 ms
<t> beginIdle: 0.48948 ms

LOG from webpack.Compilation.ModuleProfile
<i>  | 208 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
<i>  | 207 ms (parallelism 5) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
<i>  | 207 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 207 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
<i>  | 276 ms (parallelism 4.7) resolve to new modules > ./src/main.ts
     | 44 ms (parallelism 8.1) resolve to new modules > ./src/app/name-editor/name-editor.component.ts
     | 62 ms (parallelism 12.6) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
<i> 1563 ms resolve to new modules
     | 61 ms (parallelism 12.6) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    112 ms resolve to existing modules
     |  | 116 ms (parallelism 4.9) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 139 ms (parallelism 2.3) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 51 ms (parallelism 8.1) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 64 ms (parallelism 12.3) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 51 ms (parallelism 8.9) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 49 ms (parallelism 8.1) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 47 ms (parallelism 8.1) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     | 708 ms build modules > 23 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 114 ms (parallelism 5.4) build modules > ./node_modules/zone.js/fesm2015/zone.js
     | 369 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 120 ms (parallelism 5.4) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 120 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 106 ms (parallelism 5.5) build modules > ./src/styles.scss?ngGlobalStyle
     | 106 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 96 ms (parallelism 5.6) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 96 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 44 ms (parallelism 6.1) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 44 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 166 ms (parallelism 3.5) build modules > ./src/main.ts
     | 210 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
    1670 ms build modules
+ 25 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (564 real resolves with 0 cached but invalid, 1263 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.64064 ms
<t> figure out provided exports: 13.878719 ms
    95% of exports of modules have been determined (15 no declared exports, 260 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 5 additional calculations due to dependencies)
<t> store provided exports into cache: 2.376082 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 13.629197 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 5.905209 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.91136 ms
<t> trace exports usage in graph: 7.7646 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 2.289746 ms
<t> visitModules: visiting: 3.375557 ms
    268 queue items processed (121 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 3.456596 ms
<t> connectChunkGroups: 0.004498 ms
<t> cleanup: 0.001783 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.059148 ms
<t> modules: 3.527018 ms
<t> queue: 0.00672 ms
<t> maxSize: 0.045813 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.461205 ms
<t> sort relevant modules: 0.197759 ms
<t> find modules to concatenate: 6.911973 ms
<t> sort concat configurations: 0.046397 ms
<t> create concatenated modules: 11.407699 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 240.449505 ms
<t> optimize asset: polyfills.js: 772.255148 ms
<t> optimize asset: main.js: 4641.297762 ms
<t> optimize js assets: 4704.737169 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 12.259789 ms
<t> optimize css assets: 12.792681 ms

LOG from webpack.FileSystemInfo
    827 new snapshots created
    0% root snapshot uncached (0 / 1263)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 130 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3460/4090) entries shared via 3 shared snapshots (564 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 55% (213/389) entries shared via 11 shared snapshots (29 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 21% (248/1205) entries shared via 15 shared snapshots (47 times referenced)
    Managed files snapshot optimization: 79% (3331/4227) entries shared via 182 shared snapshots (760 times referenced)
    Managed missing snapshot optimization: 87% (3898/4502) entries shared via 195 shared snapshots (775 times referenced)

2024-01-19 13:13:10: webpack 5.89.0 compiled in 12606 ms (33fdc8827419298a)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 433.837468 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 6.804829 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1138 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 2.962881 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.298217 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/slide-toggle.mjs': 1.157118 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/progress-spinner.mjs': 1.105541 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 3.228795 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.960002 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 2.530958 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/a11y.mjs': 1.76923 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 2.767808 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.240362 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/platform.mjs': 1.298843 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators/mergeWith.js': 1.802478 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators/withLatestFrom.js': 2.343539 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|f284569173ffe980|runtime': 15.139189 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 8.453751 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 290.206891 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1138 items, 1 files, 41 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 344.95 kB |                86.53 kB
styles.css          | styles        |  79.25 kB |                 7.63 kB
polyfills.js        | polyfills     |  32.97 kB |                10.63 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 458.06 kB |               105.30 kB

Build at: 2024-01-19T18:13:11.894Z - Hash: 33fdc8827419298a - Time: 14088ms
Done in 15.84s.
```
Fri Jan 19 01:13:28 PM EST 2024
yarn version v1.22.21
info Current version: 0.0.376
info New version: 0.0.377
Done in 0.12s.
