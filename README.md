Fri Jun 23 07:39:52 AM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.7Gi       1.7Gi       393Mi       9.9Gi        10Gi
Swap:          8.0Gi       379Mi       7.6Gi
System Storage
1.3G	.
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
    

Angular CLI: 16.1.0
Node: 18.16.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.1.2
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1601.0
@angular-devkit/build-angular   16.1.0
@angular-devkit/core            16.1.0
@angular-devkit/schematics      16.1.0
@angular/cdk                    16.1.1
@angular/cli                    16.1.0
@angular/material               16.1.1
@schematics/angular             16.1.0
rxjs                            7.8.0
typescript                      5.0.4
    
Done in 0.58s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.41s.
```
Latest version:     1.0.30001507
Installed version:  1.0.30001506
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001507
Installed version:  1.0.30001507
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.1.1/angular-webpack/4a34c2ec6d9be4c80fa54120c05545c11bcf3110.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.1.1/angular-webpack/4a34c2ec6d9be4c80fa54120c05545c11bcf3110/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1925.32988 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
asset main.js 337 KiB {179} [emitted] (name: main)
asset styles.css 104 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 338 KiB = runtime.js 912 bytes main.js 337 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 105 KiB = runtime.js 912 bytes styles.css 104 KiB
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
    1084 ms (resolving: 313 ms, restoring: 0 ms, integration: 0 ms, building: 771 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 109 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 109 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [262] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1183 ms (resolving: 31 ms, restoring: 0 ms, integration: 1 ms, building: 1151 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1179 ms (resolving: 117 ms, restoring: 0 ms, integration: 0 ms, building: 1062 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.407156 ms
<t> runtime requirements.chunks: 0.459852 ms
<t> runtime requirements.entries: 1.53906 ms
<t> runtime requirements.modules: 0.026446 ms
<t> runtime requirements.chunks: 0.015545 ms
<t> runtime requirements.entries: 0.124493 ms
<t> finish module profiles: 7.620962 ms
<t> compute affected modules: 0.004677 ms
<t> finish modules: 14.883595 ms
<t> report dependency errors and warnings: 4.213787 ms
<t> optimize dependencies: 17.385642 ms
<t> create chunks: 3.319382 ms
<t> compute affected modules with chunk graph: 0.002863 ms
<t> optimize: 25.140189 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 7.706103 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 548.391535 ms
<t> runtime requirements.modules: 0.209954 ms
<t> runtime requirements.chunks: 0.342862 ms
<t> runtime requirements.entries: 1.085119 ms
<t> runtime requirements: 2.398625 ms
<t> hashing: initialize hash: 0.009582 ms
<t> hashing: sort chunks: 0.111718 ms
<t> hashing: hash runtime modules: 1.543013 ms
<t> hashing: hash chunks: 2.066766 ms
<t> hashing: hash digest: 0.039825 ms
<t> hashing: process full hash modules: 0.160755 ms
<t> hashing: 4.493771 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.0627 ms
<t> module assets: 0.282692 ms
<t> create chunk assets: 5.323925 ms
<t> process assets: 8725.930425 ms

LOG from webpack.Compiler
<t> make hook: 6444.39997 ms
<t> finish make hook: 0.095779 ms
<t> finish compilation: 26.756519 ms
<t> seal compilation: 9342.775887 ms
<t> afterCompile hook: 0.189202 ms
<t> emitAssets: 4.086753 ms
<t> emitRecords: 0.064354 ms
<t> done hook: 149.392704 ms
<t> beginIdle: 0.815778 ms

LOG from webpack.Compilation.ModuleProfile
     | 53 ms (parallelism 6) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 52 ms (parallelism 6) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 67 ms (parallelism 5.8) resolve to new modules > ./src/main.ts
     | 51 ms (parallelism 3.4) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 189 ms (parallelism 7.4) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 36 ms (parallelism 8.5) resolve to new modules > ./src/app/name-editor/name-editor.component.ts
     | 80 ms (parallelism 10.6) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 35 ms (parallelism 12.8) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/bidi.mjs
     | 35 ms (parallelism 12.8) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/platform.mjs
     | 35 ms (parallelism 12.8) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/keycodes.mjs
     | 38 ms (parallelism 15.1) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/cdk.mjs
    1055 ms resolve to new modules
     | 79 ms (parallelism 10.6) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    106 ms resolve to existing modules
<i>  |  | 204 ms (parallelism 5.7) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 204 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 186 ms (parallelism 5.7) build modules > ./src/styles.scss?ngGlobalStyle
     | 186 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 112 ms (parallelism 6.1) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 112 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 140 ms (parallelism 5.6) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 119 ms (parallelism 2) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
<i>  |  | 214 ms (parallelism 7.5) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 250 ms (parallelism 7.3) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
<i>  |  | 209 ms (parallelism 7.5) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
<i>  |  | 246 ms (parallelism 7.3) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
<i>  |  | 246 ms (parallelism 7.4) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 49 ms (parallelism 11.6) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 93 ms (parallelism 11.5) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 117 ms (parallelism 10.9) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 109 ms (parallelism 10.9) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 112 ms (parallelism 10.9) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 113 ms (parallelism 11.1) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     |  | 115 ms (parallelism 11.4) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 113 ms (parallelism 11.2) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 113 ms (parallelism 11) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
<i>  | 2376 ms build modules > 22 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 138 ms (parallelism 5.6) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 116 ms (parallelism 11.5) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 116 ms (parallelism 11.5) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     | 1422 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 248 ms (parallelism 4.5) build modules > ./src/main.ts
     |  | 41 ms (parallelism 7.9) build modules > ./src/app/app-routing.module.ts
     |  | 173 ms (parallelism 7.2) build modules > ./src/app/app.component.ts
<i>  | 487 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i> 4816 ms build modules
+ 12 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (563 real resolves with 0 cached but invalid, 1258 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.084635 ms
<t> figure out provided exports: 8.452872 ms
    95% of exports of modules have been determined (15 no declared exports, 259 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 1.611022 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 10.763904 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.658328 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 1.047417 ms
<t> trace exports usage in graph: 11.129107 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.552756 ms
<t> visitModules: visiting: 2.326517 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.407179 ms
<t> connectChunkGroups: 0.00256 ms
<t> cleanup: 0.001241 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.035147 ms
<t> modules: 2.438756 ms
<t> queue: 0.004868 ms
<t> maxSize: 0.036184 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.062427 ms
<t> sort relevant modules: 0.146111 ms
<t> find modules to concatenate: 5.819225 ms
<t> sort concat configurations: 0.08019 ms
<t> create concatenated modules: 5.247974 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 228.880902 ms
<t> optimize asset: polyfills.js: 717.233364 ms
<t> optimize asset: main.js: 7944.582608 ms
<t> optimize js assets: 8033.178631 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 25.68687 ms
<t> optimize css assets: 29.083263 ms

LOG from webpack.FileSystemInfo
    825 new snapshots created
    0% root snapshot uncached (0 / 1258)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 134 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3440/4079) entries shared via 3 shared snapshots (561 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 55% (215/389) entries shared via 10 shared snapshots (30 times referenced)
    Managed items info in cache: 78 items
    Managed items snapshot optimization: 20% (234/1197) entries shared via 11 shared snapshots (41 times referenced)
    Managed files snapshot optimization: 79% (3336/4213) entries shared via 184 shared snapshots (759 times referenced)
    Managed missing snapshot optimization: 86% (3875/4500) entries shared via 192 shared snapshots (779 times referenced)

2023-06-23 07:40:49: webpack 5.86.0 compiled in 17722 ms (76fb2bd448849c0a)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 929.70022 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 62.093386 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1136 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.004952 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 2.346594 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 3.838256 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.971702 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 2.545893 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 2.194078 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/a11y.mjs': 1.735012 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.053354 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators/skipUntil.js': 1.701736 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/observable|request=|../util/args': 2.116556 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|bdcffb4806b02a7f|runtime': 11.95297 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 6.866158 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 249.043803 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1136 items, 1 files, 38 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 337.06 kB |                84.73 kB
styles.css          | styles        | 103.98 kB |                 9.52 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 474.94 kB |               105.44 kB

Build at: 2023-06-23T11:40:51.935Z - Hash: 76fb2bd448849c0a - Time: 19770ms
Done in 22.22s.
```
Fri Jun 23 07:41:11 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.63
info New version: 0.0.64
Done in 0.13s.
