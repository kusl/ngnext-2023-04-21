Thu Jul 20 01:59:31 PM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.2Gi       1.7Gi       870Mi        11Gi        11Gi
Swap:          8.0Gi       0.0Ki       8.0Gi
System Storage
982M	.
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
    

Angular CLI: 16.1.4
Node: 18.17.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.1.5
... animations, cdk, common, compiler, compiler-cli, core, forms
... localize, material, platform-browser
... platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1601.4
@angular-devkit/build-angular   16.1.4
@angular-devkit/core            16.1.4
@angular-devkit/schematics      16.1.4
@angular/cli                    16.1.4
@schematics/angular             16.1.4
rxjs                            7.8.0
typescript                      5.0.4
    
Done in 0.57s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.41s.
```
Latest version:     1.0.30001517
Installed version:  1.0.30001516
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001517
Installed version:  1.0.30001517
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.1.5/angular-webpack/e5232cca6401b5bf24d6b7bcb40ec500c486743d.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.1.5/angular-webpack/e5232cca6401b5bf24d6b7bcb40ec500c486743d/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 2024.786215 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
asset main.js 337 KiB {179} [emitted] (name: main)
asset styles.css 100 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 338 KiB = runtime.js 912 bytes main.js 337 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 101 KiB = runtime.js 912 bytes styles.css 100 KiB
chunk {179} (runtime: runtime) main.js (main) 2.57 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2022/init.mjs + 1 modules [614] 38 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 114 modules [368] 2.54 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1074 ms (resolving: 358 ms, restoring: 0 ms, integration: 0 ms, building: 716 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 104 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 104 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [262] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1209 ms (resolving: 32 ms, restoring: 1 ms, integration: 0 ms, building: 1176 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1208 ms (resolving: 122 ms, restoring: 0 ms, integration: 0 ms, building: 1086 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.434606 ms
<t> runtime requirements.chunks: 0.404265 ms
<t> runtime requirements.entries: 1.545913 ms
<t> runtime requirements.modules: 0.030072 ms
<t> runtime requirements.chunks: 0.018592 ms
<t> runtime requirements.entries: 0.129677 ms
<t> finish module profiles: 6.919343 ms
<t> compute affected modules: 0.004676 ms
<t> finish modules: 17.228985 ms
<t> report dependency errors and warnings: 4.907917 ms
<t> optimize dependencies: 13.077522 ms
<t> create chunks: 3.299689 ms
<t> compute affected modules with chunk graph: 0.003162 ms
<t> optimize: 28.957712 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 7.740827 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 490.01065 ms
<t> runtime requirements.modules: 0.266894 ms
<t> runtime requirements.chunks: 0.11752 ms
<t> runtime requirements.entries: 0.51051 ms
<t> runtime requirements: 1.078753 ms
<t> hashing: initialize hash: 0.00812 ms
<t> hashing: sort chunks: 0.046159 ms
<t> hashing: hash runtime modules: 0.993472 ms
<t> hashing: hash chunks: 1.200108 ms
<t> hashing: hash digest: 0.036597 ms
<t> hashing: process full hash modules: 0.23232 ms
<t> hashing: 2.61173 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.059198 ms
<t> module assets: 0.169756 ms
<t> create chunk assets: 3.151092 ms
<t> process assets: 8842.881356 ms

LOG from webpack.Compiler
<t> make hook: 6423.376098 ms
<t> finish make hook: 0.095303 ms
<t> finish compilation: 29.095644 ms
<t> seal compilation: 9396.109410000001 ms
<t> afterCompile hook: 0.29774 ms
<t> emitAssets: 4.041441 ms
<t> emitRecords: 0.060233 ms
<t> done hook: 147.068644 ms
<t> beginIdle: 0.907058 ms

LOG from webpack.Compilation.ModuleProfile
     | 59 ms (parallelism 6.1) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 58 ms (parallelism 6.2) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 79 ms (parallelism 5.9) resolve to new modules > ./src/main.ts
     | 48 ms (parallelism 2.3) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 37 ms (parallelism 14.7) resolve to new modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     | 37 ms (parallelism 14.7) resolve to new modules > ./node_modules/@angular/common/fesm2022/http.mjs
<i>  | 201 ms (parallelism 8.9) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 37 ms (parallelism 14.7) resolve to new modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     | 38 ms (parallelism 14.7) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 36 ms (parallelism 16.7) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/cdk.mjs
<i> 1078 ms resolve to new modules
     | 50 ms (parallelism 13.6) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    73 ms resolve to existing modules
<i>  |  | 220 ms (parallelism 5.3) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 220 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 34 ms (parallelism 6.9) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 34 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 202 ms (parallelism 5.4) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 202 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 55 ms (parallelism 6.2) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 55 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 167 ms (parallelism 5) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 87 ms (parallelism 2.5) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
<i>  |  | 203 ms (parallelism 6.3) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 213 ms (parallelism 7.4) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
<i>  |  | 204 ms (parallelism 6.3) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
<i>  |  | 201 ms (parallelism 6.4) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
<i>  |  | 201 ms (parallelism 6.4) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 54 ms (parallelism 13.2) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 60 ms (parallelism 12.3) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 94 ms (parallelism 9.9) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 92 ms (parallelism 9.5) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 117 ms (parallelism 11.1) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 102 ms (parallelism 11) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     |  | 101 ms (parallelism 11) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 119 ms (parallelism 11.1) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 119 ms (parallelism 11.8) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
<i>  | 2149 ms build modules > 22 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 143 ms (parallelism 5) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 119 ms (parallelism 11.8) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 119 ms (parallelism 11.8) build modules > ./node_modules/rxjs/dist/esm/index.js
     | 1585 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 228 ms (parallelism 4.2) build modules > ./src/main.ts
     |  | 37 ms (parallelism 14.7) build modules > ./src/app/name-editor/name-editor.component.ts
<i>  | 289 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i> 4538 ms build modules
+ 10 hidden lines

LOG from webpack.ResolverCachePlugin
    32% really resolved (563 real resolves with 0 cached but invalid, 1203 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 3.302174 ms
<t> figure out provided exports: 8.549419 ms
    95% of exports of modules have been determined (15 no declared exports, 259 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 1.622463 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 9.560302 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 6.017786 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 1.072988 ms
<t> trace exports usage in graph: 5.458852 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.541974 ms
<t> visitModules: visiting: 2.341154 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.421716 ms
<t> connectChunkGroups: 0.003008 ms
<t> cleanup: 0.001317 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.032236 ms
<t> modules: 2.513689 ms
<t> queue: 0.00469 ms
<t> maxSize: 0.034165 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.111665 ms
<t> sort relevant modules: 0.140732 ms
<t> find modules to concatenate: 7.203445 ms
<t> sort concat configurations: 0.038935 ms
<t> create concatenated modules: 5.230406 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 292.5441 ms
<t> optimize asset: polyfills.js: 731.42588 ms
<t> optimize asset: main.js: 8022.955795 ms
<t> optimize js assets: 8119.714593 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 17.027852 ms
<t> optimize css assets: 21.31717 ms

LOG from webpack.FileSystemInfo
    825 new snapshots created
    0% root snapshot uncached (0 / 1203)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 134 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3433/4079) entries shared via 3 shared snapshots (560 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 57% (223/389) entries shared via 11 shared snapshots (31 times referenced)
    Managed items info in cache: 78 items
    Managed items snapshot optimization: 20% (243/1197) entries shared via 11 shared snapshots (41 times referenced)
    Managed files snapshot optimization: 79% (3336/4213) entries shared via 184 shared snapshots (759 times referenced)
    Managed missing snapshot optimization: 89% (4025/4500) entries shared via 196 shared snapshots (776 times referenced)

2023-07-20 14:00:29: webpack 5.86.0 compiled in 17858 ms (d0a3c247e1b99d24)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 802.764227 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 43.833617 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1136 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.240635 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 2.544424 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 3.36528 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.847986 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/http.mjs': 1.36384 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 3.528621 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/a11y.mjs': 1.608005 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 2.169669 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.038428 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/observable/concat.js': 1.918784 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators|request=|./distinctUntilChanged': 1.806502 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|bdcffb4806b02a7f|runtime': 10.145757 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 5.253477 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 258.067372 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1136 items, 1 files, 38 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 336.82 kB |                84.63 kB
styles.css          | styles        | 100.03 kB |                 9.18 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 470.75 kB |               105.01 kB

Build at: 2023-07-20T18:00:31.889Z - Hash: d0a3c247e1b99d24 - Time: 20024ms
Done in 21.95s.
```
