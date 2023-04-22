Sat Apr 22 07:44:23 AM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.2Gi       2.7Gi       703Mi       9.4Gi        11Gi
Swap:          8.0Gi       512Mi       7.5Gi
System Storage
1.2G	.
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
    
Done in 0.56s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.34s.
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
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1913.975899 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/ngnext-2023-04-21/package.json invalidated because hashes differ (fd92106dc1f1d04f != a553e794e016853e)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 739.373055 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 4.197998 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 1 (35.1 MiB) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts': 1.140507 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 1 (35.1 MiB): 46.460702 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (5.18 MiB) because of request to: Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/localize/fesm2022/init.mjs
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 1.278815 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/util/isScheduler.js': 3.691803 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 1.48203 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 1.147463 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (5.18 MiB): 156.803682 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
asset main.js 319 KiB {179} [emitted] (name: main)
asset styles.css 104 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 320 KiB = runtime.js 912 bytes main.js 319 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 105 KiB = runtime.js 912 bytes styles.css 104 KiB
chunk {179} (runtime: runtime) main.js (main) 2.56 MiB [initial]
  cached modules 38 KiB [cached] 1 module
  ./src/main.ts + 113 modules [981] 2.52 MiB {179} [built]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial]
  cached modules 104 KiB [cached] 1 module
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 114 KiB (css/mini-extract) [initial]
  cached modules 100 bytes (javascript) 114 KiB (css/mini-extract) [cached] 4 modules
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry]
  cached modules 2.49 KiB [cached] 4 modules
  

LOG from webpack.FileSystemInfo
    57 new snapshots created
    39% root snapshot uncached (799 / 2062)
    16% children snapshot uncached (364 / 2342)
    1414 entries tested
    File info in cache: 111 timestamps 19 hashes 19 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/9) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 76% (362/475) entries shared via 2 shared snapshots (49 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 41% (109/268) entries shared via 5 shared snapshots (15 times referenced)
    Managed items info in cache: 78 items
    Managed items snapshot optimization: 48% (168/349) entries shared via 13 shared snapshots (32 times referenced)
    Managed files snapshot optimization: 62% (154/249) entries shared via 10 shared snapshots (30 times referenced)
    Managed missing snapshot optimization: 78% (322/414) entries shared via 18 shared snapshots (44 times referenced)
+ 3 hidden lines

LOG from webpack.Compiler
<t> make hook: 1321.020055 ms
<t> finish make hook: 0.104162 ms
<t> finish compilation: 26.992859 ms
<t> seal compilation: 696.27987 ms
<t> afterCompile hook: 0.202961 ms
<t> emitAssets: 5.332647 ms
<t> emitRecords: 0.076625 ms
<t> done hook: 110.238708 ms
<t> beginIdle: 0.409923 ms

LOG from webpack.Compilation.ModuleProfile
     | 167 ms (parallelism 5) resolve to new modules > ./src/main.ts
     | 168 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 167 ms (parallelism 5) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 167 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 167 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
    889 ms resolve to new modules
     | 32 ms (parallelism 5) integrate modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 32 ms (parallelism 5) integrate modules > ./node_modules/zone.js/fesm2015/zone.js
     | 32 ms (parallelism 5) integrate modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 32 ms (parallelism 5) integrate modules > ./src/styles.scss?ngGlobalStyle
    137 ms integrate modules
     |  | 102 ms (parallelism 3) build modules > ./src/main.ts
     | 113 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
    113 ms build modules
     | 32 ms (parallelism 5) restore modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 32 ms (parallelism 5) restore modules > ./node_modules/zone.js/fesm2015/zone.js
     | 32 ms (parallelism 5) restore modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 32 ms (parallelism 5) restore modules > ./src/styles.scss?ngGlobalStyle
    137 ms restore modules
+ 1 hidden lines

LOG from webpack.Compilation
<t> finish module profiles: 4.560354 ms
<t> compute affected modules: 0.00397 ms
<t> finish modules: 18.356341 ms
<t> report dependency errors and warnings: 4.038237 ms
<t> optimize dependencies: 8.450781 ms
<t> create chunks: 3.124329 ms
<t> compute affected modules with chunk graph: 0.006587 ms
<t> optimize: 40.000181 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 12.636069 ms
    0% code generated (0 generated, 7 from cache)
<t> code generation: 0.522728 ms
<t> runtime requirements.modules: 0.086123 ms
<t> runtime requirements.chunks: 0.422377 ms
<t> runtime requirements.entries: 1.06647 ms
<t> runtime requirements: 1.789651 ms
<t> hashing: initialize hash: 0.005471 ms
<t> hashing: sort chunks: 0.045207 ms
<t> hashing: hash runtime modules: 2.063063 ms
<t> hashing: hash chunks: 1.400119 ms
<t> hashing: hash digest: 0.061621 ms
<t> hashing: process full hash modules: 0.224309 ms
<t> hashing: 3.940904 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.089385 ms
<t> module assets: 0.179148 ms
<t> create chunk assets: 1.288693 ms
<t> process assets: 622.31282 ms

LOG from webpack.ResolverCachePlugin
    3% really resolved (54 real resolves with 54 cached but invalid, 1752 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 5.275162 ms
<t> figure out provided exports: 4.757352 ms
    2% of exports of modules have been determined (3 no declared exports, 5 not cached, 0 flagged uncacheable, 250 from cache, 0 from mem cache, 0 additional calculations due to dependencies)
<t> store provided exports into cache: 0.00789 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.185822 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.347911 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.400707 ms
<t> trace exports usage in graph: 4.411038 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.545075 ms
<t> visitModules: visiting: 2.299498 ms
    265 queue items processed (121 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.35453 ms
<t> connectChunkGroups: 0.002392 ms
<t> cleanup: 0.001172 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.03369 ms
<t> modules: 2.325252 ms
<t> queue: 0.005038 ms
<t> maxSize: 0.029744 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.040723 ms
<t> sort relevant modules: 0.133316 ms
<t> find modules to concatenate: 9.978922 ms
<t> sort concat configurations: 0.046345 ms
<t> create concatenated modules: 9.569587 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.246272 ms
+ 1 hidden lines

2023-04-22 07:45:02: webpack 5.79.0 compiled in 3933 ms (4e1f8434694c4244)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Node.js doesn't offer a (nice) way to introspect the ESM dependency graph yet.
    Until a full solution is available webpack uses an experimental ESM tracking based on parsing.
    As best effort webpack parses the ESM files to guess dependencies. But this can lead to expensive and incorrect tracking.
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 282.245533 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 3.890899 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 57 fresh items in cache put into pack 4
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/progress-spinner.mjs': 1.487063 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|085ffbd49c3ad3c3|runtime': 3.160895 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 89.977688 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1116 items, 5 files, 54 MiB)
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

Build at: 2023-04-22T11:45:04.115Z - Hash: 4e1f8434694c4244 - Time: 5328ms
Done in 7.17s.
```
