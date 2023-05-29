Mon May 29 07:01:27 AM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       4.1Gi       1.7Gi       893Mi       9.4Gi         9Gi
Swap:          8.0Gi       1.0Gi       7.0Gi
System Storage
691M	.
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
    

Angular CLI: 16.0.3
Node: 18.16.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.0.3
... animations, cli, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1600.3
@angular-devkit/build-angular   16.0.3
@angular-devkit/core            16.0.3
@angular-devkit/schematics      16.0.3
@angular/cdk                    16.0.2
@angular/material               16.0.2
@schematics/angular             16.0.3
rxjs                            7.8.0
typescript                      5.0.4
    
Done in 0.59s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.39s.
```
Latest version:     1.0.30001489
Installed version:  1.0.30001489
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001489
Installed version:  1.0.30001489
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 2125.882958 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/package.json invalidated because hashes differ (82afdcc65d292de3 != 6fa6d433377fb992)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 563.659668 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 4.219411 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 1 (101 KiB) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/app/app.component.ts': 1.825291 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 1 (101 KiB): 18.181462 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (37.8 MiB) because of request to: Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.644351 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 1.191301 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.218127 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 1.67264 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (37.8 MiB): 89.032642 ms
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
chunk {179} (runtime: runtime) main.js (main) 2.57 MiB [initial]
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
    16% children snapshot uncached (367 / 2346)
    1463 entries tested
    File info in cache: 124 timestamps 22 hashes 22 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/8) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 76% (407/539) entries shared via 3 shared snapshots (56 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 43% (142/328) entries shared via 7 shared snapshots (22 times referenced)
    Managed items info in cache: 77 items
    Managed items snapshot optimization: 54% (200/367) entries shared via 18 shared snapshots (34 times referenced)
    Managed files snapshot optimization: 67% (172/258) entries shared via 11 shared snapshots (34 times referenced)
    Managed missing snapshot optimization: 79% (351/442) entries shared via 17 shared snapshots (53 times referenced)
+ 2 hidden lines

LOG from webpack.Compiler
<t> make hook: 1216.361291 ms
<t> finish make hook: 0.103646 ms
<t> finish compilation: 31.572679 ms
<t> seal compilation: 738.351708 ms
<t> afterCompile hook: 0.07912 ms
<t> emitAssets: 4.509155 ms
<t> emitRecords: 0.070601 ms
<t> done hook: 132.15086 ms
<t> beginIdle: 0.422215 ms

LOG from webpack.Compilation.ModuleProfile
     | 125 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 125 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 128 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 127 ms (parallelism 5) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 127 ms (parallelism 5) resolve to new modules > ./src/main.ts
     | 32 ms (parallelism 9.7) resolve to new modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     | 32 ms (parallelism 9.7) resolve to new modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     | 32 ms (parallelism 9.7) resolve to new modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     | 34 ms (parallelism 9.4) resolve to new modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     | 34 ms (parallelism 9.4) resolve to new modules > ./node_modules/@angular/core/fesm2022/core.mjs
     | 34 ms (parallelism 10.2) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
    903 ms resolve to new modules
+ 18 hidden lines

LOG from webpack.Compilation
<t> finish module profiles: 4.517572 ms
<t> compute affected modules: 0.005633 ms
<t> finish modules: 22.690322 ms
<t> report dependency errors and warnings: 4.315743 ms
<t> optimize dependencies: 9.826759 ms
<t> create chunks: 3.254996 ms
<t> compute affected modules with chunk graph: 0.003172 ms
<t> optimize: 26.246735 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 8.593277 ms
    0% code generated (0 generated, 7 from cache)
<t> code generation: 0.664724 ms
<t> runtime requirements.modules: 0.188203 ms
<t> runtime requirements.chunks: 0.187796 ms
<t> runtime requirements.entries: 0.770642 ms
<t> runtime requirements: 1.310608 ms
<t> hashing: initialize hash: 0.004639 ms
<t> hashing: sort chunks: 0.043841 ms
<t> hashing: hash runtime modules: 1.380604 ms
<t> hashing: hash chunks: 1.066105 ms
<t> hashing: hash digest: 0.013597 ms
<t> hashing: process full hash modules: 0.129532 ms
<t> hashing: 2.768496 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.056772 ms
<t> module assets: 0.148454 ms
<t> create chunk assets: 0.849084 ms
<t> process assets: 683.01086 ms

LOG from webpack.ResolverCachePlugin
    3% really resolved (61 real resolves with 61 cached but invalid, 1756 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 2.040049 ms
<t> figure out provided exports: 9.040999 ms
    2% of exports of modules have been determined (3 no declared exports, 5 not cached, 0 flagged uncacheable, 251 from cache, 0 from mem cache, 0 additional calculations due to dependencies)
<t> store provided exports into cache: 0.008736 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.216701 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.093776 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.515724 ms
<t> trace exports usage in graph: 4.829318 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.524443 ms
<t> visitModules: visiting: 2.303069 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.354421 ms
<t> connectChunkGroups: 0.002754 ms
<t> cleanup: 0.001141 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.03529 ms
<t> modules: 2.395726 ms
<t> queue: 0.004234 ms
<t> maxSize: 0.061825 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.049097 ms
<t> sort relevant modules: 0.13339 ms
<t> find modules to concatenate: 5.402596 ms
<t> sort concat configurations: 0.077406 ms
<t> create concatenated modules: 5.411744 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.130096 ms
+ 1 hidden lines

2023-05-29 07:01:55: webpack 5.80.0 compiled in 4083 ms (82154d871cf13960)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Node.js doesn't offer a (nice) way to introspect the ESM dependency graph yet.
    Until a full solution is available webpack uses an experimental ESM tracking based on parsing.
    As best effort webpack parses the ESM files to guess dependencies. But this can lead to expensive and incorrect tracking.
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 295.85878 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 5.159709 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 63 fresh items in cache put into pack 3
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/app/app.component.ts': 1.035112 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 30.325653 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1133 items, 4 files, 38 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 337.19 kB |                84.76 kB
styles.css          | styles        | 105.81 kB |                 9.54 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 476.89 kB |               105.49 kB

Build at: 2023-05-29T11:01:56.300Z - Hash: 82154d871cf13960 - Time: 5196ms
Done in 7.20s.
```
Mon May 29 07:02:05 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.49
info New version: 0.0.50
Done in 0.14s.
