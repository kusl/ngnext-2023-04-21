Thu Nov 16 01:52:00 PM EST 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       4.5Gi       2.1Gi       553Mi       9.5Gi        10Gi
Swap:          8.0Gi       176Mi       7.8Gi
System Storage
787M	.
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
    

Angular CLI: 17.0.1
Node: 20.9.0
Package Manager: yarn 1.22.21
OS: linux x64

Angular: 17.0.3
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1700.1
@angular-devkit/build-angular   17.0.1
@angular-devkit/core            17.0.1
@angular-devkit/schematics      17.0.1
@angular/cdk                    17.0.0
@angular/cli                    17.0.1
@angular/material               17.0.0
@schematics/angular             17.0.1
rxjs                            7.8.0
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.54s.
yarn install v1.22.21
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.34s.
```
```bash
Latest version:     1.0.30001562
Installed version:  1.0.30001562
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.21
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 2054.340621 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/package.json invalidated because hashes differ (f041dbf11badf887 != 526b031a4884cfd6)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 967.697286 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 4.249066 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 1 (145 bytes) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 3 (99 KiB) because of request to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 1 (145 bytes): 0.540726 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/app/app.component.ts': 1.5507 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 3 (99 KiB): 16.598333 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (40.6 MiB) because of request to: Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.310181 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 1.530803 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.038637 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 1.3114 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (40.6 MiB): 117.271679 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 2 (308 KiB) because of request to: ResolverCachePlugin|loader|default|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes|request=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 2 (308 KiB): 9.033841 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|/home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Pack 3 got empty and is removed
    [webpack.cache.PackFileCacheStrategy] Pack 1 got empty and is removed
asset main.js 342 KiB {179} [emitted] (name: main)
asset styles.css 83.4 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 343 KiB = runtime.js 912 bytes main.js 342 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 84.2 KiB = runtime.js 912 bytes styles.css 83.4 KiB
chunk {179} (runtime: runtime) main.js (main) 2.79 MiB [initial] [rendered]
  cached modules 29.8 KiB [cached] 1 module
  ./src/main.ts + 115 modules [607] 2.76 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial]
  cached modules 104 KiB [cached] 1 module
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 85.4 KiB (css/mini-extract) [initial]
  cached modules 50 bytes (javascript) 186 bytes (css/mini-extract) [cached] 2 modules
  dependent modules 85.2 KiB [dependent] 1 module
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [554] 50 bytes {532} [built]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1663 ms (resolving: 1033 ms, restoring: 118 ms, integration: 0 ms, building: 512 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry]
  cached modules 2.49 KiB [cached] 4 modules
  

LOG from webpack.FileSystemInfo
    97 new snapshots created
    39% root snapshot uncached (819 / 2085)
    16% children snapshot uncached (377 / 2353)
    1488 entries tested
    File info in cache: 130 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/12) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 78% (545/697) entries shared via 3 shared snapshots (76 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 61% (221/365) entries shared via 10 shared snapshots (32 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 55% (244/447) entries shared via 14 shared snapshots (46 times referenced)
    Managed files snapshot optimization: 62% (252/406) entries shared via 16 shared snapshots (53 times referenced)
    Managed missing snapshot optimization: 77% (393/513) entries shared via 22 shared snapshots (62 times referenced)
+ 4 hidden lines

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.103991 ms
<t> runtime requirements.chunks: 0.131829 ms
<t> runtime requirements.entries: 0.883582 ms
<t> finish module profiles: 4.493088 ms
<t> compute affected modules: 0.004108 ms
<t> finish modules: 16.427173 ms
<t> report dependency errors and warnings: 5.522197 ms
<t> optimize dependencies: 9.873875 ms
<t> create chunks: 3.714778 ms
<t> compute affected modules with chunk graph: 0.003853 ms
<t> optimize: 30.547962 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 8.353423 ms
    29% code generated (2 generated, 5 from cache)
<t> code generation: 587.41584 ms
<t> runtime requirements.modules: 0.298918 ms
<t> runtime requirements.chunks: 0.085134 ms
<t> runtime requirements.entries: 0.485547 ms
<t> runtime requirements: 1.119169 ms
<t> hashing: initialize hash: 0.00747 ms
<t> hashing: sort chunks: 0.048315 ms
<t> hashing: hash runtime modules: 1.208147 ms
<t> hashing: hash chunks: 1.16038 ms
<t> hashing: hash digest: 0.015507 ms
<t> hashing: process full hash modules: 0.161886 ms
<t> hashing: 2.701585 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.064288 ms
<t> module assets: 0.187836 ms
<t> create chunk assets: 3.156652 ms
<t> process assets: 4123.905308 ms

LOG from webpack.Compiler
<t> make hook: 2947.445911 ms
<t> finish make hook: 0.090794 ms
<t> finish compilation: 26.479707 ms
<t> seal compilation: 4772.605228 ms
<t> afterCompile hook: 0.083601 ms
<t> emitAssets: 11.219447 ms
<t> emitRecords: 0.098266 ms
<t> done hook: 110.691731 ms
<t> beginIdle: 0.333736 ms

LOG from webpack.Compilation.ModuleProfile
<i>  | 206 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
<i>  | 207 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 209 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
<i>  | 207 ms (parallelism 5) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
<i>  | 208 ms (parallelism 5) resolve to new modules > ./src/main.ts
     | 79 ms (parallelism 5.2) resolve to new modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     | 79 ms (parallelism 5.2) resolve to new modules > ./node_modules/@angular/core/fesm2022/core.mjs
<i> 1316 ms resolve to new modules
     |  | 114 ms (parallelism 4.5) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 114 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 282 ms (parallelism 3) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
<i>  |  | 282 ms (parallelism 3) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
<i>  |  | 279 ms (parallelism 3.2) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
<i>  | 919 ms build modules > 23 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 77 ms (parallelism 5.1) build modules > ./src/app/app.module.ts
     | 83 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
     |  | 64 ms (parallelism 5) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 64 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i> 1181 ms build modules
+ 21 hidden lines

LOG from webpack.ResolverCachePlugin
    4% really resolved (81 real resolves with 81 cached but invalid, 1742 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 2.343491 ms
<t> figure out provided exports: 4.987438 ms
    3% of exports of modules have been determined (10 no declared exports, 9 not cached, 0 flagged uncacheable, 250 from cache, 0 from mem cache, 1 additional calculations due to dependencies)
<t> store provided exports into cache: 0.235148 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 1.076618 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.874543 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.48141 ms
<t> trace exports usage in graph: 5.056583 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.917149 ms
<t> visitModules: visiting: 2.671684 ms
    267 queue items processed (123 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.724101 ms
<t> connectChunkGroups: 0.002878 ms
<t> cleanup: 0.001182 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.048223 ms
<t> modules: 2.297199 ms
<t> queue: 0.005182 ms
<t> maxSize: 0.029172 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.998806 ms
<t> sort relevant modules: 0.116368 ms
<t> find modules to concatenate: 6.023727 ms
<t> sort concat configurations: 0.04746 ms
<t> create concatenated modules: 8.989336 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: main.js: 3431.807121 ms
<t> optimize js assets: 3492.968952 ms
+ 2 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 13.459788 ms
<t> optimize css assets: 13.9732 ms

2023-11-16 13:52:40: webpack 5.89.0 compiled in 9776 ms (8859b7d8181a3374)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Node.js doesn't offer a (nice) way to introspect the ESM dependency graph yet.
    Until a full solution is available webpack uses an experimental ESM tracking based on parsing.
    As best effort webpack parses the ESM files to guess dependencies. But this can lead to expensive and incorrect tracking.
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1081.670401 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 29.01356 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 110 fresh items in cache put into pack 1
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.733013 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 2.150341 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/operators/index.js': 1.515412 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 1.556006 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 2.386016 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 1.148998 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/scheduled|request=|./scheduleIterable': 1.268079 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk666': 1.516824 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.536042 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/a11y.mjs': 1.211775 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|6fbab3001b309b4f|runtime': 11.972298 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 6.120048 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 249.041416 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1138 items, 3 files, 44 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 341.97 kB |                86.11 kB
styles.css          | styles        |  83.35 kB |                 8.15 kB
polyfills.js        | polyfills     |  32.97 kB |                10.63 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 459.19 kB |               105.40 kB

Build at: 2023-11-16T18:52:42.828Z - Hash: 8859b7d8181a3374 - Time: 11834ms
Done in 13.57s.
```
