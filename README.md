Thu Nov  9 06:14:30 PM EST 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.0Gi       1.3Gi       488Mi        11Gi        12Gi
Swap:          8.0Gi       1.0Mi       8.0Gi
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
    

Angular CLI: 17.0.0
Node: 20.9.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 17.0.1
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1700.0
@angular-devkit/build-angular   17.0.0
@angular-devkit/core            17.0.0
@angular-devkit/schematics      17.0.0
@angular/cdk                    17.0.0
@angular/cli                    17.0.0
@angular/material               17.0.0
@schematics/angular             17.0.0
rxjs                            7.8.0
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.55s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.33s.
```
```bash
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
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/17.0.0/angular-webpack/2895f59df74bd3010d06148eafa19b71abeb2e3d.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/17.0.0/angular-webpack/2895f59df74bd3010d06148eafa19b71abeb2e3d/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1917.477421 ms
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
    1111 ms (resolving: 34 ms, restoring: 0 ms, integration: 0 ms, building: 1077 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 85.4 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 85.4 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [554] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1298 ms (resolving: 31 ms, restoring: 0 ms, integration: 0 ms, building: 1267 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1220 ms (resolving: 32 ms, restoring: 0 ms, integration: 0 ms, building: 1188 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.435294 ms
<t> runtime requirements.chunks: 0.394517 ms
<t> runtime requirements.entries: 1.48867 ms
<t> runtime requirements.modules: 0.024138 ms
<t> runtime requirements.chunks: 0.014418 ms
<t> runtime requirements.entries: 0.134255 ms
<t> finish module profiles: 6.218894 ms
<t> compute affected modules: 0.005854 ms
<t> finish modules: 17.351454 ms
<t> report dependency errors and warnings: 10.265196 ms
<t> optimize dependencies: 11.561451 ms
<t> create chunks: 3.816418 ms
<t> compute affected modules with chunk graph: 0.003788 ms
<t> optimize: 27.765093 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 10.989172 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 474.776924 ms
<t> runtime requirements.modules: 0.251495 ms
<t> runtime requirements.chunks: 0.074268 ms
<t> runtime requirements.entries: 0.495928 ms
<t> runtime requirements: 1.016625 ms
<t> hashing: initialize hash: 0.007262 ms
<t> hashing: sort chunks: 0.040913 ms
<t> hashing: hash runtime modules: 1.069382 ms
<t> hashing: hash chunks: 1.136695 ms
<t> hashing: hash digest: 0.014814 ms
<t> hashing: process full hash modules: 0.209282 ms
<t> hashing: 2.583217 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.063084 ms
<t> module assets: 0.164371 ms
<t> create chunk assets: 2.873591 ms
<t> process assets: 4225.069256 ms

LOG from webpack.Compiler
<t> make hook: 4847.539512 ms
<t> finish make hook: 0.151329 ms
<t> finish compilation: 33.886416 ms
<t> seal compilation: 4762.419498 ms
<t> afterCompile hook: 0.122854 ms
<t> emitAssets: 3.651225 ms
<t> emitRecords: 0.057324 ms
<t> done hook: 123.280979 ms
<t> beginIdle: 0.356941 ms

LOG from webpack.Compilation.ModuleProfile
     | 36 ms (parallelism 3.9) resolve to new modules > ./node_modules/@angular/core/fesm2022/core.mjs
     | 36 ms (parallelism 3.9) resolve to new modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     | 32 ms (parallelism 12) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/bidi.mjs
     | 32 ms (parallelism 12) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/platform.mjs
     | 45 ms (parallelism 13.5) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/keycodes.mjs
     | 47 ms (parallelism 15.6) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/cdk.mjs
    573 ms resolve to new modules
     | 56 ms (parallelism 2.9) integrate modules > ./src/main.ts
    59 ms integrate modules
<i>  |  | 225 ms (parallelism 5.6) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 225 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 203 ms (parallelism 5.9) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 203 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 193 ms (parallelism 5.9) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 96 ms (parallelism 2.8) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
<i>  |  | 239 ms (parallelism 7.1) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
<i>  |  | 221 ms (parallelism 9.2) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
<i>  |  | 238 ms (parallelism 7.2) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 236 ms (parallelism 7) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
<i>  |  | 236 ms (parallelism 7) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
<i>  |  | 236 ms (parallelism 7.4) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
<i>  |  | 238 ms (parallelism 7.6) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 36 ms (parallelism 11.7) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 50 ms (parallelism 13.2) build modules > ./node_modules/@angular/core/fesm2022/primitives/signals.mjs
     |  | 55 ms (parallelism 12.9) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 51 ms (parallelism 13.1) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 57 ms (parallelism 13) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
<i>  | 2212 ms build modules > 23 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 177 ms (parallelism 6.1) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 57 ms (parallelism 13) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 57 ms (parallelism 13) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     | 481 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 237 ms (parallelism 5.4) build modules > ./src/main.ts
<i>  | 268 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
     |  | 160 ms (parallelism 6.2) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 160 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i> 3577 ms build modules
     | 56 ms (parallelism 2.9) restore modules > ./src/main.ts
    59 ms restore modules
+ 14 hidden lines

LOG from webpack.ResolverCachePlugin
    32% really resolved (564 real resolves with 0 cached but invalid, 1216 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.43118 ms
<t> figure out provided exports: 10.065086 ms
    95% of exports of modules have been determined (15 no declared exports, 260 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 5 additional calculations due to dependencies)
<t> store provided exports into cache: 2.151846 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 10.879254 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.099817 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.520123 ms
<t> trace exports usage in graph: 6.521423 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.719638 ms
<t> visitModules: visiting: 2.525165 ms
    267 queue items processed (123 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.598424 ms
<t> connectChunkGroups: 0.002827 ms
<t> cleanup: 0.001187 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.042496 ms
<t> modules: 2.16358 ms
<t> queue: 0.004171 ms
<t> maxSize: 0.030407 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.924478 ms
<t> sort relevant modules: 0.122546 ms
<t> find modules to concatenate: 5.928101 ms
<t> sort concat configurations: 0.047383 ms
<t> create concatenated modules: 8.931491 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 154.776815 ms
<t> optimize asset: polyfills.js: 496.530598 ms
<t> optimize asset: main.js: 3456.051689 ms
<t> optimize js assets: 3516.513383 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 11.844747 ms
<t> optimize css assets: 12.48924 ms

LOG from webpack.FileSystemInfo
    827 new snapshots created
    0% root snapshot uncached (0 / 1216)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 130 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3439/4090) entries shared via 3 shared snapshots (561 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 56% (217/389) entries shared via 12 shared snapshots (29 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 22% (266/1205) entries shared via 18 shared snapshots (45 times referenced)
    Managed files snapshot optimization: 79% (3336/4227) entries shared via 182 shared snapshots (760 times referenced)
    Managed missing snapshot optimization: 84% (3803/4502) entries shared via 225 shared snapshots (660 times referenced)

2023-11-09 18:15:08: webpack 5.89.0 compiled in 11546 ms (0aee6bce91f0082f)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1244.3561770000001 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 49.64932 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1138 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 2.345901 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.686704 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 2.411387 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 2.672197 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/a11y.mjs': 1.165267 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 2.196654 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators/window.js': 1.43856 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/util/EmptyError.js': 1.988156 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|6fbab3001b309b4f|runtime': 10.780275 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 5.935399 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 187.01546 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1138 items, 1 files, 41 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 341.72 kB |                86.01 kB
styles.css          | styles        |  83.31 kB |                 8.13 kB
polyfills.js        | polyfills     |  32.97 kB |                10.63 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 458.89 kB |               105.28 kB

Build at: 2023-11-09T23:15:10.638Z - Hash: 0aee6bce91f0082f - Time: 13562ms
Done in 15.25s.
```
