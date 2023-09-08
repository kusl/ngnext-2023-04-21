Fri Sep  8 12:48:24 AM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.4Gi       2.4Gi       322Mi        10Gi        12Gi
Swap:          8.0Gi       5.0Mi       8.0Gi
System Storage
781M	.
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
    

Angular CLI: 16.2.1
Node: 18.17.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.3
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.1
@angular-devkit/build-angular   16.2.1
@angular-devkit/core            16.2.1
@angular-devkit/schematics      16.2.1
@angular/cdk                    16.2.2
@angular/cli                    16.2.1
@angular/material               16.2.2
@schematics/angular             16.2.1
rxjs                            7.8.0
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.59s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.37s.
```
Latest version:     1.0.30001528
Installed version:  1.0.30001525
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001528
Installed version:  1.0.30001528
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.2.1/angular-webpack/8544ac117ec34c49625f8e3d6a63f9e549db4565.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.2.1/angular-webpack/8544ac117ec34c49625f8e3d6a63f9e549db4565/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1931.4554600000001 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
asset main.js 339 KiB {179} [emitted] (name: main)
asset styles.css 82.2 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 340 KiB = runtime.js 912 bytes main.js 339 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 83.1 KiB = runtime.js 912 bytes styles.css 82.2 KiB
chunk {179} (runtime: runtime) main.js (main) 2.63 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2022/init.mjs + 1 modules [614] 37.3 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 114 modules [368] 2.6 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1025 ms (resolving: 40 ms, restoring: 1 ms, integration: 0 ms, building: 984 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 84.2 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 84.2 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [554] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1217 ms (resolving: 36 ms, restoring: 0 ms, integration: 0 ms, building: 1181 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1143 ms (resolving: 36 ms, restoring: 1 ms, integration: 0 ms, building: 1106 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.399864 ms
<t> runtime requirements.chunks: 0.444784 ms
<t> runtime requirements.entries: 1.47477 ms
<t> runtime requirements.modules: 0.026336 ms
<t> runtime requirements.chunks: 0.015952 ms
<t> runtime requirements.entries: 0.125883 ms
<t> finish module profiles: 8.196073 ms
<t> compute affected modules: 0.005015 ms
<t> finish modules: 17.568468 ms
<t> report dependency errors and warnings: 4.144676 ms
<t> optimize dependencies: 10.557072 ms
<t> create chunks: 3.454131 ms
<t> compute affected modules with chunk graph: 0.050591 ms
<t> optimize: 28.073484 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 7.824926 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 437.371472 ms
<t> runtime requirements.modules: 0.26583 ms
<t> runtime requirements.chunks: 0.076447 ms
<t> runtime requirements.entries: 0.490843 ms
<t> runtime requirements: 1.033642 ms
<t> hashing: initialize hash: 0.007708 ms
<t> hashing: sort chunks: 0.057691 ms
<t> hashing: hash runtime modules: 1.071176 ms
<t> hashing: hash chunks: 1.222117 ms
<t> hashing: hash digest: 0.016673 ms
<t> hashing: process full hash modules: 0.235806 ms
<t> hashing: 2.712313 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.07474 ms
<t> module assets: 0.174463 ms
<t> create chunk assets: 3.506819 ms
<t> process assets: 4512.662259 ms

LOG from webpack.Compiler
<t> make hook: 6431.373299 ms
<t> finish make hook: 0.10509 ms
<t> finish compilation: 29.948821 ms
<t> seal compilation: 5009.285527 ms
<t> afterCompile hook: 0.100533 ms
<t> emitAssets: 3.814777 ms
<t> emitRecords: 0.065831 ms
<t> done hook: 140.44222 ms
<t> beginIdle: 0.360946 ms

LOG from webpack.Compilation.ModuleProfile
     | 65 ms (parallelism 3.4) resolve to new modules > ./src/main.ts
     | 33 ms (parallelism 2.6) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 158 ms (parallelism 8) resolve to new modules > ./src/app/name-editor/name-editor.component.ts
     | 160 ms (parallelism 11.5) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 53 ms (parallelism 14.7) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/cdk.mjs
    1032 ms resolve to new modules
     | 160 ms (parallelism 11.5) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    191 ms resolve to existing modules
<i>  |  | 212 ms (parallelism 5.6) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 212 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 191 ms (parallelism 5.8) build modules > ./src/styles.scss?ngGlobalStyle
     | 191 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 179 ms (parallelism 5.9) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 99 ms (parallelism 2.2) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 175 ms (parallelism 8) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 161 ms (parallelism 10.3) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 172 ms (parallelism 8) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 175 ms (parallelism 8) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 174 ms (parallelism 8) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 33 ms (parallelism 18.6) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 79 ms (parallelism 12) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 119 ms (parallelism 11.1) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 113 ms (parallelism 10.8) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 113 ms (parallelism 10.8) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 118 ms (parallelism 10.7) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 115 ms (parallelism 10.7) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 118 ms (parallelism 11.3) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     |  | 119 ms (parallelism 11.8) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
<i>  | 2082 ms build modules > 22 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 163 ms (parallelism 6.1) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 107 ms (parallelism 11.9) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 108 ms (parallelism 11.9) build modules > ./node_modules/rxjs/dist/esm/index.js
     | 1504 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 144 ms (parallelism 6.2) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 144 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 241 ms (parallelism 5.2) build modules > ./src/main.ts
     |  | 30 ms (parallelism 19.2) build modules > ./src/app/name-editor/name-editor.component.ts
<i>  | 303 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i> 4462 ms build modules
+ 18 hidden lines

LOG from webpack.ResolverCachePlugin
    32% really resolved (563 real resolves with 0 cached but invalid, 1190 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.056401 ms
<t> figure out provided exports: 11.279101 ms
    95% of exports of modules have been determined (15 no declared exports, 259 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 1.598984 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 9.483539 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.098933 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.462209 ms
<t> trace exports usage in graph: 5.592364 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.688592 ms
<t> visitModules: visiting: 2.440253 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.557244 ms
<t> connectChunkGroups: 0.002815 ms
<t> cleanup: 0.001091 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.04007 ms
<t> modules: 2.546484 ms
<t> queue: 0.005398 ms
<t> maxSize: 0.037178 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.126349 ms
<t> sort relevant modules: 0.142672 ms
<t> find modules to concatenate: 6.103033 ms
<t> sort concat configurations: 0.04572 ms
<t> create concatenated modules: 5.402648 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 242.903553 ms
<t> optimize asset: polyfills.js: 632.968086 ms
<t> optimize asset: main.js: 3766.941668 ms
<t> optimize js assets: 3854.593777 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 12.859951 ms
<t> optimize css assets: 21.80479 ms

LOG from webpack.FileSystemInfo
    825 new snapshots created
    0% root snapshot uncached (0 / 1190)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 134 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3440/4082) entries shared via 3 shared snapshots (561 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 57% (223/389) entries shared via 11 shared snapshots (29 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 21% (247/1203) entries shared via 12 shared snapshots (42 times referenced)
    Managed files snapshot optimization: 79% (3342/4220) entries shared via 184 shared snapshots (759 times referenced)
    Managed missing snapshot optimization: 90% (4029/4500) entries shared via 197 shared snapshots (776 times referenced)

2023-09-08 00:49:13: webpack 5.88.2 compiled in 13385 ms (3bcfd5f936742cc4)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1174.272078 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 55.713475 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1136 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.826095 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 1.973198 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 2.688046 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 2.019689 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 2.980512 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/a11y.mjs': 1.779759 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 2.64651 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.038677 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/observable/bindCallback.js': 1.432843 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators|request=|./concatAll': 2.057133 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators|request=|./map': 3.707634 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|bdcffb4806b02a7f|runtime': 10.598457 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 5.244885 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 234.516738 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1136 items, 1 files, 39 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 339.41 kB |                85.34 kB
styles.css          | styles        |  82.22 kB |                 8.09 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 455.52 kB |               104.63 kB

Build at: 2023-09-08T04:49:16.082Z - Hash: 3bcfd5f936742cc4 - Time: 15664ms
Done in 17.42s.
```
Fri Sep  8 12:49:35 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.111
info New version: 0.0.112
Done in 0.12s.
