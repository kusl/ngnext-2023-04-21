Fri Apr 21 02:46:02 PM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.7Gi       3.1Gi       619Mi       8.5Gi        10Gi
Swap:          8.0Gi       1.1Gi       6.9Gi
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
    
Done in 0.61s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.37s.
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
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1927.131679 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/package.json invalidated because hashes differ (825ec6d7ee72a1a5 != c5782e7d0991f98c)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 395.484143 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 4.211579 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 1 (92.5 KiB) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/app/app.component.ts': 1.562073 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 1 (92.5 KiB): 14.871449 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (37.3 MiB) because of request to: Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/localize/fesm2022/init.mjs
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 1.027787 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 1.000403 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (37.3 MiB): 75.60889 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
asset main.js 305 KiB {179} [emitted] (name: main)
asset styles.css 104 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 306 KiB = runtime.js 912 bytes main.js 305 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 105 KiB = runtime.js 912 bytes styles.css 104 KiB
chunk {179} (runtime: runtime) main.js (main) 2.54 MiB [initial]
  cached modules 38 KiB [cached] 1 module
  ./src/main.ts + 112 modules [909] 2.5 MiB {179} [built]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial]
  cached modules 104 KiB [cached] 1 module
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 114 KiB (css/mini-extract) [initial]
  cached modules 100 bytes (javascript) 114 KiB (css/mini-extract) [cached] 4 modules
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry]
  cached modules 2.49 KiB [cached] 4 modules
  

LOG from webpack.FileSystemInfo
    54 new snapshots created
    39% root snapshot uncached (797 / 2038)
    16% children snapshot uncached (363 / 2340)
    1417 entries tested
    File info in cache: 111 timestamps 19 hashes 19 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/4) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 76% (352/466) entries shared via 2 shared snapshots (48 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 43% (113/263) entries shared via 5 shared snapshots (16 times referenced)
    Managed items info in cache: 78 items
    Managed items snapshot optimization: 52% (179/341) entries shared via 14 shared snapshots (31 times referenced)
    Managed files snapshot optimization: 59% (136/229) entries shared via 8 shared snapshots (27 times referenced)
    Managed missing snapshot optimization: 79% (326/413) entries shared via 18 shared snapshots (45 times referenced)
+ 2 hidden lines

LOG from webpack.Compiler
<t> make hook: 912.189318 ms
<t> finish make hook: 0.099735 ms
<t> finish compilation: 34.591384 ms
<t> seal compilation: 674.770377 ms
<t> afterCompile hook: 0.111062 ms
<t> emitAssets: 4.047033 ms
<t> emitRecords: 0.059332 ms
<t> done hook: 131.501338 ms
<t> beginIdle: 0.60545 ms

LOG from webpack.Compilation.ModuleProfile
     | 91 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 91 ms (parallelism 5) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 91 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 91 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 91 ms (parallelism 5) resolve to new modules > ./src/main.ts
     | 31 ms (parallelism 7.9) resolve to new modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     | 31 ms (parallelism 7.9) resolve to new modules > ./node_modules/@angular/core/fesm2022/core.mjs
    634 ms resolve to new modules
+ 20 hidden lines

LOG from webpack.Compilation
<t> finish module profiles: 4.581219 ms
<t> compute affected modules: 0.005579 ms
<t> finish modules: 25.317968 ms
<t> report dependency errors and warnings: 4.63319 ms
<t> optimize dependencies: 12.863223 ms
<t> create chunks: 3.433324 ms
<t> compute affected modules with chunk graph: 0.004948 ms
<t> optimize: 28.002774 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 19.247452 ms
    0% code generated (0 generated, 7 from cache)
<t> code generation: 0.60899 ms
<t> runtime requirements.modules: 0.118069 ms
<t> runtime requirements.chunks: 0.493794 ms
<t> runtime requirements.entries: 1.299604 ms
<t> runtime requirements: 2.160392 ms
<t> hashing: initialize hash: 0.008729 ms
<t> hashing: sort chunks: 0.056552 ms
<t> hashing: hash runtime modules: 2.251554 ms
<t> hashing: hash chunks: 1.746454 ms
<t> hashing: hash digest: 0.055553 ms
<t> hashing: process full hash modules: 0.221045 ms
<t> hashing: 4.502974 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.076322 ms
<t> module assets: 0.185609 ms
<t> create chunk assets: 1.310237 ms
<t> process assets: 600.252574 ms

LOG from webpack.ResolverCachePlugin
    3% really resolved (53 real resolves with 53 cached but invalid, 1730 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 2.203772 ms
<t> figure out provided exports: 7.245531 ms
    2% of exports of modules have been determined (3 no declared exports, 5 not cached, 0 flagged uncacheable, 249 from cache, 0 from mem cache, 0 additional calculations due to dependencies)
<t> store provided exports into cache: 0.009178 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.184121 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 6.635043 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.507196 ms
<t> trace exports usage in graph: 5.317022 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.575626 ms
<t> visitModules: visiting: 2.433026 ms
    262 queue items processed (120 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.496049 ms
<t> connectChunkGroups: 0.002465 ms
<t> cleanup: 0.001202 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.034724 ms
<t> modules: 2.908556 ms
<t> queue: 0.008712 ms
<t> maxSize: 0.064166 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.208489 ms
<t> sort relevant modules: 0.180891 ms
<t> find modules to concatenate: 6.286973 ms
<t> sort concat configurations: 0.046477 ms
<t> create concatenated modules: 5.704357 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.267842 ms
+ 1 hidden lines

2023-04-21 14:46:38: webpack 5.79.0 compiled in 3527 ms (2a7be18bd424799a)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Node.js doesn't offer a (nice) way to introspect the ESM dependency graph yet.
    Until a full solution is available webpack uses an experimental ESM tracking based on parsing.
    As best effort webpack parses the ESM files to guess dependencies. But this can lead to expensive and incorrect tracking.
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 299.967466 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 5.635032 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 54 fresh items in cache put into pack 3
<t> [webpack.cache.PackFileCacheStrategy] store pack: 28.834697 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1112 items, 4 files, 38 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 305.27 kB |                78.59 kB
styles.css          | styles        | 104.38 kB |                 9.48 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 443.55 kB |                99.27 kB

Build at: 2023-04-21T18:46:40.054Z - Hash: 2a7be18bd424799a - Time: 4671ms
Done in 6.52s.
```
Fri Apr 21 02:46:48 PM EDT 2023
yarn version v1.22.19
info Current version: 0.0.7
info New version: 0.0.8
Done in 0.12s.
