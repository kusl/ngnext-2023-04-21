Wed Jun 14 07:54:25 AM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       1.4Gi       2.4Gi       422Mi        11Gi        13Gi
Swap:          8.0Gi       0.0Ki       8.0Gi
System Storage
926M	.
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
    

Angular CLI: 16.0.5
Node: 18.16.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.0.5
... animations, cli, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1600.5
@angular-devkit/build-angular   16.0.5
@angular-devkit/core            16.0.5
@angular-devkit/schematics      16.0.5
@angular/cdk                    16.0.4
@angular/material               16.0.4
@schematics/angular             16.0.5
rxjs                            7.8.0
typescript                      5.0.4
    
Done in 0.58s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.39s.
```
Latest version:     1.0.30001503
Installed versions: 1.0.30001502, 1.0.30001503
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001503
Installed version:  1.0.30001503
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.1.0/angular-webpack/fcf4ed204402c65a78430a689332bf77588422d1.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.1.0/angular-webpack/fcf4ed204402c65a78430a689332bf77588422d1/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 2047.385893 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
asset main.js 337 KiB {179} [emitted] (name: main)
asset styles.css 105 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 338 KiB = runtime.js 912 bytes main.js 337 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 106 KiB = runtime.js 912 bytes styles.css 105 KiB
chunk {179} (runtime: runtime) main.js (main) 2.57 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2022/init.mjs + 1 modules [614] 38 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 114 modules [368] 2.53 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    908 ms (resolving: 160 ms, restoring: 0 ms, integration: 0 ms, building: 748 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 115 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 115 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [262] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1236 ms (resolving: 33 ms, restoring: 0 ms, integration: 0 ms, building: 1203 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1234 ms (resolving: 121 ms, restoring: 1 ms, integration: 0 ms, building: 1112 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.448776 ms
<t> runtime requirements.chunks: 0.408925 ms
<t> runtime requirements.entries: 1.605131 ms
<t> runtime requirements.modules: 0.073883 ms
<t> runtime requirements.chunks: 0.017645 ms
<t> runtime requirements.entries: 0.136865 ms
<t> finish module profiles: 8.383622 ms
<t> compute affected modules: 0.017859 ms
<t> finish modules: 19.066472 ms
<t> report dependency errors and warnings: 5.080057 ms
<t> optimize dependencies: 13.533489 ms
<t> create chunks: 3.666054 ms
<t> compute affected modules with chunk graph: 0.003252 ms
<t> optimize: 34.485671 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 7.995915 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 467.086726 ms
<t> runtime requirements.modules: 0.403111 ms
<t> runtime requirements.chunks: 0.195409 ms
<t> runtime requirements.entries: 0.981483 ms
<t> runtime requirements: 1.897976 ms
<t> hashing: initialize hash: 0.011208 ms
<t> hashing: sort chunks: 0.082457 ms
<t> hashing: hash runtime modules: 1.809591 ms
<t> hashing: hash chunks: 2.546619 ms
<t> hashing: hash digest: 0.058306 ms
<t> hashing: process full hash modules: 0.537866 ms
<t> hashing: 5.226744 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.100147 ms
<t> module assets: 0.254972 ms
<t> create chunk assets: 5.966399 ms
<t> process assets: 9076.323459 ms

LOG from webpack.Compiler
<t> make hook: 6810.730628 ms
<t> finish make hook: 0.103948 ms
<t> finish compilation: 32.586082 ms
<t> seal compilation: 9619.489634 ms
<t> afterCompile hook: 0.283826 ms
<t> emitAssets: 4.383561 ms
<t> emitRecords: 0.067216 ms
<t> done hook: 161.583574 ms
<t> beginIdle: 0.86245 ms

LOG from webpack.Compilation.ModuleProfile
     | 33 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 31 ms (parallelism 5.2) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 90 ms (parallelism 5.1) resolve to new modules > ./src/main.ts
     | 119 ms (parallelism 2.1) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 182 ms (parallelism 7.3) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 38 ms (parallelism 17.2) resolve to new modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     | 38 ms (parallelism 17.2) resolve to new modules > ./node_modules/@angular/common/fesm2022/http.mjs
     | 181 ms (parallelism 10.6) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 38 ms (parallelism 17.2) resolve to new modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     | 41 ms (parallelism 16.7) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 79 ms (parallelism 13) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/bidi.mjs
     | 79 ms (parallelism 13) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/platform.mjs
     | 79 ms (parallelism 13) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/keycodes.mjs
     | 75 ms (parallelism 17.7) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/cdk.mjs
    1466 ms resolve to new modules
     | 66 ms (parallelism 14.3) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    93 ms resolve to existing modules
<i>  |  | 238 ms (parallelism 5) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 238 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 220 ms (parallelism 5.1) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 220 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 40 ms (parallelism 5) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 40 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 70 ms (parallelism 5.2) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 70 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 170 ms (parallelism 5.1) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
<i>  |  | 215 ms (parallelism 7.4) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 226 ms (parallelism 8.6) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
<i>  |  | 216 ms (parallelism 7.4) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
<i>  |  | 224 ms (parallelism 8.6) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
<i>  |  | 224 ms (parallelism 8.6) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 53 ms (parallelism 15.3) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 100 ms (parallelism 12.4) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 96 ms (parallelism 12.5) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 107 ms (parallelism 12.2) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 94 ms (parallelism 12.5) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     |  | 102 ms (parallelism 12.4) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 100 ms (parallelism 12.4) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 108 ms (parallelism 12.8) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
<i>  | 2110 ms build modules > 22 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 147 ms (parallelism 5.1) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 97 ms (parallelism 13.3) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 97 ms (parallelism 13.3) build modules > ./node_modules/rxjs/dist/esm/index.js
     | 1458 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 240 ms (parallelism 4.3) build modules > ./src/main.ts
     |  | 41 ms (parallelism 8) build modules > ./src/app/app-routing.module.ts
     |  | 41 ms (parallelism 8) build modules > ./src/app/app.component.ts
     |  | 38 ms (parallelism 17.2) build modules > ./src/app/name-editor/name-editor.component.ts
<i>  | 381 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i> 4526 ms build modules
+ 9 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (563 real resolves with 0 cached but invalid, 1257 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.037182 ms
<t> figure out provided exports: 12.487488 ms
    95% of exports of modules have been determined (15 no declared exports, 259 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 1.808182 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 10.285715 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 6.884774 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.514268 ms
<t> trace exports usage in graph: 5.62297 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.743687 ms
<t> visitModules: visiting: 2.55737 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.64199 ms
<t> connectChunkGroups: 0.003223 ms
<t> cleanup: 0.001083 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.039454 ms
<t> modules: 2.549696 ms
<t> queue: 0.005896 ms
<t> maxSize: 0.041708 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 2.198425 ms
<t> sort relevant modules: 0.242529 ms
<t> find modules to concatenate: 9.330357 ms
<t> sort concat configurations: 0.05869 ms
<t> create concatenated modules: 6.214999 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 278.5697 ms
<t> optimize asset: polyfills.js: 755.278056 ms
<t> optimize asset: main.js: 8236.458314 ms
<t> optimize js assets: 8372.517414 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 12.015166 ms
<t> optimize css assets: 13.656443 ms

LOG from webpack.FileSystemInfo
    825 new snapshots created
    0% root snapshot uncached (0 / 1257)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 134 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3454/4079) entries shared via 3 shared snapshots (563 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 60% (233/389) entries shared via 11 shared snapshots (31 times referenced)
    Managed items info in cache: 78 items
    Managed items snapshot optimization: 18% (218/1197) entries shared via 10 shared snapshots (39 times referenced)
    Managed files snapshot optimization: 79% (3336/4213) entries shared via 184 shared snapshots (759 times referenced)
    Managed missing snapshot optimization: 87% (3895/4500) entries shared via 195 shared snapshots (775 times referenced)

2023-06-14 07:55:23: webpack 5.86.0 compiled in 18491 ms (d3b34256f5b78949)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 888.741186 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 51.881769 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1136 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.657035 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 2.113296 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/animations.mjs': 1.096488 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/slide-toggle.mjs': 2.021455 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/progress-spinner.mjs': 1.554054 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 5.821666 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 3.36208 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/animations/fesm2022/browser.mjs': 1.222636 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 2.02705 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/a11y.mjs': 1.35057 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 2.345329 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.015626 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators/defaultIfEmpty.js': 2.911133 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators/skipUntil.js': 1.398348 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/observable|request=|../util/createObject': 2.086885 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|bdcffb4806b02a7f|runtime': 10.664157 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 5.659655 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 284.37379 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1136 items, 1 files, 38 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 337.22 kB |                84.76 kB
styles.css          | styles        | 105.41 kB |                 9.53 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 476.53 kB |               105.49 kB

Build at: 2023-06-14T11:55:26.060Z - Hash: d3b34256f5b78949 - Time: 20814ms
Done in 22.69s.
```
Wed Jun 14 07:55:45 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.58
info New version: 0.0.59
Done in 0.12s.
