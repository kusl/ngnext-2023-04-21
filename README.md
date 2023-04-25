Tue Apr 25 01:56:36 AM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       7.7Gi       650Mi       1.1Gi       7.0Gi       6.2Gi
Swap:          8.0Gi       2.3Gi       5.7Gi
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
    
Done in 0.61s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.34s.
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
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 2013.119493 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/package.json invalidated because hashes differ (82cf26e0e43ea245 != 9d9d7fbb75359378)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 535.014844 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 4.102288 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 4 (35.1 MiB) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 6 (102 KiB) because of request to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/app/app.component.ts': 2.344456 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 6 (102 KiB): 14.019974 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (5.18 MiB) because of request to: Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/localize/fesm2022/init.mjs
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 4 (35.1 MiB): 58.242743 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 1.217123 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 1.164579 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 1.046932 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (5.18 MiB): 62.958915 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 1 (24.1 KiB) because of request to: Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/progress-spinner.mjs
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 1 (24.1 KiB): 35.36647 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
    [webpack.cache.PackFileCacheStrategy] Pack 6 got empty and is removed
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
    39% root snapshot uncached (807 / 2074)
    16% children snapshot uncached (369 / 2354)
    1454 entries tested
    File info in cache: 124 timestamps 22 hashes 22 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/8) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 75% (407/540) entries shared via 3 shared snapshots (56 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 43% (142/328) entries shared via 7 shared snapshots (22 times referenced)
    Managed items info in cache: 78 items
    Managed items snapshot optimization: 54% (200/369) entries shared via 18 shared snapshots (34 times referenced)
    Managed files snapshot optimization: 66% (172/261) entries shared via 11 shared snapshots (34 times referenced)
    Managed missing snapshot optimization: 79% (351/442) entries shared via 17 shared snapshots (53 times referenced)
+ 2 hidden lines

LOG from webpack.Compiler
<t> make hook: 1137.882376 ms
<t> finish make hook: 0.137114 ms
<t> finish compilation: 31.983074 ms
<t> seal compilation: 703.465952 ms
<t> afterCompile hook: 0.079234 ms
<t> emitAssets: 5.080288 ms
<t> emitRecords: 0.070949 ms
<t> done hook: 121.577566 ms
<t> beginIdle: 0.32889 ms

LOG from webpack.Compilation.ModuleProfile
     | 123 ms (parallelism 5) resolve to new modules > ./src/main.ts
     | 121 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 121 ms (parallelism 5) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 121 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 121 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 38 ms (parallelism 9.2) resolve to new modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     | 38 ms (parallelism 9.2) resolve to new modules > ./node_modules/@angular/core/fesm2022/core.mjs
    862 ms resolve to new modules
+ 16 hidden lines

LOG from webpack.Compilation
<t> finish module profiles: 6.043081 ms
<t> compute affected modules: 0.004588 ms
<t> finish modules: 21.622576 ms
<t> report dependency errors and warnings: 4.264892 ms
<t> optimize dependencies: 8.875342 ms
<t> create chunks: 3.413305 ms
<t> compute affected modules with chunk graph: 0.002883 ms
<t> optimize: 35.182105 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 8.364844 ms
    0% code generated (0 generated, 7 from cache)
<t> code generation: 0.496942 ms
<t> runtime requirements.modules: 0.185267 ms
<t> runtime requirements.chunks: 0.133391 ms
<t> runtime requirements.entries: 0.813309 ms
<t> runtime requirements: 1.301201 ms
<t> hashing: initialize hash: 0.004592 ms
<t> hashing: sort chunks: 0.03568 ms
<t> hashing: hash runtime modules: 1.398642 ms
<t> hashing: hash chunks: 1.019421 ms
<t> hashing: hash digest: 0.012687 ms
<t> hashing: process full hash modules: 0.172224 ms
<t> hashing: 2.729593 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.052219 ms
<t> module assets: 0.153323 ms
<t> create chunk assets: 1.100411 ms
<t> process assets: 640.187292 ms

LOG from webpack.ResolverCachePlugin
    3% really resolved (61 real resolves with 61 cached but invalid, 1756 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 2.035858 ms
<t> figure out provided exports: 8.200762 ms
    2% of exports of modules have been determined (3 no declared exports, 5 not cached, 0 flagged uncacheable, 251 from cache, 0 from mem cache, 0 additional calculations due to dependencies)
<t> store provided exports into cache: 0.007336 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.265486 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.660021 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.404423 ms
<t> trace exports usage in graph: 4.495854 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.573325 ms
<t> visitModules: visiting: 2.36264 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.418795 ms
<t> connectChunkGroups: 0.002782 ms
<t> cleanup: 0.001101 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.031581 ms
<t> modules: 2.437456 ms
<t> queue: 0.003952 ms
<t> maxSize: 0.029411 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 4.58632 ms
<t> sort relevant modules: 0.264179 ms
<t> find modules to concatenate: 12.063983 ms
<t> sort concat configurations: 0.017554 ms
<t> create concatenated modules: 4.930651 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.123471 ms
+ 1 hidden lines

2023-04-25 01:57:16: webpack 5.79.0 compiled in 3859 ms (e831f2dc694b1beb)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Node.js doesn't offer a (nice) way to introspect the ESM dependency graph yet.
    Until a full solution is available webpack uses an experimental ESM tracking based on parsing.
    As best effort webpack parses the ESM files to guess dependencies. But this can lead to expensive and incorrect tracking.
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 305.022105 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 3.864315 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 63 fresh items in cache put into pack 6
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/app/app.component.ts': 1.559459 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 47.774633 ms
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

Build at: 2023-04-25T05:57:17.768Z - Hash: e831f2dc694b1beb - Time: 4969ms
Done in 6.73s.
```
Tue Apr 25 01:57:26 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.13
info New version: 0.0.14
Done in 0.12s.
