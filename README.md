Wed Aug  9 06:24:37 PM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.0Gi       2.5Gi       537Mi       9.8Gi        11Gi
Swap:          8.0Gi       974Mi       7.0Gi
System Storage
716M	.
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
    

Angular CLI: 16.1.8
Node: 18.17.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.1.8
... animations, cli, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1601.8
@angular-devkit/build-angular   16.1.8
@angular-devkit/core            16.1.8
@angular-devkit/schematics      16.1.8
@angular/cdk                    16.1.7
@angular/material               16.1.7
@schematics/angular             16.1.8
rxjs                            7.8.0
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.58s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.36s.
```
Latest version:     1.0.30001519
Installed version:  1.0.30001519
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001519
Installed version:  1.0.30001519
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.1.8/angular-webpack/6a38beec5308ea1caff9a4a5431c34e8d6a10ae5.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.1.8/angular-webpack/6a38beec5308ea1caff9a4a5431c34e8d6a10ae5/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1936.914142 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
asset main.js 337 KiB {179} [emitted] (name: main)
asset styles.css 98.9 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 338 KiB = runtime.js 912 bytes main.js 337 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 99.8 KiB = runtime.js 912 bytes styles.css 98.9 KiB
chunk {179} (runtime: runtime) main.js (main) 2.62 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2022/init.mjs + 1 modules [614] 37.3 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 114 modules [368] 2.59 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    616 ms (resolving: 161 ms, restoring: 0 ms, integration: 0 ms, building: 455 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 103 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 103 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [262] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    795 ms (resolving: 33 ms, restoring: 0 ms, integration: 0 ms, building: 762 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    795 ms (resolving: 121 ms, restoring: 0 ms, integration: 0 ms, building: 674 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.393146 ms
<t> runtime requirements.chunks: 0.406418 ms
<t> runtime requirements.entries: 1.609465 ms
<t> runtime requirements.modules: 0.026106 ms
<t> runtime requirements.chunks: 0.014661 ms
<t> runtime requirements.entries: 0.126803 ms
<t> finish module profiles: 7.437346 ms
<t> compute affected modules: 0.004428 ms
<t> finish modules: 15.076985 ms
<t> report dependency errors and warnings: 4.217802 ms
<t> optimize dependencies: 10.597139 ms
<t> create chunks: 3.351341 ms
<t> compute affected modules with chunk graph: 0.004746 ms
<t> optimize: 32.219909 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 9.313423 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 575.157979 ms
<t> runtime requirements.modules: 0.280705 ms
<t> runtime requirements.chunks: 0.091396 ms
<t> runtime requirements.entries: 0.483846 ms
<t> runtime requirements: 1.256207 ms
<t> hashing: initialize hash: 0.008792 ms
<t> hashing: sort chunks: 0.058154 ms
<t> hashing: hash runtime modules: 1.05749 ms
<t> hashing: hash chunks: 1.208027 ms
<t> hashing: hash digest: 0.016226 ms
<t> hashing: process full hash modules: 0.247484 ms
<t> hashing: 2.698453 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.066668 ms
<t> module assets: 0.184933 ms
<t> create chunk assets: 3.123966 ms
<t> process assets: 8615.385625 ms

LOG from webpack.Compiler
<t> make hook: 4724.506634 ms
<t> finish make hook: 0.120365 ms
<t> finish compilation: 26.770431 ms
<t> seal compilation: 9255.195702 ms
<t> afterCompile hook: 0.101728 ms
<t> emitAssets: 4.191467 ms
<t> emitRecords: 0.065475 ms
<t> done hook: 150.606465 ms
<t> beginIdle: 0.373331 ms

LOG from webpack.Compilation.ModuleProfile
     | 32 ms (parallelism 5.1) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 31 ms (parallelism 5.2) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 81 ms (parallelism 5.1) resolve to new modules > ./src/main.ts
     | 42 ms (parallelism 2) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 38 ms (parallelism 4) resolve to new modules > ./node_modules/@angular/core/fesm2022/core.mjs
     | 38 ms (parallelism 4) resolve to new modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     | 150 ms (parallelism 12) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
    876 ms resolve to new modules
     | 149 ms (parallelism 12) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    167 ms resolve to existing modules
     |  | 148 ms (parallelism 5.2) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 148 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 36 ms (parallelism 5.2) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 36 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 130 ms (parallelism 5.2) build modules > ./src/styles.scss?ngGlobalStyle
     | 130 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 64 ms (parallelism 5.2) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 64 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 114 ms (parallelism 4.9) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 39 ms (parallelism 3.9) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 163 ms (parallelism 8.2) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 154 ms (parallelism 11.9) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 162 ms (parallelism 8.4) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 160 ms (parallelism 8.1) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 159 ms (parallelism 8.1) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 148 ms (parallelism 12.1) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 84 ms (parallelism 12) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 91 ms (parallelism 12) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 71 ms (parallelism 9.9) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 86 ms (parallelism 12) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 83 ms (parallelism 11.9) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 70 ms (parallelism 16.8) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 91 ms (parallelism 12) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     | 1683 ms build modules > 22 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 93 ms (parallelism 4.9) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 91 ms (parallelism 12) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 91 ms (parallelism 12) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     | 454 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 185 ms (parallelism 3.7) build modules > ./src/main.ts
     |  | 39 ms (parallelism 18.3) build modules > ./src/app/name-editor/name-editor.component.ts
     | 235 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i> 2769 ms build modules
+ 13 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (563 real resolves with 0 cached but invalid, 1264 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.099965 ms
<t> figure out provided exports: 8.646016 ms
    95% of exports of modules have been determined (15 no declared exports, 259 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 5 additional calculations due to dependencies)
<t> store provided exports into cache: 1.621054 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 14.997256 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.034538 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.587158 ms
<t> trace exports usage in graph: 5.507548 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.649699 ms
<t> visitModules: visiting: 2.406834 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.488488 ms
<t> connectChunkGroups: 0.003166 ms
<t> cleanup: 0.001152 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.035818 ms
<t> modules: 6.939073 ms
<t> queue: 0.006311 ms
<t> maxSize: 0.038146 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.076535 ms
<t> sort relevant modules: 0.149906 ms
<t> find modules to concatenate: 7.177689 ms
<t> sort concat configurations: 0.038202 ms
<t> create concatenated modules: 6.096132 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 235.886007 ms
<t> optimize asset: polyfills.js: 733.806757 ms
<t> optimize asset: main.js: 7863.233999 ms
<t> optimize js assets: 7944.4597300000005 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 13.97022 ms
<t> optimize css assets: 19.702284 ms

LOG from webpack.FileSystemInfo
    825 new snapshots created
    0% root snapshot uncached (0 / 1264)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 134 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3454/4079) entries shared via 3 shared snapshots (563 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 54% (212/389) entries shared via 11 shared snapshots (29 times referenced)
    Managed items info in cache: 78 items
    Managed items snapshot optimization: 22% (258/1197) entries shared via 15 shared snapshots (49 times referenced)
    Managed files snapshot optimization: 79% (3324/4210) entries shared via 182 shared snapshots (758 times referenced)
    Managed missing snapshot optimization: 87% (3895/4500) entries shared via 195 shared snapshots (777 times referenced)

2023-08-09 18:25:23: webpack 5.86.0 compiled in 15928 ms (939982e71bd3343b)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 774.394105 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 42.702183 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1136 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 2.262802 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.130435 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 3.084908 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 2.254377 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 4.613769 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/a11y.mjs': 1.211191 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 2.179167 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.002977 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/operators|request=|../internal/operators/retryWhen': 1.425294 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/observable|request=|../Subject': 1.949709 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|bdcffb4806b02a7f|runtime': 10.25098 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 5.268138 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 232.327531 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1136 items, 1 files, 39 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 337.21 kB |                84.63 kB
styles.css          | styles        |  98.87 kB |                 8.92 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 469.98 kB |               104.75 kB

Build at: 2023-08-09T22:25:25.388Z - Hash: 939982e71bd3343b - Time: 18073ms
Done in 20.43s.
```
Wed Aug  9 06:25:42 PM EDT 2023
yarn version v1.22.19
info Current version: 0.0.95
info New version: 0.0.96
Done in 0.13s.
