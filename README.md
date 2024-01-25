Wed Jan 24 10:10:54 PM EST 2024

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.0Gi       1.2Gi       505Mi        11Gi        12Gi
Swap:          8.0Gi       2.5Mi       8.0Gi
System Storage
790M	.
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
    

Angular CLI: 17.1.1
Node: 20.11.0
Package Manager: yarn 1.22.21
OS: linux x64

Angular: 17.1.0
... animations, cdk, common, compiler, compiler-cli, core, forms
... localize, material, platform-browser
... platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1701.1
@angular-devkit/build-angular   17.1.1
@angular-devkit/core            17.1.1
@angular-devkit/schematics      17.1.1
@angular/cli                    17.1.1
@schematics/angular             17.1.1
rxjs                            7.8.0
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.85s.
yarn install v1.22.21
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.59s.
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
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/17.1.1/angular-webpack/33a3f2da4d5e3d496b4125da6a257ae81b1e4823.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/17.1.1/angular-webpack/33a3f2da4d5e3d496b4125da6a257ae81b1e4823/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 3570.31149 ms
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
    1955 ms (resolving: 53 ms, restoring: 1 ms, integration: 0 ms, building: 1901 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 81.5 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 81.5 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [554] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    2238 ms (resolving: 46 ms, restoring: 0 ms, integration: 0 ms, building: 2192 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    2114 ms (resolving: 47 ms, restoring: 1 ms, integration: 0 ms, building: 2066 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.672486 ms
<t> runtime requirements.chunks: 0.694363 ms
<t> runtime requirements.entries: 2.491871 ms
<t> runtime requirements.modules: 0.048119 ms
<t> runtime requirements.chunks: 0.030017 ms
<t> runtime requirements.entries: 0.325605 ms
<t> finish module profiles: 16.087406 ms
<t> compute affected modules: 0.008518 ms
<t> finish modules: 45.244287 ms
<t> report dependency errors and warnings: 11.544077 ms
<t> optimize dependencies: 17.14327 ms
<t> create chunks: 5.495012 ms
<t> compute affected modules with chunk graph: 0.00526 ms
<t> optimize: 44.749811 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 11.922291 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 763.465389 ms
<t> runtime requirements.modules: 0.319349 ms
<t> runtime requirements.chunks: 0.109504 ms
<t> runtime requirements.entries: 0.694139 ms
<t> runtime requirements: 1.399146 ms
<t> hashing: initialize hash: 0.009884 ms
<t> hashing: sort chunks: 0.061115 ms
<t> hashing: hash runtime modules: 1.524886 ms
<t> hashing: hash chunks: 1.656983 ms
<t> hashing: hash digest: 0.022947 ms
<t> hashing: process full hash modules: 0.309415 ms
<t> hashing: 3.733003 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.094465 ms
<t> module assets: 0.218659 ms
<t> create chunk assets: 4.117132 ms
<t> process assets: 7328.324289 ms

LOG from webpack.Compiler
<t> make hook: 8262.461371 ms
<t> finish make hook: 0.209646 ms
<t> finish compilation: 72.957613 ms
<t> seal compilation: 8183.071426 ms
<t> afterCompile hook: 0.116168 ms
<t> emitAssets: 5.530155 ms
<t> emitRecords: 0.131164 ms
<t> done hook: 233.256294 ms
<t> beginIdle: 0.625023 ms

LOG from webpack.Compilation.ModuleProfile
     | 99 ms (parallelism 3.4) resolve to new modules > ./src/main.ts
     | 37 ms (parallelism 2) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
<i>  | 216 ms (parallelism 8.9) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 60 ms (parallelism 15.6) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     | 60 ms (parallelism 15.6) resolve to new modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     | 56 ms (parallelism 15.7) resolve to new modules > ./node_modules/@angular/common/fesm2022/http.mjs
     | 61 ms (parallelism 15.5) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 41 ms (parallelism 11) resolve to new modules > ./node_modules/rxjs/dist/esm/index.js
     | 41 ms (parallelism 11) resolve to new modules > ./node_modules/rxjs/dist/esm/operators/index.js
     | 93 ms (parallelism 14.3) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/cdk.mjs
<i> 1188 ms resolve to new modules
     | 37 ms (parallelism 16.7) resolve to existing modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     | 55 ms (parallelism 15.9) resolve to existing modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
<i>  | 215 ms (parallelism 8.9) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
<i> 333 ms resolve to existing modules
<i>  |  | 387 ms (parallelism 5.7) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 387 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 351 ms (parallelism 5.9) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 351 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 344 ms (parallelism 5.9) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
<i>  |  | 256 ms (parallelism 1.8) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
<i>  |  | 217 ms (parallelism 8.9) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
<i>  |  | 216 ms (parallelism 8.9) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
<i>  |  | 216 ms (parallelism 8.9) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
<i>  |  | 220 ms (parallelism 9) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 254 ms (parallelism 11) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
<i>  |  | 231 ms (parallelism 11.3) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 96 ms (parallelism 14) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 57 ms (parallelism 11.3) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 92 ms (parallelism 13.6) build modules > ./node_modules/@angular/core/fesm2022/primitives/signals.mjs
     |  | 126 ms (parallelism 13) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 131 ms (parallelism 13.1) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 128 ms (parallelism 13) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 134 ms (parallelism 13.3) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 81 ms (parallelism 14.4) build modules > ./node_modules/@angular/cdk/fesm2022/bidi.mjs
     |  | 82 ms (parallelism 14.4) build modules > ./node_modules/@angular/cdk/fesm2022/platform.mjs
     |  | 81 ms (parallelism 14.4) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 46 ms (parallelism 12.6) build modules > ./node_modules/@angular/cdk/fesm2022/keycodes.mjs
<i>  | 3018 ms build modules > 23 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 314 ms (parallelism 6.1) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 84 ms (parallelism 14.4) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 82 ms (parallelism 14.4) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
<i>  | 728 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 285 ms (parallelism 6.1) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 285 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 39 ms (parallelism 6.9) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 39 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 404 ms (parallelism 5.5) build modules > ./src/main.ts
<i>  |  | 214 ms (parallelism 8.9) build modules > ./src/app/name-editor/name-editor.component.ts
<i>  | 641 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w> 5458 ms build modules
+ 13 hidden lines

LOG from webpack.ResolverCachePlugin
    32% really resolved (564 real resolves with 0 cached but invalid, 1219 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 2.536825 ms
<t> figure out provided exports: 27.06907 ms
    95% of exports of modules have been determined (15 no declared exports, 260 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 5 additional calculations due to dependencies)
<t> store provided exports into cache: 4.31445 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 22.354069 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 6.552015 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.992115 ms
<t> trace exports usage in graph: 8.905474 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 2.632628 ms
<t> visitModules: visiting: 4.001908 ms
    268 queue items processed (121 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 4.092077 ms
<t> connectChunkGroups: 0.00496 ms
<t> cleanup: 0.002142 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.101425 ms
<t> modules: 4.009448 ms
<t> queue: 0.00786 ms
<t> maxSize: 0.051031 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.727072 ms
<t> sort relevant modules: 0.208298 ms
<t> find modules to concatenate: 7.936494 ms
<t> sort concat configurations: 0.051921 ms
<t> create concatenated modules: 14.066962 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 298.684918 ms
<t> optimize asset: polyfills.js: 1183.780894 ms
<t> optimize asset: main.js: 6128.999842 ms
<t> optimize js assets: 6245.144201 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 15.10587 ms
<t> optimize css assets: 15.749702 ms

LOG from webpack.FileSystemInfo
    827 new snapshots created
    0% root snapshot uncached (0 / 1219)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 130 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3446/4090) entries shared via 3 shared snapshots (562 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 54% (212/389) entries shared via 12 shared snapshots (27 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 22% (260/1205) entries shared via 16 shared snapshots (48 times referenced)
    Managed files snapshot optimization: 79% (3330/4224) entries shared via 182 shared snapshots (759 times referenced)
    Managed missing snapshot optimization: 90% (4032/4502) entries shared via 197 shared snapshots (775 times referenced)

2024-01-24 22:11:55: webpack 5.89.0 compiled in 20060 ms (16b00aaf03c293eb)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 2738.296099 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 80.245569 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1138 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/slide-toggle.mjs': 1.462716 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/progress-spinner.mjs': 1.374503 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 3.890223 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 5.740857 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/app/name-editor/name-editor.component.ts': 1.122821 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 2.998844 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 2.728811 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 3.646558 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/a11y.mjs': 2.099528 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/animations/fesm2022/browser.mjs': 1.23954 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/http.mjs': 1.540707 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 3.508867 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.507335 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/platform.mjs': 1.559603 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/Subscription.js': 3.020166 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|f284569173ffe980|runtime': 18.031818 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 10.273419 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 341.613717 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1138 items, 1 files, 41 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 344.98 kB |                86.58 kB
styles.css          | styles        |  79.25 kB |                 7.63 kB
polyfills.js        | polyfills     |  32.97 kB |                10.63 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 458.09 kB |               105.35 kB

Build at: 2024-01-25T03:11:59.194Z - Hash: 16b00aaf03c293eb - Time: 24165ms
Done in 26.89s.
```
