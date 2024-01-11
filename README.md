Wed Jan 10 06:59:57 PM EST 2024

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.2Gi       1.6Gi       261Mi        12Gi        13Gi
Swap:          8.0Gi       1.2Gi       6.8Gi
System Storage
1.1G	.
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
Node: 20.11.0
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
    
Done in 0.57s.
yarn install v1.22.21
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.39s.
```
```bash
Latest version:     1.0.30001576
Installed version:  1.0.30001576
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.21
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/17.0.10/angular-webpack/27fde4897bbee99b105464415ff302c504b3ff8c.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/17.0.10/angular-webpack/27fde4897bbee99b105464415ff302c504b3ff8c/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 2632.079458 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
asset main.js 341 KiB {179} [emitted] (name: main)
asset styles.css 82 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 342 KiB = runtime.js 912 bytes main.js 341 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 82.9 KiB = runtime.js 912 bytes styles.css 82 KiB
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
    1919 ms (resolving: 43 ms, restoring: 1 ms, integration: 0 ms, building: 1875 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 84.5 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 84.5 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [554] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    2149 ms (resolving: 38 ms, restoring: 0 ms, integration: 0 ms, building: 2111 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    2048 ms (resolving: 39 ms, restoring: 1 ms, integration: 0 ms, building: 2008 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.611129 ms
<t> runtime requirements.chunks: 0.612049 ms
<t> runtime requirements.entries: 2.240106 ms
<t> runtime requirements.modules: 0.041294 ms
<t> runtime requirements.chunks: 0.024131 ms
<t> runtime requirements.entries: 0.200929 ms
<t> finish module profiles: 9.417041 ms
<t> compute affected modules: 0.008038 ms
<t> finish modules: 22.136355 ms
<t> report dependency errors and warnings: 6.541302 ms
<t> optimize dependencies: 17.326249 ms
<t> create chunks: 4.46111 ms
<t> compute affected modules with chunk graph: 0.005304 ms
<t> optimize: 34.217419 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 12.193083 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 792.375501 ms
<t> runtime requirements.modules: 0.299466 ms
<t> runtime requirements.chunks: 0.153779 ms
<t> runtime requirements.entries: 0.640445 ms
<t> runtime requirements: 1.599611 ms
<t> hashing: initialize hash: 0.008998 ms
<t> hashing: sort chunks: 0.069732 ms
<t> hashing: hash runtime modules: 1.414758 ms
<t> hashing: hash chunks: 1.62364 ms
<t> hashing: hash digest: 0.02198 ms
<t> hashing: process full hash modules: 0.287795 ms
<t> hashing: 3.564067 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.087461 ms
<t> module assets: 0.211683 ms
<t> create chunk assets: 5.246963 ms
<t> process assets: 5658.62756 ms

LOG from webpack.Compiler
<t> make hook: 8700.086944 ms
<t> finish make hook: 0.138165 ms
<t> finish compilation: 38.157303 ms
<t> seal compilation: 6532.189221 ms
<t> afterCompile hook: 0.1109 ms
<t> emitAssets: 8.389239 ms
<t> emitRecords: 0.08906 ms
<t> done hook: 163.425908 ms
<t> beginIdle: 0.931621 ms

LOG from webpack.Compilation.ModuleProfile
     | 82 ms (parallelism 3.3) resolve to new modules > ./src/main.ts
     | 46 ms (parallelism 3.8) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
<i>  | 226 ms (parallelism 7.1) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 41 ms (parallelism 17.5) resolve to new modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     | 41 ms (parallelism 17.5) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     | 41 ms (parallelism 17.5) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     | 41 ms (parallelism 17.4) resolve to new modules > ./node_modules/@angular/common/fesm2022/http.mjs
     | 71 ms (parallelism 14.4) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 41 ms (parallelism 17.4) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 119 ms (parallelism 12.8) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/cdk.mjs
<i> 1134 ms resolve to new modules
     | 47 ms (parallelism 16.6) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    101 ms resolve to existing modules
<i>  |  | 377 ms (parallelism 5.6) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 377 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 347 ms (parallelism 5.8) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 347 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 318 ms (parallelism 5.9) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 134 ms (parallelism 1.9) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
<i>  |  | 231 ms (parallelism 7.1) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 215 ms (parallelism 9.4) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
<i>  |  | 226 ms (parallelism 7.1) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
<i>  |  | 230 ms (parallelism 7) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
<i>  |  | 231 ms (parallelism 7) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 51 ms (parallelism 16.3) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 41 ms (parallelism 13.2) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 126 ms (parallelism 12.2) build modules > ./node_modules/@angular/core/fesm2022/primitives/signals.mjs
     |  | 134 ms (parallelism 12.1) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 130 ms (parallelism 12.1) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 126 ms (parallelism 12.2) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 128 ms (parallelism 12.2) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 120 ms (parallelism 12.6) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 122 ms (parallelism 12.8) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 121 ms (parallelism 12.9) build modules > ./node_modules/@angular/cdk/fesm2022/bidi.mjs
     |  | 122 ms (parallelism 12.9) build modules > ./node_modules/@angular/cdk/fesm2022/platform.mjs
     |  | 61 ms (parallelism 14.4) build modules > ./node_modules/@angular/cdk/fesm2022/keycodes.mjs
<i>  | 2877 ms build modules > 23 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 317 ms (parallelism 5.9) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 121 ms (parallelism 12.9) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 122 ms (parallelism 12.9) build modules > ./node_modules/rxjs/dist/esm/index.js
<i>  | 2003 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 407 ms (parallelism 5.4) build modules > ./src/main.ts
     |  | 192 ms (parallelism 7.1) build modules > ./src/app/app.component.ts
<i>  | 647 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i>  |  | 238 ms (parallelism 6.2) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 238 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 35 ms (parallelism 7) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 35 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<w> 6530 ms build modules
+ 10 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (564 real resolves with 0 cached but invalid, 1242 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.384718 ms
<t> figure out provided exports: 13.153803 ms
    95% of exports of modules have been determined (15 no declared exports, 260 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 2.325879 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 15.030332 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 5.550693 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.813561 ms
<t> trace exports usage in graph: 10.298042 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 2.124064 ms
<t> visitModules: visiting: 3.148785 ms
    268 queue items processed (121 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 3.256749 ms
<t> connectChunkGroups: 0.003438 ms
<t> cleanup: 0.001586 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.035957 ms
<t> modules: 3.26184 ms
<t> queue: 0.006586 ms
<t> maxSize: 0.046664 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.345284 ms
<t> sort relevant modules: 0.170281 ms
<t> find modules to concatenate: 6.89498 ms
<t> sort concat configurations: 0.05016 ms
<t> create concatenated modules: 7.132243 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 219.000495 ms
<t> optimize asset: polyfills.js: 932.505077 ms
<t> optimize asset: main.js: 4739.946168 ms
<t> optimize js assets: 4829.292528 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 10.901765 ms
<t> optimize css assets: 11.632461 ms

LOG from webpack.FileSystemInfo
    827 new snapshots created
    0% root snapshot uncached (0 / 1242)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 130 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3439/4090) entries shared via 3 shared snapshots (561 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 64% (248/389) entries shared via 12 shared snapshots (32 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 21% (257/1205) entries shared via 13 shared snapshots (46 times referenced)
    Managed files snapshot optimization: 79% (3337/4227) entries shared via 184 shared snapshots (760 times referenced)
    Managed missing snapshot optimization: 84% (3797/4502) entries shared via 224 shared snapshots (658 times referenced)

2024-01-10 19:00:53: webpack 5.89.0 compiled in 17884 ms (27ab3ede9ad218e5)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1807.879422 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 69.278 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1138 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.438667 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 3.144193 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/slide-toggle.mjs': 1.171763 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 3.777949 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.56613 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 3.96284 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 3.45633 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.243899 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/layout.mjs': 1.394614 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators/window.js': 1.95442 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/util/ArgumentOutOfRangeError.js': 2.521076 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|f284569173ffe980|runtime': 15.570309 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 8.418509 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 272.875977 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1138 items, 1 files, 41 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 341.19 kB |                85.77 kB
styles.css          | styles        |  81.99 kB |                 8.04 kB
polyfills.js        | polyfills     |  32.97 kB |                10.63 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 457.04 kB |               104.95 kB

Build at: 2024-01-11T00:00:56.679Z - Hash: 27ab3ede9ad218e5 - Time: 20808ms
Done in 22.57s.
```
Wed Jan 10 07:01:19 PM EST 2024
yarn version v1.22.21
info Current version: 0.0.343
info New version: 0.0.344
Done in 0.12s.
