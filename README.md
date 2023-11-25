Sat Nov 25 10:10:38 AM EST 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       4.0Gi       2.2Gi       238Mi       9.6Gi        11Gi
Swap:          8.0Gi       376Mi       7.6Gi
System Storage
794M	.
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
    

Angular CLI: 17.0.2
Node: 20.10.0
Package Manager: yarn 1.22.21
OS: linux x64

Angular: 17.0.4
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1700.2
@angular-devkit/build-angular   17.0.2
@angular-devkit/core            17.0.2
@angular-devkit/schematics      17.0.2
@angular/cdk                    17.0.1
@angular/cli                    17.0.2
@angular/material               17.0.1
@schematics/angular             17.0.2
rxjs                            7.8.0
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.53s.
yarn install v1.22.21
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
Done in 3.64s.
```
```bash
Latest version:     1.0.30001564
Installed version:  1.0.30001563
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
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/17.0.3/angular-webpack/10aeccefc001d669e617508b372fa9a351f5f4db.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/17.0.3/angular-webpack/10aeccefc001d669e617508b372fa9a351f5f4db/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1925.110651 ms
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
    1311 ms (resolving: 33 ms, restoring: 1 ms, integration: 0 ms, building: 1277 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 85.4 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 85.4 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [554] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1421 ms (resolving: 30 ms, restoring: 0 ms, integration: 0 ms, building: 1391 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1338 ms (resolving: 30 ms, restoring: 1 ms, integration: 0 ms, building: 1307 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.423056 ms
<t> runtime requirements.chunks: 0.387386 ms
<t> runtime requirements.entries: 1.482757 ms
<t> runtime requirements.modules: 0.024721 ms
<t> runtime requirements.chunks: 0.014691 ms
<t> runtime requirements.entries: 0.17473 ms
<t> finish module profiles: 9.767824 ms
<t> compute affected modules: 0.005846 ms
<t> finish modules: 17.595581 ms
<t> report dependency errors and warnings: 5.674109 ms
<t> optimize dependencies: 10.192638 ms
<t> create chunks: 3.853632 ms
<t> compute affected modules with chunk graph: 0.003211 ms
<t> optimize: 27.984836 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 7.860641 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 499.700861 ms
<t> runtime requirements.modules: 0.419637 ms
<t> runtime requirements.chunks: 0.13291 ms
<t> runtime requirements.entries: 0.714332 ms
<t> runtime requirements: 1.556014 ms
<t> hashing: initialize hash: 0.009971 ms
<t> hashing: sort chunks: 0.068154 ms
<t> hashing: hash runtime modules: 1.055929 ms
<t> hashing: hash chunks: 1.687994 ms
<t> hashing: hash digest: 0.018014 ms
<t> hashing: process full hash modules: 0.202032 ms
<t> hashing: 3.163862 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.064457 ms
<t> module assets: 0.160579 ms
<t> create chunk assets: 2.895572 ms
<t> process assets: 4421.887047 ms

LOG from webpack.Compiler
<t> make hook: 6390.29789 ms
<t> finish make hook: 0.104725 ms
<t> finish compilation: 33.093808 ms
<t> seal compilation: 4981.130167 ms
<t> afterCompile hook: 0.088126 ms
<t> emitAssets: 7.267231 ms
<t> emitRecords: 0.085359 ms
<t> done hook: 202.827658 ms
<t> beginIdle: 0.352667 ms

LOG from webpack.Compilation.ModuleProfile
     | 65 ms (parallelism 3.3) resolve to new modules > ./src/main.ts
     | 40 ms (parallelism 3.1) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 141 ms (parallelism 7.1) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 70 ms (parallelism 12.1) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
    697 ms resolve to new modules
     | 69 ms (parallelism 12.1) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    124 ms resolve to existing modules
<i>  |  | 250 ms (parallelism 5.6) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 250 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 225 ms (parallelism 5.8) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 225 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 215 ms (parallelism 5.9) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 87 ms (parallelism 2.1) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
<i>  |  | 211 ms (parallelism 7.5) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 208 ms (parallelism 7.4) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
<i>  |  | 209 ms (parallelism 7.4) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
<i>  |  | 207 ms (parallelism 7.4) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
<i>  |  | 209 ms (parallelism 7.4) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 72 ms (parallelism 12.2) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 42 ms (parallelism 10.5) build modules > ./node_modules/@angular/core/fesm2022/primitives/signals.mjs
     |  | 81 ms (parallelism 9.8) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 96 ms (parallelism 9.5) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 97 ms (parallelism 9.6) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 101 ms (parallelism 9.9) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 96 ms (parallelism 9.5) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 100 ms (parallelism 9.9) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 120 ms (parallelism 10.6) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
<i>  | 2196 ms build modules > 23 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 220 ms (parallelism 5.8) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 116 ms (parallelism 10.6) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 115 ms (parallelism 10.6) build modules > ./node_modules/rxjs/dist/esm/index.js
<i>  | 1574 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 281 ms (parallelism 5.3) build modules > ./src/main.ts
     |  | 140 ms (parallelism 7.1) build modules > ./src/app/app.component.ts
<i>  | 452 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
     |  | 159 ms (parallelism 6.2) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 159 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i> 4890 ms build modules
+ 16 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (564 real resolves with 0 cached but invalid, 1271 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.509869 ms
<t> figure out provided exports: 10.178043 ms
    95% of exports of modules have been determined (15 no declared exports, 260 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 2.217481 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 11.931567 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.047357 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.654198 ms
<t> trace exports usage in graph: 5.021135 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 2.009705 ms
<t> visitModules: visiting: 2.863147 ms
    267 queue items processed (123 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.945332 ms
<t> connectChunkGroups: 0.003979 ms
<t> cleanup: 0.001832 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.046997 ms
<t> modules: 2.254926 ms
<t> queue: 0.004294 ms
<t> maxSize: 0.031187 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.042322 ms
<t> sort relevant modules: 0.163901 ms
<t> find modules to concatenate: 8.362891 ms
<t> sort concat configurations: 0.071616 ms
<t> create concatenated modules: 6.539283 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 169.854985 ms
<t> optimize asset: polyfills.js: 582.25766 ms
<t> optimize asset: main.js: 3714.091496 ms
<t> optimize js assets: 3788.015532 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 11.953767 ms
<t> optimize css assets: 12.691792 ms

LOG from webpack.FileSystemInfo
    827 new snapshots created
    0% root snapshot uncached (0 / 1271)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 130 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3446/4090) entries shared via 3 shared snapshots (562 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 60% (233/389) entries shared via 11 shared snapshots (31 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 19% (223/1205) entries shared via 11 shared snapshots (39 times referenced)
    Managed files snapshot optimization: 79% (3335/4227) entries shared via 184 shared snapshots (760 times referenced)
    Managed missing snapshot optimization: 86% (3892/4502) entries shared via 194 shared snapshots (775 times referenced)

2023-11-25 10:11:33: webpack 5.89.0 compiled in 13318 ms (787a4edcd61448dc)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1240.3156920000001 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 49.133549 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1138 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.74366 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 2.344252 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 2.883489 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.581812 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 2.207869 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/a11y.mjs': 1.255256 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 2.229454 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators/refCount.js': 1.407098 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|6fbab3001b309b4f|runtime': 11.27858 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 5.99123 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 188.475023 ms
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

Build at: 2023-11-25T15:11:35.530Z - Hash: 787a4edcd61448dc - Time: 15558ms
Done in 17.34s.
```
