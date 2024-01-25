Thu Jan 25 09:59:17 AM EST 2024

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.0Gi       2.0Gi       503Mi        11Gi        12Gi
Swap:          8.0Gi       5.0Mi       8.0Gi
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
    

Angular CLI: 17.1.1
Node: 20.11.0
Package Manager: yarn 1.22.21
OS: linux x64

Angular: 17.1.1
... animations, cli, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1701.1
@angular-devkit/build-angular   17.1.1
@angular-devkit/core            17.1.1
@angular-devkit/schematics      17.1.1
@angular/cdk                    17.1.0
@angular/material               17.1.0
@schematics/angular             17.1.1
rxjs                            7.8.0
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.82s.
yarn install v1.22.21
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.61s.
```
```bash
Latest version:     1.0.30001580
Installed version:  1.0.30001579
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
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/17.1.1/angular-webpack/7598177e20c7dde551354835cd40d1b483635c05.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/17.1.1/angular-webpack/7598177e20c7dde551354835cd40d1b483635c05/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 3432.468233 ms
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
    2052 ms (resolving: 63 ms, restoring: 1 ms, integration: 0 ms, building: 1987 ms, storing: 1 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 81.5 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 81.5 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [554] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    2412 ms (resolving: 58 ms, restoring: 0 ms, integration: 0 ms, building: 2354 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    2294 ms (resolving: 58 ms, restoring: 1 ms, integration: 0 ms, building: 2235 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.685113 ms
<t> runtime requirements.chunks: 0.696974 ms
<t> runtime requirements.entries: 2.5241 ms
<t> runtime requirements.modules: 0.059817 ms
<t> runtime requirements.chunks: 0.026171 ms
<t> runtime requirements.entries: 0.232866 ms
<t> finish module profiles: 20.129233 ms
<t> compute affected modules: 0.009109 ms
<t> finish modules: 26.639972 ms
<t> report dependency errors and warnings: 7.831224 ms
<t> optimize dependencies: 17.043577 ms
<t> create chunks: 5.330601 ms
<t> compute affected modules with chunk graph: 0.00618 ms
<t> optimize: 41.963907 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 11.555708 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 773.555534 ms
<t> runtime requirements.modules: 0.321601 ms
<t> runtime requirements.chunks: 0.115372 ms
<t> runtime requirements.entries: 0.75264 ms
<t> runtime requirements: 1.463584 ms
<t> hashing: initialize hash: 0.009324 ms
<t> hashing: sort chunks: 0.078971 ms
<t> hashing: hash runtime modules: 1.515086 ms
<t> hashing: hash chunks: 1.798359 ms
<t> hashing: hash digest: 0.023663 ms
<t> hashing: process full hash modules: 0.319672 ms
<t> hashing: 3.885133 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.09892 ms
<t> module assets: 0.218271 ms
<t> create chunk assets: 4.274867 ms
<t> process assets: 7611.135356 ms

LOG from webpack.Compiler
<t> make hook: 10364.036125 ms
<t> finish make hook: 0.207991 ms
<t> finish compilation: 54.676167 ms
<t> seal compilation: 8472.940226 ms
<t> afterCompile hook: 0.129788 ms
<t> emitAssets: 4.946878 ms
<t> emitRecords: 0.085337 ms
<t> done hook: 163.435365 ms
<t> beginIdle: 0.595024 ms

LOG from webpack.Compilation.ModuleProfile
     | 93 ms (parallelism 3.5) resolve to new modules > ./src/main.ts
     | 60 ms (parallelism 3.4) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 41 ms (parallelism 7.2) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
<i>  | 266 ms (parallelism 9.5) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 49 ms (parallelism 16.8) resolve to new modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     | 49 ms (parallelism 16.8) resolve to new modules > ./node_modules/@angular/common/fesm2022/http.mjs
     | 49 ms (parallelism 16.8) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     | 54 ms (parallelism 16.4) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 50 ms (parallelism 13) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/bidi.mjs
     | 50 ms (parallelism 13) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/platform.mjs
     | 50 ms (parallelism 13) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     | 50 ms (parallelism 13) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/keycodes.mjs
     | 96 ms (parallelism 14.7) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/cdk.mjs
<i> 1407 ms resolve to new modules
<i>  | 239 ms (parallelism 9.7) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
<i> 337 ms resolve to existing modules
<i>  |  | 421 ms (parallelism 5.6) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 421 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 387 ms (parallelism 5.8) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 387 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 326 ms (parallelism 6) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
<i>  |  | 219 ms (parallelism 2.1) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
<i>  |  | 290 ms (parallelism 7) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
<i>  |  | 295 ms (parallelism 7) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 273 ms (parallelism 9.4) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
<i>  |  | 290 ms (parallelism 7) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
<i>  |  | 292 ms (parallelism 7) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 61 ms (parallelism 15.6) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 91 ms (parallelism 10.7) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 121 ms (parallelism 11.3) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 122 ms (parallelism 11.3) build modules > ./node_modules/@angular/core/fesm2022/primitives/signals.mjs
     |  | 138 ms (parallelism 12.4) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 140 ms (parallelism 12.4) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 143 ms (parallelism 12.5) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 133 ms (parallelism 13) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 38 ms (parallelism 18.3) build modules > ./node_modules/@angular/cdk/fesm2022/bidi.mjs
     |  | 37 ms (parallelism 18.9) build modules > ./node_modules/@angular/cdk/fesm2022/platform.mjs
     |  | 36 ms (parallelism 19.2) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 36 ms (parallelism 19.5) build modules > ./node_modules/@angular/cdk/fesm2022/keycodes.mjs
<i>  | 3104 ms build modules > 23 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 331 ms (parallelism 6) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 97 ms (parallelism 14.3) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 98 ms (parallelism 14.3) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
<i>  | 2347 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 299 ms (parallelism 6.1) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 299 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 39 ms (parallelism 7) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 39 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<w>  |  | 506 ms (parallelism 5.1) build modules > ./src/main.ts
     |  | 56 ms (parallelism 15.9) build modules > ./src/app/name-editor/name-editor.component.ts
<w>  | 596 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w> 7204 ms build modules
+ 29 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (564 real resolves with 0 cached but invalid, 1256 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.607113 ms
<t> figure out provided exports: 16.127161 ms
    95% of exports of modules have been determined (15 no declared exports, 260 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 5 additional calculations due to dependencies)
<t> store provided exports into cache: 2.686198 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 22.531602 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 6.664976 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.957259 ms
<t> trace exports usage in graph: 8.721052 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 2.635958 ms
<t> visitModules: visiting: 3.791479 ms
    268 queue items processed (121 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 3.918225 ms
<t> connectChunkGroups: 0.004741 ms
<t> cleanup: 0.001996 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.069716 ms
<t> modules: 3.888412 ms
<t> queue: 0.007179 ms
<t> maxSize: 0.064299 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.665517 ms
<t> sort relevant modules: 0.218813 ms
<t> find modules to concatenate: 12.005973 ms
<t> sort concat configurations: 0.053962 ms
<t> create concatenated modules: 7.843826 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 311.678316 ms
<t> optimize asset: polyfills.js: 1127.979699 ms
<t> optimize asset: main.js: 6411.3286100000005 ms
<t> optimize js assets: 6526.824485 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 14.321165 ms
<t> optimize css assets: 15.121697 ms

LOG from webpack.FileSystemInfo
    827 new snapshots created
    0% root snapshot uncached (0 / 1256)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 130 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3446/4090) entries shared via 3 shared snapshots (562 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 59% (228/389) entries shared via 11 shared snapshots (33 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 19% (228/1205) entries shared via 11 shared snapshots (40 times referenced)
    Managed files snapshot optimization: 79% (3335/4227) entries shared via 183 shared snapshots (760 times referenced)
    Managed missing snapshot optimization: 87% (3896/4502) entries shared via 195 shared snapshots (775 times referenced)

2024-01-25 10:00:12: webpack 5.89.0 compiled in 22296 ms (16b00aaf03c293eb)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 2746.958684 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 77.538894 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1138 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 5.270666 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 6.772109 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/slide-toggle.mjs': 2.326965 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/progress-spinner.mjs': 2.248486 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 6.204139 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.929465 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 2.779265 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/animations/fesm2022/browser.mjs': 1.722848 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/http.mjs': 1.13323 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/a11y.mjs': 2.054742 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 3.54538 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.502928 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/platform.mjs': 1.537467 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators/multicast.js': 2.940947 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators/withLatestFrom.js': 2.950132 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|f284569173ffe980|runtime': 17.8128 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 10.046849 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 330.150745 ms
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

Build at: 2024-01-25T15:00:16.190Z - Hash: 16b00aaf03c293eb - Time: 26202ms
Done in 28.70s.
```
Thu Jan 25 10:00:45 AM EST 2024
yarn version v1.22.21
info Current version: 0.0.392
info New version: 0.0.393
Done in 0.19s.
