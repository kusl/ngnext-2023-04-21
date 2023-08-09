Wed Aug  9 06:11:07 AM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.6Gi       3.1Gi       517Mi       8.5Gi        10Gi
Swap:          8.0Gi       976Mi       7.0Gi
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
Node: 18.17.0
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
    
Done in 0.59s.
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
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1911.254913 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/package.json invalidated because hashes differ (f85946dcd8845561 != b614ab4b918e1443)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 612.741797 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 4.260379 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 1 (145 bytes) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 3 (105 KiB) because of request to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 1 (145 bytes): 0.774793 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/app/app.component.ts': 1.693307 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 3 (105 KiB): 16.167237 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (37.8 MiB) because of request to: Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.119744 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 1.065919 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 1.179903 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (37.8 MiB): 82.497531 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|/home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Pack 3 got empty and is removed
asset main.js 337 KiB {179} [emitted] (name: main)
asset styles.css 98.9 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 338 KiB = runtime.js 912 bytes main.js 337 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 99.8 KiB = runtime.js 912 bytes styles.css 98.9 KiB
chunk {179} (runtime: runtime) main.js (main) 2.57 MiB [initial]
  cached modules 38 KiB [cached] 1 module
  ./src/main.ts + 114 modules [368] 2.54 MiB {179} [built]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial]
  cached modules 104 KiB [cached] 1 module
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 103 KiB (css/mini-extract) [initial]
  cached modules 100 bytes (javascript) 103 KiB (css/mini-extract) [cached] 4 modules
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry]
  cached modules 2.49 KiB [cached] 4 modules
  

LOG from webpack.FileSystemInfo
    64 new snapshots created
    39% root snapshot uncached (809 / 2080)
    16% children snapshot uncached (368 / 2348)
    1464 entries tested
    File info in cache: 134 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/8) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 74% (405/548) entries shared via 2 shared snapshots (57 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 45% (154/343) entries shared via 8 shared snapshots (23 times referenced)
    Managed items info in cache: 78 items
    Managed items snapshot optimization: 54% (200/369) entries shared via 18 shared snapshots (34 times referenced)
    Managed files snapshot optimization: 65% (172/266) entries shared via 11 shared snapshots (34 times referenced)
    Managed missing snapshot optimization: 79% (351/444) entries shared via 17 shared snapshots (53 times referenced)
+ 2 hidden lines

LOG from webpack.Compiler
<t> make hook: 1199.224635 ms
<t> finish make hook: 0.269107 ms
<t> finish compilation: 32.448295 ms
<t> seal compilation: 699.574538 ms
<t> afterCompile hook: 0.085262 ms
<t> emitAssets: 4.442524 ms
<t> emitRecords: 0.05745 ms
<t> done hook: 122.532633 ms
<t> beginIdle: 0.347342 ms

LOG from webpack.Compilation.ModuleProfile
     | 135 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 135 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 138 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 137 ms (parallelism 5) resolve to new modules > ./src/main.ts
     | 137 ms (parallelism 5) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
    915 ms resolve to new modules
+ 25 hidden lines

LOG from webpack.Compilation
<t> finish module profiles: 5.91626 ms
<t> compute affected modules: 0.005305 ms
<t> finish modules: 22.399116 ms
<t> report dependency errors and warnings: 4.086203 ms
<t> optimize dependencies: 9.448327 ms
<t> create chunks: 3.185594 ms
<t> compute affected modules with chunk graph: 0.003689 ms
<t> optimize: 30.081022 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 8.500347 ms
    0% code generated (0 generated, 7 from cache)
<t> code generation: 0.589227 ms
<t> runtime requirements.modules: 0.183735 ms
<t> runtime requirements.chunks: 0.141182 ms
<t> runtime requirements.entries: 0.813859 ms
<t> runtime requirements: 1.317471 ms
<t> hashing: initialize hash: 0.004299 ms
<t> hashing: sort chunks: 0.035564 ms
<t> hashing: hash runtime modules: 1.460073 ms
<t> hashing: hash chunks: 1.030739 ms
<t> hashing: hash digest: 0.013379 ms
<t> hashing: process full hash modules: 0.128443 ms
<t> hashing: 2.761533 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.054209 ms
<t> module assets: 0.156089 ms
<t> create chunk assets: 0.853596 ms
<t> process assets: 641.049681 ms

LOG from webpack.ResolverCachePlugin
    3% really resolved (62 real resolves with 62 cached but invalid, 1760 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 5.936258 ms
<t> figure out provided exports: 4.807003 ms
    2% of exports of modules have been determined (3 no declared exports, 5 not cached, 0 flagged uncacheable, 252 from cache, 0 from mem cache, 0 additional calculations due to dependencies)
<t> store provided exports into cache: 0.006825 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.211897 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.728471 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.461248 ms
<t> trace exports usage in graph: 4.947214 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.506342 ms
<t> visitModules: visiting: 2.248708 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.304731 ms
<t> connectChunkGroups: 0.002436 ms
<t> cleanup: 0.001387 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.03274 ms
<t> modules: 2.313258 ms
<t> queue: 0.004181 ms
<t> maxSize: 0.028022 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.969986 ms
<t> sort relevant modules: 0.128562 ms
<t> find modules to concatenate: 5.398219 ms
<t> sort concat configurations: 0.03758 ms
<t> create concatenated modules: 8.052758 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.111659 ms
+ 1 hidden lines

2023-08-09 06:11:39: webpack 5.86.0 compiled in 3817 ms (5b36ab683f4cc25e)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Node.js doesn't offer a (nice) way to introspect the ESM dependency graph yet.
    Until a full solution is available webpack uses an experimental ESM tracking based on parsing.
    As best effort webpack parses the ESM files to guess dependencies. But this can lead to expensive and incorrect tracking.
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 293.035525 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 5.118877 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 64 fresh items in cache put into pack 3
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/app/app.component.ts': 1.014893 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 32.689967 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1136 items, 4 files, 38 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 336.89 kB |                84.55 kB
styles.css          | styles        |  98.87 kB |                 8.92 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 469.66 kB |               104.67 kB

Build at: 2023-08-09T10:11:40.519Z - Hash: 5b36ab683f4cc25e - Time: 5173ms
Done in 6.93s.
```
Wed Aug  9 06:11:48 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.94
info New version: 0.0.95
Done in 0.12s.
