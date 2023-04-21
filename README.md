Fri Apr 21 03:23:48 PM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.4Gi       3.8Gi       531Mi       8.1Gi        11Gi
Swap:          8.0Gi       1.1Gi       6.9Gi
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
    
Done in 0.60s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.37s.
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
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1773.37437 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/package.json invalidated because hashes differ (a553e794e016853e != 825ec6d7ee72a1a5)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 349.454298 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 3.986353 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 1 (145 bytes) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 3 (92.5 KiB) because of request to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 1 (145 bytes): 0.665147 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/app/app.component.ts': 1.816365 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 3 (92.5 KiB): 16.847684 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (37.3 MiB) because of request to: Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/localize/fesm2022/init.mjs
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.189556 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 1.050552 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 1.772002 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (37.3 MiB): 94.600536 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
    [webpack.cache.PackFileCacheStrategy] Pack 3 got empty and is removed
    [webpack.cache.PackFileCacheStrategy] Pack 1 got empty and is removed
asset main.js 319 KiB {179} [emitted] (name: main)
asset styles.css 104 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 320 KiB = runtime.js 912 bytes main.js 319 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 105 KiB = runtime.js 912 bytes styles.css 104 KiB
chunk {179} (runtime: runtime) main.js (main) 2.56 MiB [initial] [rendered]
  cached modules 38 KiB [cached] 1 module
  ./src/main.ts + 113 modules [981] 2.52 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial]
  cached modules 104 KiB [cached] 1 module
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 114 KiB (css/mini-extract) [initial]
  cached modules 100 bytes (javascript) 114 KiB (css/mini-extract) [cached] 4 modules
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry]
  cached modules 2.49 KiB [cached] 4 modules
  

LOG from webpack.FileSystemInfo
    58 new snapshots created
    39% root snapshot uncached (797 / 2058)
    16% children snapshot uncached (363 / 2340)
    1413 entries tested
    File info in cache: 111 timestamps 19 hashes 19 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/9) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 76% (362/475) entries shared via 2 shared snapshots (49 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 39% (104/268) entries shared via 5 shared snapshots (16 times referenced)
    Managed items info in cache: 78 items
    Managed items snapshot optimization: 53% (186/350) entries shared via 13 shared snapshots (35 times referenced)
    Managed files snapshot optimization: 62% (156/251) entries shared via 11 shared snapshots (30 times referenced)
    Managed missing snapshot optimization: 77% (318/414) entries shared via 19 shared snapshots (46 times referenced)
+ 3 hidden lines

LOG from webpack.Compiler
<t> make hook: 1323.460531 ms
<t> finish make hook: 0.149584 ms
<t> finish compilation: 32.3483 ms
<t> seal compilation: 8589.458676 ms
<t> afterCompile hook: 0.134216 ms
<t> emitAssets: 4.05905 ms
<t> emitRecords: 0.065777 ms
<t> done hook: 116.97321 ms
<t> beginIdle: 0.39986 ms

LOG from webpack.Compilation.ModuleProfile
     | 82 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 82 ms (parallelism 5) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 82 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 82 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 83 ms (parallelism 5) resolve to new modules > ./src/main.ts
     | 45 ms (parallelism 2) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 84 ms (parallelism 3) resolve to new modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     | 84 ms (parallelism 3.1) resolve to new modules > ./node_modules/@angular/core/fesm2022/core.mjs
    680 ms resolve to new modules
     |  | 180 ms (parallelism 1.4) build modules > ./src/main.ts
     |  | 84 ms (parallelism 3) build modules > ./src/app/app.module.ts
     | 268 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
    284 ms build modules
+ 17 hidden lines

LOG from webpack.Compilation
<t> finish module profiles: 6.507011 ms
<t> compute affected modules: 0.005078 ms
<t> finish modules: 20.433509 ms
<t> report dependency errors and warnings: 5.360415 ms
<t> optimize dependencies: 10.805866 ms
<t> create chunks: 3.464912 ms
<t> compute affected modules with chunk graph: 0.004159 ms
<t> optimize: 31.915706 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 18.968442 ms
    14% code generated (1 generated, 6 from cache)
<t> code generation: 646.677027 ms
<t> runtime requirements.modules: 0.117445 ms
<t> runtime requirements.chunks: 0.382356 ms
<t> runtime requirements.entries: 0.98965 ms
<t> runtime requirements: 1.883834 ms
<t> hashing: initialize hash: 0.008221 ms
<t> hashing: sort chunks: 0.058748 ms
<t> hashing: hash runtime modules: 1.733116 ms
<t> hashing: hash chunks: 1.356903 ms
<t> hashing: hash digest: 0.048792 ms
<t> hashing: process full hash modules: 0.236783 ms
<t> hashing: 3.56885 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.066091 ms
<t> module assets: 0.174039 ms
<t> create chunk assets: 2.534262 ms
<t> process assets: 7867.493686 ms

LOG from webpack.ResolverCachePlugin
    3% really resolved (54 real resolves with 53 cached but invalid, 1750 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 3.830193 ms
<t> figure out provided exports: 7.725619 ms
    3% of exports of modules have been determined (3 no declared exports, 8 not cached, 0 flagged uncacheable, 247 from cache, 0 from mem cache, 0 additional calculations due to dependencies)
<t> store provided exports into cache: 0.20931 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.377473 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.610732 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.502376 ms
<t> trace exports usage in graph: 5.352883 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.613403 ms
<t> visitModules: visiting: 2.468934 ms
    265 queue items processed (121 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.532693 ms
<t> connectChunkGroups: 0.002438 ms
<t> cleanup: 0.001236 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.09151 ms
<t> modules: 2.706089 ms
<t> queue: 0.004661 ms
<t> maxSize: 0.030905 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.100301 ms
<t> sort relevant modules: 0.135278 ms
<t> find modules to concatenate: 11.213508 ms
<t> sort concat configurations: 0.069863 ms
<t> create concatenated modules: 6.318366 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: main.js: 7157.602212 ms
<t> optimize js assets: 7279.808181 ms
+ 2 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.645625 ms
+ 1 hidden lines

2023-04-21 15:24:31: webpack 5.79.0 compiled in 11697 ms (4e1f8434694c4244)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Node.js doesn't offer a (nice) way to introspect the ESM dependency graph yet.
    Until a full solution is available webpack uses an experimental ESM tracking based on parsing.
    As best effort webpack parses the ESM files to guess dependencies. But this can lead to expensive and incorrect tracking.
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 548.090329 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 18.243658 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 68 fresh items in cache put into pack 1
    [webpack.cache.PackFileCacheStrategy] Split pack 0 into pack 0 with 1020 used items and pack 3 with 1 unused items
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|085ffbd49c3ad3c3|runtime': 12.260892 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 5.758222 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 1.089228 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/operators/index.js': 1.051981 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/ReplaySubject.js': 1.184087 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.126558 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 1.466243 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/util/isObservable.js': 1.429607 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm|request=|./internal/operators/throttleTime': 2.766138 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 285.86769 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1116 items, 4 files, 54 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 318.97 kB |                81.02 kB
styles.css          | styles        | 104.38 kB |                 9.48 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 457.24 kB |               101.70 kB

Build at: 2023-04-21T19:24:33.161Z - Hash: 4e1f8434694c4244 - Time: 13431ms
Done in 15.18s.
```
Fri Apr 21 03:24:43 PM EDT 2023
yarn version v1.22.19
info Current version: 0.0.8
info New version: 0.0.9
Done in 0.12s.
