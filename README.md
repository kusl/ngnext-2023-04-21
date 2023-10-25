Wed Oct 25 03:04:34 PM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.8Gi       1.2Gi       762Mi        10Gi        10Gi
Swap:          8.0Gi       140Mi       7.9Gi
System Storage
815M	.
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
    

Angular CLI: 16.2.7
Node: 20.9.0 (Unsupported)
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.10
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.7
@angular-devkit/build-angular   16.2.7
@angular-devkit/core            16.2.7
@angular-devkit/schematics      16.2.7
@angular/cdk                    16.2.9
@angular/cli                    16.2.7
@angular/material               16.2.9
@schematics/angular             16.2.7
rxjs                            7.8.0
typescript                      5.0.4
zone.js                         0.13.0
    
Warning: The current version of Node (20.9.0) is not supported by Angular.
Done in 0.62s.
yarn install v1.22.19
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
Done in 3.28s.
```
Latest version:     1.0.30001554
Installed version:  1.0.30001553
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001554
Installed version:  1.0.30001554
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.2.8/angular-webpack/08d4973256bc0940b54f676944570f07816f48b1.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.2.8/angular-webpack/08d4973256bc0940b54f676944570f07816f48b1/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1986.044528 ms
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
  ./src/main.ts + 114 modules [368] 2.6 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1145 ms (resolving: 34 ms, restoring: 1 ms, integration: 0 ms, building: 1110 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 84.2 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 84.2 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [554] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1248 ms (resolving: 30 ms, restoring: 0 ms, integration: 0 ms, building: 1218 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1168 ms (resolving: 31 ms, restoring: 1 ms, integration: 0 ms, building: 1136 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.433789 ms
<t> runtime requirements.chunks: 0.444374 ms
<t> runtime requirements.entries: 1.600504 ms
<t> runtime requirements.modules: 0.043838 ms
<t> runtime requirements.chunks: 0.015867 ms
<t> runtime requirements.entries: 0.13713 ms
<t> finish module profiles: 7.229621 ms
<t> compute affected modules: 0.005982 ms
<t> finish modules: 17.373365 ms
<t> report dependency errors and warnings: 5.126253 ms
<t> optimize dependencies: 14.106318 ms
<t> create chunks: 3.395599 ms
<t> compute affected modules with chunk graph: 0.003827 ms
<t> optimize: 24.668446 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 7.861921 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 481.088667 ms
<t> runtime requirements.modules: 0.26724 ms
<t> runtime requirements.chunks: 0.091305 ms
<t> runtime requirements.entries: 0.564567 ms
<t> runtime requirements: 1.140137 ms
<t> hashing: initialize hash: 0.006871 ms
<t> hashing: sort chunks: 0.060627 ms
<t> hashing: hash runtime modules: 1.230192 ms
<t> hashing: hash chunks: 1.487452 ms
<t> hashing: hash digest: 0.023012 ms
<t> hashing: process full hash modules: 0.273595 ms
<t> hashing: 3.216334 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.096776 ms
<t> module assets: 0.196358 ms
<t> create chunk assets: 3.359034 ms
<t> process assets: 5526.948573 ms

LOG from webpack.Compiler
<t> make hook: 6386.210627 ms
<t> finish make hook: 0.107732 ms
<t> finish compilation: 29.778736 ms
<t> seal compilation: 6067.85527 ms
<t> afterCompile hook: 0.108607 ms
<t> emitAssets: 3.853938 ms
<t> emitRecords: 0.079795 ms
<t> done hook: 126.139918 ms
<t> beginIdle: 0.415279 ms

LOG from webpack.Compilation.ModuleProfile
     | 66 ms (parallelism 3.4) resolve to new modules > ./src/main.ts
     | 45 ms (parallelism 2.9) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 149 ms (parallelism 7.1) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 66 ms (parallelism 11.3) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 94 ms (parallelism 12.9) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/cdk.mjs
    820 ms resolve to new modules
     | 66 ms (parallelism 11.3) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    87 ms resolve to existing modules
<i>  |  | 221 ms (parallelism 5.5) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 221 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 197 ms (parallelism 5.8) build modules > ./src/styles.scss?ngGlobalStyle
     | 197 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 185 ms (parallelism 5.9) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 115 ms (parallelism 1.9) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 176 ms (parallelism 7.3) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 208 ms (parallelism 7.2) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
<i>  |  | 209 ms (parallelism 7.2) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
<i>  |  | 207 ms (parallelism 7.2) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 174 ms (parallelism 7.2) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 52 ms (parallelism 12) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 34 ms (parallelism 14.5) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 99 ms (parallelism 12.6) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 69 ms (parallelism 12.9) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 94 ms (parallelism 12.7) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 102 ms (parallelism 12.5) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 93 ms (parallelism 12.7) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 91 ms (parallelism 12.7) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     |  | 97 ms (parallelism 12.3) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 74 ms (parallelism 16.6) build modules > ./node_modules/@angular/cdk/fesm2022/bidi.mjs
     |  | 75 ms (parallelism 16.4) build modules > ./node_modules/@angular/cdk/fesm2022/platform.mjs
     |  | 74 ms (parallelism 16.6) build modules > ./node_modules/@angular/cdk/fesm2022/keycodes.mjs
<i>  | 2237 ms build modules > 22 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 192 ms (parallelism 5.8) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 98 ms (parallelism 12.4) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 98 ms (parallelism 12.4) build modules > ./node_modules/rxjs/dist/esm/index.js
     | 1566 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 127 ms (parallelism 6.3) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 127 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 264 ms (parallelism 5.1) build modules > ./src/main.ts
     |  | 148 ms (parallelism 7.1) build modules > ./src/app/app.component.ts
     |  | 44 ms (parallelism 12.5) build modules > ./src/app/name-editor/name-editor.component.ts
<i>  | 475 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i> 4854 ms build modules
+ 12 hidden lines

LOG from webpack.ResolverCachePlugin
    32% really resolved (563 real resolves with 0 cached but invalid, 1217 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.186265 ms
<t> figure out provided exports: 10.239793 ms
    95% of exports of modules have been determined (15 no declared exports, 259 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 1.82695 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 11.542886 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.182331 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.66322 ms
<t> trace exports usage in graph: 8.689823 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.594467 ms
<t> visitModules: visiting: 2.425279 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.508282 ms
<t> connectChunkGroups: 0.002805 ms
<t> cleanup: 0.001273 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.043323 ms
<t> modules: 2.513593 ms
<t> queue: 0.007567 ms
<t> maxSize: 0.049105 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.084741 ms
<t> sort relevant modules: 0.14416 ms
<t> find modules to concatenate: 5.358561 ms
<t> sort concat configurations: 0.039647 ms
<t> create concatenated modules: 5.386903 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 184.018182 ms
<t> optimize asset: polyfills.js: 765.855589 ms
<t> optimize asset: main.js: 4750.064203 ms
<t> optimize js assets: 4837.637106 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 9.118202 ms
<t> optimize css assets: 9.747169 ms

LOG from webpack.FileSystemInfo
    825 new snapshots created
    0% root snapshot uncached (0 / 1217)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 134 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3440/4082) entries shared via 3 shared snapshots (561 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 57% (223/389) entries shared via 11 shared snapshots (29 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 22% (267/1203) entries shared via 14 shared snapshots (45 times referenced)
    Managed files snapshot optimization: 79% (3342/4220) entries shared via 184 shared snapshots (759 times referenced)
    Managed missing snapshot optimization: 89% (4027/4500) entries shared via 196 shared snapshots (776 times referenced)

2023-10-25 15:05:32: webpack 5.88.2 compiled in 14454 ms (efb5c0dd2ba1ad1c)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1193.0915479999999 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 44.523771 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1136 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.895693 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 1.916972 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 2.825345 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.586719 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 1.828173 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/animations/fesm2022/browser.mjs': 1.025316 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 2.376083 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/operators|request=|../internal/operators/bufferWhen': 1.052448 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/observable/ConnectableObservable.js': 1.590683 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators|request=|../util/mapOneOrManyArgs': 2.057683 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|bdcffb4806b02a7f|runtime': 11.173308 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 6.129902 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 196.559638 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1136 items, 1 files, 39 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 341.15 kB |                85.27 kB
styles.css          | styles        |  82.22 kB |                 8.09 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 457.27 kB |               104.56 kB

Build at: 2023-10-25T19:05:34.986Z - Hash: efb5c0dd2ba1ad1c - Time: 16634ms
Done in 18.45s.
```
Wed Oct 25 03:05:53 PM EDT 2023
yarn version v1.22.19
info Current version: 0.0.172
info New version: 0.0.173
Done in 0.12s.
