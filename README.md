Tue Jan  9 10:10:44 PM EST 2024

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       4.6Gi       3.1Gi       375Mi       8.3Gi        10Gi
Swap:          8.0Gi       1.3Gi       6.7Gi
System Storage
1.1G	.
```
```bash
yarn run v1.22.21
$ ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 17.0.9
Node: 20.10.0
Package Manager: yarn 1.22.21
OS: linux x64

Angular: 17.0.8
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1700.9
@angular-devkit/build-angular   17.0.9
@angular-devkit/core            17.0.9
@angular-devkit/schematics      17.0.9
@angular/cdk                    17.0.4
@angular/cli                    17.0.9
@angular/material               17.0.4
@schematics/angular             17.0.9
rxjs                            7.8.0
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.51s.
yarn install v1.22.21
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.36s.
```
```bash
Latest version:     1.0.30001576
Installed version:  1.0.30001576
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.21
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 2098.814719 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/package.json invalidated because hashes differ (dd44a3154feefa0b != 28690bbd6b4dfadb)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 414.763442 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 4.458157 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 1 (145 bytes) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 3 (99 KiB) because of request to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 1 (145 bytes): 0.636479 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/app/app.component.ts': 1.603118 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 3 (99 KiB): 16.482232 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (40.7 MiB) because of request to: Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.032276 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 1.054068 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (40.7 MiB): 69.851719 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|/home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Pack 3 got empty and is removed
asset main.js 342 KiB {179} [emitted] (name: main)
asset styles.css 82.9 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 343 KiB = runtime.js 912 bytes main.js 342 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 83.8 KiB = runtime.js 912 bytes styles.css 82.9 KiB
chunk {179} (runtime: runtime) main.js (main) 2.79 MiB [initial]
  cached modules 29.9 KiB [cached] 1 module
  ./src/main.ts + 113 modules [596] 2.76 MiB {179} [built]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial]
  cached modules 104 KiB [cached] 1 module
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 85.5 KiB (css/mini-extract) [initial]
  cached modules 100 bytes (javascript) 85.5 KiB (css/mini-extract) [cached] 4 modules
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry]
  cached modules 2.49 KiB [cached] 4 modules
  

LOG from webpack.FileSystemInfo
    64 new snapshots created
    39% root snapshot uncached (811 / 2073)
    16% children snapshot uncached (368 / 2351)
    1463 entries tested
    File info in cache: 130 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/8) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 74% (405/549) entries shared via 2 shared snapshots (57 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 48% (166/343) entries shared via 8 shared snapshots (25 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 58% (214/371) entries shared via 19 shared snapshots (37 times referenced)
    Managed files snapshot optimization: 62% (168/269) entries shared via 10 shared snapshots (34 times referenced)
    Managed missing snapshot optimization: 78% (347/444) entries shared via 17 shared snapshots (53 times referenced)
+ 2 hidden lines

LOG from webpack.Compiler
<t> make hook: 991.405979 ms
<t> finish make hook: 0.10582 ms
<t> finish compilation: 26.827944 ms
<t> seal compilation: 716.987389 ms
<t> afterCompile hook: 0.077848 ms
<t> emitAssets: 4.087548 ms
<t> emitRecords: 0.084468 ms
<t> done hook: 311.098547 ms
<t> beginIdle: 0.356712 ms

LOG from webpack.Compilation.ModuleProfile
     | 95 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 95 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 97 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 96 ms (parallelism 5) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 96 ms (parallelism 5) resolve to new modules > ./src/main.ts
     | 30 ms (parallelism 10.3) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
    724 ms resolve to new modules
+ 23 hidden lines

LOG from webpack.Compilation
<t> finish module profiles: 3.819522 ms
<t> compute affected modules: 0.00498 ms
<t> finish modules: 18.477683 ms
<t> report dependency errors and warnings: 4.464927 ms
<t> optimize dependencies: 9.66993 ms
<t> create chunks: 3.175569 ms
<t> compute affected modules with chunk graph: 0.003646 ms
<t> optimize: 25.981253 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 7.973471 ms
    0% code generated (0 generated, 7 from cache)
<t> code generation: 0.557343 ms
<t> runtime requirements.modules: 0.213911 ms
<t> runtime requirements.chunks: 0.140022 ms
<t> runtime requirements.entries: 0.757786 ms
<t> runtime requirements: 1.274275 ms
<t> hashing: initialize hash: 0.004613 ms
<t> hashing: sort chunks: 0.034734 ms
<t> hashing: hash runtime modules: 1.368228 ms
<t> hashing: hash chunks: 0.914044 ms
<t> hashing: hash digest: 0.012902 ms
<t> hashing: process full hash modules: 0.173784 ms
<t> hashing: 2.596749 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.05483 ms
<t> module assets: 0.11708 ms
<t> create chunk assets: 0.816988 ms
<t> process assets: 663.157872 ms

LOG from webpack.ResolverCachePlugin
    3% really resolved (62 real resolves with 62 cached but invalid, 1752 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 2.072282 ms
<t> figure out provided exports: 4.71937 ms
    2% of exports of modules have been determined (3 no declared exports, 6 not cached, 0 flagged uncacheable, 252 from cache, 0 from mem cache, 1 additional calculations due to dependencies)
<t> store provided exports into cache: 0.007564 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.210679 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.984962 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.463448 ms
<t> trace exports usage in graph: 4.835178 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.550593 ms
<t> visitModules: visiting: 2.260819 ms
    268 queue items processed (121 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.310396 ms
<t> connectChunkGroups: 0.002736 ms
<t> cleanup: 0.001166 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.041897 ms
<t> modules: 2.215955 ms
<t> queue: 0.004213 ms
<t> maxSize: 0.029788 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.953579 ms
<t> sort relevant modules: 0.120299 ms
<t> find modules to concatenate: 8.543948 ms
<t> sort concat configurations: 0.054115 ms
<t> create concatenated modules: 4.998559 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.062463 ms
+ 1 hidden lines

2024-01-09 22:11:09: webpack 5.89.0 compiled in 3809 ms (2d6a9c317f50aa1d)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Node.js doesn't offer a (nice) way to introspect the ESM dependency graph yet.
    Until a full solution is available webpack uses an experimental ESM tracking based on parsing.
    As best effort webpack parses the ESM files to guess dependencies. But this can lead to expensive and incorrect tracking.
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 246.610135 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 3.51261 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 64 fresh items in cache put into pack 3
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/app/app.component.ts': 1.774972 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 37.048812 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1138 items, 4 files, 41 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 341.66 kB |                85.84 kB
styles.css          | styles        |  82.94 kB |                 8.15 kB
polyfills.js        | polyfills     |  32.97 kB |                10.63 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 458.46 kB |               105.13 kB

Build at: 2024-01-10T03:11:10.290Z - Hash: 2d6a9c317f50aa1d - Time: 5031ms
Done in 6.71s.
```
Tue Jan  9 10:11:21 PM EST 2024
yarn version v1.22.21
info Current version: 0.0.341
info New version: 0.0.342
Done in 0.12s.
