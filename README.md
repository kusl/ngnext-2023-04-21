Mon Oct 30 12:54:36 PM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.2Gi       3.7Gi       757Mi       9.4Gi        11Gi
Swap:          8.0Gi       2.0Mi       8.0Gi
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
    

Angular CLI: 16.2.8
Node: 20.9.0 (Unsupported)
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.11
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.8
@angular-devkit/build-angular   16.2.8
@angular-devkit/core            16.2.8
@angular-devkit/schematics      16.2.8
@angular/cdk                    16.2.10
@angular/cli                    16.2.8
@angular/material               16.2.10
@schematics/angular             16.2.8
rxjs                            7.8.0
typescript                      5.0.4
zone.js                         0.13.0
    
Warning: The current version of Node (20.9.0) is not supported by Angular.
Done in 0.52s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.36s.
```
Latest version:     1.0.30001558
Installed version:  1.0.30001558
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001558
Installed version:  1.0.30001558
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1741.142616 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/package.json invalidated because hashes differ (01002ec41955bbd4 != 731a21686503cc2c)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 814.377625 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 5.882736 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 1 (145 bytes) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 3 (105 KiB) because of request to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 1 (145 bytes): 0.629264 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/app/app.component.ts': 1.61979 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 3 (105 KiB): 9.134063 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (38.7 MiB) because of request to: Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.256103 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (38.7 MiB): 64.440905 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|/home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Pack 3 got empty and is removed
asset main.js 341 KiB {179} [emitted] (name: main)
asset styles.css 82.2 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 342 KiB = runtime.js 912 bytes main.js 341 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 83.1 KiB = runtime.js 912 bytes styles.css 82.2 KiB
chunk {179} (runtime: runtime) main.js (main) 2.64 MiB [initial]
  cached modules 37.3 KiB [cached] 1 module
  ./src/main.ts + 114 modules [368] 2.61 MiB {179} [built]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial]
  cached modules 104 KiB [cached] 1 module
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 84.2 KiB (css/mini-extract) [initial]
  cached modules 100 bytes (javascript) 84.2 KiB (css/mini-extract) [cached] 4 modules
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry]
  cached modules 2.49 KiB [cached] 4 modules
  

LOG from webpack.FileSystemInfo
    64 new snapshots created
    39% root snapshot uncached (809 / 2071)
    15% children snapshot uncached (364 / 2350)
    1435 entries tested
    File info in cache: 134 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/8) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 76% (416/549) entries shared via 2 shared snapshots (58 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 48% (166/343) entries shared via 9 shared snapshots (24 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 52% (192/371) entries shared via 15 shared snapshots (34 times referenced)
    Managed files snapshot optimization: 64% (172/269) entries shared via 11 shared snapshots (34 times referenced)
    Managed missing snapshot optimization: 81% (361/444) entries shared via 21 shared snapshots (50 times referenced)
+ 2 hidden lines

LOG from webpack.Compiler
<t> make hook: 1363.388897 ms
<t> finish make hook: 0.095443 ms
<t> finish compilation: 30.095801 ms
<t> seal compilation: 682.227172 ms
<t> afterCompile hook: 0.063483 ms
<t> emitAssets: 3.441566 ms
<t> emitRecords: 0.07178 ms
<t> done hook: 103.787598 ms
<t> beginIdle: 0.511716 ms

LOG from webpack.Compilation.ModuleProfile
     | 174 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 174 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 176 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 175 ms (parallelism 5) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 175 ms (parallelism 5) resolve to new modules > ./src/main.ts
    1087 ms resolve to new modules
+ 25 hidden lines

LOG from webpack.Compilation
<t> finish module profiles: 3.823048 ms
<t> compute affected modules: 0.004857 ms
<t> finish modules: 21.814667 ms
<t> report dependency errors and warnings: 4.393999 ms
<t> optimize dependencies: 9.131564 ms
<t> create chunks: 3.260359 ms
<t> compute affected modules with chunk graph: 0.00471 ms
<t> optimize: 25.089337 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 7.915174 ms
    0% code generated (0 generated, 7 from cache)
<t> code generation: 0.623401 ms
<t> runtime requirements.modules: 0.182828 ms
<t> runtime requirements.chunks: 0.148345 ms
<t> runtime requirements.entries: 0.814921 ms
<t> runtime requirements: 1.315298 ms
<t> hashing: initialize hash: 0.004364 ms
<t> hashing: sort chunks: 0.034763 ms
<t> hashing: hash runtime modules: 1.413831 ms
<t> hashing: hash chunks: 1.068629 ms
<t> hashing: hash digest: 0.012979 ms
<t> hashing: process full hash modules: 0.131393 ms
<t> hashing: 2.752647 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.052976 ms
<t> module assets: 0.140883 ms
<t> create chunk assets: 0.900273 ms
<t> process assets: 629.617987 ms

LOG from webpack.ResolverCachePlugin
    3% really resolved (62 real resolves with 62 cached but invalid, 1751 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.965801 ms
<t> figure out provided exports: 4.507445 ms
    2% of exports of modules have been determined (3 no declared exports, 5 not cached, 0 flagged uncacheable, 252 from cache, 0 from mem cache, 0 additional calculations due to dependencies)
<t> store provided exports into cache: 0.00603 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.209995 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.772955 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.422716 ms
<t> trace exports usage in graph: 4.519618 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.549896 ms
<t> visitModules: visiting: 2.36237 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.412034 ms
<t> connectChunkGroups: 0.003189 ms
<t> cleanup: 0.001208 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.04101 ms
<t> modules: 2.152412 ms
<t> queue: 0.004684 ms
<t> maxSize: 0.029173 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.917049 ms
<t> sort relevant modules: 0.124567 ms
<t> find modules to concatenate: 4.659513 ms
<t> sort concat configurations: 0.039591 ms
<t> create concatenated modules: 5.299579 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.07922 ms
+ 1 hidden lines

2023-10-30 12:54:56: webpack 5.88.2 compiled in 3789 ms (d5e7e8d7bcf43ef6)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Node.js doesn't offer a (nice) way to introspect the ESM dependency graph yet.
    Until a full solution is available webpack uses an experimental ESM tracking based on parsing.
    As best effort webpack parses the ESM files to guess dependencies. But this can lead to expensive and incorrect tracking.
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 237.501743 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 3.020599 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 64 fresh items in cache put into pack 3
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/app/app.component.ts': 1.018662 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 29.333997 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1136 items, 4 files, 39 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 341.16 kB |                85.33 kB
styles.css          | styles        |  82.22 kB |                 8.09 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 457.27 kB |               104.62 kB

Build at: 2023-10-30T16:54:57.650Z - Hash: d5e7e8d7bcf43ef6 - Time: 4694ms
Done in 6.14s.
```
