Tue May 23 06:57:06 AM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       1.9Gi       3.6Gi       583Mi       9.8Gi        12Gi
Swap:          8.0Gi       533Mi       7.5Gi
System Storage
904M	.
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
    

Angular CLI: 16.0.2
Node: 18.16.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.0.2
... animations, cli, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1600.2
@angular-devkit/build-angular   16.0.2
@angular-devkit/core            16.0.2
@angular-devkit/schematics      16.0.2
@angular/cdk                    16.0.1
@angular/material               16.0.1
@schematics/angular             16.0.2
rxjs                            7.8.0
typescript                      5.0.4
    
Done in 0.52s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.34s.
```
{"type":"error","data":"Received invalid response from npm."}
undefined:1


SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getLatestInfo (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/update-browserslist-db/index.js:62:19)
    at updateDB (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/update-browserslist-db/index.js:267:16)
    at Object.<anonymous> (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/browserslist/cli.js:42:3)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Module._load (node:internal/modules/cjs/loader:958:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47

Node.js v18.16.0
```bash
{"type":"error","data":"Received invalid response from npm."}
undefined:1


SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getLatestInfo (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/update-browserslist-db/index.js:62:19)
    at updateDB (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/update-browserslist-db/index.js:267:16)
    at Object.<anonymous> (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/browserslist/cli.js:42:3)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Module._load (node:internal/modules/cjs/loader:958:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47

Node.js v18.16.0
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1828.565407 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/package.json invalidated because hashes differ (27d2fa099caca004 != 46595f6b1cb42ce0)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 489.433488 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 4.182226 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 1 (101 KiB) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/app/app.component.ts': 1.578728 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 1 (101 KiB): 8.154964 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (37.8 MiB) because of request to: Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.029081 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 1.071352 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (37.8 MiB): 68.527128 ms
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
chunk {179} (runtime: runtime) main.js (main) 2.56 MiB [initial]
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
    39% root snapshot uncached (807 / 2076)
    16% children snapshot uncached (365 / 2344)
    1463 entries tested
    File info in cache: 124 timestamps 22 hashes 22 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/8) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 76% (407/539) entries shared via 3 shared snapshots (56 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 40% (132/328) entries shared via 6 shared snapshots (21 times referenced)
    Managed items info in cache: 77 items
    Managed items snapshot optimization: 51% (188/367) entries shared via 17 shared snapshots (33 times referenced)
    Managed files snapshot optimization: 67% (172/258) entries shared via 11 shared snapshots (34 times referenced)
    Managed missing snapshot optimization: 79% (351/442) entries shared via 17 shared snapshots (53 times referenced)
+ 2 hidden lines

LOG from webpack.Compiler
<t> make hook: 1034.354296 ms
<t> finish make hook: 0.27079 ms
<t> finish compilation: 41.378213 ms
<t> seal compilation: 653.676226 ms
<t> afterCompile hook: 0.063476 ms
<t> emitAssets: 3.881498 ms
<t> emitRecords: 0.057032 ms
<t> done hook: 110.184808 ms
<t> beginIdle: 0.464423 ms

LOG from webpack.Compilation.ModuleProfile
     | 108 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 108 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 110 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 109 ms (parallelism 5) resolve to new modules > ./src/main.ts
     | 109 ms (parallelism 5) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
    767 ms resolve to new modules
+ 25 hidden lines

LOG from webpack.Compilation
<t> finish module profiles: 7.176763 ms
<t> compute affected modules: 0.005662 ms
<t> finish modules: 30.140381 ms
<t> report dependency errors and warnings: 4.011984 ms
<t> optimize dependencies: 8.739308 ms
<t> create chunks: 3.2333 ms
<t> compute affected modules with chunk graph: 0.002775 ms
<t> optimize: 24.962615 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 8.730958 ms
    0% code generated (0 generated, 7 from cache)
<t> code generation: 0.696562 ms
<t> runtime requirements.modules: 0.195692 ms
<t> runtime requirements.chunks: 0.140429 ms
<t> runtime requirements.entries: 0.824082 ms
<t> runtime requirements: 1.336866 ms
<t> hashing: initialize hash: 0.004329 ms
<t> hashing: sort chunks: 0.036752 ms
<t> hashing: hash runtime modules: 1.39234 ms
<t> hashing: hash chunks: 1.051002 ms
<t> hashing: hash digest: 0.012591 ms
<t> hashing: process full hash modules: 0.128696 ms
<t> hashing: 2.715208 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.052013 ms
<t> module assets: 0.162633 ms
<t> create chunk assets: 0.837135 ms
<t> process assets: 600.775563 ms

LOG from webpack.ResolverCachePlugin
    3% really resolved (61 real resolves with 61 cached but invalid, 1758 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 3.366859 ms
<t> figure out provided exports: 10.434887 ms
    2% of exports of modules have been determined (3 no declared exports, 5 not cached, 0 flagged uncacheable, 251 from cache, 0 from mem cache, 0 additional calculations due to dependencies)
<t> store provided exports into cache: 0.006869 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.219733 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.603478 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.432657 ms
<t> trace exports usage in graph: 4.385206 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.569221 ms
<t> visitModules: visiting: 2.375379 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.426056 ms
<t> connectChunkGroups: 0.002367 ms
<t> cleanup: 0.001188 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.027225 ms
<t> modules: 2.187741 ms
<t> queue: 0.004119 ms
<t> maxSize: 0.030005 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.922466 ms
<t> sort relevant modules: 0.131701 ms
<t> find modules to concatenate: 5.207131 ms
<t> sort concat configurations: 0.035435 ms
<t> create concatenated modules: 5.166422 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.127027 ms
+ 1 hidden lines

2023-05-23 07:51:04: webpack 5.80.0 compiled in 3534 ms (7ad18629f94ab92a)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Node.js doesn't offer a (nice) way to introspect the ESM dependency graph yet.
    Until a full solution is available webpack uses an experimental ESM tracking based on parsing.
    As best effort webpack parses the ESM files to guess dependencies. But this can lead to expensive and incorrect tracking.
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 288.437602 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 4.9782 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 63 fresh items in cache put into pack 3
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/app/app.component.ts': 1.108904 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 30.567655 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1133 items, 4 files, 38 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✖ Index html generation failed.
Inlining of fonts failed. An error has occurred while retrieving https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap over the internet.
getaddrinfo EAI_AGAIN fonts.googleapis.com
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
Tue May 23 07:51:11 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.39
info New version: 0.0.40
Done in 0.12s.
