Fri Jul 21 11:07:12 AM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.2Gi       3.8Gi       348Mi       9.3Gi        12Gi
Swap:          8.0Gi       1.0Mi       8.0Gi
System Storage
751M	.
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
    

Angular CLI: 16.1.5
Node: 18.17.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.1.6
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1601.5
@angular-devkit/build-angular   16.1.5
@angular-devkit/core            16.1.5
@angular-devkit/schematics      16.1.5
@angular/cdk                    16.1.5
@angular/cli                    16.1.5
@angular/material               16.1.5
@schematics/angular             16.1.5
rxjs                            7.8.0
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.56s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.37s.
```
Latest version:     1.0.30001517
Installed version:  1.0.30001517
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001517
Installed version:  1.0.30001517
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 2083.239812 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/package.json invalidated because hashes differ (7327ca2a2ccd4b88 != 177963155e0df8ff)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 619.781137 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 4.282042 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 1 (105 KiB) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/app/app.component.ts': 3.032203 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 1 (105 KiB): 30.555704 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (37.8 MiB) because of request to: Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.084439 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 1.085445 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 1.026721 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (37.8 MiB): 86.533671 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
asset main.js 337 KiB {179} [emitted] (name: main)
asset styles.css 100 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 338 KiB = runtime.js 912 bytes main.js 337 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 101 KiB = runtime.js 912 bytes styles.css 100 KiB
chunk {179} (runtime: runtime) main.js (main) 2.57 MiB [initial]
  cached modules 38 KiB [cached] 1 module
  ./src/main.ts + 114 modules [368] 2.54 MiB {179} [built]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial]
  cached modules 104 KiB [cached] 1 module
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 104 KiB (css/mini-extract) [initial]
  cached modules 100 bytes (javascript) 104 KiB (css/mini-extract) [cached] 4 modules
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
    Missing items snapshot optimization: 45% (154/343) entries shared via 8 shared snapshots (23 times referenced)
    Managed items info in cache: 78 items
    Managed items snapshot optimization: 54% (200/369) entries shared via 18 shared snapshots (34 times referenced)
    Managed files snapshot optimization: 65% (172/266) entries shared via 11 shared snapshots (34 times referenced)
    Managed missing snapshot optimization: 79% (351/444) entries shared via 17 shared snapshots (53 times referenced)
+ 2 hidden lines

LOG from webpack.Compiler
<t> make hook: 1241.705615 ms
<t> finish make hook: 0.265758 ms
<t> finish compilation: 34.505787 ms
<t> seal compilation: 724.605065 ms
<t> afterCompile hook: 0.064226 ms
<t> emitAssets: 4.054464 ms
<t> emitRecords: 0.058149 ms
<t> done hook: 123.265821 ms
<t> beginIdle: 0.47763 ms

LOG from webpack.Compilation.ModuleProfile
     | 140 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 140 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 143 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 142 ms (parallelism 5) resolve to new modules > ./src/main.ts
     | 142 ms (parallelism 5) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
    946 ms resolve to new modules
+ 25 hidden lines

LOG from webpack.Compilation
<t> finish module profiles: 7.555379 ms
<t> compute affected modules: 0.005957 ms
<t> finish modules: 22.775019 ms
<t> report dependency errors and warnings: 4.125305 ms
<t> optimize dependencies: 9.131939 ms
<t> create chunks: 3.088408 ms
<t> compute affected modules with chunk graph: 0.0051 ms
<t> optimize: 25.755792 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 8.313804 ms
    0% code generated (0 generated, 7 from cache)
<t> code generation: 0.582792 ms
<t> runtime requirements.modules: 0.194477 ms
<t> runtime requirements.chunks: 0.151476 ms
<t> runtime requirements.entries: 0.782441 ms
<t> runtime requirements: 1.305532 ms
<t> hashing: initialize hash: 0.004451 ms
<t> hashing: sort chunks: 0.047556 ms
<t> hashing: hash runtime modules: 1.387902 ms
<t> hashing: hash chunks: 0.987749 ms
<t> hashing: hash digest: 0.012684 ms
<t> hashing: process full hash modules: 0.136377 ms
<t> hashing: 2.663943 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.05323 ms
<t> module assets: 0.156552 ms
<t> create chunk assets: 0.840095 ms
<t> process assets: 670.789225 ms

LOG from webpack.ResolverCachePlugin
    3% really resolved (62 real resolves with 62 cached but invalid, 1760 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 6.362882 ms
<t> figure out provided exports: 4.694617 ms
    2% of exports of modules have been determined (3 no declared exports, 5 not cached, 0 flagged uncacheable, 252 from cache, 0 from mem cache, 0 additional calculations due to dependencies)
<t> store provided exports into cache: 0.00628 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.217754 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.767359 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.421732 ms
<t> trace exports usage in graph: 4.644228 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.467857 ms
<t> visitModules: visiting: 2.207349 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.259544 ms
<t> connectChunkGroups: 0.002493 ms
<t> cleanup: 0.001187 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.034911 ms
<t> modules: 2.248395 ms
<t> queue: 0.003989 ms
<t> maxSize: 0.03053 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.936338 ms
<t> sort relevant modules: 0.132792 ms
<t> find modules to concatenate: 5.167888 ms
<t> sort concat configurations: 0.034472 ms
<t> create concatenated modules: 4.928103 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.12595 ms
+ 1 hidden lines

2023-07-21 11:07:34: webpack 5.86.0 compiled in 4057 ms (d0a3c247e1b99d24)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Node.js doesn't offer a (nice) way to introspect the ESM dependency graph yet.
    Until a full solution is available webpack uses an experimental ESM tracking based on parsing.
    As best effort webpack parses the ESM files to guess dependencies. But this can lead to expensive and incorrect tracking.
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 261.411489 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 5.076991 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 64 fresh items in cache put into pack 3
<t> [webpack.cache.PackFileCacheStrategy] store pack: 30.809394 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1136 items, 4 files, 38 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 336.82 kB |                84.63 kB
styles.css          | styles        | 100.03 kB |                 9.18 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 470.75 kB |               105.01 kB

Build at: 2023-07-21T15:07:35.116Z - Hash: d0a3c247e1b99d24 - Time: 5104ms
Done in 6.88s.
```
Fri Jul 21 11:07:44 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.82
info New version: 0.0.83
Done in 0.12s.
