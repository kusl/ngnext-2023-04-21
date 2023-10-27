Fri Oct 27 11:19:32 AM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       1.2Gi       4.9Gi       262Mi       9.1Gi        13Gi
Swap:          8.0Gi          0B       8.0Gi
System Storage
1.1G	.
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
    

Angular CLI: 16.2.8
Node: 20.9.0 (Unsupported)
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.11
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.8
@angular-devkit/build-angular   16.2.8
@angular-devkit/core            16.2.8
@angular-devkit/schematics      16.2.8
@angular/cdk                    16.2.10
@angular/cli                    16.2.8
@angular/material               16.2.10
@schematics/angular             16.2.8
rxjs                            7.8.0
typescript                      5.0.4
zone.js                         0.13.0
    
Warning: The current version of Node (20.9.0) is not supported by Angular.
Done in 0.57s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.32s.
```
Latest version:     1.0.30001554
Installed version:  1.0.30001554
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001554
Installed version:  1.0.30001554
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1853.499534 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/package.json invalidated because hashes differ (ae96a8119ae2bbc3 != 1527dbca80075aff)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 794.637378 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 4.218353 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 1 (106 KiB) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/app/app.component.ts': 1.584376 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 1 (106 KiB): 16.019484 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (38.7 MiB) because of request to: Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 1.350502 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 1.435426 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 1.1839 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (38.7 MiB): 77.97686 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|/home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle
asset main.js 341 KiB {179} [emitted] (name: main)
asset styles.css 82.2 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 342 KiB = runtime.js 912 bytes main.js 341 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 83.1 KiB = runtime.js 912 bytes styles.css 82.2 KiB
chunk {179} (runtime: runtime) main.js (main) 2.64 MiB [initial]
  cached modules 37.3 KiB [cached] 1 module
  ./src/main.ts + 114 modules [368] 2.61 MiB {179} [built]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial]
  cached modules 104 KiB [cached] 1 module
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 84.2 KiB (css/mini-extract) [initial]
  cached modules 100 bytes (javascript) 84.2 KiB (css/mini-extract) [cached] 4 modules
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry]
  cached modules 2.49 KiB [cached] 4 modules
  

LOG from webpack.FileSystemInfo
    64 new snapshots created
    39% root snapshot uncached (809 / 2066)
    16% children snapshot uncached (366 / 2348)
    1459 entries tested
    File info in cache: 134 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/8) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 74% (405/549) entries shared via 2 shared snapshots (57 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 44% (152/343) entries shared via 9 shared snapshots (25 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 53% (198/371) entries shared via 17 shared snapshots (34 times referenced)
    Managed files snapshot optimization: 64% (172/269) entries shared via 11 shared snapshots (34 times referenced)
    Managed missing snapshot optimization: 79% (351/444) entries shared via 18 shared snapshots (53 times referenced)
+ 2 hidden lines

LOG from webpack.Compiler
<t> make hook: 1377.834148 ms
<t> finish make hook: 0.097433 ms
<t> finish compilation: 32.511756 ms
<t> seal compilation: 719.293221 ms
<t> afterCompile hook: 0.064487 ms
<t> emitAssets: 5.417425 ms
<t> emitRecords: 0.06851 ms
<t> done hook: 100.622035 ms
<t> beginIdle: 0.444592 ms

LOG from webpack.Compilation.ModuleProfile
     | 170 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 171 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 173 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 171 ms (parallelism 5) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 172 ms (parallelism 5) resolve to new modules > ./src/main.ts
    1072 ms resolve to new modules
+ 25 hidden lines

LOG from webpack.Compilation
<t> finish module profiles: 4.413206 ms
<t> compute affected modules: 0.005348 ms
<t> finish modules: 22.752538 ms
<t> report dependency errors and warnings: 5.296055 ms
<t> optimize dependencies: 9.970685 ms
<t> create chunks: 3.99683 ms
<t> compute affected modules with chunk graph: 0.004599 ms
<t> optimize: 30.480878 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 8.974872 ms
    0% code generated (0 generated, 7 from cache)
<t> code generation: 0.593304 ms
<t> runtime requirements.modules: 0.219375 ms
<t> runtime requirements.chunks: 0.14308 ms
<t> runtime requirements.entries: 0.77932 ms
<t> runtime requirements: 1.318197 ms
<t> hashing: initialize hash: 0.004071 ms
<t> hashing: sort chunks: 0.034681 ms
<t> hashing: hash runtime modules: 1.374954 ms
<t> hashing: hash chunks: 0.96632 ms
<t> hashing: hash digest: 0.013125 ms
<t> hashing: process full hash modules: 0.129628 ms
<t> hashing: 2.608902 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.054699 ms
<t> module assets: 0.153542 ms
<t> create chunk assets: 0.786898 ms
<t> process assets: 658.794137 ms

LOG from webpack.ResolverCachePlugin
    3% really resolved (62 real resolves with 62 cached but invalid, 1746 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.948184 ms
<t> figure out provided exports: 4.43179 ms
    2% of exports of modules have been determined (3 no declared exports, 5 not cached, 0 flagged uncacheable, 252 from cache, 0 from mem cache, 0 additional calculations due to dependencies)
<t> store provided exports into cache: 0.006292 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.213047 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.60082 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.412793 ms
<t> trace exports usage in graph: 5.52938 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.72274 ms
<t> visitModules: visiting: 2.740295 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.815053 ms
<t> connectChunkGroups: 0.002513 ms
<t> cleanup: 0.00129 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.064835 ms
<t> modules: 2.177334 ms
<t> queue: 0.004597 ms
<t> maxSize: 0.028857 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.907016 ms
<t> sort relevant modules: 0.128375 ms
<t> find modules to concatenate: 5.351783 ms
<t> sort concat configurations: 0.054407 ms
<t> create concatenated modules: 8.535435 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.075898 ms
+ 1 hidden lines

2023-10-27 11:19:51: webpack 5.88.2 compiled in 3953 ms (d5e7e8d7bcf43ef6)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Node.js doesn't offer a (nice) way to introspect the ESM dependency graph yet.
    Until a full solution is available webpack uses an experimental ESM tracking based on parsing.
    As best effort webpack parses the ESM files to guess dependencies. But this can lead to expensive and incorrect tracking.
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 247.849671 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 3.033037 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 64 fresh items in cache put into pack 3
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/app/app.component.ts': 1.068091 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 31.995787 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1136 items, 4 files, 39 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 341.16 kB |                85.33 kB
styles.css          | styles        |  82.22 kB |                 8.09 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 457.27 kB |               104.62 kB

Build at: 2023-10-27T15:19:52.413Z - Hash: d5e7e8d7bcf43ef6 - Time: 4939ms
Done in 6.61s.
```
Fri Oct 27 11:20:01 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.177
info New version: 0.0.178
Done in 0.12s.
