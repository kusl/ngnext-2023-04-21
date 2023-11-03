Fri Nov  3 01:12:08 PM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.7Gi       3.0Gi       448Mi       9.5Gi        11Gi
Swap:          8.0Gi        68Mi       7.9Gi
System Storage
847M	.
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

Angular: 16.2.11
... animations, cdk, common, compiler, compiler-cli, core, forms
... localize, material, platform-browser
... platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.9
@angular-devkit/build-angular   16.2.9
@angular-devkit/core            16.2.9
@angular-devkit/schematics      16.2.9
@angular/cli                    16.2.9
@schematics/angular             16.2.9
rxjs                            7.8.0
typescript                      5.0.4
zone.js                         0.13.0
    
Warning: The current version of Node (20.9.0) is not supported by Angular.
Done in 0.55s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.37s.
```
Latest version:     1.0.30001559
Installed version:  1.0.30001559
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001559
Installed version:  1.0.30001559
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.2.9/angular-webpack/96dfcf895e85851e25d1e1b64e67bad405eabd14.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.2.9/angular-webpack/96dfcf895e85851e25d1e1b64e67bad405eabd14/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 2070.193717 ms
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
  ./src/main.ts + 114 modules [368] 2.61 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    833 ms (resolving: 32 ms, restoring: 1 ms, integration: 0 ms, building: 800 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 84.2 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 84.2 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [554] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1019 ms (resolving: 28 ms, restoring: 0 ms, integration: 0 ms, building: 991 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    946 ms (resolving: 29 ms, restoring: 1 ms, integration: 0 ms, building: 916 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.434738 ms
<t> runtime requirements.chunks: 0.392548 ms
<t> runtime requirements.entries: 3.700003 ms
<t> runtime requirements.modules: 0.027478 ms
<t> runtime requirements.chunks: 0.016673 ms
<t> runtime requirements.entries: 0.13389 ms
<t> finish module profiles: 10.571251 ms
<t> compute affected modules: 0.006202 ms
<t> finish modules: 16.316299 ms
<t> report dependency errors and warnings: 5.424914 ms
<t> optimize dependencies: 16.286059 ms
<t> create chunks: 3.168843 ms
<t> compute affected modules with chunk graph: 0.004139 ms
<t> optimize: 26.027961 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 8.097315 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 426.111203 ms
<t> runtime requirements.modules: 0.238724 ms
<t> runtime requirements.chunks: 0.079214 ms
<t> runtime requirements.entries: 0.474036 ms
<t> runtime requirements: 0.985791 ms
<t> hashing: initialize hash: 0.006989 ms
<t> hashing: sort chunks: 0.058488 ms
<t> hashing: hash runtime modules: 1.051012 ms
<t> hashing: hash chunks: 1.215356 ms
<t> hashing: hash digest: 0.021002 ms
<t> hashing: process full hash modules: 0.208165 ms
<t> hashing: 2.65883 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.067294 ms
<t> module assets: 0.150457 ms
<t> create chunk assets: 2.878445 ms
<t> process assets: 4037.305484 ms

LOG from webpack.Compiler
<t> make hook: 4680.47721 ms
<t> finish make hook: 0.158287 ms
<t> finish compilation: 32.368657 ms
<t> seal compilation: 4525.617936 ms
<t> afterCompile hook: 0.083981 ms
<t> emitAssets: 3.55895 ms
<t> emitRecords: 0.059965 ms
<t> done hook: 126.657302 ms
<t> beginIdle: 0.371259 ms

LOG from webpack.Compilation.ModuleProfile
     | 62 ms (parallelism 3.3) resolve to new modules > ./src/main.ts
    471 ms resolve to new modules
     |  | 178 ms (parallelism 5.6) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 178 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 157 ms (parallelism 5.9) build modules > ./src/styles.scss?ngGlobalStyle
     | 157 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 146 ms (parallelism 6) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 164 ms (parallelism 1.8) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
<i>  |  | 224 ms (parallelism 8) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
<i>  |  | 223 ms (parallelism 8.2) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 208 ms (parallelism 10.2) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
<i>  |  | 224 ms (parallelism 7.9) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
<i>  |  | 223 ms (parallelism 7.9) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
<i>  |  | 225 ms (parallelism 8.7) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
<i>  |  | 223 ms (parallelism 8.5) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 40 ms (parallelism 9.4) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 42 ms (parallelism 9) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 50 ms (parallelism 13) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 51 ms (parallelism 12.9) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 56 ms (parallelism 12.9) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 52 ms (parallelism 12.9) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
<i>  | 2163 ms build modules > 22 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 130 ms (parallelism 6.1) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 52 ms (parallelism 13) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 51 ms (parallelism 13) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     | 386 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 193 ms (parallelism 5.3) build modules > ./src/main.ts
     |  | 190 ms (parallelism 10.4) build modules > ./src/app/name-editor/name-editor.component.ts
     | 393 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
     |  | 114 ms (parallelism 6.3) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 114 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i> 3427 ms build modules
+ 18 hidden lines

LOG from webpack.ResolverCachePlugin
    32% really resolved (563 real resolves with 0 cached but invalid, 1222 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 0.990023 ms
<t> figure out provided exports: 9.622275 ms
    95% of exports of modules have been determined (15 no declared exports, 259 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 5 additional calculations due to dependencies)
<t> store provided exports into cache: 2.135915 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 10.140891 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.459568 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 1.015602 ms
<t> trace exports usage in graph: 10.230673 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.541044 ms
<t> visitModules: visiting: 2.324652 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.396548 ms
<t> connectChunkGroups: 0.002673 ms
<t> cleanup: 0.001235 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.061118 ms
<t> modules: 2.128331 ms
<t> queue: 0.004572 ms
<t> maxSize: 0.030218 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.892726 ms
<t> sort relevant modules: 0.127311 ms
<t> find modules to concatenate: 5.865813 ms
<t> sort concat configurations: 0.041867 ms
<t> create concatenated modules: 7.15877 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 184.593446 ms
<t> optimize asset: polyfills.js: 638.861859 ms
<t> optimize asset: main.js: 3307.3552250000002 ms
<t> optimize js assets: 3382.778749 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 11.697731 ms
<t> optimize css assets: 12.372158 ms

LOG from webpack.FileSystemInfo
    825 new snapshots created
    0% root snapshot uncached (0 / 1222)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 134 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3433/4082) entries shared via 3 shared snapshots (560 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 53% (205/389) entries shared via 11 shared snapshots (29 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 21% (256/1203) entries shared via 18 shared snapshots (45 times referenced)
    Managed files snapshot optimization: 79% (3330/4217) entries shared via 182 shared snapshots (758 times referenced)
    Managed missing snapshot optimization: 85% (3823/4500) entries shared via 229 shared snapshots (662 times referenced)

2023-11-03 13:12:47: webpack 5.88.2 compiled in 11282 ms (99892e0584df32ed)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1063.882323 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 40.956425 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1136 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.729348 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 1.812803 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 2.591184 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 2.973117 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 4.530149 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators/zip.js': 1.527644 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|bdcffb4806b02a7f|runtime': 10.412977 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 5.64598 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 180.826764 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1136 items, 1 files, 39 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 341.24 kB |                85.33 kB
styles.css          | styles        |  82.22 kB |                 8.09 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 457.35 kB |               104.62 kB

Build at: 2023-11-03T17:12:49.001Z - Hash: 99892e0584df32ed - Time: 13050ms
Done in 15.16s.
```
Fri Nov  3 01:13:05 PM EDT 2023
yarn version v1.22.19
info Current version: 0.0.191
info New version: 0.0.192
Done in 0.11s.
