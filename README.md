Sat Sep 16 07:51:58 PM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.2Gi       3.2Gi       526Mi       8.8Gi        11Gi
Swap:          8.0Gi       0.0Ki       8.0Gi
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
    

Angular CLI: 16.2.2
Node: 18.17.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.5
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.2
@angular-devkit/build-angular   16.2.2
@angular-devkit/core            16.2.2
@angular-devkit/schematics      16.2.2
@angular/cdk                    16.2.4
@angular/cli                    16.2.2
@angular/material               16.2.4
@schematics/angular             16.2.2
rxjs                            7.8.0
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.58s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.37s.
```
Latest version:     1.0.30001534
Installed version:  1.0.30001534
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001534
Installed version:  1.0.30001534
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1838.197634 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/package.json invalidated because hashes differ (71468356006de972 != 66e253843f0d23bd)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 907.278492 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 4.5222 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 1 (106 KiB) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/app/app.component.ts': 1.78929 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 1 (106 KiB): 16.885434 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (38.6 MiB) because of request to: Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.435854 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.099841 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 1.053889 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 1.286692 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (38.6 MiB): 103.154258 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
asset main.js 339 KiB {179} [emitted] (name: main)
asset styles.css 82.2 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 340 KiB = runtime.js 912 bytes main.js 339 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 83.1 KiB = runtime.js 912 bytes styles.css 82.2 KiB
chunk {179} (runtime: runtime) main.js (main) 2.63 MiB [initial]
  cached modules 37.3 KiB [cached] 1 module
  ./src/main.ts + 114 modules [368] 2.6 MiB {179} [built]
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
    39% root snapshot uncached (809 / 2077)
    16% children snapshot uncached (370 / 2352)
    1458 entries tested
    File info in cache: 134 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/8) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 75% (414/549) entries shared via 3 shared snapshots (57 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 45% (154/343) entries shared via 8 shared snapshots (23 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 55% (203/371) entries shared via 18 shared snapshots (35 times referenced)
    Managed files snapshot optimization: 64% (172/269) entries shared via 11 shared snapshots (34 times referenced)
    Managed missing snapshot optimization: 81% (361/444) entries shared via 21 shared snapshots (50 times referenced)
+ 2 hidden lines

LOG from webpack.Compiler
<t> make hook: 1540.177161 ms
<t> finish make hook: 0.102243 ms
<t> finish compilation: 27.099614 ms
<t> seal compilation: 721.868735 ms
<t> afterCompile hook: 0.083647 ms
<t> emitAssets: 4.829739 ms
<t> emitRecords: 0.063056 ms
<t> done hook: 135.262674 ms
<t> beginIdle: 0.370319 ms

LOG from webpack.Compilation.ModuleProfile
     | 194 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 195 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 197 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 195 ms (parallelism 5) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 196 ms (parallelism 5) resolve to new modules > ./src/main.ts
    1216 ms resolve to new modules
+ 25 hidden lines

LOG from webpack.Compilation
<t> finish module profiles: 4.063045 ms
<t> compute affected modules: 0.004051 ms
<t> finish modules: 18.954049 ms
<t> report dependency errors and warnings: 4.042591 ms
<t> optimize dependencies: 10.247507 ms
<t> create chunks: 3.145228 ms
<t> compute affected modules with chunk graph: 0.003748 ms
<t> optimize: 25.733769 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 8.374914 ms
    0% code generated (0 generated, 7 from cache)
<t> code generation: 0.636525 ms
<t> runtime requirements.modules: 0.222075 ms
<t> runtime requirements.chunks: 0.175448 ms
<t> runtime requirements.entries: 0.800238 ms
<t> runtime requirements: 1.379088 ms
<t> hashing: initialize hash: 0.004533 ms
<t> hashing: sort chunks: 0.037116 ms
<t> hashing: hash runtime modules: 1.436219 ms
<t> hashing: hash chunks: 1.020816 ms
<t> hashing: hash digest: 0.013258 ms
<t> hashing: process full hash modules: 0.129575 ms
<t> hashing: 2.729613 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.054152 ms
<t> module assets: 0.155313 ms
<t> create chunk assets: 0.818566 ms
<t> process assets: 667.043424 ms

LOG from webpack.ResolverCachePlugin
    3% really resolved (62 real resolves with 62 cached but invalid, 1757 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 2.170538 ms
<t> figure out provided exports: 4.639527 ms
    2% of exports of modules have been determined (3 no declared exports, 5 not cached, 0 flagged uncacheable, 252 from cache, 0 from mem cache, 0 additional calculations due to dependencies)
<t> store provided exports into cache: 0.007095 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.225315 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.864863 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.679212 ms
<t> trace exports usage in graph: 5.34997 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.517881 ms
<t> visitModules: visiting: 2.239859 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.288962 ms
<t> connectChunkGroups: 0.002259 ms
<t> cleanup: 0.001083 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.030056 ms
<t> modules: 2.321935 ms
<t> queue: 0.003973 ms
<t> maxSize: 0.028885 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.94363 ms
<t> sort relevant modules: 0.129383 ms
<t> find modules to concatenate: 8.552393 ms
<t> sort concat configurations: 0.036754 ms
<t> create concatenated modules: 5.228531 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.123166 ms
+ 1 hidden lines

2023-09-16 19:52:18: webpack 5.88.2 compiled in 4099 ms (7d090920e189ca17)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Node.js doesn't offer a (nice) way to introspect the ESM dependency graph yet.
    Until a full solution is available webpack uses an experimental ESM tracking based on parsing.
    As best effort webpack parses the ESM files to guess dependencies. But this can lead to expensive and incorrect tracking.
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 277.872938 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 5.688503 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 64 fresh items in cache put into pack 3
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/app/app.component.ts': 1.611274 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 44.933862 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1136 items, 4 files, 39 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 339.01 kB |                85.26 kB
styles.css          | styles        |  82.22 kB |                 8.09 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 455.12 kB |               104.55 kB

Build at: 2023-09-16T23:52:19.433Z - Hash: 7d090920e189ca17 - Time: 5267ms
Done in 6.99s.
```
