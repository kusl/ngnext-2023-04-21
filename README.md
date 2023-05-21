Sun May 21 09:54:44 AM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.2Gi       2.4Gi       550Mi        10Gi        12Gi
Swap:          8.0Gi       3.0Mi       8.0Gi
System Storage
667M	.
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
    

Angular CLI: 16.0.2
Node: 18.16.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.0.2
... animations, cli, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1600.2
@angular-devkit/build-angular   16.0.2
@angular-devkit/core            16.0.2
@angular-devkit/schematics      16.0.2
@angular/cdk                    16.0.1
@angular/material               16.0.1
@schematics/angular             16.0.2
rxjs                            7.8.0
typescript                      5.0.4
    
Done in 0.67s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.39s.
```
Latest version:     1.0.30001488
Installed version:  1.0.30001488
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001488
Installed version:  1.0.30001488
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1818.560527 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/package.json invalidated because hashes differ (f41e38fef90e53bb != cf5ebd932c8d9708)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 514.608772 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 4.234482 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 1 (101 KiB) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/app/app.component.ts': 1.583579 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 1 (101 KiB): 8.223591 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (37.8 MiB) because of request to: Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.02086 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 1.20815 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 1.017892 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (37.8 MiB): 66.746219 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
asset main.js 337 KiB {179} [emitted] (name: main)
asset styles.css 106 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 338 KiB = runtime.js 912 bytes main.js 337 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 107 KiB = runtime.js 912 bytes styles.css 106 KiB
chunk {179} (runtime: runtime) main.js (main) 2.56 MiB [initial]
  cached modules 38 KiB [cached] 1 module
  ./src/main.ts + 114 modules [670] 2.53 MiB {179} [built]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial]
  cached modules 104 KiB [cached] 1 module
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 115 KiB (css/mini-extract) [initial]
  cached modules 100 bytes (javascript) 115 KiB (css/mini-extract) [cached] 4 modules
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry]
  cached modules 2.49 KiB [cached] 4 modules
  

LOG from webpack.FileSystemInfo
    63 new snapshots created
    39% root snapshot uncached (807 / 2074)
    16% children snapshot uncached (366 / 2349)
    1463 entries tested
    File info in cache: 124 timestamps 22 hashes 22 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/8) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 76% (407/539) entries shared via 3 shared snapshots (56 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 40% (132/328) entries shared via 6 shared snapshots (21 times referenced)
    Managed items info in cache: 77 items
    Managed items snapshot optimization: 51% (188/367) entries shared via 17 shared snapshots (33 times referenced)
    Managed files snapshot optimization: 67% (172/258) entries shared via 11 shared snapshots (34 times referenced)
    Managed missing snapshot optimization: 79% (351/442) entries shared via 17 shared snapshots (53 times referenced)
+ 2 hidden lines

LOG from webpack.Compiler
<t> make hook: 1043.444967 ms
<t> finish make hook: 0.095914 ms
<t> finish compilation: 25.993044 ms
<t> seal compilation: 666.487181 ms
<t> afterCompile hook: 0.064554 ms
<t> emitAssets: 3.785285 ms
<t> emitRecords: 0.05832 ms
<t> done hook: 112.359728 ms
<t> beginIdle: 0.414356 ms

LOG from webpack.Compilation.ModuleProfile
     | 113 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 113 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 116 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 115 ms (parallelism 5) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 115 ms (parallelism 5) resolve to new modules > ./src/main.ts
    786 ms resolve to new modules
+ 24 hidden lines

LOG from webpack.Compilation
<t> finish module profiles: 4.334605 ms
<t> compute affected modules: 0.004341 ms
<t> finish modules: 17.469913 ms
<t> report dependency errors and warnings: 4.148412 ms
<t> optimize dependencies: 8.804386 ms
<t> create chunks: 3.133008 ms
<t> compute affected modules with chunk graph: 0.002959 ms
<t> optimize: 21.319458 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 11.022828 ms
    0% code generated (0 generated, 7 from cache)
<t> code generation: 0.640328 ms
<t> runtime requirements.modules: 0.184792 ms
<t> runtime requirements.chunks: 0.135139 ms
<t> runtime requirements.entries: 0.809048 ms
<t> runtime requirements: 1.337835 ms
<t> hashing: initialize hash: 0.004338 ms
<t> hashing: sort chunks: 0.035919 ms
<t> hashing: hash runtime modules: 1.387125 ms
<t> hashing: hash chunks: 1.015966 ms
<t> hashing: hash digest: 0.012419 ms
<t> hashing: process full hash modules: 0.126493 ms
<t> hashing: 2.667682 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.080158 ms
<t> module assets: 0.205505 ms
<t> create chunk assets: 0.886161 ms
<t> process assets: 611.641939 ms

LOG from webpack.ResolverCachePlugin
    3% really resolved (61 real resolves with 61 cached but invalid, 1756 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.925035 ms
<t> figure out provided exports: 4.71358 ms
    2% of exports of modules have been determined (3 no declared exports, 5 not cached, 0 flagged uncacheable, 251 from cache, 0 from mem cache, 0 additional calculations due to dependencies)
<t> store provided exports into cache: 0.006137 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.219082 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.603123 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.41987 ms
<t> trace exports usage in graph: 4.404559 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.471055 ms
<t> visitModules: visiting: 2.26095 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.310961 ms
<t> connectChunkGroups: 0.002414 ms
<t> cleanup: 0.001214 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.034866 ms
<t> modules: 2.177136 ms
<t> queue: 0.004074 ms
<t> maxSize: 0.027962 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.919438 ms
<t> sort relevant modules: 0.127619 ms
<t> find modules to concatenate: 5.204408 ms
<t> sort concat configurations: 0.035071 ms
<t> create concatenated modules: 5.152805 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.170456 ms
+ 1 hidden lines

2023-05-21 09:55:02: webpack 5.80.0 compiled in 3530 ms (7ad18629f94ab92a)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Node.js doesn't offer a (nice) way to introspect the ESM dependency graph yet.
    Until a full solution is available webpack uses an experimental ESM tracking based on parsing.
    As best effort webpack parses the ESM files to guess dependencies. But this can lead to expensive and incorrect tracking.
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 279.046593 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 7.116186 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 63 fresh items in cache put into pack 3
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/app/app.component.ts': 1.780546 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 39.428102 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1133 items, 4 files, 38 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 337.16 kB |                84.65 kB
styles.css          | styles        | 105.84 kB |                 9.52 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 476.89 kB |               105.36 kB

Build at: 2023-05-21T13:55:03.864Z - Hash: 7ad18629f94ab92a - Time: 4561ms
Done in 6.42s.
```
Sun May 21 09:55:12 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.34
info New version: 0.0.35
Done in 0.12s.
