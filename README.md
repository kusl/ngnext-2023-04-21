Sun Apr 23 07:44:55 PM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       4.1Gi       2.2Gi       854Mi       9.0Gi        10Gi
Swap:          8.0Gi        17Mi       8.0Gi
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
Done in 0.36s.
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
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1864.02356 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/package.json invalidated because hashes differ (9d9d7fbb75359378 != 40df860dbacf62ce)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 540.395656 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 5.815514 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 4 (35.2 MiB) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'angular-compiler:resource|1|Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[1].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[1].use[1]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/ngnext-2023-04-21/src/app/name-editor/name-editor.component.scss?ngResource': 1.020703 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 4 (35.2 MiB): 57.126524 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (5.18 MiB) because of request to: Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/localize/fesm2022/init.mjs
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 1.035691 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (5.18 MiB): 61.304947 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 1 (24.1 KiB) because of request to: Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/progress-spinner.mjs
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 1 (24.1 KiB): 24.713807 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
asset main.js 337 KiB {179} [emitted] (name: main)
asset styles.css 104 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 338 KiB = runtime.js 912 bytes main.js 337 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 105 KiB = runtime.js 912 bytes styles.css 104 KiB
chunk {179} (runtime: runtime) main.js (main) 2.56 MiB [initial]
  cached modules 38 KiB [cached] 1 module
  ./src/main.ts + 114 modules [670] 2.52 MiB {179} [built]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial]
  cached modules 104 KiB [cached] 1 module
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 114 KiB (css/mini-extract) [initial]
  cached modules 100 bytes (javascript) 114 KiB (css/mini-extract) [cached] 4 modules
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry]
  cached modules 2.49 KiB [cached] 4 modules
  

LOG from webpack.FileSystemInfo
    63 new snapshots created
    39% root snapshot uncached (807 / 2075)
    16% children snapshot uncached (367 / 2361)
    1388 entries tested
    File info in cache: 124 timestamps 22 hashes 22 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/8) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 75% (407/540) entries shared via 3 shared snapshots (56 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 38% (124/328) entries shared via 7 shared snapshots (22 times referenced)
    Managed items info in cache: 78 items
    Managed items snapshot optimization: 50% (183/369) entries shared via 16 shared snapshots (32 times referenced)
    Managed files snapshot optimization: 66% (172/261) entries shared via 11 shared snapshots (34 times referenced)
    Managed missing snapshot optimization: 81% (358/442) entries shared via 19 shared snapshots (47 times referenced)
+ 2 hidden lines

LOG from webpack.Compiler
<t> make hook: 1166.297525 ms
<t> finish make hook: 0.108843 ms
<t> finish compilation: 28.74063 ms
<t> seal compilation: 670.251918 ms
<t> afterCompile hook: 0.080136 ms
<t> emitAssets: 4.399893 ms
<t> emitRecords: 0.067243 ms
<t> done hook: 113.44643 ms
<t> beginIdle: 0.439601 ms

LOG from webpack.Compilation.ModuleProfile
     | 131 ms (parallelism 5) resolve to new modules > ./src/main.ts
     | 131 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 130 ms (parallelism 5) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 130 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 130 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 32 ms (parallelism 9.4) resolve to new modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     | 41 ms (parallelism 8.8) resolve to new modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     | 33 ms (parallelism 9.4) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 41 ms (parallelism 8.8) resolve to new modules > ./node_modules/@angular/core/fesm2022/core.mjs
     | 34 ms (parallelism 10) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
    900 ms resolve to new modules
+ 15 hidden lines

LOG from webpack.Compilation
<t> finish module profiles: 4.604445 ms
<t> compute affected modules: 0.009081 ms
<t> finish modules: 19.197329 ms
<t> report dependency errors and warnings: 4.887061 ms
<t> optimize dependencies: 9.408016 ms
<t> create chunks: 6.121797 ms
<t> compute affected modules with chunk graph: 0.003167 ms
<t> optimize: 21.937341 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 9.212599 ms
    0% code generated (0 generated, 7 from cache)
<t> code generation: 0.457208 ms
<t> runtime requirements.modules: 0.192817 ms
<t> runtime requirements.chunks: 0.141692 ms
<t> runtime requirements.entries: 0.805869 ms
<t> runtime requirements: 1.302305 ms
<t> hashing: initialize hash: 0.003996 ms
<t> hashing: sort chunks: 0.035348 ms
<t> hashing: hash runtime modules: 1.439989 ms
<t> hashing: hash chunks: 1.030783 ms
<t> hashing: hash digest: 0.013138 ms
<t> hashing: process full hash modules: 0.127517 ms
<t> hashing: 2.736715 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.056301 ms
<t> module assets: 0.149853 ms
<t> create chunk assets: 0.859508 ms
<t> process assets: 616.337723 ms

LOG from webpack.ResolverCachePlugin
    3% really resolved (61 real resolves with 61 cached but invalid, 1757 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 2.118328 ms
<t> figure out provided exports: 5.033953 ms
    2% of exports of modules have been determined (3 no declared exports, 5 not cached, 0 flagged uncacheable, 251 from cache, 0 from mem cache, 0 additional calculations due to dependencies)
<t> store provided exports into cache: 0.007635 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.257033 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.888889 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.457561 ms
<t> trace exports usage in graph: 4.679455 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 4.306099 ms
<t> visitModules: visiting: 5.046332 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 5.100415 ms
<t> connectChunkGroups: 0.004473 ms
<t> cleanup: 0.001435 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.036061 ms
<t> modules: 2.404089 ms
<t> queue: 0.00504 ms
<t> maxSize: 0.033217 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.954342 ms
<t> sort relevant modules: 0.178366 ms
<t> find modules to concatenate: 5.32257 ms
<t> sort concat configurations: 0.016988 ms
<t> create concatenated modules: 4.955156 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.129303 ms
+ 1 hidden lines

2023-04-23 19:45:34: webpack 5.79.0 compiled in 3702 ms (e831f2dc694b1beb)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Node.js doesn't offer a (nice) way to introspect the ESM dependency graph yet.
    Until a full solution is available webpack uses an experimental ESM tracking based on parsing.
    As best effort webpack parses the ESM files to guess dependencies. But this can lead to expensive and incorrect tracking.
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 291.160289 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 5.552686 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 63 fresh items in cache put into pack 6
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|292fab71983e1e33|runtime': 2.22561 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle': 1.09219 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 89.480488 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1135 items, 7 files, 67 MiB)
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

Build at: 2023-04-23T23:45:35.576Z - Hash: e831f2dc694b1beb - Time: 4844ms
Done in 6.53s.
```
