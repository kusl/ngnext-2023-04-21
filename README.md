Wed Jan  3 03:18:45 PM EST 2024

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       1.6Gi       3.4Gi       123Mi        10Gi        13Gi
Swap:          8.0Gi       835Mi       7.2Gi
System Storage
830M	.
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
    

Angular CLI: 17.0.8
Node: 20.10.0
Package Manager: yarn 1.22.21
OS: linux x64

Angular: 17.0.8
... animations, cli, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1700.8
@angular-devkit/build-angular   17.0.8
@angular-devkit/core            17.0.8
@angular-devkit/schematics      17.0.8
@angular/cdk                    17.0.4
@angular/material               17.0.4
@schematics/angular             17.0.8
rxjs                            7.8.0
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.50s.
yarn install v1.22.21
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.32s.
```
```bash
Latest version:     1.0.30001572
Installed version:  1.0.30001572
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.21
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/17.0.9/angular-webpack/3fc95c3374ef65e01ec0d782773fea6bf9af856e.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/17.0.9/angular-webpack/3fc95c3374ef65e01ec0d782773fea6bf9af856e/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 2545.104811 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
asset main.js 342 KiB {179} [emitted] (name: main)
asset styles.css 82.9 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 343 KiB = runtime.js 912 bytes main.js 342 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 83.8 KiB = runtime.js 912 bytes styles.css 82.9 KiB
chunk {179} (runtime: runtime) main.js (main) 2.79 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2022/init.mjs + 1 modules [614] 29.9 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 113 modules [596] 2.76 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:15
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1796 ms (resolving: 47 ms, restoring: 1 ms, integration: 0 ms, building: 1748 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 85.5 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 85.5 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [554] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1932 ms (resolving: 42 ms, restoring: 0 ms, integration: 0 ms, building: 1890 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1832 ms (resolving: 43 ms, restoring: 1 ms, integration: 0 ms, building: 1788 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.551193 ms
<t> runtime requirements.chunks: 0.560186 ms
<t> runtime requirements.entries: 2.09137 ms
<t> runtime requirements.modules: 0.036531 ms
<t> runtime requirements.chunks: 0.0218 ms
<t> runtime requirements.entries: 0.187701 ms
<t> finish module profiles: 11.268162 ms
<t> compute affected modules: 0.007814 ms
<t> finish modules: 27.396262 ms
<t> report dependency errors and warnings: 7.590116 ms
<t> optimize dependencies: 14.415889 ms
<t> create chunks: 4.289286 ms
<t> compute affected modules with chunk graph: 0.00458 ms
<t> optimize: 35.238614 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 14.567961 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 596.610868 ms
<t> runtime requirements.modules: 0.274968 ms
<t> runtime requirements.chunks: 0.100838 ms
<t> runtime requirements.entries: 0.592139 ms
<t> runtime requirements: 1.202787 ms
<t> hashing: initialize hash: 0.008657 ms
<t> hashing: sort chunks: 0.06902 ms
<t> hashing: hash runtime modules: 1.25669 ms
<t> hashing: hash chunks: 1.485506 ms
<t> hashing: hash digest: 0.019037 ms
<t> hashing: process full hash modules: 0.24959 ms
<t> hashing: 3.206338 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.075284 ms
<t> module assets: 0.186752 ms
<t> create chunk assets: 3.473312 ms
<t> process assets: 5544.022014 ms

LOG from webpack.Compiler
<t> make hook: 8146.37899 ms
<t> finish make hook: 0.185673 ms
<t> finish compilation: 46.327617 ms
<t> seal compilation: 6219.778266 ms
<t> afterCompile hook: 0.100054 ms
<t> emitAssets: 3.938377 ms
<t> emitRecords: 0.06557 ms
<t> done hook: 148.929017 ms
<t> beginIdle: 0.422268 ms

LOG from webpack.Compilation.ModuleProfile
     | 83 ms (parallelism 3.3) resolve to new modules > ./src/main.ts
     | 59 ms (parallelism 3.1) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 177 ms (parallelism 7.1) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 71 ms (parallelism 13.5) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 49 ms (parallelism 11.1) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/keycodes.mjs
     | 49 ms (parallelism 11.1) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/platform.mjs
     | 75 ms (parallelism 14.1) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/cdk.mjs
    1012 ms resolve to new modules
     | 70 ms (parallelism 13.5) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    132 ms resolve to existing modules
<i>  |  | 338 ms (parallelism 5.6) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 338 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 309 ms (parallelism 5.8) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 309 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 293 ms (parallelism 5.9) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 117 ms (parallelism 2.2) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
<i>  |  | 246 ms (parallelism 7.6) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 244 ms (parallelism 7.6) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
<i>  |  | 246 ms (parallelism 7.6) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
<i>  |  | 243 ms (parallelism 7.6) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
<i>  |  | 242 ms (parallelism 7.6) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 73 ms (parallelism 13.5) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 57 ms (parallelism 9.8) build modules > ./node_modules/@angular/core/fesm2022/primitives/signals.mjs
     |  | 108 ms (parallelism 10.3) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 123 ms (parallelism 11.5) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 120 ms (parallelism 11.4) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 126 ms (parallelism 11.6) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 124 ms (parallelism 11.6) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 129 ms (parallelism 11.9) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
<i>  | 2588 ms build modules > 23 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 301 ms (parallelism 5.8) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 117 ms (parallelism 12.1) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 117 ms (parallelism 12.1) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
<i>  | 2037 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 387 ms (parallelism 5.3) build modules > ./src/main.ts
     |  | 176 ms (parallelism 7.1) build modules > ./src/app/app.component.ts
     |  | 49 ms (parallelism 15.3) build modules > ./src/app/name-editor/name-editor.component.ts
<i>  | 635 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i>  |  | 218 ms (parallelism 6.2) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 218 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 31 ms (parallelism 7) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 31 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<w> 6163 ms build modules
+ 18 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (564 real resolves with 0 cached but invalid, 1268 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 2.164649 ms
<t> figure out provided exports: 17.655472 ms
    95% of exports of modules have been determined (15 no declared exports, 260 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 2.28008 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 13.90866 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 5.528141 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 1.077832 ms
<t> trace exports usage in graph: 7.04589 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 2.020009 ms
<t> visitModules: visiting: 2.979562 ms
    268 queue items processed (121 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 3.089514 ms
<t> connectChunkGroups: 0.003348 ms
<t> cleanup: 0.001503 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.051057 ms
<t> modules: 3.217391 ms
<t> queue: 0.006699 ms
<t> maxSize: 0.044966 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.32165 ms
<t> sort relevant modules: 0.1793 ms
<t> find modules to concatenate: 8.76769 ms
<t> sort concat configurations: 0.046316 ms
<t> create concatenated modules: 7.683421 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 228.663654 ms
<t> optimize asset: polyfills.js: 880.889479 ms
<t> optimize asset: main.js: 4666.93922 ms
<t> optimize js assets: 4745.971596 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 12.072237 ms
<t> optimize css assets: 12.761361 ms

LOG from webpack.FileSystemInfo
    827 new snapshots created
    0% root snapshot uncached (0 / 1268)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 130 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3439/4090) entries shared via 3 shared snapshots (561 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 60% (233/389) entries shared via 11 shared snapshots (31 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 19% (223/1205) entries shared via 11 shared snapshots (39 times referenced)
    Managed files snapshot optimization: 79% (3335/4227) entries shared via 184 shared snapshots (760 times referenced)
    Managed missing snapshot optimization: 86% (3892/4502) entries shared via 194 shared snapshots (775 times referenced)

2024-01-03 15:19:34: webpack 5.89.0 compiled in 16937 ms (2d6a9c317f50aa1d)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1769.647606 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 67.447181 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1138 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.365104 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 3.187891 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/slide-toggle.mjs': 1.382964 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 3.701973 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.548433 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 2.449062 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/a11y.mjs': 1.951607 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/http.mjs': 1.28982 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 3.276073 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.279592 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/observers.mjs': 1.344977 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators/retryWhen.js': 1.974012 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/operators|request=|../internal/operators/windowTime': 2.352478 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|f284569173ffe980|runtime': 15.070758 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 8.457584 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 269.696905 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1138 items, 1 files, 41 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 341.66 kB |                85.84 kB
styles.css          | styles        |  82.94 kB |                 8.15 kB
polyfills.js        | polyfills     |  32.97 kB |                10.63 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 458.46 kB |               105.13 kB

Build at: 2024-01-03T20:19:37.491Z - Hash: 2d6a9c317f50aa1d - Time: 19607ms
Done in 21.40s.
```
Wed Jan  3 03:20:00 PM EST 2024
yarn version v1.22.21
info Current version: 0.0.329
info New version: 0.0.330
Done in 0.12s.
