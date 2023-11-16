Thu Nov 16 07:55:36 AM EST 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.9Gi       2.1Gi       430Mi        10Gi        11Gi
Swap:          8.0Gi       128Mi       7.9Gi
System Storage
788M	.
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
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1991.9037560000002 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/package.json invalidated because hashes differ (526b031a4884cfd6 != b4d201791bf2cd31)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 974.172666 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 6.785078 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 1 (99.1 KiB) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/app/app.component.ts': 1.658762 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 1 (99.1 KiB): 17.381192 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (40.6 MiB) because of request to: Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 1.069469 ms
<i> [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 6.744474 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (40.6 MiB): 82.220982 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|/home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle
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
    16% children snapshot uncached (368 / 2349)
    1469 entries tested
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
<t> make hook: 1582.566719 ms
<t> finish make hook: 0.15047 ms
<t> finish compilation: 29.504431 ms
<t> seal compilation: 720.096772 ms
<t> afterCompile hook: 0.067734 ms
<t> emitAssets: 3.704503 ms
<t> emitRecords: 0.070468 ms
<t> done hook: 109.196495 ms
<t> beginIdle: 0.334123 ms

LOG from webpack.Compilation.ModuleProfile
<i>  | 208 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
<i>  | 208 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 209 ms (parallelism 5) resolve to new modules > ./src/main.ts
<i>  | 210 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
<i>  | 209 ms (parallelism 5) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 30 ms (parallelism 10.3) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
<i> 1290 ms resolve to new modules
+ 24 hidden lines

LOG from webpack.Compilation
<t> finish module profiles: 3.939539 ms
<t> compute affected modules: 0.005524 ms
<t> finish modules: 19.859718 ms
<t> report dependency errors and warnings: 5.663732 ms
<t> optimize dependencies: 10.001698 ms
<t> create chunks: 3.517451 ms
<t> compute affected modules with chunk graph: 0.002507 ms
<t> optimize: 34.093118 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 9.270694 ms
    0% code generated (0 generated, 7 from cache)
<t> code generation: 0.607469 ms
<t> runtime requirements.modules: 0.214091 ms
<t> runtime requirements.chunks: 0.141731 ms
<t> runtime requirements.entries: 0.870109 ms
<t> runtime requirements: 1.399112 ms
<t> hashing: initialize hash: 0.004473 ms
<t> hashing: sort chunks: 0.035143 ms
<t> hashing: hash runtime modules: 1.426467 ms
<t> hashing: hash chunks: 0.95441 ms
<t> hashing: hash digest: 0.012498 ms
<t> hashing: process full hash modules: 0.170363 ms
<t> hashing: 2.682899 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.050664 ms
<t> module assets: 0.190467 ms
<t> create chunk assets: 0.803683 ms
<t> process assets: 655.861414 ms

LOG from webpack.ResolverCachePlugin
    3% really resolved (62 real resolves with 62 cached but invalid, 1752 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 2.485166 ms
<t> figure out provided exports: 4.909537 ms
    2% of exports of modules have been determined (3 no declared exports, 6 not cached, 0 flagged uncacheable, 252 from cache, 0 from mem cache, 1 additional calculations due to dependencies)
<t> store provided exports into cache: 0.007 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.209055 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.995644 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.486695 ms
<t> trace exports usage in graph: 5.116164 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.814183 ms
<t> visitModules: visiting: 2.559134 ms
    267 queue items processed (123 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.636173 ms
<t> connectChunkGroups: 0.002475 ms
<t> cleanup: 0.001109 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.035895 ms
<t> modules: 2.316182 ms
<t> queue: 0.00392 ms
<t> maxSize: 0.030664 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.006265 ms
<t> sort relevant modules: 0.127302 ms
<t> find modules to concatenate: 10.87402 ms
<t> sort concat configurations: 0.029417 ms
<t> create concatenated modules: 8.570672 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.075612 ms
+ 1 hidden lines

2023-11-16 07:56:03: webpack 5.89.0 compiled in 4296 ms (7f53218b07d7c901)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Node.js doesn't offer a (nice) way to introspect the ESM dependency graph yet.
    Until a full solution is available webpack uses an experimental ESM tracking based on parsing.
    As best effort webpack parses the ESM files to guess dependencies. But this can lead to expensive and incorrect tracking.
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 249.092273 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 3.583236 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 64 fresh items in cache put into pack 3
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/app/app.component.ts': 1.044601 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 35.842738 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1138 items, 4 files, 41 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 341.97 kB |                86.11 kB
styles.css          | styles        |  83.31 kB |                 8.13 kB
polyfills.js        | polyfills     |  32.97 kB |                10.63 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 459.15 kB |               105.39 kB

Build at: 2023-11-16T12:56:04.325Z - Hash: 7f53218b07d7c901 - Time: 5088ms
Done in 6.77s.
```
Thu Nov 16 07:56:13 AM EST 2023
yarn version v1.22.21
info Current version: 0.0.228
info New version: 0.0.229
Done in 0.12s.
