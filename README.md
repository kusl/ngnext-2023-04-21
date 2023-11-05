Sat Nov  4 09:35:52 PM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.9Gi       3.4Gi       382Mi       8.0Gi        10Gi
Swap:          8.0Gi       557Mi       7.5Gi
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
    

Angular CLI: 16.2.9
Node: 20.9.0 (Unsupported)
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.12
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.9
@angular-devkit/build-angular   16.2.9
@angular-devkit/core            16.2.9
@angular-devkit/schematics      16.2.9
@angular/cdk                    16.2.11
@angular/cli                    16.2.9
@angular/material               16.2.11
@schematics/angular             16.2.9
rxjs                            7.8.0
typescript                      5.0.4
zone.js                         0.13.0
    
Warning: The current version of Node (20.9.0) is not supported by Angular.
Done in 0.57s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.35s.
```
Latest version:     1.0.30001561
Installed version:  1.0.30001559
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001561
Installed version:  1.0.30001561
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.2.9/angular-webpack/24ff3a41978817cad32958bdd5c45fd6f83d8561.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.2.9/angular-webpack/24ff3a41978817cad32958bdd5c45fd6f83d8561/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1865.168203 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
asset main.js 341 KiB {179} [emitted] (name: main)
asset styles.css 82.2 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 342 KiB = runtime.js 912 bytes main.js 341 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 83.1 KiB = runtime.js 912 bytes styles.css 82.2 KiB
chunk {179} (runtime: runtime) main.js (main) 2.64 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2022/init.mjs + 1 modules [614] 37.3 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 114 modules [368] 2.61 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1055 ms (resolving: 32 ms, restoring: 1 ms, integration: 0 ms, building: 1022 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 84.2 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 84.2 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [554] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1233 ms (resolving: 29 ms, restoring: 0 ms, integration: 0 ms, building: 1204 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1157 ms (resolving: 29 ms, restoring: 1 ms, integration: 0 ms, building: 1127 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.391734 ms
<t> runtime requirements.chunks: 0.435014 ms
<t> runtime requirements.entries: 1.44731 ms
<t> runtime requirements.modules: 0.02471 ms
<t> runtime requirements.chunks: 0.013988 ms
<t> runtime requirements.entries: 0.130016 ms
<t> finish module profiles: 5.725037 ms
<t> compute affected modules: 0.005147 ms
<t> finish modules: 15.459192 ms
<t> report dependency errors and warnings: 4.815527 ms
<t> optimize dependencies: 10.18838 ms
<t> create chunks: 3.270627 ms
<t> compute affected modules with chunk graph: 0.015658 ms
<t> optimize: 25.126599 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 7.304704 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 407.920947 ms
<t> runtime requirements.modules: 0.236992 ms
<t> runtime requirements.chunks: 0.093433 ms
<t> runtime requirements.entries: 0.496931 ms
<t> runtime requirements: 1.027906 ms
<t> hashing: initialize hash: 0.006987 ms
<t> hashing: sort chunks: 0.047513 ms
<t> hashing: hash runtime modules: 1.061056 ms
<t> hashing: hash chunks: 1.279524 ms
<t> hashing: hash digest: 0.016309 ms
<t> hashing: process full hash modules: 0.213713 ms
<t> hashing: 2.724867 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.064064 ms
<t> module assets: 0.158815 ms
<t> create chunk assets: 2.928882 ms
<t> process assets: 4089.760246 ms

LOG from webpack.Compiler
<t> make hook: 6057.794316 ms
<t> finish make hook: 0.099304 ms
<t> finish compilation: 26.046739 ms
<t> seal compilation: 4552.225877 ms
<t> afterCompile hook: 0.099185 ms
<t> emitAssets: 3.646885 ms
<t> emitRecords: 0.060337 ms
<t> done hook: 117.582262 ms
<t> beginIdle: 0.384208 ms

LOG from webpack.Compilation.ModuleProfile
     | 61 ms (parallelism 3.3) resolve to new modules > ./src/main.ts
     | 46 ms (parallelism 8.6) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 135 ms (parallelism 8.2) resolve to new modules > ./src/app/name-editor/name-editor.component.ts
     | 148 ms (parallelism 11.6) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
    848 ms resolve to new modules
     | 147 ms (parallelism 11.6) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    184 ms resolve to existing modules
<i>  |  | 217 ms (parallelism 5.5) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 217 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 195 ms (parallelism 5.8) build modules > ./src/styles.scss?ngGlobalStyle
     | 195 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 167 ms (parallelism 6) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 106 ms (parallelism 2.1) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 159 ms (parallelism 8.2) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 150 ms (parallelism 10.4) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 162 ms (parallelism 8.2) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 160 ms (parallelism 8.2) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 160 ms (parallelism 8.2) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 37 ms (parallelism 17.4) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 105 ms (parallelism 11.3) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 92 ms (parallelism 10.1) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 120 ms (parallelism 9.7) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 122 ms (parallelism 10.2) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 120 ms (parallelism 9.7) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     |  | 122 ms (parallelism 9.7) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 120 ms (parallelism 9.7) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 118 ms (parallelism 10.6) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
<i>  | 2031 ms build modules > 22 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 170 ms (parallelism 6) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 75 ms (parallelism 11) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 74 ms (parallelism 11) build modules > ./node_modules/rxjs/dist/esm/index.js
     | 1304 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 248 ms (parallelism 5.2) build modules > ./src/main.ts
<i>  | 325 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
     |  | 147 ms (parallelism 6.2) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 147 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i> 4251 ms build modules
+ 14 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (563 real resolves with 0 cached but invalid, 1263 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 0.937943 ms
<t> figure out provided exports: 9.046069 ms
    95% of exports of modules have been determined (15 no declared exports, 259 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 1.808238 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 9.684326 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.120733 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.622784 ms
<t> trace exports usage in graph: 4.933547 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.609296 ms
<t> visitModules: visiting: 2.294816 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.369961 ms
<t> connectChunkGroups: 0.002518 ms
<t> cleanup: 0.001188 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.041164 ms
<t> modules: 5.136258 ms
<t> queue: 0.006459 ms
<t> maxSize: 0.050263 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.010817 ms
<t> sort relevant modules: 0.167424 ms
<t> find modules to concatenate: 4.964341 ms
<t> sort concat configurations: 0.035103 ms
<t> create concatenated modules: 4.950184 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 162.047929 ms
<t> optimize asset: polyfills.js: 506.772416 ms
<t> optimize asset: main.js: 3378.068077 ms
<t> optimize js assets: 3455.46456 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 10.244989 ms
<t> optimize css assets: 10.925944 ms

LOG from webpack.FileSystemInfo
    825 new snapshots created
    0% root snapshot uncached (0 / 1263)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 134 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3433/4082) entries shared via 3 shared snapshots (560 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 55% (213/389) entries shared via 10 shared snapshots (30 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 19% (234/1203) entries shared via 11 shared snapshots (42 times referenced)
    Managed files snapshot optimization: 79% (3339/4220) entries shared via 184 shared snapshots (759 times referenced)
    Managed missing snapshot optimization: 87% (3895/4500) entries shared via 195 shared snapshots (776 times referenced)

2023-11-04 21:36:28: webpack 5.88.2 compiled in 12485 ms (99892e0584df32ed)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1070.159246 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 42.439923 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1136 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle': 1.034537 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.704774 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 1.754033 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/slide-toggle.mjs': 1.092748 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 2.546669 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.129273 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 1.663967 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/a11y.mjs': 1.39707 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 2.90806 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators/skipLast.js': 1.48753 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators|request=|./OperatorSubscriber': 2.001711 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|bdcffb4806b02a7f|runtime': 10.64606 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 5.85063 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 193.49125 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1136 items, 1 files, 39 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 341.24 kB |                85.33 kB
styles.css          | styles        |  82.22 kB |                 8.09 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 457.35 kB |               104.62 kB

Build at: 2023-11-05T01:36:30.019Z - Hash: 99892e0584df32ed - Time: 14264ms
Done in 15.94s.
```
Sat Nov  4 09:36:48 PM EDT 2023
yarn version v1.22.19
info Current version: 0.0.193
info New version: 0.0.194
Done in 0.12s.
