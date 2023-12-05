Tue Dec  5 03:20:29 PM EST 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       1.9Gi       4.3Gi       254Mi       9.6Gi        13Gi
Swap:          8.0Gi          0B       8.0Gi
System Storage
801M	.
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
    

Angular CLI: 17.0.5
Node: 20.10.0
Package Manager: yarn 1.22.21
OS: linux x64

Angular: 17.0.5
... animations, cli, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1700.5
@angular-devkit/build-angular   17.0.5
@angular-devkit/core            17.0.5
@angular-devkit/schematics      17.0.5
@angular/cdk                    17.0.2
@angular/material               17.0.2
@schematics/angular             17.0.5
rxjs                            7.8.0
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.54s.
yarn install v1.22.21
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.38s.
```
```bash
Latest version:     1.0.30001566
Installed version:  1.0.30001566
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.21
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1784.231785 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/package.json invalidated because hashes differ (cd8f1552513caaed != e8ecb16e201d375c)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 409.932648 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 3.936995 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 1 (145 bytes) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 3 (99 KiB) because of request to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 1 (145 bytes): 0.602257 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/app/app.component.ts': 1.679548 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 3 (99 KiB): 14.555956 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (40.7 MiB) because of request to: Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.053479 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 1.112803 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (40.7 MiB): 70.960467 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|/home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Pack 3 got empty and is removed
asset main.js 342 KiB {179} [emitted] (name: main)
asset styles.css 82.6 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 343 KiB = runtime.js 912 bytes main.js 342 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 83.5 KiB = runtime.js 912 bytes styles.css 82.6 KiB
chunk {179} (runtime: runtime) main.js (main) 2.79 MiB [initial]
  cached modules 29.9 KiB [cached] 1 module
  ./src/main.ts + 115 modules [607] 2.76 MiB {179} [built]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial]
  cached modules 104 KiB [cached] 1 module
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 85.2 KiB (css/mini-extract) [initial]
  cached modules 100 bytes (javascript) 85.2 KiB (css/mini-extract) [cached] 4 modules
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry]
  cached modules 2.49 KiB [cached] 4 modules
  

LOG from webpack.FileSystemInfo
    64 new snapshots created
    39% root snapshot uncached (811 / 2077)
    16% children snapshot uncached (370 / 2353)
    1463 entries tested
    File info in cache: 130 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/8) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 74% (405/549) entries shared via 2 shared snapshots (57 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 48% (166/343) entries shared via 8 shared snapshots (25 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 56% (208/371) entries shared via 18 shared snapshots (36 times referenced)
    Managed files snapshot optimization: 62% (168/269) entries shared via 10 shared snapshots (34 times referenced)
    Managed missing snapshot optimization: 81% (360/444) entries shared via 21 shared snapshots (50 times referenced)
+ 2 hidden lines

LOG from webpack.Compiler
<t> make hook: 970.583975 ms
<t> finish make hook: 0.091357 ms
<t> finish compilation: 27.242464 ms
<t> seal compilation: 725.776323 ms
<t> afterCompile hook: 0.067212 ms
<t> emitAssets: 3.675987 ms
<t> emitRecords: 0.07859 ms
<t> done hook: 281.031823 ms
<t> beginIdle: 0.326205 ms

LOG from webpack.Compilation.ModuleProfile
     | 93 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 93 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 95 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 94 ms (parallelism 5) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 94 ms (parallelism 5) resolve to new modules > ./src/main.ts
    703 ms resolve to new modules
+ 25 hidden lines

LOG from webpack.Compilation
<t> finish module profiles: 3.833842 ms
<t> compute affected modules: 0.004976 ms
<t> finish modules: 18.905128 ms
<t> report dependency errors and warnings: 4.459454 ms
<t> optimize dependencies: 12.938055 ms
<t> create chunks: 3.160911 ms
<t> compute affected modules with chunk graph: 0.004412 ms
<t> optimize: 22.920749 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 11.111129 ms
    0% code generated (0 generated, 7 from cache)
<t> code generation: 0.71935 ms
<t> runtime requirements.modules: 0.184707 ms
<t> runtime requirements.chunks: 0.142177 ms
<t> runtime requirements.entries: 0.801429 ms
<t> runtime requirements: 1.302544 ms
<t> hashing: initialize hash: 0.004923 ms
<t> hashing: sort chunks: 0.034517 ms
<t> hashing: hash runtime modules: 1.468507 ms
<t> hashing: hash chunks: 0.965649 ms
<t> hashing: hash digest: 0.012901 ms
<t> hashing: process full hash modules: 0.175546 ms
<t> hashing: 2.75023 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.05141 ms
<t> module assets: 0.118497 ms
<t> create chunk assets: 0.775232 ms
<t> process assets: 668.466017 ms

LOG from webpack.ResolverCachePlugin
    3% really resolved (62 real resolves with 62 cached but invalid, 1756 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 2.229214 ms
<t> figure out provided exports: 4.89384 ms
    2% of exports of modules have been determined (3 no declared exports, 6 not cached, 0 flagged uncacheable, 252 from cache, 0 from mem cache, 1 additional calculations due to dependencies)
<t> store provided exports into cache: 0.008394 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.220196 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 7.18293 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.44457 ms
<t> trace exports usage in graph: 4.93796 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.5353 ms
<t> visitModules: visiting: 2.271781 ms
    267 queue items processed (123 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.320191 ms
<t> connectChunkGroups: 0.003393 ms
<t> cleanup: 0.00101 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.039343 ms
<t> modules: 2.251601 ms
<t> queue: 0.004193 ms
<t> maxSize: 0.030378 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.919464 ms
<t> sort relevant modules: 0.124821 ms
<t> find modules to concatenate: 5.13504 ms
<t> sort concat configurations: 0.039735 ms
<t> create concatenated modules: 5.21119 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.058281 ms
+ 1 hidden lines

2023-12-05 15:20:53: webpack 5.89.0 compiled in 3486 ms (3a91cbfe6b207e44)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Node.js doesn't offer a (nice) way to introspect the ESM dependency graph yet.
    Until a full solution is available webpack uses an experimental ESM tracking based on parsing.
    As best effort webpack parses the ESM files to guess dependencies. But this can lead to expensive and incorrect tracking.
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 264.917311 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 3.239622 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 64 fresh items in cache put into pack 3
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/app/app.component.ts': 1.090685 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 26.081167 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1138 items, 4 files, 41 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 341.90 kB |                86.06 kB
styles.css          | styles        |  82.65 kB |                 8.08 kB
polyfills.js        | polyfills     |  32.97 kB |                10.63 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 458.41 kB |               105.28 kB

Build at: 2023-12-05T20:20:54.547Z - Hash: 3a91cbfe6b207e44 - Time: 4721ms
Done in 6.39s.
```
Tue Dec  5 03:21:03 PM EST 2023
yarn version v1.22.21
info Current version: 0.0.259
info New version: 0.0.260
Done in 0.12s.
