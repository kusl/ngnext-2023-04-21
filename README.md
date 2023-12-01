Fri Dec  1 05:21:11 PM EST 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.6Gi       2.6Gi       312Mi        10Gi        12Gi
Swap:          8.0Gi       380Ki       8.0Gi
System Storage
799M	.
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
    

Angular CLI: 17.0.5
Node: 20.10.0
Package Manager: yarn 1.22.21
OS: linux x64

Angular: 17.0.5
... animations, cli, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1700.5
@angular-devkit/build-angular   17.0.5
@angular-devkit/core            17.0.5
@angular-devkit/schematics      17.0.5
@angular/cdk                    17.0.1
@angular/material               17.0.1
@schematics/angular             17.0.5
rxjs                            7.8.0
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.53s.
yarn install v1.22.21
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.37s.
```
```bash
Latest version:     1.0.30001565
Installed version:  1.0.30001565
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.21
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 2049.941963 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/package.json invalidated because hashes differ (c51494c2289c4c6f != 89726c296528687c)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 979.58689 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 3.817067 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 1 (145 bytes) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 3 (99 KiB) because of request to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 1 (145 bytes): 0.585244 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/app/app.component.ts': 1.653844 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 3 (99 KiB): 14.620103 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (40.6 MiB) because of request to: Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.014383 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 1.091279 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (40.6 MiB): 73.149876 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 2 (308 KiB) because of request to: ResolverCachePlugin|loader|default|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes|request=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 2 (308 KiB): 8.074691 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|/home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Pack 3 got empty and is removed
    [webpack.cache.PackFileCacheStrategy] Pack 1 got empty and is removed
asset main.js 342 KiB {179} [emitted] (name: main)
asset styles.css 82.6 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 343 KiB = runtime.js 912 bytes main.js 342 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 83.5 KiB = runtime.js 912 bytes styles.css 82.6 KiB
chunk {179} (runtime: runtime) main.js (main) 2.79 MiB [initial] [rendered]
  cached modules 29.9 KiB [cached] 1 module
  ./src/main.ts + 115 modules [607] 2.76 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial]
  cached modules 104 KiB [cached] 1 module
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 85.2 KiB (css/mini-extract) [initial]
  cached modules 50 bytes (javascript) 186 bytes (css/mini-extract) [cached] 2 modules
  dependent modules 85 KiB [dependent] 1 module
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [554] 50 bytes {532} [built]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1635 ms (resolving: 1039 ms, restoring: 74 ms, integration: 0 ms, building: 522 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry]
  cached modules 2.49 KiB [cached] 4 modules
  

LOG from webpack.FileSystemInfo
    97 new snapshots created
    39% root snapshot uncached (819 / 2087)
    16% children snapshot uncached (378 / 2354)
    1488 entries tested
    File info in cache: 130 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/12) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 78% (545/697) entries shared via 3 shared snapshots (76 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 61% (221/365) entries shared via 10 shared snapshots (32 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 55% (245/447) entries shared via 14 shared snapshots (47 times referenced)
    Managed files snapshot optimization: 61% (248/406) entries shared via 16 shared snapshots (53 times referenced)
    Managed missing snapshot optimization: 77% (393/513) entries shared via 22 shared snapshots (62 times referenced)
+ 4 hidden lines

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.107632 ms
<t> runtime requirements.chunks: 0.122483 ms
<t> runtime requirements.entries: 0.909111 ms
<t> finish module profiles: 4.398362 ms
<t> compute affected modules: 0.004551 ms
<t> finish modules: 19.109977 ms
<t> report dependency errors and warnings: 4.493166 ms
<t> optimize dependencies: 9.807892 ms
<t> create chunks: 3.304059 ms
<t> compute affected modules with chunk graph: 0.003516 ms
<t> optimize: 25.962525 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 7.838241 ms
    29% code generated (2 generated, 5 from cache)
<t> code generation: 538.414758 ms
<t> runtime requirements.modules: 0.331416 ms
<t> runtime requirements.chunks: 0.087995 ms
<t> runtime requirements.entries: 0.487436 ms
<t> runtime requirements: 1.148862 ms
<t> hashing: initialize hash: 0.006305 ms
<t> hashing: sort chunks: 0.049459 ms
<t> hashing: hash runtime modules: 1.133245 ms
<t> hashing: hash chunks: 1.206113 ms
<t> hashing: hash digest: 0.016753 ms
<t> hashing: process full hash modules: 0.159281 ms
<t> hashing: 2.662104 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.064599 ms
<t> module assets: 0.182505 ms
<t> create chunk assets: 3.147378 ms
<t> process assets: 4282.839634 ms

LOG from webpack.Compiler
<t> make hook: 3266.682973 ms
<t> finish make hook: 0.090652 ms
<t> finish compilation: 28.037444 ms
<t> seal compilation: 4877.131283 ms
<t> afterCompile hook: 0.125785 ms
<t> emitAssets: 13.635713 ms
<t> emitRecords: 0.079379 ms
<t> done hook: 109.188183 ms
<t> beginIdle: 0.379202 ms

LOG from webpack.Compilation.ModuleProfile
<i>  | 208 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
<i>  | 208 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 209 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
<i>  | 208 ms (parallelism 5) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
<i>  | 209 ms (parallelism 5) resolve to new modules > ./src/main.ts
     | 47 ms (parallelism 6) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 72 ms (parallelism 5.7) resolve to new modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     | 72 ms (parallelism 5.7) resolve to new modules > ./node_modules/@angular/core/fesm2022/core.mjs
<i> 1324 ms resolve to new modules
     |  | 109 ms (parallelism 4.8) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 109 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 153 ms (parallelism 7.1) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 150 ms (parallelism 7.1) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
<i>  |  | 212 ms (parallelism 1.9) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 168 ms (parallelism 2) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
<i>  | 781 ms build modules > 23 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 70 ms (parallelism 5.7) build modules > ./src/app/app.module.ts
     | 76 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
     |  | 58 ms (parallelism 5.6) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 58 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i> 1024 ms build modules
+ 23 hidden lines

LOG from webpack.ResolverCachePlugin
    4% really resolved (81 real resolves with 81 cached but invalid, 1744 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 2.002635 ms
<t> figure out provided exports: 4.689275 ms
    3% of exports of modules have been determined (10 no declared exports, 9 not cached, 0 flagged uncacheable, 250 from cache, 0 from mem cache, 1 additional calculations due to dependencies)
<t> store provided exports into cache: 0.245894 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 1.258362 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.847937 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.476464 ms
<t> trace exports usage in graph: 5.024427 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.671142 ms
<t> visitModules: visiting: 2.320273 ms
    267 queue items processed (123 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.398376 ms
<t> connectChunkGroups: 0.003177 ms
<t> cleanup: 0.000945 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.034605 ms
<t> modules: 2.130933 ms
<t> queue: 0.003681 ms
<t> maxSize: 0.038674 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.952228 ms
<t> sort relevant modules: 0.116125 ms
<t> find modules to concatenate: 5.218947 ms
<t> sort concat configurations: 0.040289 ms
<t> create concatenated modules: 5.51582 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: main.js: 3579.280832 ms
<t> optimize js assets: 3631.895138 ms
+ 2 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 13.479998 ms
<t> optimize css assets: 14.199176 ms

2023-12-01 17:21:52: webpack 5.89.0 compiled in 10204 ms (3a91cbfe6b207e44)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Node.js doesn't offer a (nice) way to introspect the ESM dependency graph yet.
    Until a full solution is available webpack uses an experimental ESM tracking based on parsing.
    As best effort webpack parses the ESM files to guess dependencies. But this can lead to expensive and incorrect tracking.
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1138.57835 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 28.744189 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 111 fresh items in cache put into pack 1
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.682119 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 2.135079 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/operators/index.js': 1.559291 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 1.364679 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 2.476596 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 1.124489 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm|request=|./internal/operators/exhaust': 1.680076 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm|request=|./internal/operators/windowWhen': 1.205926 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|webpack/runtime/hasOwnProperty shorthand|runtime': 1.374576 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.575591 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/a11y.mjs': 1.275387 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|6fbab3001b309b4f|runtime': 12.311262 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 6.075963 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 251.571564 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1138 items, 3 files, 44 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 341.90 kB |                86.06 kB
styles.css          | styles        |  82.65 kB |                 8.08 kB
polyfills.js        | polyfills     |  32.97 kB |                10.63 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 458.41 kB |               105.28 kB

Build at: 2023-12-01T22:21:54.372Z - Hash: 3a91cbfe6b207e44 - Time: 12109ms
Done in 13.83s.
```
Fri Dec  1 05:22:07 PM EST 2023
yarn version v1.22.21
info Current version: 0.0.253
info New version: 0.0.254
Done in 0.12s.
