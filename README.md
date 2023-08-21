Sun Aug 20 09:58:24 PM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.8Gi       2.3Gi       294Mi       9.2Gi        10Gi
Swap:          8.0Gi       992Mi       7.0Gi
System Storage
1.1G	.
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
    

Angular CLI: 16.2.0
Node: 18.17.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.0
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.0
@angular-devkit/build-angular   16.2.0
@angular-devkit/core            16.2.0
@angular-devkit/schematics      16.2.0
@schematics/angular             16.2.0
rxjs                            7.8.0
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.58s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.45s.
```
Latest version:     1.0.30001522
Installed version:  1.0.30001520
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001522
Installed version:  1.0.30001522
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.2.0/angular-webpack/16c4a261ece4cded43f14a6e6dd594cc6f5a5250.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.2.0/angular-webpack/16c4a261ece4cded43f14a6e6dd594cc6f5a5250/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1835.256136 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
asset main.js 338 KiB {179} [emitted] (name: main)
asset styles.css 82.2 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 339 KiB = runtime.js 912 bytes main.js 338 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 83.1 KiB = runtime.js 912 bytes styles.css 82.2 KiB
chunk {179} (runtime: runtime) main.js (main) 2.63 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2022/init.mjs + 1 modules [614] 37.3 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 114 modules [368] 2.59 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1036 ms (resolving: 37 ms, restoring: 0 ms, integration: 0 ms, building: 999 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 84.2 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 84.2 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [554] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1283 ms (resolving: 33 ms, restoring: 0 ms, integration: 0 ms, building: 1250 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1206 ms (resolving: 34 ms, restoring: 0 ms, integration: 0 ms, building: 1172 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.403838 ms
<t> runtime requirements.chunks: 0.453296 ms
<t> runtime requirements.entries: 1.519142 ms
<t> runtime requirements.modules: 0.071682 ms
<t> runtime requirements.chunks: 0.016655 ms
<t> runtime requirements.entries: 0.125184 ms
<t> finish module profiles: 7.426666 ms
<t> compute affected modules: 0.004467 ms
<t> finish modules: 18.329655 ms
<t> report dependency errors and warnings: 4.490529 ms
<t> optimize dependencies: 10.666462 ms
<t> create chunks: 3.399199 ms
<t> compute affected modules with chunk graph: 0.003277 ms
<t> optimize: 28.063306 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 7.668054 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 542.41795 ms
<t> runtime requirements.modules: 0.18779 ms
<t> runtime requirements.chunks: 0.31751 ms
<t> runtime requirements.entries: 1.066326 ms
<t> runtime requirements: 2.29689 ms
<t> hashing: initialize hash: 0.009943 ms
<t> hashing: sort chunks: 0.103135 ms
<t> hashing: hash runtime modules: 1.464832 ms
<t> hashing: hash chunks: 1.987624 ms
<t> hashing: hash digest: 0.039489 ms
<t> hashing: process full hash modules: 0.148017 ms
<t> hashing: 4.285418 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.061236 ms
<t> module assets: 0.269585 ms
<t> create chunk assets: 7.416752 ms
<t> process assets: 4636.437945 ms

LOG from webpack.Compiler
<t> make hook: 6514.82386 ms
<t> finish make hook: 0.091556 ms
<t> finish compilation: 30.284049 ms
<t> seal compilation: 5245.347129 ms
<t> afterCompile hook: 0.182592 ms
<t> emitAssets: 4.032477 ms
<t> emitRecords: 0.062576 ms
<t> done hook: 140.167783 ms
<t> beginIdle: 0.839377 ms

LOG from webpack.Compilation.ModuleProfile
     | 66 ms (parallelism 3.3) resolve to new modules > ./src/main.ts
     | 41 ms (parallelism 3.2) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 151 ms (parallelism 8.9) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 138 ms (parallelism 9) resolve to new modules > ./src/app/name-editor/name-editor.component.ts
     | 175 ms (parallelism 10.7) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 32 ms (parallelism 15.9) resolve to new modules > ./node_modules/@angular/common/fesm2022/http.mjs
     | 32 ms (parallelism 15.9) resolve to new modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     | 32 ms (parallelism 15.9) resolve to new modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     | 32 ms (parallelism 15.9) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 35 ms (parallelism 13.1) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/bidi.mjs
     | 35 ms (parallelism 13.1) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/platform.mjs
     | 35 ms (parallelism 13.1) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/keycodes.mjs
     | 36 ms (parallelism 16) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/cdk.mjs
    1176 ms resolve to new modules
     | 174 ms (parallelism 10.7) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    203 ms resolve to existing modules
<i>  |  | 230 ms (parallelism 5.4) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 230 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 207 ms (parallelism 5.7) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 207 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 166 ms (parallelism 6) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 107 ms (parallelism 2.1) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 168 ms (parallelism 8.7) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 179 ms (parallelism 9.4) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 163 ms (parallelism 8.8) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 173 ms (parallelism 9.5) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 173 ms (parallelism 9.5) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 40 ms (parallelism 14.8) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 104 ms (parallelism 11.3) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 126 ms (parallelism 10.7) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 127 ms (parallelism 10.8) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 122 ms (parallelism 10.7) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 123 ms (parallelism 11) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     |  | 125 ms (parallelism 11.3) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 125 ms (parallelism 11.3) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 123 ms (parallelism 11) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
<i>  | 2165 ms build modules > 22 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 167 ms (parallelism 6) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 114 ms (parallelism 11.7) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 114 ms (parallelism 11.7) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     | 1475 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 262 ms (parallelism 5.1) build modules > ./src/main.ts
     |  | 32 ms (parallelism 15.9) build modules > ./src/app/name-editor/name-editor.component.ts
<i>  | 328 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
     |  | 146 ms (parallelism 6.2) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 146 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i> 4582 ms build modules
+ 10 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (563 real resolves with 0 cached but invalid, 1260 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.037557 ms
<t> figure out provided exports: 12.007937 ms
    95% of exports of modules have been determined (15 no declared exports, 259 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 1.706808 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 9.391119 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.187708 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.519285 ms
<t> trace exports usage in graph: 5.471609 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.696009 ms
<t> visitModules: visiting: 2.437735 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.517203 ms
<t> connectChunkGroups: 0.002487 ms
<t> cleanup: 0.001122 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.039193 ms
<t> modules: 2.50828 ms
<t> queue: 0.004323 ms
<t> maxSize: 0.033942 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.076989 ms
<t> sort relevant modules: 0.131578 ms
<t> find modules to concatenate: 6.069883 ms
<t> sort concat configurations: 0.044752 ms
<t> create concatenated modules: 6.001055 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 241.047131 ms
<t> optimize asset: polyfills.js: 731.976716 ms
<t> optimize asset: main.js: 3889.9014859999997 ms
<t> optimize js assets: 3976.774311 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 14.346729 ms
<t> optimize css assets: 24.577257 ms

LOG from webpack.FileSystemInfo
    825 new snapshots created
    0% root snapshot uncached (0 / 1260)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 134 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3440/4082) entries shared via 3 shared snapshots (561 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 55% (215/389) entries shared via 10 shared snapshots (30 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 20% (243/1203) entries shared via 12 shared snapshots (43 times referenced)
    Managed files snapshot optimization: 79% (3342/4220) entries shared via 184 shared snapshots (759 times referenced)
    Managed missing snapshot optimization: 86% (3875/4500) entries shared via 192 shared snapshots (781 times referenced)

2023-08-20 21:59:16: webpack 5.88.2 compiled in 13607 ms (2823927d98191b70)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1160.067267 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 50.521596 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1136 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.024934 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 2.255845 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 3.069765 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 2.006844 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 2.749724 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 1.947265 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/a11y.mjs': 1.79052 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.10527 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/operators|request=|../internal/operators/bufferToggle': 2.348219 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators/skipLast.js': 1.345615 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/observable|request=|./bindCallbackInternals': 2.026964 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|bdcffb4806b02a7f|runtime': 10.792438 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 5.352906 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 236.819856 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1136 items, 1 files, 39 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 337.73 kB |                84.95 kB
styles.css          | styles        |  82.22 kB |                 8.09 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 453.85 kB |               104.24 kB

Build at: 2023-08-21T01:59:18.851Z - Hash: 2823927d98191b70 - Time: 15962ms
Done in 17.80s.
```
