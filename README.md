Tue Aug  1 11:15:07 PM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       4.1Gi       408Mi       962Mi        10Gi       9.9Gi
Swap:          8.0Gi       1.3Gi       6.7Gi
System Storage
950M	.
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
    

Angular CLI: 16.1.6
Node: 18.17.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.1.7
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1601.6
@angular-devkit/build-angular   16.1.6
@angular-devkit/core            16.1.6
@angular-devkit/schematics      16.1.6
@angular/cdk                    16.1.6
@angular/cli                    16.1.6
@angular/material               16.1.6
@schematics/angular             16.1.6
rxjs                            7.8.0
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.58s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.39s.
```
Latest version:     1.0.30001518
Installed version:  1.0.30001518
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001518
Installed version:  1.0.30001518
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 2224.692836 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/package.json invalidated because hashes differ (c9306879071a9874 != ed4e008d6a8b8119)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 626.427682 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 4.385191 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 1 (105 KiB) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/app/app.component.ts': 1.714578 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 1 (105 KiB): 16.355335 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (37.8 MiB) because of request to: Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.048133 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 2.016116 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.258627 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 1.731507 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 1.429965 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (37.8 MiB): 98.558613 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
asset main.js 337 KiB {179} [emitted] (name: main)
asset styles.css 99 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 338 KiB = runtime.js 912 bytes main.js 337 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 99.9 KiB = runtime.js 912 bytes styles.css 99 KiB
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
    16% children snapshot uncached (369 / 2349)
    1464 entries tested
    File info in cache: 134 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/8) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 76% (414/548) entries shared via 3 shared snapshots (57 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 42% (144/343) entries shared via 7 shared snapshots (22 times referenced)
    Managed items info in cache: 78 items
    Managed items snapshot optimization: 51% (188/369) entries shared via 17 shared snapshots (33 times referenced)
    Managed files snapshot optimization: 65% (172/266) entries shared via 11 shared snapshots (34 times referenced)
    Managed missing snapshot optimization: 79% (351/444) entries shared via 17 shared snapshots (53 times referenced)
+ 2 hidden lines

LOG from webpack.Compiler
<t> make hook: 1259.874356 ms
<t> finish make hook: 0.138043 ms
<t> finish compilation: 42.23211 ms
<t> seal compilation: 755.253006 ms
<t> afterCompile hook: 0.067423 ms
<t> emitAssets: 3.993893 ms
<t> emitRecords: 0.057562 ms
<t> done hook: 123.089047 ms
<t> beginIdle: 0.445824 ms

LOG from webpack.Compilation.ModuleProfile
     | 138 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 138 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 141 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 140 ms (parallelism 5) resolve to new modules > ./src/main.ts
     | 140 ms (parallelism 5) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 30 ms (parallelism 9.8) resolve to new modules > ./node_modules/@angular/core/fesm2022/core.mjs
     | 30 ms (parallelism 10.6) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
    944 ms resolve to new modules
+ 23 hidden lines

LOG from webpack.Compilation
<t> finish module profiles: 7.317976 ms
<t> compute affected modules: 0.00629 ms
<t> finish modules: 30.653458 ms
<t> report dependency errors and warnings: 4.21051 ms
<t> optimize dependencies: 11.253485 ms
<t> create chunks: 3.531962 ms
<t> compute affected modules with chunk graph: 0.003611 ms
<t> optimize: 28.241969 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 8.615043 ms
    0% code generated (0 generated, 7 from cache)
<t> code generation: 0.907674 ms
<t> runtime requirements.modules: 0.334892 ms
<t> runtime requirements.chunks: 0.217616 ms
<t> runtime requirements.entries: 0.840023 ms
<t> runtime requirements: 1.608645 ms
<t> hashing: initialize hash: 0.006114 ms
<t> hashing: sort chunks: 0.038408 ms
<t> hashing: hash runtime modules: 1.495828 ms
<t> hashing: hash chunks: 1.121009 ms
<t> hashing: hash digest: 0.014372 ms
<t> hashing: process full hash modules: 0.133456 ms
<t> hashing: 2.904295 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.051831 ms
<t> module assets: 0.154936 ms
<t> create chunk assets: 0.87204 ms
<t> process assets: 694.356675 ms

LOG from webpack.ResolverCachePlugin
    3% really resolved (62 real resolves with 62 cached but invalid, 1760 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 7.45021 ms
<t> figure out provided exports: 4.829392 ms
    2% of exports of modules have been determined (3 no declared exports, 5 not cached, 0 flagged uncacheable, 252 from cache, 0 from mem cache, 0 additional calculations due to dependencies)
<t> store provided exports into cache: 0.007161 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.231548 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.689379 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.543534 ms
<t> trace exports usage in graph: 5.66421 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.695963 ms
<t> visitModules: visiting: 2.486274 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.586427 ms
<t> connectChunkGroups: 0.002437 ms
<t> cleanup: 0.001102 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.034949 ms
<t> modules: 2.942771 ms
<t> queue: 0.007275 ms
<t> maxSize: 0.054027 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.412803 ms
<t> sort relevant modules: 0.15929 ms
<t> find modules to concatenate: 5.872477 ms
<t> sort concat configurations: 0.036226 ms
<t> create concatenated modules: 5.208061 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.116774 ms
+ 1 hidden lines

2023-08-01 23:15:33: webpack 5.86.0 compiled in 4253 ms (b534422a4cc03ae7)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Node.js doesn't offer a (nice) way to introspect the ESM dependency graph yet.
    Until a full solution is available webpack uses an experimental ESM tracking based on parsing.
    As best effort webpack parses the ESM files to guess dependencies. But this can lead to expensive and incorrect tracking.
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 294.90706 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 5.627377 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 64 fresh items in cache put into pack 3
<t> [webpack.cache.PackFileCacheStrategy] store pack: 31.399168 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1136 items, 4 files, 38 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 336.89 kB |                84.58 kB
styles.css          | styles        |  98.98 kB |                 8.94 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 469.77 kB |               104.71 kB

Build at: 2023-08-02T03:15:38.691Z - Hash: b534422a4cc03ae7 - Time: 9280ms
Done in 11.33s.
```
