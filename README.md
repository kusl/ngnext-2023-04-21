Wed May 10 02:37:50 PM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       5.1Gi       2.2Gi       694Mi       7.9Gi       9.1Gi
Swap:          8.0Gi       3.3Gi       4.7Gi
System Storage
897M	.
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
    
Done in 0.57s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.40s.
```
Latest version:     1.0.30001486
Installed version:  1.0.30001486
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001486
Installed version:  1.0.30001486
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.0.0/angular-webpack/b4bc7c344bc4a75eae47ef3f38572e31b2056225.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.0.0/angular-webpack/b4bc7c344bc4a75eae47ef3f38572e31b2056225/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1843.814221 ms
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
chunk {179} (runtime: runtime) main.js (main) 2.56 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2022/init.mjs + 1 modules [564] 38 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 114 modules [670] 2.53 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [583] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    712 ms (resolving: 147 ms, restoring: 0 ms, integration: 0 ms, building: 565 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 115 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 115 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [262] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    723 ms (resolving: 33 ms, restoring: 0 ms, integration: 0 ms, building: 690 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    723 ms (resolving: 111 ms, restoring: 0 ms, integration: 0 ms, building: 612 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.390555 ms
<t> runtime requirements.chunks: 0.454324 ms
<t> runtime requirements.entries: 1.518866 ms
<t> runtime requirements.modules: 0.026645 ms
<t> runtime requirements.chunks: 0.014261 ms
<t> runtime requirements.entries: 0.123911 ms
<t> finish module profiles: 13.483385 ms
<t> compute affected modules: 0.006514 ms
<t> finish modules: 18.741263 ms
<t> report dependency errors and warnings: 4.263055 ms
<t> optimize dependencies: 12.869431 ms
<t> create chunks: 3.455265 ms
<t> compute affected modules with chunk graph: 0.005267 ms
<t> optimize: 31.692205 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 8.031689 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 556.613546 ms
<t> runtime requirements.modules: 0.257537 ms
<t> runtime requirements.chunks: 0.078516 ms
<t> runtime requirements.entries: 0.473467 ms
<t> runtime requirements: 1.183623 ms
<t> hashing: initialize hash: 0.007761 ms
<t> hashing: sort chunks: 0.051612 ms
<t> hashing: hash runtime modules: 1.023163 ms
<t> hashing: hash chunks: 1.18853 ms
<t> hashing: hash digest: 0.023994 ms
<t> hashing: process full hash modules: 0.23154 ms
<t> hashing: 2.626462 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.063346 ms
<t> module assets: 0.165296 ms
<t> create chunk assets: 3.019978 ms
<t> process assets: 8148.921482 ms

LOG from webpack.Compiler
<t> make hook: 4316.956976 ms
<t> finish make hook: 0.185845 ms
<t> finish compilation: 36.538385 ms
<t> seal compilation: 8770.641511 ms
<t> afterCompile hook: 0.104303 ms
<t> emitAssets: 4.170601 ms
<t> emitRecords: 0.061139 ms
<t> done hook: 275.91235 ms
<t> beginIdle: 0.385034 ms

LOG from webpack.Compilation.ModuleProfile
     | 69 ms (parallelism 6.2) resolve to new modules > ./src/main.ts
     | 44 ms (parallelism 2) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 138 ms (parallelism 12.1) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 30 ms (parallelism 18) resolve to new modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     | 30 ms (parallelism 18) resolve to new modules > ./node_modules/@angular/common/fesm2022/http.mjs
     | 33 ms (parallelism 18) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 31 ms (parallelism 17.9) resolve to new modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     | 40 ms (parallelism 17.6) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/cdk.mjs
    789 ms resolve to new modules
     | 138 ms (parallelism 12.1) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    212 ms resolve to existing modules
     |  | 113 ms (parallelism 6.1) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 113 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 46 ms (parallelism 6.6) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 46 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 98 ms (parallelism 6.2) build modules > ./src/styles.scss?ngGlobalStyle
     | 98 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 111 ms (parallelism 5.9) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 155 ms (parallelism 1.7) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 129 ms (parallelism 9) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 132 ms (parallelism 10.8) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 129 ms (parallelism 9.2) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 127 ms (parallelism 8.9) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 126 ms (parallelism 8.9) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 135 ms (parallelism 12.2) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 52 ms (parallelism 15.8) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 33 ms (parallelism 11.9) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 31 ms (parallelism 12) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 61 ms (parallelism 15.1) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 58 ms (parallelism 15.3) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 65 ms (parallelism 15) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 65 ms (parallelism 15) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     | 1495 ms build modules > 22 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 96 ms (parallelism 5.9) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 42 ms (parallelism 16.3) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 41 ms (parallelism 17.1) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     | 344 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 72 ms (parallelism 6.4) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 72 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 149 ms (parallelism 4) build modules > ./src/main.ts
     |  | 118 ms (parallelism 9.4) build modules > ./src/app/name-editor/name-editor.component.ts
     | 280 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i> 2473 ms build modules
+ 21 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (562 real resolves with 0 cached but invalid, 1251 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 4.449912 ms
<t> figure out provided exports: 8.948247 ms
    95% of exports of modules have been determined (15 no declared exports, 258 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 5 additional calculations due to dependencies)
<t> store provided exports into cache: 1.587487 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 9.53737 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 5.982266 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.85295 ms
<t> trace exports usage in graph: 5.540611 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.652139 ms
<t> visitModules: visiting: 2.377699 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.457287 ms
<t> connectChunkGroups: 0.002457 ms
<t> cleanup: 0.0012 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.038541 ms
<t> modules: 2.553177 ms
<t> queue: 0.004736 ms
<t> maxSize: 0.038658 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.308772 ms
<t> sort relevant modules: 0.162068 ms
<t> find modules to concatenate: 7.197182 ms
<t> sort concat configurations: 0.044869 ms
<t> create concatenated modules: 11.383639 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 258.915477 ms
<t> optimize asset: polyfills.js: 666.275403 ms
<t> optimize asset: main.js: 7422.013286 ms
<t> optimize js assets: 7498.895563 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 18.413219 ms
<t> optimize css assets: 23.124162 ms

LOG from webpack.FileSystemInfo
    823 new snapshots created
    0% root snapshot uncached (0 / 1251)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 124 timestamps 22 hashes 22 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3433/4070) entries shared via 3 shared snapshots (560 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 54% (201/374) entries shared via 10 shared snapshots (27 times referenced)
    Managed items info in cache: 77 items
    Managed items snapshot optimization: 21% (248/1194) entries shared via 14 shared snapshots (46 times referenced)
    Managed files snapshot optimization: 79% (3332/4203) entries shared via 182 shared snapshots (759 times referenced)
    Managed missing snapshot optimization: 87% (3895/4498) entries shared via 194 shared snapshots (776 times referenced)

2023-05-10 14:38:32: webpack 5.80.0 compiled in 14952 ms (80c7c316aacbb514)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 696.414312 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 48.886972 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1133 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle|build time': 1.066339 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/animations.mjs': 1.144405 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 3.057681 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.352241 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 3.484707 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.232063 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 3.225473 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 1.703624 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.091169 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/keycodes.mjs': 1.050239 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/firstValueFrom.js': 1.015572 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/operators|request=|../internal/operators/throwIfEmpty': 1.633548 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/scheduler|request=|../util/arrRemove': 2.143356 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|292fab71983e1e33|runtime': 11.31242 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 5.642142 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 280.825109 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1133 items, 1 files, 38 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 337.16 kB |                84.68 kB
styles.css          | styles        | 105.84 kB |                 9.52 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 476.90 kB |               105.39 kB

Build at: 2023-05-10T18:38:35.648Z - Hash: 80c7c316aacbb514 - Time: 17624ms
Done in 19.57s.
```
Wed May 10 02:38:52 PM EDT 2023
yarn version v1.22.19
info Current version: 0.0.27
info New version: 0.0.28
Done in 0.13s.
