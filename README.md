Fri Oct 13 04:31:27 PM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.8Gi       2.3Gi       636Mi       9.2Gi        10Gi
Swap:          8.0Gi       1.9Gi       6.1Gi
System Storage
805M	.
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
    

Angular CLI: 16.2.5
Node: 18.18.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.8
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.5
@angular-devkit/build-angular   16.2.5
@angular-devkit/core            16.2.5
@angular-devkit/schematics      16.2.5
@angular/cdk                    16.2.7
@angular/cli                    16.2.5
@angular/material               16.2.7
@schematics/angular             16.2.5
rxjs                            7.8.0
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.58s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.39s.
```
Latest version:     1.0.30001547
Installed version:  1.0.30001547
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001547
Installed version:  1.0.30001547
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.2.6/angular-webpack/4e5b4f9055120fa22aed15a71787922c5690a642.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.2.6/angular-webpack/4e5b4f9055120fa22aed15a71787922c5690a642/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 2042.596543 ms
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
    1039 ms (resolving: 40 ms, restoring: 1 ms, integration: 0 ms, building: 998 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 84.2 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 84.2 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [554] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1247 ms (resolving: 37 ms, restoring: 0 ms, integration: 1 ms, building: 1209 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1156 ms (resolving: 37 ms, restoring: 1 ms, integration: 0 ms, building: 1118 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.437409 ms
<t> runtime requirements.chunks: 0.42755 ms
<t> runtime requirements.entries: 1.53508 ms
<t> runtime requirements.modules: 0.02606 ms
<t> runtime requirements.chunks: 0.015071 ms
<t> runtime requirements.entries: 0.169766 ms
<t> finish module profiles: 8.233203 ms
<t> compute affected modules: 0.210496 ms
<t> finish modules: 17.44194 ms
<t> report dependency errors and warnings: 4.279535 ms
<t> optimize dependencies: 12.014804 ms
<t> create chunks: 5.255872 ms
<t> compute affected modules with chunk graph: 0.112374 ms
<t> optimize: 30.694303 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 8.326456 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 418.912342 ms
<t> runtime requirements.modules: 0.204663 ms
<t> runtime requirements.chunks: 0.313905 ms
<t> runtime requirements.entries: 1.048065 ms
<t> runtime requirements: 2.115931 ms
<t> hashing: initialize hash: 0.00907 ms
<t> hashing: sort chunks: 0.101981 ms
<t> hashing: hash runtime modules: 1.474098 ms
<t> hashing: hash chunks: 2.061513 ms
<t> hashing: hash digest: 0.040025 ms
<t> hashing: process full hash modules: 0.16091 ms
<t> hashing: 4.429308 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.062183 ms
<t> module assets: 0.283023 ms
<t> create chunk assets: 5.4002 ms
<t> process assets: 4596.602036 ms

LOG from webpack.Compiler
<t> make hook: 6487.461911 ms
<t> finish make hook: 0.142572 ms
<t> finish compilation: 30.476884 ms
<t> seal compilation: 5087.536696 ms
<t> afterCompile hook: 0.273192 ms
<t> emitAssets: 6.152044 ms
<t> emitRecords: 0.103997 ms
<t> done hook: 153.235329 ms
<t> beginIdle: 0.790268 ms

LOG from webpack.Compilation.ModuleProfile
     | 72 ms (parallelism 3.4) resolve to new modules > ./src/main.ts
     | 100 ms (parallelism 2.8) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 35 ms (parallelism 8) resolve to new modules > ./src/app/name-editor/name-editor.component.ts
     | 175 ms (parallelism 10.8) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 40 ms (parallelism 14) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/cdk.mjs
    964 ms resolve to new modules
     | 60 ms (parallelism 15.1) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    90 ms resolve to existing modules
<i>  |  | 227 ms (parallelism 5.3) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 227 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 199 ms (parallelism 5.6) build modules > ./src/styles.scss?ngGlobalStyle
     | 199 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 174 ms (parallelism 5.8) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
<i>  |  | 200 ms (parallelism 7.3) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 178 ms (parallelism 9.5) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 192 ms (parallelism 7.3) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
<i>  |  | 200 ms (parallelism 7.3) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 199 ms (parallelism 7.3) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 36 ms (parallelism 18) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 110 ms (parallelism 11.6) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 141 ms (parallelism 10.2) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 133 ms (parallelism 10.3) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 120 ms (parallelism 10.4) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 98 ms (parallelism 10.1) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 135 ms (parallelism 10.3) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 139 ms (parallelism 10.5) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     |  | 138 ms (parallelism 10.9) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
<i>  | 2234 ms build modules > 22 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 171 ms (parallelism 5.8) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 126 ms (parallelism 11.1) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 127 ms (parallelism 11) build modules > ./node_modules/rxjs/dist/esm/index.js
     | 1460 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 108 ms (parallelism 6.2) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 108 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 235 ms (parallelism 5.1) build modules > ./src/main.ts
     |  | 154 ms (parallelism 7.1) build modules > ./src/app/app.component.ts
<i>  | 445 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i> 4700 ms build modules
+ 18 hidden lines

LOG from webpack.ResolverCachePlugin
    32% really resolved (563 real resolves with 0 cached but invalid, 1216 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.398703 ms
<t> figure out provided exports: 10.458749 ms
    95% of exports of modules have been determined (15 no declared exports, 259 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 1.519151 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 9.439699 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.047856 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.710059 ms
<t> trace exports usage in graph: 6.465071 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.949278 ms
<t> visitModules: visiting: 2.999168 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 3.650805 ms
<t> connectChunkGroups: 0.097291 ms
<t> cleanup: 0.033938 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.04236 ms
<t> modules: 2.50781 ms
<t> queue: 0.006072 ms
<t> maxSize: 0.039066 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.274831 ms
<t> sort relevant modules: 0.145082 ms
<t> find modules to concatenate: 6.574091 ms
<t> sort concat configurations: 0.042129 ms
<t> create concatenated modules: 5.714971 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 250.417743 ms
<t> optimize asset: polyfills.js: 687.406047 ms
<t> optimize asset: main.js: 3775.486544 ms
<t> optimize js assets: 3865.7758089999998 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 12.233484 ms
<t> optimize css assets: 14.024817 ms

LOG from webpack.FileSystemInfo
    825 new snapshots created
    0% root snapshot uncached (0 / 1216)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 134 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3440/4082) entries shared via 3 shared snapshots (561 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 61% (237/389) entries shared via 12 shared snapshots (31 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 20% (240/1203) entries shared via 12 shared snapshots (41 times referenced)
    Managed files snapshot optimization: 79% (3342/4220) entries shared via 184 shared snapshots (759 times referenced)
    Managed missing snapshot optimization: 89% (4025/4500) entries shared via 196 shared snapshots (776 times referenced)

2023-10-13 16:32:14: webpack 5.88.2 compiled in 13634 ms (f385fce801e750a9)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1239.632618 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 52.27279 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1136 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.183806 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 2.04999 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 2.821218 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.937479 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 2.880347 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/a11y.mjs': 1.866252 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 2.730123 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.052429 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/observable/ConnectableObservable.js': 1.381934 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators|request=|../util/mapOneOrManyArgs': 1.928913 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|bdcffb4806b02a7f|runtime': 11.878722 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 6.680842 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 252.405206 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1136 items, 1 files, 39 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 341.15 kB |                85.37 kB
styles.css          | styles        |  82.22 kB |                 8.09 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 457.26 kB |               104.66 kB

Build at: 2023-10-13T20:32:17.323Z - Hash: f385fce801e750a9 - Time: 16370ms
Done in 18.18s.
```
