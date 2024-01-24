Wed Jan 24 12:03:48 PM EST 2024

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.0Gi       1.4Gi       313Mi        12Gi        13Gi
Swap:          8.0Gi       512Ki       8.0Gi
System Storage
788M	.
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
    

Angular CLI: 17.1.0
Node: 20.11.0
Package Manager: yarn 1.22.21
OS: linux x64

Angular: 17.1.0
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1701.0
@angular-devkit/build-angular   17.1.0
@angular-devkit/core            17.1.0
@angular-devkit/schematics      17.1.0
@schematics/angular             17.1.0
rxjs                            7.8.0
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.51s.
yarn install v1.22.21
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.32s.
```
```bash
Latest version:     1.0.30001579
Installed version:  1.0.30001579
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.21
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/17.1.1/angular-webpack/5abf63f02f16a7ea33a6e30b5083452f576de9df.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/17.1.1/angular-webpack/5abf63f02f16a7ea33a6e30b5083452f576de9df/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 2491.715127 ms
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
    1872 ms (resolving: 43 ms, restoring: 1 ms, integration: 0 ms, building: 1828 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 81.5 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 81.5 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [554] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1959 ms (resolving: 38 ms, restoring: 0 ms, integration: 1 ms, building: 1920 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1856 ms (resolving: 39 ms, restoring: 1 ms, integration: 0 ms, building: 1816 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.620998 ms
<t> runtime requirements.chunks: 0.634429 ms
<t> runtime requirements.entries: 2.564366 ms
<t> runtime requirements.modules: 0.045319 ms
<t> runtime requirements.chunks: 0.027323 ms
<t> runtime requirements.entries: 0.237184 ms
<t> finish module profiles: 9.557264 ms
<t> compute affected modules: 0.006842 ms
<t> finish modules: 25.47312 ms
<t> report dependency errors and warnings: 7.944385 ms
<t> optimize dependencies: 19.886362 ms
<t> create chunks: 6.379242 ms
<t> compute affected modules with chunk graph: 0.00425 ms
<t> optimize: 35.609531 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 11.071078 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 616.375744 ms
<t> runtime requirements.modules: 0.267861 ms
<t> runtime requirements.chunks: 0.1311 ms
<t> runtime requirements.entries: 0.574178 ms
<t> runtime requirements: 1.194557 ms
<t> hashing: initialize hash: 0.007236 ms
<t> hashing: sort chunks: 0.059626 ms
<t> hashing: hash runtime modules: 1.283632 ms
<t> hashing: hash chunks: 1.478962 ms
<t> hashing: hash digest: 0.021856 ms
<t> hashing: process full hash modules: 0.254628 ms
<t> hashing: 3.225443 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.077734 ms
<t> module assets: 0.18933 ms
<t> create chunk assets: 3.591051 ms
<t> process assets: 5538.6070660000005 ms

LOG from webpack.Compiler
<t> make hook: 8456.452703 ms
<t> finish make hook: 0.13902 ms
<t> finish compilation: 43.039045 ms
<t> seal compilation: 6238.787409 ms
<t> afterCompile hook: 0.106178 ms
<t> emitAssets: 4.874777 ms
<t> emitRecords: 0.090018 ms
<t> done hook: 155.82546 ms
<t> beginIdle: 0.430574 ms

LOG from webpack.Compilation.ModuleProfile
     | 82 ms (parallelism 3.3) resolve to new modules > ./src/main.ts
     | 77 ms (parallelism 3.2) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 160 ms (parallelism 8) resolve to new modules > ./src/app/name-editor/name-editor.component.ts
<i>  | 249 ms (parallelism 9.2) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 46 ms (parallelism 12) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/bidi.mjs
     | 46 ms (parallelism 12) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/platform.mjs
     | 46 ms (parallelism 12) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     | 46 ms (parallelism 12) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/keycodes.mjs
     | 72 ms (parallelism 13.9) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/cdk.mjs
<i> 1330 ms resolve to new modules
<i>  | 249 ms (parallelism 9.2) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
<i> 310 ms resolve to existing modules
<i>  |  | 342 ms (parallelism 5.6) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 342 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 311 ms (parallelism 5.8) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 311 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 294 ms (parallelism 5.9) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 140 ms (parallelism 2.2) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
<i>  |  | 202 ms (parallelism 8) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
<i>  |  | 209 ms (parallelism 8) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 280 ms (parallelism 7.4) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
<i>  |  | 208 ms (parallelism 8) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 200 ms (parallelism 8) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 97 ms (parallelism 10.7) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 66 ms (parallelism 9.2) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 64 ms (parallelism 9.2) build modules > ./node_modules/@angular/core/fesm2022/primitives/signals.mjs
     |  | 106 ms (parallelism 10.5) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 128 ms (parallelism 10.9) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 131 ms (parallelism 11) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 129 ms (parallelism 10.9) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 132 ms (parallelism 11.5) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
<i>  | 2420 ms build modules > 23 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 317 ms (parallelism 5.8) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 110 ms (parallelism 11.9) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 109 ms (parallelism 11.9) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
<i>  | 2004 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 418 ms (parallelism 5.2) build modules > ./src/main.ts
     |  | 69 ms (parallelism 11.4) build modules > ./src/app/name-editor/name-editor.component.ts
<i>  | 516 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i>  |  | 230 ms (parallelism 6.2) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 230 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 32 ms (parallelism 7) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 32 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<w> 5863 ms build modules
+ 17 hidden lines

LOG from webpack.ResolverCachePlugin
    32% really resolved (564 real resolves with 0 cached but invalid, 1221 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 2.198352 ms
<t> figure out provided exports: 14.748412 ms
    95% of exports of modules have been determined (15 no declared exports, 260 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 5 additional calculations due to dependencies)
<t> store provided exports into cache: 3.090435 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 18.790399 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 6.739991 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.884971 ms
<t> trace exports usage in graph: 11.406762 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 2.955513 ms
<t> visitModules: visiting: 4.478581 ms
    268 queue items processed (121 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 4.644153 ms
<t> connectChunkGroups: 0.003623 ms
<t> cleanup: 0.001589 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.045591 ms
<t> modules: 3.316818 ms
<t> queue: 0.006345 ms
<t> maxSize: 0.045937 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.378438 ms
<t> sort relevant modules: 0.178884 ms
<t> find modules to concatenate: 6.731035 ms
<t> sort concat configurations: 0.047649 ms
<t> create concatenated modules: 9.173217 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 247.709829 ms
<t> optimize asset: polyfills.js: 771.050883 ms
<t> optimize asset: main.js: 4626.551909 ms
<t> optimize js assets: 4705.485038 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 12.512135 ms
<t> optimize css assets: 13.114195 ms

LOG from webpack.FileSystemInfo
    827 new snapshots created
    0% root snapshot uncached (0 / 1221)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 130 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3446/4090) entries shared via 3 shared snapshots (562 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 61% (236/389) entries shared via 12 shared snapshots (31 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 21% (250/1205) entries shared via 13 shared snapshots (42 times referenced)
    Managed files snapshot optimization: 79% (3333/4227) entries shared via 183 shared snapshots (760 times referenced)
    Managed missing snapshot optimization: 90% (4030/4502) entries shared via 197 shared snapshots (775 times referenced)

2024-01-24 12:04:42: webpack 5.89.0 compiled in 17208 ms (33fdc8827419298a)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 2024.708778 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 65.147916 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1138 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.61857 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 3.082466 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/slide-toggle.mjs': 1.200879 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/progress-spinner.mjs': 1.251472 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 3.339894 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 2.656994 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 3.308202 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/animations/fesm2022/browser.mjs': 1.491974 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 2.901727 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.281969 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/platform.mjs': 1.318206 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/Subscription.js': 1.912288 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/observable/dom/animationFrames.js': 2.513502 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|f284569173ffe980|runtime': 15.429425 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 8.451717 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 284.528194 ms
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

Build at: 2024-01-24T17:04:45.599Z - Hash: 33fdc8827419298a - Time: 20432ms
Done in 22.15s.
```
