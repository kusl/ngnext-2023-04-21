Sat Jan  6 05:09:06 PM EST 2024

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       1.7Gi       2.8Gi       288Mi        11Gi        13Gi
Swap:          8.0Gi       646Mi       7.4Gi
System Storage
834M	.
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
    

Angular CLI: 17.0.9
Node: 20.10.0
Package Manager: yarn 1.22.21
OS: linux x64

Angular: 17.0.8
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1700.9
@angular-devkit/build-angular   17.0.9
@angular-devkit/core            17.0.9
@angular-devkit/schematics      17.0.9
@angular/cdk                    17.0.4
@angular/cli                    17.0.9
@angular/material               17.0.4
@schematics/angular             17.0.9
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
Latest version:     1.0.30001574
Installed version:  1.0.30001572
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
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/17.0.9/angular-webpack/c76b62392cbef2704ca219c9bb372a1fc982ce16.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/17.0.9/angular-webpack/c76b62392cbef2704ca219c9bb372a1fc982ce16/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 2440.866559 ms
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
    1794 ms (resolving: 45 ms, restoring: 1 ms, integration: 0 ms, building: 1748 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 85.5 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 85.5 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [554] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    2013 ms (resolving: 41 ms, restoring: 0 ms, integration: 0 ms, building: 1972 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1915 ms (resolving: 42 ms, restoring: 1 ms, integration: 0 ms, building: 1872 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.558381 ms
<t> runtime requirements.chunks: 0.573018 ms
<t> runtime requirements.entries: 2.064132 ms
<t> runtime requirements.modules: 0.036311 ms
<t> runtime requirements.chunks: 0.022133 ms
<t> runtime requirements.entries: 0.186251 ms
<t> finish module profiles: 11.913491 ms
<t> compute affected modules: 0.007005 ms
<t> finish modules: 26.754764 ms
<t> report dependency errors and warnings: 7.589144 ms
<t> optimize dependencies: 14.235843 ms
<t> create chunks: 4.714712 ms
<t> compute affected modules with chunk graph: 0.004443 ms
<t> optimize: 35.488292 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 13.503734 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 635.23125 ms
<t> runtime requirements.modules: 0.327084 ms
<t> runtime requirements.chunks: 0.091729 ms
<t> runtime requirements.entries: 0.568535 ms
<t> runtime requirements: 1.216259 ms
<t> hashing: initialize hash: 0.00808 ms
<t> hashing: sort chunks: 0.060412 ms
<t> hashing: hash runtime modules: 1.214914 ms
<t> hashing: hash chunks: 1.45809 ms
<t> hashing: hash digest: 0.020335 ms
<t> hashing: process full hash modules: 0.240602 ms
<t> hashing: 3.116844 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.071236 ms
<t> module assets: 0.183343 ms
<t> create chunk assets: 3.334527 ms
<t> process assets: 5556.647146 ms

LOG from webpack.Compiler
<t> make hook: 8534.430262 ms
<t> finish make hook: 0.138587 ms
<t> finish compilation: 46.320424 ms
<t> seal compilation: 6269.806828 ms
<t> afterCompile hook: 0.118543 ms
<t> emitAssets: 8.498529 ms
<t> emitRecords: 0.064828 ms
<t> done hook: 128.548475 ms
<t> beginIdle: 0.429522 ms

LOG from webpack.Compilation.ModuleProfile
     | 78 ms (parallelism 3.4) resolve to new modules > ./src/main.ts
     | 36 ms (parallelism 2.5) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
<i>  | 201 ms (parallelism 7.1) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 119 ms (parallelism 8.3) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 39 ms (parallelism 16) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/bidi.mjs
     | 39 ms (parallelism 16) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/platform.mjs
     | 39 ms (parallelism 16) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/keycodes.mjs
     | 48 ms (parallelism 23.2) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/cdk.mjs
<i> 1071 ms resolve to new modules
     | 41 ms (parallelism 16) resolve to existing modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     | 118 ms (parallelism 8.3) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    185 ms resolve to existing modules
<i>  |  | 349 ms (parallelism 5.7) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 349 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 320 ms (parallelism 5.9) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 320 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 287 ms (parallelism 6) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 131 ms (parallelism 2.2) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
<i>  |  | 266 ms (parallelism 7.8) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 245 ms (parallelism 7.3) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
<i>  |  | 266 ms (parallelism 7.8) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
<i>  |  | 265 ms (parallelism 7.8) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
<i>  |  | 264 ms (parallelism 7.8) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 115 ms (parallelism 9) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 51 ms (parallelism 10.6) build modules > ./node_modules/@angular/core/fesm2022/primitives/signals.mjs
     |  | 59 ms (parallelism 10.3) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 61 ms (parallelism 9.4) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 128 ms (parallelism 11.9) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 108 ms (parallelism 14.9) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 125 ms (parallelism 11.9) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 132 ms (parallelism 11.8) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 65 ms (parallelism 20.2) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
<i>  | 2609 ms build modules > 23 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 291 ms (parallelism 6) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 125 ms (parallelism 11.9) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 128 ms (parallelism 11.8) build modules > ./node_modules/rxjs/dist/esm/index.js
<i>  | 2085 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 265 ms (parallelism 6.1) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 265 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 30 ms (parallelism 7) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 30 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 388 ms (parallelism 5.3) build modules > ./src/main.ts
     |  | 200 ms (parallelism 7.1) build modules > ./src/app/app.component.ts
     |  | 73 ms (parallelism 8.6) build modules > ./src/app/name-editor/name-editor.component.ts
<i>  | 681 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w> 6352 ms build modules
+ 5 hidden lines

LOG from webpack.ResolverCachePlugin
    32% really resolved (564 real resolves with 0 cached but invalid, 1221 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.409958 ms
<t> figure out provided exports: 13.737847 ms
    95% of exports of modules have been determined (15 no declared exports, 260 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 6.342688 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 23.303894 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 5.671218 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.789664 ms
<t> trace exports usage in graph: 7.159276 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 2.282229 ms
<t> visitModules: visiting: 3.402394 ms
    268 queue items processed (121 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 3.518043 ms
<t> connectChunkGroups: 0.003697 ms
<t> cleanup: 0.001871 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.046279 ms
<t> modules: 3.332434 ms
<t> queue: 0.006808 ms
<t> maxSize: 0.048418 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.358297 ms
<t> sort relevant modules: 0.178115 ms
<t> find modules to concatenate: 6.614452 ms
<t> sort concat configurations: 0.053379 ms
<t> create concatenated modules: 8.756596 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 224.565375 ms
<t> optimize asset: polyfills.js: 883.828043 ms
<t> optimize asset: main.js: 4678.944004 ms
<t> optimize js assets: 4756.344143 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 12.424734 ms
<t> optimize css assets: 13.275318 ms

LOG from webpack.FileSystemInfo
    827 new snapshots created
    0% root snapshot uncached (0 / 1221)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 130 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3439/4090) entries shared via 3 shared snapshots (561 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 62% (243/389) entries shared via 12 shared snapshots (32 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 23% (277/1205) entries shared via 17 shared snapshots (50 times referenced)
    Managed files snapshot optimization: 79% (3331/4224) entries shared via 184 shared snapshots (759 times referenced)
    Managed missing snapshot optimization: 89% (4027/4502) entries shared via 196 shared snapshots (775 times referenced)

2024-01-06 17:09:47: webpack 5.89.0 compiled in 17276 ms (2d6a9c317f50aa1d)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1759.885407 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 65.465315 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1138 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.658195 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 3.15711 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/slide-toggle.mjs': 1.222393 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 3.750637 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 3.607009 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.43467 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/animations/fesm2022/browser.mjs': 1.267444 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/operators/index.js': 2.27284 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.257824 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 1.448069 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/operators|request=|../internal/operators/dematerialize': 1.229031 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/observers.mjs': 2.025713 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/animations/fesm2022/animations.mjs': 2.533065 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|f284569173ffe980|runtime': 15.374282 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 8.751571 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk666': 3.622008 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 277.888129 ms
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

Build at: 2024-01-06T22:09:50.354Z - Hash: 2d6a9c317f50aa1d - Time: 20238ms
Done in 21.93s.
```
Sat Jan  6 05:10:14 PM EST 2024
yarn version v1.22.21
info Current version: 0.0.331
info New version: 0.0.332
Done in 0.12s.
