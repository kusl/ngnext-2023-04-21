Fri Jun 30 02:44:47 PM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.3Gi       3.7Gi       378Mi       9.3Gi        12Gi
Swap:          8.0Gi        54Mi       7.9Gi
System Storage
740M	.
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
    

Angular CLI: 16.1.3
Node: 18.16.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.1.3
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1601.3
@angular-devkit/build-angular   16.1.3
@angular-devkit/core            16.1.3
@angular-devkit/schematics      16.1.3
@schematics/angular             16.1.3
rxjs                            7.8.0
typescript                      5.0.4
    
Done in 0.57s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.38s.
```
Latest version:     1.0.30001509
Installed version:  1.0.30001509
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001509
Installed version:  1.0.30001509
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1947.730591 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/package.json invalidated because hashes differ (28eea58c0c537d31 != daaa9e7cac826022)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 602.30427 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 4.737019 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 1 (145 bytes) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 3 (105 KiB) because of request to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 1 (145 bytes): 0.725878 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/app/app.component.ts': 2.7135 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 3 (105 KiB): 23.408802 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (37.8 MiB) because of request to: Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.104959 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 1.039972 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 1.035452 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (37.8 MiB): 77.611694 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
    [webpack.cache.PackFileCacheStrategy] Pack 3 got empty and is removed
asset main.js 337 KiB {179} [emitted] (name: main)
asset styles.css 104 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 338 KiB = runtime.js 912 bytes main.js 337 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 104 KiB = runtime.js 912 bytes styles.css 104 KiB
chunk {179} (runtime: runtime) main.js (main) 2.57 MiB [initial]
  cached modules 38 KiB [cached] 1 module
  ./src/main.ts + 114 modules [368] 2.53 MiB {179} [built]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial]
  cached modules 104 KiB [cached] 1 module
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 108 KiB (css/mini-extract) [initial]
  cached modules 100 bytes (javascript) 108 KiB (css/mini-extract) [cached] 4 modules
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry]
  cached modules 2.49 KiB [cached] 4 modules
  

LOG from webpack.FileSystemInfo
    64 new snapshots created
    39% root snapshot uncached (809 / 2077)
    16% children snapshot uncached (367 / 2350)
    1464 entries tested
    File info in cache: 134 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/8) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 76% (414/548) entries shared via 3 shared snapshots (57 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 45% (154/343) entries shared via 8 shared snapshots (23 times referenced)
    Managed items info in cache: 78 items
    Managed items snapshot optimization: 55% (203/369) entries shared via 18 shared snapshots (35 times referenced)
    Managed files snapshot optimization: 65% (172/266) entries shared via 11 shared snapshots (34 times referenced)
    Managed missing snapshot optimization: 81% (361/444) entries shared via 21 shared snapshots (50 times referenced)
+ 2 hidden lines

LOG from webpack.Compiler
<t> make hook: 1181.466457 ms
<t> finish make hook: 0.106053 ms
<t> finish compilation: 32.404578 ms
<t> seal compilation: 708.871932 ms
<t> afterCompile hook: 0.113917 ms
<t> emitAssets: 5.080416 ms
<t> emitRecords: 0.076857 ms
<t> done hook: 127.039584 ms
<t> beginIdle: 0.41017 ms

LOG from webpack.Compilation.ModuleProfile
     | 135 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 135 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 138 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 137 ms (parallelism 5) resolve to new modules > ./src/main.ts
     | 137 ms (parallelism 5) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
    911 ms resolve to new modules
+ 24 hidden lines

LOG from webpack.Compilation
<t> finish module profiles: 4.548708 ms
<t> compute affected modules: 0.005522 ms
<t> finish modules: 22.696929 ms
<t> report dependency errors and warnings: 5.115009 ms
<t> optimize dependencies: 8.903305 ms
<t> create chunks: 3.138124 ms
<t> compute affected modules with chunk graph: 0.003225 ms
<t> optimize: 26.405146 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 8.361083 ms
    0% code generated (0 generated, 7 from cache)
<t> code generation: 0.654632 ms
<t> runtime requirements.modules: 0.193739 ms
<t> runtime requirements.chunks: 0.145189 ms
<t> runtime requirements.entries: 0.787066 ms
<t> runtime requirements: 1.308051 ms
<t> hashing: initialize hash: 0.004229 ms
<t> hashing: sort chunks: 0.034906 ms
<t> hashing: hash runtime modules: 1.386866 ms
<t> hashing: hash chunks: 0.982466 ms
<t> hashing: hash digest: 0.012441 ms
<t> hashing: process full hash modules: 0.130919 ms
<t> hashing: 2.638302 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.057993 ms
<t> module assets: 0.154657 ms
<t> create chunk assets: 0.806151 ms
<t> process assets: 654.502347 ms

LOG from webpack.ResolverCachePlugin
    3% really resolved (62 real resolves with 62 cached but invalid, 1757 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 2.208657 ms
<t> figure out provided exports: 8.593723 ms
    2% of exports of modules have been determined (3 no declared exports, 5 not cached, 0 flagged uncacheable, 252 from cache, 0 from mem cache, 0 additional calculations due to dependencies)
<t> store provided exports into cache: 0.00679 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.213261 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.626288 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.397647 ms
<t> trace exports usage in graph: 4.593137 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.525571 ms
<t> visitModules: visiting: 2.245085 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.308347 ms
<t> connectChunkGroups: 0.00226 ms
<t> cleanup: 0.001041 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.031391 ms
<t> modules: 2.303089 ms
<t> queue: 0.004035 ms
<t> maxSize: 0.028799 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.970837 ms
<t> sort relevant modules: 0.128301 ms
<t> find modules to concatenate: 5.306761 ms
<t> sort concat configurations: 0.035402 ms
<t> create concatenated modules: 5.225812 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.122194 ms
+ 1 hidden lines

2023-06-30 14:45:07: webpack 5.86.0 compiled in 3846 ms (48f5271fbcf0d11a)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Node.js doesn't offer a (nice) way to introspect the ESM dependency graph yet.
    Until a full solution is available webpack uses an experimental ESM tracking based on parsing.
    As best effort webpack parses the ESM files to guess dependencies. But this can lead to expensive and incorrect tracking.
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 271.555837 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 7.030357 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 64 fresh items in cache put into pack 3
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/app/app.component.ts': 1.474537 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 37.950219 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1136 items, 4 files, 38 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 337.30 kB |                84.79 kB
styles.css          | styles        | 103.56 kB |                 9.54 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 474.75 kB |               105.52 kB

Build at: 2023-06-30T18:45:08.281Z - Hash: 48f5271fbcf0d11a - Time: 5116ms
Done in 6.91s.
```
