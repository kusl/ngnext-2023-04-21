Thu Dec 14 09:17:34 AM EST 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.6Gi       2.5Gi       313Mi        10Gi        12Gi
Swap:          8.0Gi       3.2Mi       8.0Gi
System Storage
1.1G	.
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
    

Angular CLI: 17.0.6
Node: 20.10.0
Package Manager: yarn 1.22.21
OS: linux x64

Angular: 17.0.6
... animations, cli, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1700.6
@angular-devkit/build-angular   17.0.6
@angular-devkit/core            17.0.6
@angular-devkit/schematics      17.0.6
@angular/cdk                    17.0.3
@angular/material               17.0.3
@schematics/angular             17.0.6
rxjs                            7.8.0
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.53s.
yarn install v1.22.21
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.38s.
```
```bash
Latest version:     1.0.30001570
Installed version:  1.0.30001568
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
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/17.0.7/angular-webpack/be43c01b132267c3d829f1aadf18b04ede316be6.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/17.0.7/angular-webpack/be43c01b132267c3d829f1aadf18b04ede316be6/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 2013.817824 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
asset main.js 342 KiB {179} [emitted] (name: main)
asset styles.css 82.9 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 343 KiB = runtime.js 912 bytes main.js 342 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 83.8 KiB = runtime.js 912 bytes styles.css 82.9 KiB
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
    1357 ms (resolving: 33 ms, restoring: 1 ms, integration: 0 ms, building: 1323 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 85.5 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 85.5 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [554] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1537 ms (resolving: 29 ms, restoring: 0 ms, integration: 0 ms, building: 1508 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1458 ms (resolving: 30 ms, restoring: 1 ms, integration: 0 ms, building: 1427 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.388245 ms
<t> runtime requirements.chunks: 0.386031 ms
<t> runtime requirements.entries: 1.422235 ms
<t> runtime requirements.modules: 0.024228 ms
<t> runtime requirements.chunks: 0.01436 ms
<t> runtime requirements.entries: 0.139936 ms
<t> finish module profiles: 8.368993 ms
<t> compute affected modules: 0.005616 ms
<t> finish modules: 15.432122 ms
<t> report dependency errors and warnings: 4.586445 ms
<t> optimize dependencies: 9.609848 ms
<t> create chunks: 2.994428 ms
<t> compute affected modules with chunk graph: 0.002823 ms
<t> optimize: 25.94962 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 7.516937 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 468.556098 ms
<t> runtime requirements.modules: 0.245121 ms
<t> runtime requirements.chunks: 0.086052 ms
<t> runtime requirements.entries: 0.51972 ms
<t> runtime requirements: 1.060541 ms
<t> hashing: initialize hash: 0.007609 ms
<t> hashing: sort chunks: 0.054669 ms
<t> hashing: hash runtime modules: 1.102835 ms
<t> hashing: hash chunks: 1.313583 ms
<t> hashing: hash digest: 0.018442 ms
<t> hashing: process full hash modules: 0.226998 ms
<t> hashing: 2.828823 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.072084 ms
<t> module assets: 0.162364 ms
<t> create chunk assets: 3.013464 ms
<t> process assets: 4327.484584 ms

LOG from webpack.Compiler
<t> make hook: 6428.546475 ms
<t> finish make hook: 0.096834 ms
<t> finish compilation: 28.43492 ms
<t> seal compilation: 4850.907102 ms
<t> afterCompile hook: 0.082112 ms
<t> emitAssets: 3.514672 ms
<t> emitRecords: 0.056048 ms
<t> done hook: 116.76411 ms
<t> beginIdle: 0.377059 ms

LOG from webpack.Compilation.ModuleProfile
     | 66 ms (parallelism 3.4) resolve to new modules > ./src/main.ts
     | 34 ms (parallelism 3.9) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 123 ms (parallelism 8) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 61 ms (parallelism 12) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
    663 ms resolve to new modules
     | 60 ms (parallelism 12) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    98 ms resolve to existing modules
<i>  |  | 274 ms (parallelism 5.5) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 274 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 250 ms (parallelism 5.7) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 250 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 226 ms (parallelism 5.8) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 89 ms (parallelism 2.2) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 183 ms (parallelism 7.9) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 155 ms (parallelism 8) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 182 ms (parallelism 7.9) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 181 ms (parallelism 7.9) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 180 ms (parallelism 7.9) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 62 ms (parallelism 12.1) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 44 ms (parallelism 10.4) build modules > ./node_modules/@angular/core/fesm2022/primitives/signals.mjs
     |  | 100 ms (parallelism 9.7) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 115 ms (parallelism 9.4) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 116 ms (parallelism 9.5) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 115 ms (parallelism 9.4) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 127 ms (parallelism 11) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 118 ms (parallelism 9.7) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 131 ms (parallelism 11) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
<i>  | 2146 ms build modules > 23 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 226 ms (parallelism 5.9) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 127 ms (parallelism 11.1) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 127 ms (parallelism 11.1) build modules > ./node_modules/rxjs/dist/esm/index.js
<i>  | 1558 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 160 ms (parallelism 6.2) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 160 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 291 ms (parallelism 5.3) build modules > ./src/main.ts
     |  | 123 ms (parallelism 8) build modules > ./src/app/app-routing.module.ts
     |  | 123 ms (parallelism 8) build modules > ./src/app/app.component.ts
<i>  | 560 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i> 4977 ms build modules
+ 14 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (564 real resolves with 0 cached but invalid, 1268 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 0.940022 ms
<t> figure out provided exports: 9.014642 ms
    95% of exports of modules have been determined (15 no declared exports, 260 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 1.694116 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 11.197137 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.814457 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.574356 ms
<t> trace exports usage in graph: 4.796402 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.485594 ms
<t> visitModules: visiting: 2.136005 ms
    267 queue items processed (123 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.209205 ms
<t> connectChunkGroups: 0.002593 ms
<t> cleanup: 0.001017 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.035805 ms
<t> modules: 2.255707 ms
<t> queue: 0.004177 ms
<t> maxSize: 0.030653 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.053982 ms
<t> sort relevant modules: 0.162464 ms
<t> find modules to concatenate: 8.260054 ms
<t> sort concat configurations: 0.07165 ms
<t> create concatenated modules: 5.193568 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 183.209362 ms
<t> optimize asset: polyfills.js: 606.462511 ms
<t> optimize asset: main.js: 3613.761635 ms
<t> optimize js assets: 3680.840395 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 12.87859 ms
<t> optimize css assets: 13.696909 ms

LOG from webpack.FileSystemInfo
    827 new snapshots created
    0% root snapshot uncached (0 / 1268)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 130 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3446/4090) entries shared via 3 shared snapshots (562 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 55% (215/389) entries shared via 10 shared snapshots (30 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 20% (239/1205) entries shared via 12 shared snapshots (41 times referenced)
    Managed files snapshot optimization: 79% (3335/4227) entries shared via 184 shared snapshots (760 times referenced)
    Managed missing snapshot optimization: 86% (3892/4502) entries shared via 194 shared snapshots (775 times referenced)

2023-12-14 09:18:25: webpack 5.89.0 compiled in 13307 ms (31f6859a82790603)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1276.376073 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 49.287506 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1138 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.761728 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 2.350275 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 2.806307 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.077951 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 1.749182 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/a11y.mjs': 1.321143 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 2.253265 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/scheduled/scheduled.js': 2.521165 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators/retryWhen.js': 1.47005 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/operators|request=|../internal/operators/window': 2.067718 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|6fbab3001b309b4f|runtime': 12.019748 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 6.400098 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 188.655451 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1138 items, 1 files, 41 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 341.96 kB |                86.18 kB
styles.css          | styles        |  82.94 kB |                 8.15 kB
polyfills.js        | polyfills     |  32.97 kB |                10.63 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 458.76 kB |               105.47 kB

Build at: 2023-12-14T14:18:27.399Z - Hash: 31f6859a82790603 - Time: 15500ms
Done in 17.34s.
```
Thu Dec 14 09:18:45 AM EST 2023
yarn version v1.22.21
info Current version: 0.0.272
info New version: 0.0.273
Done in 0.12s.
