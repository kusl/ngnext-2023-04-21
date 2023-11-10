Fri Nov 10 10:18:40 AM EST 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.2Gi       3.7Gi       327Mi        10Gi        13Gi
Swap:          8.0Gi       768Ki       8.0Gi
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
    

Angular CLI: 17.0.0
Node: 20.9.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 17.0.2
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1700.0
@angular-devkit/build-angular   17.0.0
@angular-devkit/core            17.0.0
@angular-devkit/schematics      17.0.0
@angular/cdk                    17.0.0
@angular/cli                    17.0.0
@angular/material               17.0.0
@schematics/angular             17.0.0
rxjs                            7.8.0
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.51s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.39s.
```
```bash
Latest version:     1.0.30001561
Installed version:  1.0.30001561
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1841.467091 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/package.json invalidated because hashes differ (3823bb1ba6f86ab6 != 8c73baf44192a2f7)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 974.937465 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 3.830462 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 1 (145 bytes) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 3 (99.1 KiB) because of request to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 1 (145 bytes): 0.541842 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/app/app.component.ts': 1.716614 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 3 (99.1 KiB): 8.234746 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (40.6 MiB) because of request to: Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.327799 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 1.7296 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.292452 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/operators/index.js': 1.190642 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/a11y.mjs': 1.143464 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 1.923966 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 3.085927 ms
<i> [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 10.427503 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 2.592771 ms
<i> [webpack.cache.PackFileCacheStrategy] Deserialization of 'FlagDependencyExportsPlugin|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 9.488679 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (40.6 MiB): 105.999452 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|/home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Pack 3 got empty and is removed
asset main.js 342 KiB {179} [emitted] (name: main)
asset styles.css 83.3 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 343 KiB = runtime.js 912 bytes main.js 342 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 84.2 KiB = runtime.js 912 bytes styles.css 83.3 KiB
chunk {179} (runtime: runtime) main.js (main) 2.79 MiB [initial]
  cached modules 29.8 KiB [cached] 1 module
  ./src/main.ts + 115 modules [607] 2.76 MiB {179} [built]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial]
  cached modules 104 KiB [cached] 1 module
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 85.4 KiB (css/mini-extract) [initial]
  cached modules 100 bytes (javascript) 85.4 KiB (css/mini-extract) [cached] 4 modules
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry]
  cached modules 2.49 KiB [cached] 4 modules
  

LOG from webpack.FileSystemInfo
    64 new snapshots created
    39% root snapshot uncached (811 / 2073)
    18% children snapshot uncached (396 / 2261)
    1469 entries tested
    File info in cache: 130 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/8) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 74% (405/549) entries shared via 2 shared snapshots (57 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 48% (166/343) entries shared via 8 shared snapshots (25 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 58% (214/371) entries shared via 19 shared snapshots (37 times referenced)
    Managed files snapshot optimization: 62% (168/269) entries shared via 10 shared snapshots (34 times referenced)
    Managed missing snapshot optimization: 81% (360/444) entries shared via 21 shared snapshots (50 times referenced)
+ 2 hidden lines

LOG from webpack.Compiler
<t> make hook: 1539.743775 ms
<t> finish make hook: 0.096608 ms
<t> finish compilation: 28.216787 ms
<t> seal compilation: 740.03508 ms
<t> afterCompile hook: 0.072706 ms
<t> emitAssets: 4.561078 ms
<t> emitRecords: 0.116335 ms
<t> done hook: 128.82832 ms
<t> beginIdle: 0.388419 ms

LOG from webpack.Compilation.ModuleProfile
<i>  | 205 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
<i>  | 206 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 208 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
<i>  | 206 ms (parallelism 5) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
<i>  | 207 ms (parallelism 5) resolve to new modules > ./src/main.ts
<i> 1246 ms resolve to new modules
+ 23 hidden lines

LOG from webpack.Compilation
<t> finish module profiles: 4.141186 ms
<t> compute affected modules: 0.005592 ms
<t> finish modules: 19.64974 ms
<t> report dependency errors and warnings: 4.38506 ms
<t> optimize dependencies: 9.446204 ms
<t> create chunks: 3.403677 ms
<t> compute affected modules with chunk graph: 0.003432 ms
<t> optimize: 26.188168 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 8.038474 ms
    0% code generated (0 generated, 7 from cache)
<t> code generation: 0.571919 ms
<t> runtime requirements.modules: 0.21132 ms
<t> runtime requirements.chunks: 0.144699 ms
<t> runtime requirements.entries: 0.810278 ms
<t> runtime requirements: 1.341315 ms
<t> hashing: initialize hash: 0.004137 ms
<t> hashing: sort chunks: 0.034863 ms
<t> hashing: hash runtime modules: 1.457363 ms
<t> hashing: hash chunks: 0.991176 ms
<t> hashing: hash digest: 0.012779 ms
<t> hashing: process full hash modules: 0.181446 ms
<t> hashing: 2.808078 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.054604 ms
<t> module assets: 0.12849 ms
<t> create chunk assets: 0.842152 ms
<t> process assets: 685.607396 ms

LOG from webpack.ResolverCachePlugin
    3% really resolved (62 real resolves with 62 cached but invalid, 1752 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 2.133928 ms
<t> figure out provided exports: 5.003475 ms
    2% of exports of modules have been determined (3 no declared exports, 6 not cached, 0 flagged uncacheable, 252 from cache, 0 from mem cache, 1 additional calculations due to dependencies)
<t> store provided exports into cache: 0.00719 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.216311 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.808365 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.467995 ms
<t> trace exports usage in graph: 4.835402 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.63838 ms
<t> visitModules: visiting: 2.42612 ms
    267 queue items processed (123 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.474627 ms
<t> connectChunkGroups: 0.002623 ms
<t> cleanup: 0.001092 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.041459 ms
<t> modules: 2.306505 ms
<t> queue: 0.004044 ms
<t> maxSize: 0.030745 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.013665 ms
<t> sort relevant modules: 0.126592 ms
<t> find modules to concatenate: 8.381184 ms
<t> sort concat configurations: 0.037868 ms
<t> create concatenated modules: 5.071547 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.070379 ms
+ 1 hidden lines

2023-11-10 10:19:03: webpack 5.89.0 compiled in 4123 ms (0aee6bce91f0082f)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Node.js doesn't offer a (nice) way to introspect the ESM dependency graph yet.
    Until a full solution is available webpack uses an experimental ESM tracking based on parsing.
    As best effort webpack parses the ESM files to guess dependencies. But this can lead to expensive and incorrect tracking.
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 242.477767 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 3.285998 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 64 fresh items in cache put into pack 3
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/app/app.component.ts': 1.085232 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 32.018098 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1138 items, 4 files, 41 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 341.72 kB |                86.01 kB
styles.css          | styles        |  83.31 kB |                 8.13 kB
polyfills.js        | polyfills     |  32.97 kB |                10.63 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 458.89 kB |               105.28 kB

Build at: 2023-11-10T15:19:04.569Z - Hash: 0aee6bce91f0082f - Time: 4870ms
Done in 6.40s.
```
