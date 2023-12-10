Sun Dec 10 06:33:22 AM EST 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       1.9Gi       3.1Gi       271Mi        10Gi        13Gi
Swap:          8.0Gi        17Mi       8.0Gi
System Storage
806M	.
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
Latest version:     1.0.30001568
Installed version:  1.0.30001566
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
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/17.0.6/angular-webpack/7a941c701ac710404288ca3eab66dc12ac4aad22.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/17.0.6/angular-webpack/7a941c701ac710404288ca3eab66dc12ac4aad22/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 2050.011396 ms
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
    1289 ms (resolving: 32 ms, restoring: 0 ms, integration: 0 ms, building: 1257 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 85.2 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 85.2 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [554] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1470 ms (resolving: 29 ms, restoring: 0 ms, integration: 0 ms, building: 1441 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1395 ms (resolving: 29 ms, restoring: 0 ms, integration: 0 ms, building: 1365 ms, storing: 1 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.426505 ms
<t> runtime requirements.chunks: 0.388062 ms
<t> runtime requirements.entries: 1.482054 ms
<t> runtime requirements.modules: 0.025532 ms
<t> runtime requirements.chunks: 0.014633 ms
<t> runtime requirements.entries: 0.156138 ms
<t> finish module profiles: 8.904349 ms
<t> compute affected modules: 0.007235 ms
<t> finish modules: 15.13798 ms
<t> report dependency errors and warnings: 4.602882 ms
<t> optimize dependencies: 9.761571 ms
<t> create chunks: 3.007854 ms
<t> compute affected modules with chunk graph: 0.00296 ms
<t> optimize: 25.644953 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 7.15287 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 461.9524 ms
<t> runtime requirements.modules: 0.236526 ms
<t> runtime requirements.chunks: 0.082048 ms
<t> runtime requirements.entries: 0.488525 ms
<t> runtime requirements: 1.009889 ms
<t> hashing: initialize hash: 0.007948 ms
<t> hashing: sort chunks: 0.044331 ms
<t> hashing: hash runtime modules: 1.047527 ms
<t> hashing: hash chunks: 1.21793 ms
<t> hashing: hash digest: 0.015894 ms
<t> hashing: process full hash modules: 0.216666 ms
<t> hashing: 2.648423 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.067422 ms
<t> module assets: 0.158865 ms
<t> create chunk assets: 2.927913 ms
<t> process assets: 4051.126963 ms

LOG from webpack.Compiler
<t> make hook: 6140.727943 ms
<t> finish make hook: 0.103275 ms
<t> finish compilation: 28.691751 ms
<t> seal compilation: 4567.075782 ms
<t> afterCompile hook: 0.098357 ms
<t> emitAssets: 3.595039 ms
<t> emitRecords: 0.063486 ms
<t> done hook: 107.624604 ms
<t> beginIdle: 0.349251 ms

LOG from webpack.Compilation.ModuleProfile
     | 62 ms (parallelism 3.3) resolve to new modules > ./src/main.ts
     | 117 ms (parallelism 8) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 65 ms (parallelism 12.4) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 39 ms (parallelism 12) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/bidi.mjs
     | 39 ms (parallelism 12) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/keycodes.mjs
     | 39 ms (parallelism 12) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/platform.mjs
     | 54 ms (parallelism 16.3) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/cdk.mjs
    820 ms resolve to new modules
     | 64 ms (parallelism 12.4) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    102 ms resolve to existing modules
<i>  |  | 256 ms (parallelism 5.6) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 256 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 234 ms (parallelism 5.8) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 234 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 211 ms (parallelism 6) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 88 ms (parallelism 2.2) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 149 ms (parallelism 8) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 185 ms (parallelism 8) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 182 ms (parallelism 8) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 181 ms (parallelism 8) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 180 ms (parallelism 8) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 67 ms (parallelism 12.4) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 90 ms (parallelism 10.4) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 91 ms (parallelism 10.5) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 94 ms (parallelism 10.6) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 90 ms (parallelism 10.4) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 92 ms (parallelism 10.5) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 97 ms (parallelism 13.2) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
<i>  | 1881 ms build modules > 23 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 210 ms (parallelism 6) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 92 ms (parallelism 13.4) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 92 ms (parallelism 13.4) build modules > ./node_modules/rxjs/dist/esm/index.js
<i>  | 1421 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 190 ms (parallelism 6.1) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 190 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 274 ms (parallelism 5.4) build modules > ./src/main.ts
     |  | 116 ms (parallelism 8) build modules > ./src/app/app-routing.module.ts
     |  | 116 ms (parallelism 8) build modules > ./src/app/app.component.ts
<i>  | 529 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i> 4539 ms build modules
+ 20 hidden lines

LOG from webpack.ResolverCachePlugin
    32% really resolved (564 real resolves with 0 cached but invalid, 1213 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 0.98834 ms
<t> figure out provided exports: 8.918045 ms
    95% of exports of modules have been determined (15 no declared exports, 260 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 1.686354 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 9.691447 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.861715 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.587703 ms
<t> trace exports usage in graph: 4.859356 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.503669 ms
<t> visitModules: visiting: 2.164151 ms
    267 queue items processed (123 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.237154 ms
<t> connectChunkGroups: 0.002597 ms
<t> cleanup: 0.000971 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.027472 ms
<t> modules: 2.405717 ms
<t> queue: 0.004376 ms
<t> maxSize: 0.030735 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.015312 ms
<t> sort relevant modules: 0.117501 ms
<t> find modules to concatenate: 8.076656 ms
<t> sort concat configurations: 0.036729 ms
<t> create concatenated modules: 5.014025 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 182.193896 ms
<t> optimize asset: polyfills.js: 596.473635 ms
<t> optimize asset: main.js: 3331.417755 ms
<t> optimize js assets: 3395.25102 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 10.484598 ms
<t> optimize css assets: 11.013833 ms

LOG from webpack.FileSystemInfo
    827 new snapshots created
    0% root snapshot uncached (0 / 1213)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 130 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3446/4090) entries shared via 3 shared snapshots (562 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 60% (232/389) entries shared via 13 shared snapshots (32 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 20% (241/1205) entries shared via 12 shared snapshots (40 times referenced)
    Managed files snapshot optimization: 79% (3335/4227) entries shared via 184 shared snapshots (760 times referenced)
    Managed missing snapshot optimization: 90% (4030/4502) entries shared via 197 shared snapshots (775 times referenced)

2023-12-10 06:33:57: webpack 5.89.0 compiled in 12773 ms (19d40ad71cde2915)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1258.635138 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 48.172962 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1138 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 2.486017 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.705922 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 2.619161 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.692558 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 2.829278 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/animations/fesm2022/browser.mjs': 1.004462 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/operators/index.js': 1.860906 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 1.076242 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/observers.mjs': 1.01786 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators/windowCount.js': 1.439183 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/scheduled/scheduled.js': 2.148932 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|6fbab3001b309b4f|runtime': 11.611184 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 6.034992 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 192.799914 ms
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

Build at: 2023-12-10T11:33:59.606Z - Hash: 19d40ad71cde2915 - Time: 14931ms
Done in 17.00s.
```
