Sun Apr 23 01:03:14 PM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       4.6Gi       2.5Gi       745Mi       8.1Gi       9.6Gi
Swap:          8.0Gi       462Mi       7.5Gi
System Storage
1.3G	.
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
    

Angular CLI: 16.0.0-rc.1
Node: 18.16.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.0.0-rc.2
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1600.0-rc.1
@angular-devkit/build-angular   16.0.0-rc.1
@angular-devkit/core            16.0.0-rc.1
@angular-devkit/schematics      16.0.0-rc.1
@angular/cdk                    16.0.0-rc.1
@angular/cli                    16.0.0-rc.1
@angular/material               16.0.0-rc.1
@schematics/angular             16.0.0-rc.1
rxjs                            7.8.0
typescript                      5.0.4
    
Done in 0.57s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.40s.
```
Latest version:     1.0.30001481
Installed version:  1.0.30001481
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001481
Installed version:  1.0.30001481
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1952.211106 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/package.json invalidated because hashes differ (40df860dbacf62ce != fd92106dc1f1d04f)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 534.027885 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 4.265443 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 1 (35 MiB) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 4 (98.2 KiB) because of request to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts': 1.685265 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 4 (98.2 KiB): 20.941089 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (5.18 MiB) because of request to: Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 1 (35 MiB): 157.14136 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.732624 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 1.000118 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (5.18 MiB): 245.78376 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|/home/kushal/src/angular/ngnext-2023-04-21/src/app/name-editor/name-editor.component.scss?ngResource
    [webpack.cache.PackFileCacheStrategy] Pack 4 got empty and is removed
asset main.js 337 KiB {179} [emitted] (name: main)
asset styles.css 104 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 338 KiB = runtime.js 912 bytes main.js 337 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 105 KiB = runtime.js 912 bytes styles.css 104 KiB
chunk {179} (runtime: runtime) main.js (main) 2.56 MiB [initial] [rendered]
  cached modules 38 KiB [cached] 1 module
  ./src/main.ts + 114 modules [670] 2.52 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial]
  cached modules 104 KiB [cached] 1 module
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 114 KiB (css/mini-extract) [initial]
  cached modules 100 bytes (javascript) 114 KiB (css/mini-extract) [cached] 4 modules
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry]
  cached modules 2.49 KiB [cached] 4 modules
  

LOG from webpack.FileSystemInfo
    65 new snapshots created
    39% root snapshot uncached (799 / 2063)
    16% children snapshot uncached (364 / 2342)
    1403 entries tested
    File info in cache: 124 timestamps 22 hashes 22 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/14) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 80% (431/540) entries shared via 2 shared snapshots (60 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 57% (187/328) entries shared via 9 shared snapshots (27 times referenced)
    Managed items info in cache: 78 items
    Managed items snapshot optimization: 57% (215/380) entries shared via 15 shared snapshots (42 times referenced)
    Managed files snapshot optimization: 62% (178/286) entries shared via 12 shared snapshots (35 times referenced)
    Managed missing snapshot optimization: 77% (342/442) entries shared via 18 shared snapshots (52 times referenced)
+ 3 hidden lines

LOG from webpack.Compiler
<t> make hook: 1755.536325 ms
<t> finish make hook: 0.141855 ms
<t> finish compilation: 21.493296 ms
<t> seal compilation: 8520.195316 ms
<t> afterCompile hook: 0.108352 ms
<t> emitAssets: 4.408126 ms
<t> emitRecords: 0.072115 ms
<t> done hook: 123.09487 ms
<t> beginIdle: 0.368983 ms

LOG from webpack.Compilation.ModuleProfile
     | 142 ms (parallelism 5) resolve to new modules > ./src/main.ts
     | 120 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 120 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 121 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 158 ms (parallelism 5) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 95 ms (parallelism 3) resolve to new modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     | 94 ms (parallelism 3.1) resolve to new modules > ./node_modules/@angular/core/fesm2022/core.mjs
    912 ms resolve to new modules
     | 49 ms (parallelism 5) integrate modules > ./src/styles.scss?ngGlobalStyle
     | 49 ms (parallelism 5) integrate modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 49 ms (parallelism 5) integrate modules > ./node_modules/@angular/localize/fesm2022/init.mjs
    170 ms integrate modules
<i>  |  | 233 ms (parallelism 2.1) build modules > ./src/main.ts
     |  | 95 ms (parallelism 3) build modules > ./src/app/app.module.ts
<i>  | 337 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i> 337 ms build modules
     | 49 ms (parallelism 5) restore modules > ./src/styles.scss?ngGlobalStyle
     | 49 ms (parallelism 5) restore modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 49 ms (parallelism 5) restore modules > ./node_modules/@angular/localize/fesm2022/init.mjs
    170 ms restore modules
+ 3 hidden lines

LOG from webpack.Compilation
<t> finish module profiles: 4.017833 ms
<t> compute affected modules: 0.003546 ms
<t> finish modules: 13.209907 ms
<t> report dependency errors and warnings: 4.229157 ms
<t> optimize dependencies: 8.922129 ms
<t> create chunks: 3.387482 ms
<t> compute affected modules with chunk graph: 0.002792 ms
<t> optimize: 24.776931 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 8.80704 ms
    14% code generated (1 generated, 6 from cache)
<t> code generation: 672.583507 ms
<t> runtime requirements.modules: 0.277205 ms
<t> runtime requirements.chunks: 0.177373 ms
<t> runtime requirements.entries: 0.888366 ms
<t> runtime requirements: 1.768162 ms
<t> hashing: initialize hash: 0.007043 ms
<t> hashing: sort chunks: 0.05848 ms
<t> hashing: hash runtime modules: 1.636124 ms
<t> hashing: hash chunks: 1.188616 ms
<t> hashing: hash digest: 0.015891 ms
<t> hashing: process full hash modules: 0.1465 ms
<t> hashing: 3.156143 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.059197 ms
<t> module assets: 0.175069 ms
<t> create chunk assets: 1.799239 ms
<t> process assets: 7792.840161 ms

LOG from webpack.ResolverCachePlugin
    3% really resolved (61 real resolves with 54 cached but invalid, 1753 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 2.141256 ms
<t> figure out provided exports: 4.75779 ms
    3% of exports of modules have been determined (3 no declared exports, 8 not cached, 0 flagged uncacheable, 248 from cache, 0 from mem cache, 0 additional calculations due to dependencies)
<t> store provided exports into cache: 0.152784 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.249399 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.559586 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.451702 ms
<t> trace exports usage in graph: 4.604192 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.64427 ms
<t> visitModules: visiting: 2.403548 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.476784 ms
<t> connectChunkGroups: 0.002543 ms
<t> cleanup: 0.00117 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.031199 ms
<t> modules: 2.188395 ms
<t> queue: 0.004166 ms
<t> maxSize: 0.02986 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.953153 ms
<t> sort relevant modules: 0.123788 ms
<t> find modules to concatenate: 5.272521 ms
<t> sort concat configurations: 0.017978 ms
<t> create concatenated modules: 7.973908 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: main.js: 7065.740804 ms
<t> optimize js assets: 7144.886713 ms
+ 2 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 12.135867 ms
+ 1 hidden lines

2023-04-23 13:03:59: webpack 5.79.0 compiled in 12224 ms (e831f2dc694b1beb)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Node.js doesn't offer a (nice) way to introspect the ESM dependency graph yet.
    Until a full solution is available webpack uses an experimental ESM tracking based on parsing.
    As best effort webpack parses the ESM files to guess dependencies. But this can lead to expensive and incorrect tracking.
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 654.947237 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 16.260863 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 84 fresh items in cache put into pack 4
    [webpack.cache.PackFileCacheStrategy] Split pack 1 into pack 1 with 2 used items and pack 5 with 1 unused items
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|292fab71983e1e33|runtime': 11.574128 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 5.723614 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|085ffbd49c3ad3c3|runtime': 1.19703 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 168.344926 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1135 items, 6 files, 67 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 337.39 kB |                84.76 kB
styles.css          | styles        | 104.38 kB |                 9.48 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 475.67 kB |               105.43 kB

Build at: 2023-04-23T17:04:01.529Z - Hash: e831f2dc694b1beb - Time: 13975ms
Done in 15.72s.
```
Sun Apr 23 01:04:09 PM EDT 2023
yarn version v1.22.19
info Current version: 0.0.10
info New version: 0.0.11
Done in 0.12s.
