Sat Sep 16 08:54:46 PM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.2Gi       3.5Gi       526Mi       8.6Gi        11Gi
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
    
Done in 0.57s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.41s.
```
Latest version:     1.0.30001534
Installed version:  1.0.30001534
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
{"type":"error","data":"Received invalid response from npm."}
undefined:1


SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getLatestInfo (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/update-browserslist-db/index.js:62:19)
    at updateDB (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/update-browserslist-db/index.js:267:16)
    at Object.<anonymous> (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@babel/helper-compilation-targets/node_modules/browserslist/cli.js:42:3)
    at Module._compile (node:internal/modules/cjs/loader:1256:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1310:10)
    at Module.load (node:internal/modules/cjs/loader:1119:32)
    at Module._load (node:internal/modules/cjs/loader:960:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47

Node.js v18.17.1
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1859.1184990000002 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/package.json invalidated because hashes differ (6b2560b38d9cd176 != 71468356006de972)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 916.075325 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 4.446648 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 1 (145 bytes) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 3 (106 KiB) because of request to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 1 (145 bytes): 0.826864 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/app/app.component.ts': 3.021294 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 3 (106 KiB): 25.81084 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (38.6 MiB) because of request to: Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.172047 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.08558 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators/debounceTime.js': 3.834244 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 1.311315 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (38.6 MiB): 107.567347 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
    [webpack.cache.PackFileCacheStrategy] Pack 3 got empty and is removed
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
    39% root snapshot uncached (809 / 2080)
    16% children snapshot uncached (370 / 2352)
    1458 entries tested
    File info in cache: 134 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/8) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 75% (414/549) entries shared via 3 shared snapshots (57 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 42% (144/343) entries shared via 7 shared snapshots (22 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 51% (188/371) entries shared via 17 shared snapshots (33 times referenced)
    Managed files snapshot optimization: 64% (172/269) entries shared via 11 shared snapshots (34 times referenced)
    Managed missing snapshot optimization: 79% (351/444) entries shared via 17 shared snapshots (53 times referenced)
+ 2 hidden lines

LOG from webpack.Compiler
<t> make hook: 1572.3059600000001 ms
<t> finish make hook: 0.097818 ms
<t> finish compilation: 26.909588 ms
<t> seal compilation: 734.050647 ms
<t> afterCompile hook: 0.088416 ms
<t> emitAssets: 4.992875 ms
<t> emitRecords: 0.076231 ms
<t> done hook: 127.948712 ms
<t> beginIdle: 0.355148 ms

LOG from webpack.Compilation.ModuleProfile
     | 199 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 199 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
<i>  | 201 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 200 ms (parallelism 5) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 200 ms (parallelism 5) resolve to new modules > ./src/main.ts
     | 30 ms (parallelism 9.5) resolve to new modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     | 30 ms (parallelism 9.5) resolve to new modules > ./node_modules/@angular/core/fesm2022/core.mjs
     | 30 ms (parallelism 10.2) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
<i> 1247 ms resolve to new modules
+ 21 hidden lines

LOG from webpack.Compilation
<t> finish module profiles: 4.358034 ms
<t> compute affected modules: 0.004476 ms
<t> finish modules: 18.526631 ms
<t> report dependency errors and warnings: 3.983796 ms
<t> optimize dependencies: 8.878139 ms
<t> create chunks: 6.216647 ms
<t> compute affected modules with chunk graph: 0.00368 ms
<t> optimize: 22.055817 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 8.413915 ms
    0% code generated (0 generated, 7 from cache)
<t> code generation: 0.651872 ms
<t> runtime requirements.modules: 0.193789 ms
<t> runtime requirements.chunks: 0.144042 ms
<t> runtime requirements.entries: 0.790454 ms
<t> runtime requirements: 1.300949 ms
<t> hashing: initialize hash: 0.005445 ms
<t> hashing: sort chunks: 0.03591 ms
<t> hashing: hash runtime modules: 1.395154 ms
<t> hashing: hash chunks: 0.992906 ms
<t> hashing: hash digest: 0.012768 ms
<t> hashing: process full hash modules: 0.131316 ms
<t> hashing: 2.661765 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.053086 ms
<t> module assets: 0.169277 ms
<t> create chunk assets: 0.830645 ms
<t> process assets: 681.079629 ms

LOG from webpack.ResolverCachePlugin
    3% really resolved (62 real resolves with 62 cached but invalid, 1760 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 2.153176 ms
<t> figure out provided exports: 4.641756 ms
    2% of exports of modules have been determined (3 no declared exports, 5 not cached, 0 flagged uncacheable, 252 from cache, 0 from mem cache, 0 additional calculations due to dependencies)
<t> store provided exports into cache: 0.007009 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.218942 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.515094 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.461503 ms
<t> trace exports usage in graph: 4.577575 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 4.519849 ms
<t> visitModules: visiting: 5.253953 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 5.309196 ms
<t> connectChunkGroups: 0.004121 ms
<t> cleanup: 0.001107 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.034884 ms
<t> modules: 2.289922 ms
<t> queue: 0.004151 ms
<t> maxSize: 0.029363 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.93659 ms
<t> sort relevant modules: 0.13075 ms
<t> find modules to concatenate: 5.214939 ms
<t> sort concat configurations: 0.035561 ms
<t> create concatenated modules: 5.41778 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.110304 ms
+ 1 hidden lines

2023-09-16 20:55:05: webpack 5.88.2 compiled in 4164 ms (7d090920e189ca17)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Node.js doesn't offer a (nice) way to introspect the ESM dependency graph yet.
    Until a full solution is available webpack uses an experimental ESM tracking based on parsing.
    As best effort webpack parses the ESM files to guess dependencies. But this can lead to expensive and incorrect tracking.
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 272.406944 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 5.867284 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 64 fresh items in cache put into pack 3
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/app/app.component.ts': 1.665868 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 44.240261 ms
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

Build at: 2023-09-17T00:55:07.369Z - Hash: 7d090920e189ca17 - Time: 5536ms
Done in 7.26s.
```
Sat Sep 16 08:55:16 PM EDT 2023
yarn version v1.22.19
info Current version: 0.0.120
info New version: 0.0.121
Done in 0.12s.
