Thu May  4 06:39:20 AM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.6Gi       2.6Gi       495Mi        10Gi        11Gi
Swap:          8.0Gi       4.0Mi       8.0Gi
System Storage
659M	.
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
    

Angular CLI: 16.0.0
Node: 18.16.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.0.0
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1600.0
@angular-devkit/build-angular   16.0.0
@angular-devkit/core            16.0.0
@angular-devkit/schematics      16.0.0
@schematics/angular             16.0.0
rxjs                            7.8.0
typescript                      5.0.4
    
Done in 0.56s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.35s.
```
Latest version:     1.0.30001482
Installed version:  1.0.30001482
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001482
Installed version:  1.0.30001482
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1838.3741909999999 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/package.json invalidated because hashes differ (9a233e0be67125c9 != 39e41c27057f3df5)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 524.730343 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 4.215601 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 1 (101 KiB) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/app/app.component.ts': 2.680293 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 1 (101 KiB): 23.929206 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (37.7 MiB) because of request to: Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.001213 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.66326 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 1.828932 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (37.7 MiB): 96.122752 ms
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
  ./src/main.ts + 114 modules [670] 2.52 MiB {179} [built]
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
    16% children snapshot uncached (369 / 2348)
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
<t> make hook: 1158.297672 ms
<t> finish make hook: 0.147268 ms
<t> finish compilation: 30.156097 ms
<t> seal compilation: 691.689535 ms
<t> afterCompile hook: 0.078063 ms
<t> emitAssets: 4.207069 ms
<t> emitRecords: 0.065997 ms
<t> done hook: 111.704126 ms
<t> beginIdle: 0.429305 ms

LOG from webpack.Compilation.ModuleProfile
     | 119 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 119 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 122 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 121 ms (parallelism 5) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 121 ms (parallelism 5) resolve to new modules > ./src/main.ts
     | 30 ms (parallelism 9.9) resolve to new modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     | 31 ms (parallelism 9.8) resolve to new modules > ./node_modules/@angular/core/fesm2022/core.mjs
     | 31 ms (parallelism 10.5) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
    847 ms resolve to new modules
+ 22 hidden lines

LOG from webpack.Compilation
<t> finish module profiles: 6.920805 ms
<t> compute affected modules: 0.004816 ms
<t> finish modules: 18.973419 ms
<t> report dependency errors and warnings: 4.211323 ms
<t> optimize dependencies: 9.400021 ms
<t> create chunks: 3.299247 ms
<t> compute affected modules with chunk graph: 0.004029 ms
<t> optimize: 29.424407 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 8.657017 ms
    0% code generated (0 generated, 7 from cache)
<t> code generation: 0.664449 ms
<t> runtime requirements.modules: 0.238842 ms
<t> runtime requirements.chunks: 0.146446 ms
<t> runtime requirements.entries: 0.842104 ms
<t> runtime requirements: 1.397936 ms
<t> hashing: initialize hash: 0.004464 ms
<t> hashing: sort chunks: 0.036311 ms
<t> hashing: hash runtime modules: 1.463774 ms
<t> hashing: hash chunks: 1.044366 ms
<t> hashing: hash digest: 0.013169 ms
<t> hashing: process full hash modules: 0.12752 ms
<t> hashing: 2.776848 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.056284 ms
<t> module assets: 0.153785 ms
<t> create chunk assets: 0.853283 ms
<t> process assets: 633.427424 ms

LOG from webpack.ResolverCachePlugin
    3% really resolved (61 real resolves with 61 cached but invalid, 1758 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 2.195694 ms
<t> figure out provided exports: 5.130229 ms
    2% of exports of modules have been determined (3 no declared exports, 5 not cached, 0 flagged uncacheable, 251 from cache, 0 from mem cache, 0 additional calculations due to dependencies)
<t> store provided exports into cache: 0.007169 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.22922 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.76263 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.44741 ms
<t> trace exports usage in graph: 4.843627 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.517644 ms
<t> visitModules: visiting: 2.319377 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.40006 ms
<t> connectChunkGroups: 0.002229 ms
<t> cleanup: 0.001101 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.032907 ms
<t> modules: 2.367288 ms
<t> queue: 0.003898 ms
<t> maxSize: 0.030742 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 4.118258 ms
<t> sort relevant modules: 0.152942 ms
<t> find modules to concatenate: 5.517682 ms
<t> sort concat configurations: 0.034974 ms
<t> create concatenated modules: 7.694112 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.125073 ms
+ 1 hidden lines

2023-05-04 06:39:41: webpack 5.80.0 compiled in 3693 ms (2bebe8a34b15d8b6)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Node.js doesn't offer a (nice) way to introspect the ESM dependency graph yet.
    Until a full solution is available webpack uses an experimental ESM tracking based on parsing.
    As best effort webpack parses the ESM files to guess dependencies. But this can lead to expensive and incorrect tracking.
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 301.263862 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 5.072185 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 63 fresh items in cache put into pack 3
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/app/app.component.ts': 1.025148 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 29.801682 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1133 items, 4 files, 38 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 337.32 kB |                84.77 kB
styles.css          | styles        | 105.84 kB |                 9.52 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 477.05 kB |               105.48 kB

Build at: 2023-05-04T10:39:42.246Z - Hash: 2bebe8a34b15d8b6 - Time: 4904ms
Done in 6.74s.
```
