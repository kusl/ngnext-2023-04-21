Sun Oct 15 11:00:19 PM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       4.2Gi       3.4Gi       425Mi       7.7Gi        10Gi
Swap:          8.0Gi       1.9Gi       6.1Gi
System Storage
807M	.
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
    

Angular CLI: 16.2.6
Node: 18.18.2
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.9
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.6
@angular-devkit/build-angular   16.2.6
@angular-devkit/core            16.2.6
@angular-devkit/schematics      16.2.6
@angular/cdk                    16.2.8
@angular/cli                    16.2.6
@angular/material               16.2.8
@schematics/angular             16.2.6
rxjs                            7.8.0
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.58s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.43s.
```
Latest version:     1.0.30001549
Installed version:  1.0.30001547
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001549
Installed version:  1.0.30001549
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.2.6/angular-webpack/68a15a9670b267ff7d01e94ab12a5205d75d66e5.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.2.6/angular-webpack/68a15a9670b267ff7d01e94ab12a5205d75d66e5/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1905.397609 ms
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
    1092 ms (resolving: 40 ms, restoring: 1 ms, integration: 0 ms, building: 1051 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 84.2 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 84.2 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [554] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1285 ms (resolving: 36 ms, restoring: 0 ms, integration: 0 ms, building: 1249 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1208 ms (resolving: 37 ms, restoring: 1 ms, integration: 0 ms, building: 1170 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.401681 ms
<t> runtime requirements.chunks: 0.419301 ms
<t> runtime requirements.entries: 1.539253 ms
<t> runtime requirements.modules: 0.027887 ms
<t> runtime requirements.chunks: 0.016204 ms
<t> runtime requirements.entries: 0.126259 ms
<t> finish module profiles: 10.620078 ms
<t> compute affected modules: 0.242461 ms
<t> finish modules: 16.588116 ms
<t> report dependency errors and warnings: 4.327144 ms
<t> optimize dependencies: 13.831033 ms
<t> create chunks: 11.28455 ms
<t> compute affected modules with chunk graph: 0.109995 ms
<t> optimize: 32.39307 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 8.088828 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 487.235866 ms
<t> runtime requirements.modules: 0.378818 ms
<t> runtime requirements.chunks: 0.480746 ms
<t> runtime requirements.entries: 1.615213 ms
<t> runtime requirements: 3.282826 ms
<t> hashing: initialize hash: 0.010846 ms
<t> hashing: sort chunks: 0.313137 ms
<t> hashing: hash runtime modules: 2.42759 ms
<t> hashing: hash chunks: 3.083616 ms
<t> hashing: hash digest: 0.063777 ms
<t> hashing: process full hash modules: 0.253373 ms
<t> hashing: 7.158434 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.087563 ms
<t> module assets: 0.544523 ms
<t> create chunk assets: 8.983013 ms
<t> process assets: 4772.406072 ms

LOG from webpack.Compiler
<t> make hook: 6555.537509 ms
<t> finish make hook: 0.185862 ms
<t> finish compilation: 32.228753 ms
<t> seal compilation: 5348.186732 ms
<t> afterCompile hook: 0.183303 ms
<t> emitAssets: 11.261691 ms
<t> emitRecords: 0.103445 ms
<t> done hook: 152.340244 ms
<t> beginIdle: 0.827563 ms

LOG from webpack.Compilation.ModuleProfile
     | 68 ms (parallelism 3.4) resolve to new modules > ./src/main.ts
     | 33 ms (parallelism 2.4) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 166 ms (parallelism 8.2) resolve to new modules > ./src/app/name-editor/name-editor.component.ts
     | 173 ms (parallelism 11.2) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
    1008 ms resolve to new modules
     | 169 ms (parallelism 11.2) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    218 ms resolve to existing modules
<i>  |  | 226 ms (parallelism 5.5) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 226 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 203 ms (parallelism 5.8) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 203 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 175 ms (parallelism 6) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 110 ms (parallelism 2.1) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 186 ms (parallelism 8.1) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 171 ms (parallelism 10.1) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 181 ms (parallelism 8.2) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 178 ms (parallelism 8.2) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 180 ms (parallelism 8.2) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 56 ms (parallelism 15.2) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 60 ms (parallelism 12.4) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 106 ms (parallelism 9.7) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 123 ms (parallelism 10.7) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 117 ms (parallelism 10.6) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 119 ms (parallelism 10.6) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 122 ms (parallelism 10.7) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 122 ms (parallelism 10.8) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     |  | 125 ms (parallelism 11.1) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
<i>  | 2149 ms build modules > 22 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 176 ms (parallelism 6) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 109 ms (parallelism 11.2) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 110 ms (parallelism 11.2) build modules > ./node_modules/rxjs/dist/esm/index.js
     | 1448 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 156 ms (parallelism 6.2) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 156 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 262 ms (parallelism 5.1) build modules > ./src/main.ts
<i>  | 312 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i> 4522 ms build modules
+ 15 hidden lines

LOG from webpack.ResolverCachePlugin
    32% really resolved (563 real resolves with 0 cached but invalid, 1211 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.494637 ms
<t> figure out provided exports: 9.226283 ms
    95% of exports of modules have been determined (15 no declared exports, 259 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 1.64814 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 14.189103 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.242349 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.635018 ms
<t> trace exports usage in graph: 8.126247 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 3.002173 ms
<t> visitModules: visiting: 4.856267 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 5.960863 ms
<t> connectChunkGroups: 0.11693 ms
<t> cleanup: 0.046108 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.045258 ms
<t> modules: 4.109685 ms
<t> queue: 0.00775 ms
<t> maxSize: 0.049661 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.720701 ms
<t> sort relevant modules: 0.211417 ms
<t> find modules to concatenate: 8.60747 ms
<t> sort concat configurations: 0.0426 ms
<t> create concatenated modules: 5.092582 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 216.363258 ms
<t> optimize asset: polyfills.js: 630.973596 ms
<t> optimize asset: main.js: 3970.174928 ms
<t> optimize js assets: 4106.672877 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 9.692417 ms
<t> optimize css assets: 10.649225 ms

LOG from webpack.FileSystemInfo
    825 new snapshots created
    0% root snapshot uncached (0 / 1211)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 134 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3454/4082) entries shared via 3 shared snapshots (563 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 56% (217/389) entries shared via 11 shared snapshots (30 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 21% (258/1203) entries shared via 14 shared snapshots (43 times referenced)
    Managed files snapshot optimization: 79% (3340/4220) entries shared via 183 shared snapshots (759 times referenced)
    Managed missing snapshot optimization: 90% (4031/4500) entries shared via 197 shared snapshots (776 times referenced)

2023-10-15 23:00:57: webpack 5.88.2 compiled in 13830 ms (f385fce801e750a9)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1212.7191090000001 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 51.602787 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1136 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle': 1.093094 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle|build time': 1.016116 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.886226 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 3.753164 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 3.520494 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 2.403515 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 3.261006 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/http.mjs': 1.304598 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 2.977646 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/operators/index.js': 1.062986 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.327439 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/operators|request=|../internal/operators/combineLatestAll': 1.048431 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm|request=|./internal/util/UnsubscriptionError': 3.175612 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/observable/ConnectableObservable.js': 1.602744 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators|request=|../util/mapOneOrManyArgs': 2.385682 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|bdcffb4806b02a7f|runtime': 15.093134 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 8.635697 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 293.118325 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1136 items, 1 files, 39 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 341.15 kB |                85.37 kB
styles.css          | styles        |  82.22 kB |                 8.09 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 457.26 kB |               104.66 kB

Build at: 2023-10-16T03:00:59.953Z - Hash: f385fce801e750a9 - Time: 15967ms
Done in 17.71s.
```
Sun Oct 15 11:01:19 PM EDT 2023
yarn version v1.22.19
info Current version: 0.0.161
info New version: 0.0.162
Done in 0.13s.
