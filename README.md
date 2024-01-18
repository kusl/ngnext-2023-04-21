Thu Jan 18 05:11:07 PM EST 2024

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.0Gi       1.5Gi       297Mi        12Gi        13Gi
Swap:          8.0Gi       512Ki       8.0Gi
System Storage
871M	.
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
    

Angular CLI: 17.0.10
Node: 20.11.0
Package Manager: yarn 1.22.21
OS: linux x64

Angular: 17.0.9
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1700.10
@angular-devkit/build-angular   17.0.10
@angular-devkit/core            17.0.10
@angular-devkit/schematics      17.0.10
@angular/cdk                    17.1.0
@angular/cli                    17.0.10
@angular/material               17.1.0
@schematics/angular             17.0.10
rxjs                            7.8.0
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.50s.
yarn install v1.22.21
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.37s.
```
```bash
Latest version:     1.0.30001579
Installed versions: 1.0.30001578, 1.0.30001579
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.21
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/17.1.0/angular-webpack/62746a622956666867a189ce732941b343a251ac.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/17.1.0/angular-webpack/62746a622956666867a189ce732941b343a251ac/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 2585.630277 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
asset main.js 345 KiB {179} [emitted] (name: main)
asset styles.css 79.2 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 346 KiB = runtime.js 912 bytes main.js 345 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 80.1 KiB = runtime.js 912 bytes styles.css 79.2 KiB
chunk {179} (runtime: runtime) main.js (main) 2.81 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2022/init.mjs + 1 modules [614] 29.9 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 113 modules [596] 2.78 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:15
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1815 ms (resolving: 51 ms, restoring: 1 ms, integration: 0 ms, building: 1763 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 81.5 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 81.5 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [554] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    2047 ms (resolving: 46 ms, restoring: 0 ms, integration: 0 ms, building: 2001 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1942 ms (resolving: 46 ms, restoring: 1 ms, integration: 0 ms, building: 1895 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.550281 ms
<t> runtime requirements.chunks: 0.56822 ms
<t> runtime requirements.entries: 2.037889 ms
<t> runtime requirements.modules: 0.036525 ms
<t> runtime requirements.chunks: 0.020436 ms
<t> runtime requirements.entries: 0.192289 ms
<t> finish module profiles: 10.434553 ms
<t> compute affected modules: 0.007329 ms
<t> finish modules: 27.201201 ms
<t> report dependency errors and warnings: 7.71185 ms
<t> optimize dependencies: 14.909265 ms
<t> create chunks: 6.063206 ms
<t> compute affected modules with chunk graph: 0.004097 ms
<t> optimize: 37.892093 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 10.63786 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 626.129366 ms
<t> runtime requirements.modules: 0.278449 ms
<t> runtime requirements.chunks: 0.085195 ms
<t> runtime requirements.entries: 0.553777 ms
<t> runtime requirements: 1.138384 ms
<t> hashing: initialize hash: 0.008403 ms
<t> hashing: sort chunks: 0.048808 ms
<t> hashing: hash runtime modules: 1.232631 ms
<t> hashing: hash chunks: 1.314397 ms
<t> hashing: hash digest: 0.01649 ms
<t> hashing: process full hash modules: 0.233952 ms
<t> hashing: 2.965736 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.072848 ms
<t> module assets: 0.183497 ms
<t> create chunk assets: 3.28177 ms
<t> process assets: 5467.774469 ms

LOG from webpack.Compiler
<t> make hook: 8161.227582 ms
<t> finish make hook: 0.150027 ms
<t> finish compilation: 45.413152 ms
<t> seal compilation: 6173.582257 ms
<t> afterCompile hook: 0.10481 ms
<t> emitAssets: 9.93442 ms
<t> emitRecords: 0.06139 ms
<t> done hook: 136.767055 ms
<t> beginIdle: 0.389887 ms

LOG from webpack.Compilation.ModuleProfile
     | 83 ms (parallelism 3.5) resolve to new modules > ./src/main.ts
     | 46 ms (parallelism 3.8) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 171 ms (parallelism 7.2) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 104 ms (parallelism 8.8) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 87 ms (parallelism 17.1) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/cdk.mjs
    977 ms resolve to new modules
     | 104 ms (parallelism 8.8) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    131 ms resolve to existing modules
<i>  |  | 361 ms (parallelism 5.5) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 361 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 330 ms (parallelism 5.7) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 330 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 300 ms (parallelism 5.8) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 133 ms (parallelism 1.9) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
<i>  |  | 202 ms (parallelism 7.3) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 267 ms (parallelism 6.7) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
<i>  |  | 202 ms (parallelism 7.3) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
<i>  |  | 201 ms (parallelism 7.3) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 200 ms (parallelism 7.3) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 85 ms (parallelism 8.8) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 43 ms (parallelism 12.1) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 120 ms (parallelism 11.9) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 121 ms (parallelism 11.9) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 126 ms (parallelism 11.8) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 113 ms (parallelism 12) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 132 ms (parallelism 11.7) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 84 ms (parallelism 17.6) build modules > ./node_modules/@angular/cdk/fesm2022/bidi.mjs
     |  | 83 ms (parallelism 17.8) build modules > ./node_modules/@angular/cdk/fesm2022/platform.mjs
     |  | 84 ms (parallelism 17.5) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 81 ms (parallelism 18.2) build modules > ./node_modules/@angular/cdk/fesm2022/keycodes.mjs
<i>  | 2623 ms build modules > 23 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 300 ms (parallelism 5.9) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 123 ms (parallelism 11.7) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 117 ms (parallelism 12.5) build modules > ./node_modules/rxjs/dist/esm/index.js
<i>  | 1997 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 224 ms (parallelism 6.1) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 224 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 388 ms (parallelism 5.3) build modules > ./src/main.ts
     |  | 170 ms (parallelism 7.2) build modules > ./src/app/app.component.ts
<i>  | 622 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w> 6188 ms build modules
+ 17 hidden lines

LOG from webpack.ResolverCachePlugin
    32% really resolved (564 real resolves with 0 cached but invalid, 1209 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.413947 ms
<t> figure out provided exports: 18.301096 ms
    95% of exports of modules have been determined (15 no declared exports, 260 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 2.242219 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 14.675899 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 5.90287 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.707868 ms
<t> trace exports usage in graph: 7.444753 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 2.807797 ms
<t> visitModules: visiting: 4.269035 ms
    268 queue items processed (121 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 4.380948 ms
<t> connectChunkGroups: 0.004084 ms
<t> cleanup: 0.001757 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.05808 ms
<t> modules: 3.220459 ms
<t> queue: 0.006257 ms
<t> maxSize: 0.044987 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.307904 ms
<t> sort relevant modules: 0.168 ms
<t> find modules to concatenate: 6.516176 ms
<t> sort concat configurations: 0.039174 ms
<t> create concatenated modules: 9.12566 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 214.244879 ms
<t> optimize asset: polyfills.js: 927.889861 ms
<t> optimize asset: main.js: 4579.304955 ms
<t> optimize js assets: 4655.493049 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 12.142612 ms
<t> optimize css assets: 12.665321 ms

LOG from webpack.FileSystemInfo
    827 new snapshots created
    0% root snapshot uncached (0 / 1209)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 130 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3446/4090) entries shared via 3 shared snapshots (562 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 64% (249/389) entries shared via 12 shared snapshots (33 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 20% (246/1205) entries shared via 12 shared snapshots (41 times referenced)
    Managed files snapshot optimization: 79% (3335/4227) entries shared via 184 shared snapshots (760 times referenced)
    Managed missing snapshot optimization: 90% (4032/4502) entries shared via 197 shared snapshots (775 times referenced)

2024-01-18 17:12:09: webpack 5.89.0 compiled in 16949 ms (33fdc8827419298a)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 2054.906546 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 65.449981 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1138 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.390675 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 3.354375 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/slide-toggle.mjs': 1.175684 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/progress-spinner.mjs': 1.310795 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 3.340316 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 2.509327 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 3.276538 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/http.mjs': 1.521254 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 2.798978 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.214988 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/platform.mjs': 1.313984 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/Subscription.js': 1.950903 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/observable/dom/animationFrames.js': 2.489315 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|f284569173ffe980|runtime': 15.264245 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 8.483708 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 289.38186 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1138 items, 1 files, 41 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 344.95 kB |                86.53 kB
styles.css          | styles        |  79.25 kB |                 7.63 kB
polyfills.js        | polyfills     |  32.97 kB |                10.63 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 458.06 kB |               105.30 kB

Build at: 2024-01-18T22:12:12.558Z - Hash: 33fdc8827419298a - Time: 20224ms
Done in 22.07s.
```
Thu Jan 18 05:12:35 PM EST 2024
yarn version v1.22.21
info Current version: 0.0.375
info New version: 0.0.376
Done in 0.12s.
