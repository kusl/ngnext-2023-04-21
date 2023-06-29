Thu Jun 29 09:52:55 AM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.4Gi       2.8Gi       789Mi        10Gi        11Gi
Swap:          8.0Gi       1.0Mi       8.0Gi
System Storage
804M	.
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
    

Angular CLI: 16.1.1
Node: 18.16.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.1.2
... animations, cdk, common, compiler, compiler-cli, core, forms
... localize, material, platform-browser
... platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1601.1
@angular-devkit/build-angular   16.1.1
@angular-devkit/core            16.1.1
@angular-devkit/schematics      16.1.1
@angular/cli                    16.1.1
@schematics/angular             16.1.1
rxjs                            7.8.0
typescript                      5.0.4
    
Done in 0.57s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.38s.
```
Latest version:     1.0.30001509
Installed version:  1.0.30001508
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001509
Installed version:  1.0.30001509
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.1.3/angular-webpack/09a2b056ccf84b4df454a5a96400fbcb0ea5abca.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.1.3/angular-webpack/09a2b056ccf84b4df454a5a96400fbcb0ea5abca/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 2016.507486 ms
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
Entrypoint styles 104 KiB = runtime.js 912 bytes styles.css 104 KiB
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
    1050 ms (resolving: 348 ms, restoring: 0 ms, integration: 0 ms, building: 702 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 108 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 108 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [262] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1172 ms (resolving: 37 ms, restoring: 0 ms, integration: 0 ms, building: 1135 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1173 ms (resolving: 134 ms, restoring: 0 ms, integration: 0 ms, building: 1039 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.439437 ms
<t> runtime requirements.chunks: 0.41002 ms
<t> runtime requirements.entries: 1.558793 ms
<t> runtime requirements.modules: 0.114717 ms
<t> runtime requirements.chunks: 0.017999 ms
<t> runtime requirements.entries: 0.180592 ms
<t> finish module profiles: 7.058644 ms
<t> compute affected modules: 0.004102 ms
<t> finish modules: 16.194883 ms
<t> report dependency errors and warnings: 4.668085 ms
<t> optimize dependencies: 14.524106 ms
<t> create chunks: 3.671003 ms
<t> compute affected modules with chunk graph: 0.0029 ms
<t> optimize: 26.789095 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 7.882953 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 564.850885 ms
<t> runtime requirements.modules: 0.20819 ms
<t> runtime requirements.chunks: 0.333647 ms
<t> runtime requirements.entries: 1.033454 ms
<t> runtime requirements: 2.317766 ms
<t> hashing: initialize hash: 0.009767 ms
<t> hashing: sort chunks: 0.096849 ms
<t> hashing: hash runtime modules: 1.493236 ms
<t> hashing: hash chunks: 2.037124 ms
<t> hashing: hash digest: 0.039356 ms
<t> hashing: process full hash modules: 0.159351 ms
<t> hashing: 4.372587 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.062713 ms
<t> module assets: 0.283962 ms
<t> create chunk assets: 7.704202 ms
<t> process assets: 8925.245777 ms

LOG from webpack.Compiler
<t> make hook: 6407.6492610000005 ms
<t> finish make hook: 0.094013 ms
<t> finish compilation: 27.962191 ms
<t> seal compilation: 9560.054464 ms
<t> afterCompile hook: 0.184222 ms
<t> emitAssets: 4.301154 ms
<t> emitRecords: 0.061329 ms
<t> done hook: 150.573011 ms
<t> beginIdle: 0.819643 ms

LOG from webpack.Compilation.ModuleProfile
     | 64 ms (parallelism 5.5) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 62 ms (parallelism 5.6) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 83 ms (parallelism 5.5) resolve to new modules > ./src/main.ts
     | 115 ms (parallelism 2.1) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 128 ms (parallelism 8) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 185 ms (parallelism 9.3) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 31 ms (parallelism 13) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/bidi.mjs
     | 31 ms (parallelism 13) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/platform.mjs
     | 31 ms (parallelism 13) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/keycodes.mjs
     | 39 ms (parallelism 15.9) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/cdk.mjs
    1261 ms resolve to new modules
     | 72 ms (parallelism 10.8) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    94 ms resolve to existing modules
<i>  |  | 200 ms (parallelism 5.7) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 200 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 34 ms (parallelism 6) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 34 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 181 ms (parallelism 5.7) build modules > ./src/styles.scss?ngGlobalStyle
     | 181 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 116 ms (parallelism 5.8) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 116 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 142 ms (parallelism 5.7) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 160 ms (parallelism 8) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 195 ms (parallelism 7.7) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 156 ms (parallelism 8) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 191 ms (parallelism 7.7) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 191 ms (parallelism 7.7) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 48 ms (parallelism 11.8) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 70 ms (parallelism 12) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 126 ms (parallelism 10.8) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 117 ms (parallelism 10.7) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 120 ms (parallelism 10.8) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 115 ms (parallelism 10.7) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 121 ms (parallelism 10.8) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 122 ms (parallelism 10.8) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     |  | 125 ms (parallelism 11.6) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
<i>  | 2035 ms build modules > 22 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 121 ms (parallelism 5.8) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 125 ms (parallelism 11.6) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 125 ms (parallelism 11.6) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     | 1602 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 200 ms (parallelism 4.8) build modules > ./src/main.ts
     |  | 125 ms (parallelism 8) build modules > ./src/app/app.component.ts
     | 369 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i> 4544 ms build modules
+ 15 hidden lines

LOG from webpack.ResolverCachePlugin
    32% really resolved (563 real resolves with 0 cached but invalid, 1207 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.190417 ms
<t> figure out provided exports: 9.352341 ms
    95% of exports of modules have been determined (15 no declared exports, 259 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 1.756765 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 20.574934 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.314243 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.666598 ms
<t> trace exports usage in graph: 9.061025 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.768078 ms
<t> visitModules: visiting: 2.599716 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.69697 ms
<t> connectChunkGroups: 0.002929 ms
<t> cleanup: 0.001307 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.035459 ms
<t> modules: 2.643753 ms
<t> queue: 0.005277 ms
<t> maxSize: 0.037992 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.113969 ms
<t> sort relevant modules: 0.144626 ms
<t> find modules to concatenate: 6.490567 ms
<t> sort concat configurations: 0.044164 ms
<t> create concatenated modules: 5.556855 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 242.470113 ms
<t> optimize asset: polyfills.js: 703.96058 ms
<t> optimize asset: main.js: 8175.004962 ms
<t> optimize js assets: 8263.824528 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 13.2691 ms
<t> optimize css assets: 15.800514 ms

LOG from webpack.FileSystemInfo
    825 new snapshots created
    0% root snapshot uncached (0 / 1207)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 134 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3440/4079) entries shared via 3 shared snapshots (561 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 58% (225/389) entries shared via 11 shared snapshots (31 times referenced)
    Managed items info in cache: 78 items
    Managed items snapshot optimization: 21% (252/1197) entries shared via 12 shared snapshots (42 times referenced)
    Managed files snapshot optimization: 79% (3336/4213) entries shared via 184 shared snapshots (759 times referenced)
    Managed missing snapshot optimization: 89% (4009/4500) entries shared via 194 shared snapshots (779 times referenced)

2023-06-29 09:53:56: webpack 5.86.0 compiled in 17993 ms (48f5271fbcf0d11a)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 770.846235 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 43.24741 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1136 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle|build time': 1.083914 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 3.685905 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 1.793922 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 3.837455 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.906242 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 3.29629 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/a11y.mjs': 1.362594 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 2.72036 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.156395 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/observable/combineLatest.js': 1.624501 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|bdcffb4806b02a7f|runtime': 13.351648 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 7.090592 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 270.549755 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1136 items, 1 files, 38 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 337.30 kB |                84.79 kB
styles.css          | styles        | 103.56 kB |                 9.54 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 474.75 kB |               105.52 kB

Build at: 2023-06-29T13:53:58.399Z - Hash: 48f5271fbcf0d11a - Time: 19949ms
Done in 21.82s.
```
