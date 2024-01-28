Sat Jan 27 10:23:35 PM EST 2024

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       6.6Gi       1.6Gi       1.2Gi       8.7Gi       8.7Gi
Swap:          8.0Gi       429Mi       7.6Gi
System Storage
1.3G	.
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
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1701.1
@angular-devkit/build-angular   17.1.1
@angular-devkit/core            17.1.1
@angular-devkit/schematics      17.1.1
@schematics/angular             17.1.1
rxjs                            7.8.0
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.53s.
yarn install v1.22.21
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.35s.
```
```bash
Latest version:     1.0.30001581
Installed version:  1.0.30001580
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
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/17.1.1/angular-webpack/cff1d7bd63ef65aa4006986e38eaed0ba3a953fe.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/17.1.1/angular-webpack/cff1d7bd63ef65aa4006986e38eaed0ba3a953fe/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 2642.523129 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
asset main.js 345 KiB {179} [emitted] (name: main)
asset styles.css 76.1 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 346 KiB = runtime.js 912 bytes main.js 345 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 77 KiB = runtime.js 912 bytes styles.css 76.1 KiB
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
    1911 ms (resolving: 43 ms, restoring: 1 ms, integration: 0 ms, building: 1867 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 78.4 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 78.4 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [554] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    2147 ms (resolving: 38 ms, restoring: 0 ms, integration: 0 ms, building: 2109 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    2041 ms (resolving: 38 ms, restoring: 1 ms, integration: 0 ms, building: 2002 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.595639 ms
<t> runtime requirements.chunks: 0.600081 ms
<t> runtime requirements.entries: 2.203751 ms
<t> runtime requirements.modules: 0.039525 ms
<t> runtime requirements.chunks: 0.02496 ms
<t> runtime requirements.entries: 0.20378 ms
<t> finish module profiles: 13.958902 ms
<t> compute affected modules: 0.008731 ms
<t> finish modules: 29.927226 ms
<t> report dependency errors and warnings: 7.651597 ms
<t> optimize dependencies: 15.424604 ms
<t> create chunks: 5.833797 ms
<t> compute affected modules with chunk graph: 0.006093 ms
<t> optimize: 36.020815 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 13.895929 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 763.809437 ms
<t> runtime requirements.modules: 0.450397 ms
<t> runtime requirements.chunks: 0.16898 ms
<t> runtime requirements.entries: 1.247951 ms
<t> runtime requirements: 2.435928 ms
<t> hashing: initialize hash: 0.011736 ms
<t> hashing: sort chunks: 0.106225 ms
<t> hashing: hash runtime modules: 2.466618 ms
<t> hashing: hash chunks: 2.756508 ms
<t> hashing: hash digest: 0.037758 ms
<t> hashing: process full hash modules: 0.481736 ms
<t> hashing: 6.090152 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.15597 ms
<t> module assets: 0.313548 ms
<t> create chunk assets: 6.846261 ms
<t> process assets: 6001.57455 ms

LOG from webpack.Compiler
<t> make hook: 8602.270679 ms
<t> finish make hook: 0.180598 ms
<t> finish compilation: 51.611257 ms
<t> seal compilation: 6855.338841 ms
<t> afterCompile hook: 0.101732 ms
<t> emitAssets: 4.05106 ms
<t> emitRecords: 0.07629 ms
<t> done hook: 128.589634 ms
<t> beginIdle: 0.598277 ms

LOG from webpack.Compilation.ModuleProfile
     | 83 ms (parallelism 3.4) resolve to new modules > ./src/main.ts
     | 34 ms (parallelism 2.7) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
<i>  | 200 ms (parallelism 8.1) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 76 ms (parallelism 7.9) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 69 ms (parallelism 7.8) resolve to new modules > ./node_modules/rxjs/dist/esm/index.js
     | 69 ms (parallelism 7.8) resolve to new modules > ./node_modules/rxjs/dist/esm/operators/index.js
     | 125 ms (parallelism 12.2) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/cdk.mjs
<i> 1005 ms resolve to new modules
     | 75 ms (parallelism 7.9) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    105 ms resolve to existing modules
<i>  |  | 374 ms (parallelism 5.6) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 374 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 343 ms (parallelism 5.8) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 343 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 304 ms (parallelism 6) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 126 ms (parallelism 2.1) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
<i>  |  | 209 ms (parallelism 8.1) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 256 ms (parallelism 7.8) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
<i>  |  | 210 ms (parallelism 8.1) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
<i>  |  | 206 ms (parallelism 8.1) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
<i>  |  | 252 ms (parallelism 7.8) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 119 ms (parallelism 7) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 69 ms (parallelism 7.4) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 71 ms (parallelism 7.6) build modules > ./node_modules/@angular/core/fesm2022/primitives/signals.mjs
     |  | 140 ms (parallelism 11.6) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 128 ms (parallelism 11.7) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 135 ms (parallelism 11.7) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 131 ms (parallelism 11.7) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 132 ms (parallelism 11.7) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 118 ms (parallelism 13.4) build modules > ./node_modules/@angular/cdk/fesm2022/bidi.mjs
     |  | 115 ms (parallelism 13.7) build modules > ./node_modules/@angular/cdk/fesm2022/platform.mjs
     |  | 126 ms (parallelism 12.4) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 119 ms (parallelism 13.2) build modules > ./node_modules/@angular/cdk/fesm2022/keycodes.mjs
<i>  | 2988 ms build modules > 23 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 312 ms (parallelism 6) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 130 ms (parallelism 12) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 130 ms (parallelism 12) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
<i>  | 2067 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 280 ms (parallelism 6.1) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 280 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 33 ms (parallelism 7) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 33 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 405 ms (parallelism 5.4) build modules > ./src/main.ts
     |  | 179 ms (parallelism 8) build modules > ./src/app/app-routing.module.ts
     |  | 179 ms (parallelism 8) build modules > ./src/app/app.component.ts
     |  | 51 ms (parallelism 7.4) build modules > ./src/app/name-editor/name-editor.component.ts
<i>  | 824 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w> 6917 ms build modules
+ 4 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (563 real resolves with 0 cached but invalid, 1251 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.424068 ms
<t> figure out provided exports: 16.600665 ms
    95% of exports of modules have been determined (15 no declared exports, 260 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 6.417872 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 14.008985 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 6.262026 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.972082 ms
<t> trace exports usage in graph: 7.432738 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 2.992792 ms
<t> visitModules: visiting: 4.356609 ms
    268 queue items processed (121 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 4.492797 ms
<t> connectChunkGroups: 0.00579 ms
<t> cleanup: 0.002498 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.052515 ms
<t> modules: 3.319634 ms
<t> queue: 0.006261 ms
<t> maxSize: 0.046862 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.33573 ms
<t> sort relevant modules: 0.186246 ms
<t> find modules to concatenate: 6.790556 ms
<t> sort concat configurations: 0.047516 ms
<t> create concatenated modules: 8.005772 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 267.179667 ms
<t> optimize asset: polyfills.js: 877.193677 ms
<t> optimize asset: main.js: 4975.331739 ms
<t> optimize js assets: 5168.540146 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 10.87391 ms
<t> optimize css assets: 11.602959 ms

LOG from webpack.FileSystemInfo
    826 new snapshots created
    0% root snapshot uncached (0 / 1251)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 130 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3440/4082) entries shared via 3 shared snapshots (561 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 57% (221/388) entries shared via 10 shared snapshots (31 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 20% (244/1200) entries shared via 12 shared snapshots (42 times referenced)
    Managed files snapshot optimization: 79% (3332/4222) entries shared via 184 shared snapshots (759 times referenced)
    Managed missing snapshot optimization: 86% (3869/4496) entries shared via 192 shared snapshots (779 times referenced)

2024-01-27 22:24:22: webpack 5.89.0 compiled in 18129 ms (6c975bb1b345592f)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 2209.924888 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 83.627156 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1137 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle': 1.36457 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle': 1.03518 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 4.988271 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 5.481399 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/animations.mjs': 1.445604 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/app/app.component.ts': 1.155834 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/slide-toggle.mjs': 2.528597 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/progress-spinner.mjs': 3.180417 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 5.28564 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 2.159267 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 3.122566 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/http.mjs': 1.869148 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/animations/fesm2022/browser.mjs': 1.154378 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/a11y.mjs': 1.53274 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 4.475917 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.95885 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/operators/index.js': 1.308995 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/platform.mjs': 2.00851 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators/multicast.js': 2.287055 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators/zipAll.js': 3.298839 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|f284569173ffe980|runtime': 23.332299 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 11.269403 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 408.524741 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1137 items, 1 files, 41 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 345.08 kB |                86.60 kB
styles.css          | styles        |  76.13 kB |                 7.23 kB
polyfills.js        | polyfills     |  32.97 kB |                10.63 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 455.07 kB |               104.98 kB

Build at: 2024-01-28T03:24:25.950Z - Hash: 6c975bb1b345592f - Time: 21637ms
Done in 23.40s.
```
Sat Jan 27 10:24:51 PM EST 2024
yarn version v1.22.21
info Current version: 0.0.404
info New version: 0.0.405
Done in 0.12s.
