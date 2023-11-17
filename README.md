Fri Nov 17 07:15:07 AM EST 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.4Gi       2.7Gi       275Mi        10Gi        12Gi
Swap:          8.0Gi       512Ki       8.0Gi
System Storage
807M	.
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
Done in 0.33s.
```
```bash
Latest version:     1.0.30001563
Installed version:  1.0.30001562
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
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1903.521923 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/package.json invalidated because hashes differ (acc1cf0d16063821 != 404f136c317ee626)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/node_modules/caniuse-lite invalidated because hashes differ (caniuse-lite@1.0.30001563 != caniuse-lite@1.0.30001562)
    [webpack.cache.PackFileCacheStrategy] Restored pack from /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/17.0.1/angular-webpack/5ae485daa7b1a5f11939a77c5dab7e86ed786aef.pack, but build dependencies have changed.
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 960.276743 ms
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
    1336 ms (resolving: 1003 ms, restoring: 1 ms, integration: 0 ms, building: 332 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 85.4 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 85.4 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [554] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1541 ms (resolving: 1000 ms, restoring: 0 ms, integration: 0 ms, building: 541 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1462 ms (resolving: 1000 ms, restoring: 1 ms, integration: 0 ms, building: 461 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.380869 ms
<t> runtime requirements.chunks: 0.418354 ms
<t> runtime requirements.entries: 1.429359 ms
<t> runtime requirements.modules: 0.024175 ms
<t> runtime requirements.chunks: 0.014812 ms
<t> runtime requirements.entries: 0.165979 ms
<t> finish module profiles: 11.20756 ms
<t> compute affected modules: 0.007188 ms
<t> finish modules: 15.597452 ms
<t> report dependency errors and warnings: 4.621843 ms
<t> optimize dependencies: 10.23294 ms
<t> create chunks: 3.209763 ms
<t> compute affected modules with chunk graph: 0.004491 ms
<t> optimize: 25.57094 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 7.05584 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 549.42815 ms
<t> runtime requirements.modules: 0.237832 ms
<t> runtime requirements.chunks: 0.086522 ms
<t> runtime requirements.entries: 0.470578 ms
<t> runtime requirements: 1.220296 ms
<t> hashing: initialize hash: 0.008304 ms
<t> hashing: sort chunks: 0.04634 ms
<t> hashing: hash runtime modules: 1.038803 ms
<t> hashing: hash chunks: 1.226129 ms
<t> hashing: hash digest: 0.018027 ms
<t> hashing: process full hash modules: 0.209533 ms
<t> hashing: 2.647686 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.062503 ms
<t> module assets: 0.161337 ms
<t> create chunk assets: 2.834322 ms
<t> process assets: 4082.422587 ms

LOG from webpack.Compiler
<t> make hook: 2971.231712 ms
<t> finish make hook: 0.106484 ms
<t> finish compilation: 31.477226 ms
<t> seal compilation: 4686.603493 ms
<t> afterCompile hook: 0.107244 ms
<t> emitAssets: 3.834913 ms
<t> emitRecords: 0.088606 ms
<t> done hook: 118.09146 ms
<t> beginIdle: 0.417981 ms

LOG from webpack.Compilation.ModuleProfile
     | 200 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 200 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
<i>  | 202 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
<i>  | 201 ms (parallelism 5) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
<i>  | 249 ms (parallelism 4.7) resolve to new modules > ./src/main.ts
     | 35 ms (parallelism 14.4) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
<i> 1349 ms resolve to new modules
     | 35 ms (parallelism 14.4) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    49 ms resolve to existing modules
     |  | 106 ms (parallelism 5.1) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 106 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 82 ms (parallelism 5.7) build modules > ./src/styles.scss?ngGlobalStyle
     | 82 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 49 ms (parallelism 6.2) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 81 ms (parallelism 2.2) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 37 ms (parallelism 14) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 49 ms (parallelism 6.4) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 431 ms build modules > 23 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 53 ms (parallelism 6.3) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 42 ms (parallelism 6.9) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 42 ms (parallelism 6.9) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     | 276 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 111 ms (parallelism 4.8) build modules > ./src/main.ts
     | 143 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
     |  | 55 ms (parallelism 6.2) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 55 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
    1125 ms build modules
+ 20 hidden lines

LOG from webpack.ResolverCachePlugin
    32% really resolved (564 real resolves with 0 cached but invalid, 1208 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.024493 ms
<t> figure out provided exports: 9.107263 ms
    95% of exports of modules have been determined (15 no declared exports, 260 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 5 additional calculations due to dependencies)
<t> store provided exports into cache: 1.596357 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 13.026246 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.922258 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.599952 ms
<t> trace exports usage in graph: 5.292363 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.597518 ms
<t> visitModules: visiting: 2.304762 ms
    267 queue items processed (123 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.396484 ms
<t> connectChunkGroups: 0.002922 ms
<t> cleanup: 0.001206 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.035463 ms
<t> modules: 2.269078 ms
<t> queue: 0.004409 ms
<t> maxSize: 0.029545 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.978282 ms
<t> sort relevant modules: 0.119299 ms
<t> find modules to concatenate: 4.874822 ms
<t> sort concat configurations: 0.037326 ms
<t> create concatenated modules: 8.04603 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 151.72739 ms
<t> optimize asset: polyfills.js: 551.388007 ms
<t> optimize asset: main.js: 3382.24275 ms
<t> optimize js assets: 3432.646542 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 11.728702 ms
<t> optimize css assets: 12.402446 ms

LOG from webpack.FileSystemInfo
    827 new snapshots created
    0% root snapshot uncached (0 / 1208)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 130 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3439/4090) entries shared via 3 shared snapshots (561 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 63% (247/389) entries shared via 12 shared snapshots (33 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 23% (277/1205) entries shared via 14 shared snapshots (50 times referenced)
    Managed files snapshot optimization: 79% (3329/4227) entries shared via 182 shared snapshots (760 times referenced)
    Managed missing snapshot optimization: 89% (4013/4502) entries shared via 194 shared snapshots (778 times referenced)

2023-11-17 07:15:38: webpack 5.89.0 compiled in 9564 ms (8859b7d8181a3374)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 491.962627 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 10.194641 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1138 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 3.110475 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 4.186095 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/slide-toggle.mjs': 1.212308 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 3.522267 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.127616 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 1.722991 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 2.205767 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/layout.mjs': 1.019001 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators/windowTime.js': 1.521729 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/scheduled/scheduled.js': 1.901785 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|6fbab3001b309b4f|runtime': 11.051308 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 5.989193 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 250.189039 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1138 items, 1 files, 41 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 341.97 kB |                86.11 kB
styles.css          | styles        |  83.35 kB |                 8.15 kB
polyfills.js        | polyfills     |  32.97 kB |                10.63 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 459.19 kB |               105.40 kB

Build at: 2023-11-17T12:15:39.686Z - Hash: 8859b7d8181a3374 - Time: 10762ms
Done in 12.45s.
```
