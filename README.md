Fri Jul  7 08:48:44 AM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.1Gi       1.8Gi       511Mi        10Gi        11Gi
Swap:          8.0Gi       262Mi       7.7Gi
System Storage
742M	.
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
    

Angular CLI: 16.1.3
Node: 18.16.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.1.3
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1601.3
@angular-devkit/build-angular   16.1.3
@angular-devkit/core            16.1.3
@angular-devkit/schematics      16.1.3
@schematics/angular             16.1.3
rxjs                            7.8.0
typescript                      5.0.4
    
Done in 0.59s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.39s.
```
Latest version:     1.0.30001513
Installed version:  1.0.30001512
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001513
Installed version:  1.0.30001513
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.1.4/angular-webpack/ee1953ee2bcb5bad08926dff7e327532eddcbcd9.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.1.4/angular-webpack/ee1953ee2bcb5bad08926dff7e327532eddcbcd9/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1972.2314270000002 ms
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
chunk {179} (runtime: runtime) main.js (main) 2.57 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2022/init.mjs + 1 modules [614] 38 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 114 modules [368] 2.54 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    830 ms (resolving: 170 ms, restoring: 0 ms, integration: 0 ms, building: 660 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 105 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 105 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [262] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1113 ms (resolving: 34 ms, restoring: 0 ms, integration: 0 ms, building: 1079 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1113 ms (resolving: 129 ms, restoring: 0 ms, integration: 0 ms, building: 984 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.491062 ms
<t> runtime requirements.chunks: 0.409448 ms
<t> runtime requirements.entries: 1.604399 ms
<t> runtime requirements.modules: 0.02823 ms
<t> runtime requirements.chunks: 0.015948 ms
<t> runtime requirements.entries: 0.168424 ms
<t> finish module profiles: 11.032685 ms
<t> compute affected modules: 0.006209 ms
<t> finish modules: 17.733873 ms
<t> report dependency errors and warnings: 4.699967 ms
<t> optimize dependencies: 10.445791 ms
<t> create chunks: 3.452041 ms
<t> compute affected modules with chunk graph: 0.003079 ms
<t> optimize: 27.25163 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 11.061721 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 540.750499 ms
<t> runtime requirements.modules: 0.224848 ms
<t> runtime requirements.chunks: 0.333527 ms
<t> runtime requirements.entries: 1.040327 ms
<t> runtime requirements: 2.335448 ms
<t> hashing: initialize hash: 0.010083 ms
<t> hashing: sort chunks: 0.098479 ms
<t> hashing: hash runtime modules: 1.439842 ms
<t> hashing: hash chunks: 1.999168 ms
<t> hashing: hash digest: 0.039595 ms
<t> hashing: process full hash modules: 0.157337 ms
<t> hashing: 4.276562 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.06065 ms
<t> module assets: 0.292116 ms
<t> create chunk assets: 8.281007 ms
<t> process assets: 8611.71227 ms

LOG from webpack.Compiler
<t> make hook: 6085.426918 ms
<t> finish make hook: 0.137473 ms
<t> finish compilation: 33.587458 ms
<t> seal compilation: 9222.243382 ms
<t> afterCompile hook: 0.177825 ms
<t> emitAssets: 4.37441 ms
<t> emitRecords: 0.062653 ms
<t> done hook: 144.166057 ms
<t> beginIdle: 0.829127 ms

LOG from webpack.Compilation.ModuleProfile
     | 34 ms (parallelism 5.2) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 33 ms (parallelism 5.2) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 86 ms (parallelism 5.1) resolve to new modules > ./src/main.ts
     | 54 ms (parallelism 3.4) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 119 ms (parallelism 8) resolve to new modules > ./src/app/name-editor/name-editor.component.ts
     | 149 ms (parallelism 11.5) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
    1041 ms resolve to new modules
     | 148 ms (parallelism 11.5) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    200 ms resolve to existing modules
<i>  |  | 202 ms (parallelism 5.3) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 202 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 42 ms (parallelism 5.2) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 42 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 183 ms (parallelism 5.4) build modules > ./src/styles.scss?ngGlobalStyle
     | 183 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 111 ms (parallelism 5.6) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 111 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 122 ms (parallelism 5.5) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 107 ms (parallelism 2) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 158 ms (parallelism 8) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 146 ms (parallelism 10.3) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 161 ms (parallelism 8) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 157 ms (parallelism 8) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 156 ms (parallelism 8) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 50 ms (parallelism 15.8) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 54 ms (parallelism 12.7) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 94 ms (parallelism 9.7) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 100 ms (parallelism 11.4) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 101 ms (parallelism 11.4) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 106 ms (parallelism 11.4) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 103 ms (parallelism 11.4) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 106 ms (parallelism 11.5) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     |  | 108 ms (parallelism 11.9) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 1847 ms build modules > 22 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 119 ms (parallelism 5.5) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 99 ms (parallelism 12) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 98 ms (parallelism 12) build modules > ./node_modules/rxjs/dist/esm/index.js
     | 1399 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 224 ms (parallelism 4.4) build modules > ./src/main.ts
<i>  | 276 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i> 4069 ms build modules
+ 14 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (563 real resolves with 0 cached but invalid, 1260 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.054342 ms
<t> figure out provided exports: 11.39384 ms
    95% of exports of modules have been determined (15 no declared exports, 259 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 1.696797 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 10.162786 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.074322 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.458539 ms
<t> trace exports usage in graph: 5.414585 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.69067 ms
<t> visitModules: visiting: 2.434647 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.51794 ms
<t> connectChunkGroups: 0.00322 ms
<t> cleanup: 0.00122 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.036621 ms
<t> modules: 2.92232 ms
<t> queue: 0.021886 ms
<t> maxSize: 0.169133 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.202173 ms
<t> sort relevant modules: 0.141283 ms
<t> find modules to concatenate: 6.196884 ms
<t> sort concat configurations: 0.040707 ms
<t> create concatenated modules: 5.600154 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 229.831732 ms
<t> optimize asset: polyfills.js: 676.915659 ms
<t> optimize asset: main.js: 7854.440445 ms
<t> optimize js assets: 7939.392807 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 16.145455 ms
<t> optimize css assets: 25.451965 ms

LOG from webpack.FileSystemInfo
    825 new snapshots created
    0% root snapshot uncached (0 / 1260)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 134 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3440/4079) entries shared via 3 shared snapshots (561 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 53% (207/389) entries shared via 10 shared snapshots (29 times referenced)
    Managed items info in cache: 78 items
    Managed items snapshot optimization: 19% (224/1197) entries shared via 11 shared snapshots (39 times referenced)
    Managed files snapshot optimization: 79% (3336/4213) entries shared via 184 shared snapshots (759 times referenced)
    Managed missing snapshot optimization: 87% (3895/4500) entries shared via 195 shared snapshots (776 times referenced)

2023-07-07 08:49:41: webpack 5.86.0 compiled in 17295 ms (15a165f5435cdbc6)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 801.124732 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 41.414574 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1136 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.888519 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 1.835271 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 3.096209 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.920102 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 3.036671 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/animations/fesm2022/browser.mjs': 1.141008 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 2.281972 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 3.405334 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators/skipLast.js': 1.544264 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/observable|request=|../util/args': 1.917712 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|bdcffb4806b02a7f|runtime': 12.357257 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 6.87275 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 248.367501 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1136 items, 1 files, 38 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 337.39 kB |                84.81 kB
styles.css          | styles        | 100.28 kB |                 9.22 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 471.56 kB |               105.22 kB

Build at: 2023-07-07T12:49:42.952Z - Hash: 15a165f5435cdbc6 - Time: 19207ms
Done in 21.10s.
```
