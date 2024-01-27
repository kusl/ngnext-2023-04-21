Sat Jan 27 04:40:20 PM EST 2024

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       6.5Gi       1.2Gi       1.1Gi       9.0Gi       8.8Gi
Swap:          8.0Gi       551Mi       7.5Gi
System Storage
1.3G	.
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
    

Angular CLI: 17.1.1
Node: 20.11.0
Package Manager: yarn 1.22.21
OS: linux x64

Angular: 17.1.1
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1701.1
@angular-devkit/build-angular   17.1.1
@angular-devkit/core            17.1.1
@angular-devkit/schematics      17.1.1
@schematics/angular             17.1.1
rxjs                            7.8.0
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.53s.
yarn install v1.22.21
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.33s.
```
```bash
Latest version:     1.0.30001580
Installed version:  1.0.30001580
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.21
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1868.7709519999999 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/package.json invalidated because hashes differ (9b69f7a8af29d0ce != c87590843312b512)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 1122.845301 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 4.057424 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 3 (145 bytes) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 5 (99.3 KiB) because of request to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 3 (145 bytes): 0.60784 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/app/app.component.ts': 1.662959 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 5 (99.3 KiB): 14.696305 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (4.72 MiB) because of request to: Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 1 (38.8 MiB) because of request to: Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.280882 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 1.836796 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/operators/index.js': 1.036558 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 1.713199 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 1.514457 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (4.72 MiB): 96.33849 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 1 (38.8 MiB): 115.244856 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|/home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Pack 5 got empty and is removed
asset main.js 345 KiB {179} [emitted] (name: main)
asset styles.css 76.1 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 346 KiB = runtime.js 912 bytes main.js 345 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 77 KiB = runtime.js 912 bytes styles.css 76.1 KiB
chunk {179} (runtime: runtime) main.js (main) 2.81 MiB [initial]
  cached modules 29.9 KiB [cached] 1 module
  ./src/main.ts + 113 modules [596] 2.78 MiB {179} [built]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial]
  cached modules 104 KiB [cached] 1 module
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 78.4 KiB (css/mini-extract) [initial]
  cached modules 100 bytes (javascript) 78.4 KiB (css/mini-extract) [cached] 4 modules
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry]
  cached modules 2.49 KiB [cached] 4 modules
  

LOG from webpack.FileSystemInfo
    64 new snapshots created
    39% root snapshot uncached (810 / 2063)
    16% children snapshot uncached (370 / 2346)
    1459 entries tested
    File info in cache: 130 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/8) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 74% (405/549) entries shared via 2 shared snapshots (57 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 46% (158/343) entries shared via 9 shared snapshots (26 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 56% (208/371) entries shared via 18 shared snapshots (36 times referenced)
    Managed files snapshot optimization: 62% (168/269) entries shared via 10 shared snapshots (34 times referenced)
    Managed missing snapshot optimization: 78% (347/444) entries shared via 18 shared snapshots (53 times referenced)
+ 2 hidden lines

LOG from webpack.Compiler
<t> make hook: 1716.2407680000001 ms
<t> finish make hook: 0.137563 ms
<t> finish compilation: 28.455741 ms
<t> seal compilation: 706.932599 ms
<t> afterCompile hook: 0.060157 ms
<t> emitAssets: 4.140155 ms
<t> emitRecords: 0.096864 ms
<t> done hook: 144.670665 ms
<t> beginIdle: 0.403331 ms

LOG from webpack.Compilation.ModuleProfile
<i>  | 237 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
<i>  | 239 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
<i>  | 238 ms (parallelism 5) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
<i>  | 238 ms (parallelism 5) resolve to new modules > ./src/main.ts
<i>  | 237 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i> 1390 ms resolve to new modules
+ 24 hidden lines

LOG from webpack.Compilation
<t> finish module profiles: 4.033131 ms
<t> compute affected modules: 0.004556 ms
<t> finish modules: 19.896941 ms
<t> report dependency errors and warnings: 4.471407 ms
<t> optimize dependencies: 9.757326 ms
<t> create chunks: 3.366375 ms
<t> compute affected modules with chunk graph: 0.005796 ms
<t> optimize: 26.866116 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 8.604427 ms
    0% code generated (0 generated, 7 from cache)
<t> code generation: 0.442876 ms
<t> runtime requirements.modules: 0.174725 ms
<t> runtime requirements.chunks: 0.140754 ms
<t> runtime requirements.entries: 0.832379 ms
<t> runtime requirements: 1.340999 ms
<t> hashing: initialize hash: 0.022762 ms
<t> hashing: sort chunks: 0.04421 ms
<t> hashing: hash runtime modules: 1.481174 ms
<t> hashing: hash chunks: 0.946424 ms
<t> hashing: hash digest: 0.013715 ms
<t> hashing: process full hash modules: 0.179003 ms
<t> hashing: 2.780451 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.068028 ms
<t> module assets: 0.132625 ms
<t> create chunk assets: 0.841059 ms
<t> process assets: 651.250697 ms

LOG from webpack.ResolverCachePlugin
    3% really resolved (62 real resolves with 62 cached but invalid, 1742 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 2.56267 ms
<t> figure out provided exports: 5.328206 ms
    2% of exports of modules have been determined (3 no declared exports, 6 not cached, 0 flagged uncacheable, 252 from cache, 0 from mem cache, 1 additional calculations due to dependencies)
<t> store provided exports into cache: 0.008006 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.232529 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.041759 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.515511 ms
<t> trace exports usage in graph: 4.852109 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.617932 ms
<t> visitModules: visiting: 2.392141 ms
    268 queue items processed (121 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.444277 ms
<t> connectChunkGroups: 0.003094 ms
<t> cleanup: 0.001511 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.040313 ms
<t> modules: 2.318485 ms
<t> queue: 0.004398 ms
<t> maxSize: 0.0298 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 3.974696 ms
<t> sort relevant modules: 0.177556 ms
<t> find modules to concatenate: 5.22768 ms
<t> sort concat configurations: 0.047745 ms
<t> create concatenated modules: 5.266566 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.082376 ms
+ 1 hidden lines

2024-01-27 16:40:42: webpack 5.89.0 compiled in 4287 ms (6c975bb1b345592f)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Node.js doesn't offer a (nice) way to introspect the ESM dependency graph yet.
    Until a full solution is available webpack uses an experimental ESM tracking based on parsing.
    As best effort webpack parses the ESM files to guess dependencies. But this can lead to expensive and incorrect tracking.
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 288.414805 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 5.228666 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 64 fresh items in cache put into pack 5
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/app/app.component.ts': 2.248991 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 68.443514 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1138 items, 7 files, 44 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 345.08 kB |                86.60 kB
styles.css          | styles        |  76.13 kB |                 7.23 kB
polyfills.js        | polyfills     |  32.97 kB |                10.63 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 455.07 kB |               104.98 kB

Build at: 2024-01-27T21:40:43.923Z - Hash: 6c975bb1b345592f - Time: 5465ms
Done in 7.16s.
```
