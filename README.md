Wed Nov  1 07:17:49 AM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       1.7Gi       2.5Gi       241Mi        11Gi        12Gi
Swap:          8.0Gi       0.0Ki       8.0Gi
System Storage
1.3G	.
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
    

Angular CLI: 16.2.8
Node: 20.9.0 (Unsupported)
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.11
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.8
@angular-devkit/build-angular   16.2.8
@angular-devkit/core            16.2.8
@angular-devkit/schematics      16.2.8
@angular/cdk                    16.2.10
@angular/cli                    16.2.8
@angular/material               16.2.10
@schematics/angular             16.2.8
rxjs                            7.8.0
typescript                      5.0.4
zone.js                         0.13.0
    
Warning: The current version of Node (20.9.0) is not supported by Angular.
Done in 0.58s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.32s.
```
Latest version:     1.0.30001559
Installed version:  1.0.30001559
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001559
Installed version:  1.0.30001559
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.2.9/angular-webpack/84edd392fd8bcb33be0309c337393d36fdf74699.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.2.9/angular-webpack/84edd392fd8bcb33be0309c337393d36fdf74699/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1966.321935 ms
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
    977 ms (resolving: 32 ms, restoring: 0 ms, integration: 0 ms, building: 945 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 84.2 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 84.2 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [554] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1154 ms (resolving: 29 ms, restoring: 0 ms, integration: 0 ms, building: 1125 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1078 ms (resolving: 30 ms, restoring: 0 ms, integration: 0 ms, building: 1048 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.383477 ms
<t> runtime requirements.chunks: 0.424268 ms
<t> runtime requirements.entries: 1.442162 ms
<t> runtime requirements.modules: 0.02567 ms
<t> runtime requirements.chunks: 0.01467 ms
<t> runtime requirements.entries: 0.156007 ms
<t> finish module profiles: 5.981698 ms
<t> compute affected modules: 0.005095 ms
<t> finish modules: 14.862102 ms
<t> report dependency errors and warnings: 4.605387 ms
<t> optimize dependencies: 10.06311 ms
<t> create chunks: 3.145804 ms
<t> compute affected modules with chunk graph: 0.003675 ms
<t> optimize: 24.626804 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 6.863911 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 389.898961 ms
<t> runtime requirements.modules: 0.255282 ms
<t> runtime requirements.chunks: 0.085251 ms
<t> runtime requirements.entries: 0.490959 ms
<t> runtime requirements: 1.048996 ms
<t> hashing: initialize hash: 0.007467 ms
<t> hashing: sort chunks: 0.059531 ms
<t> hashing: hash runtime modules: 1.062044 ms
<t> hashing: hash chunks: 1.22461 ms
<t> hashing: hash digest: 0.016356 ms
<t> hashing: process full hash modules: 0.210835 ms
<t> hashing: 2.678164 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.066793 ms
<t> module assets: 0.154747 ms
<t> create chunk assets: 2.787521 ms
<t> process assets: 3938.757686 ms

LOG from webpack.Compiler
<t> make hook: 5708.404062 ms
<t> finish make hook: 0.095131 ms
<t> finish compilation: 25.494644 ms
<t> seal compilation: 4381.892625 ms
<t> afterCompile hook: 0.096553 ms
<t> emitAssets: 3.964681 ms
<t> emitRecords: 0.071294 ms
<t> done hook: 102.191725 ms
<t> beginIdle: 0.357328 ms

LOG from webpack.Compilation.ModuleProfile
     | 85 ms (parallelism 2.9) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 140 ms (parallelism 7.2) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 70 ms (parallelism 9.7) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 33 ms (parallelism 13.8) resolve to new modules > ./node_modules/rxjs/dist/esm/index.js
     | 33 ms (parallelism 13.8) resolve to new modules > ./node_modules/rxjs/dist/esm/operators/index.js
     | 86 ms (parallelism 12.8) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/cdk.mjs
    775 ms resolve to new modules
     | 44 ms (parallelism 11.2) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    62 ms resolve to existing modules
<i>  |  | 212 ms (parallelism 5.3) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 212 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 186 ms (parallelism 5.6) build modules > ./src/styles.scss?ngGlobalStyle
     | 186 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 165 ms (parallelism 5.8) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 175 ms (parallelism 7) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 218 ms (parallelism 6.5) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 171 ms (parallelism 7) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 174 ms (parallelism 6.9) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 170 ms (parallelism 7) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 65 ms (parallelism 10.6) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 34 ms (parallelism 13.5) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 102 ms (parallelism 12.2) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 104 ms (parallelism 12.2) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 97 ms (parallelism 12.3) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 93 ms (parallelism 12.3) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 96 ms (parallelism 12.3) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 77 ms (parallelism 12.9) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     |  | 87 ms (parallelism 12.6) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 67 ms (parallelism 16.7) build modules > ./node_modules/@angular/cdk/fesm2022/bidi.mjs
     |  | 67 ms (parallelism 16.9) build modules > ./node_modules/@angular/cdk/fesm2022/platform.mjs
     |  | 67 ms (parallelism 16.8) build modules > ./node_modules/@angular/cdk/fesm2022/keycodes.mjs
<i>  | 2059 ms build modules > 22 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 160 ms (parallelism 5.9) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 83 ms (parallelism 13.2) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 86 ms (parallelism 12.8) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     | 1319 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 216 ms (parallelism 5.3) build modules > ./src/main.ts
     |  | 139 ms (parallelism 7.1) build modules > ./src/app/app.component.ts
<i>  | 404 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
     |  | 109 ms (parallelism 6.3) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 109 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i> 4317 ms build modules
+ 14 hidden lines

LOG from webpack.ResolverCachePlugin
    32% really resolved (563 real resolves with 0 cached but invalid, 1201 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 0.993376 ms
<t> figure out provided exports: 8.686979 ms
    95% of exports of modules have been determined (15 no declared exports, 259 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 1.662929 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 10.28147 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.160059 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.691755 ms
<t> trace exports usage in graph: 4.708037 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.457483 ms
<t> visitModules: visiting: 2.214234 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.289239 ms
<t> connectChunkGroups: 0.002517 ms
<t> cleanup: 0.001172 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.044849 ms
<t> modules: 2.253795 ms
<t> queue: 0.00457 ms
<t> maxSize: 0.029373 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 3.567893 ms
<t> sort relevant modules: 0.1929 ms
<t> find modules to concatenate: 4.866994 ms
<t> sort concat configurations: 0.039852 ms
<t> create concatenated modules: 5.040277 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 153.412557 ms
<t> optimize asset: polyfills.js: 595.565574 ms
<t> optimize asset: main.js: 3212.621074 ms
<t> optimize js assets: 3294.338574 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 9.240008 ms
<t> optimize css assets: 9.949372 ms

LOG from webpack.FileSystemInfo
    825 new snapshots created
    0% root snapshot uncached (0 / 1201)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 134 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3433/4082) entries shared via 3 shared snapshots (560 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 62% (243/389) entries shared via 12 shared snapshots (32 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 20% (245/1203) entries shared via 12 shared snapshots (42 times referenced)
    Managed files snapshot optimization: 79% (3342/4220) entries shared via 184 shared snapshots (759 times referenced)
    Managed missing snapshot optimization: 89% (4009/4500) entries shared via 194 shared snapshots (779 times referenced)

2023-11-01 07:18:32: webpack 5.88.2 compiled in 12067 ms (d5e7e8d7bcf43ef6)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1032.1471 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 42.456429 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1136 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle': 1.035875 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.879284 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 1.75126 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/slide-toggle.mjs': 1.119623 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 2.593338 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.120942 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 1.702525 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/a11y.mjs': 1.39823 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 2.807494 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/observable/ConnectableObservable.js': 1.566486 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators|request=|../util/mapOneOrManyArgs': 1.982811 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|bdcffb4806b02a7f|runtime': 10.585582 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 5.775431 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 203.853119 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1136 items, 1 files, 39 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 341.16 kB |                85.33 kB
styles.css          | styles        |  82.22 kB |                 8.09 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 457.27 kB |               104.62 kB

Build at: 2023-11-01T11:18:34.868Z - Hash: d5e7e8d7bcf43ef6 - Time: 14103ms
Done in 15.90s.
```
Wed Nov  1 07:18:53 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.188
info New version: 0.0.189
Done in 0.12s.
