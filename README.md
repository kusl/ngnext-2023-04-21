Thu Aug 24 10:45:00 AM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.2Gi       2.9Gi       350Mi        10Gi        12Gi
Swap:          8.0Gi       1.0Mi       8.0Gi
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
    

Angular CLI: 16.2.0
Node: 18.17.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.1
... animations, cdk, common, compiler, compiler-cli, core, forms
... localize, material, platform-browser
... platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.0
@angular-devkit/build-angular   16.2.0
@angular-devkit/core            16.2.0
@angular-devkit/schematics      16.2.0
@angular/cli                    16.2.0
@schematics/angular             16.2.0
rxjs                            7.8.0
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.58s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.40s.
```
Latest version:     1.0.30001522
Installed version:  1.0.30001522
caniuse-lite is up to date
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
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.2.0/angular-webpack/996854a49d04cded5c0aff41adc25b55a908bc58.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.2.0/angular-webpack/996854a49d04cded5c0aff41adc25b55a908bc58/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1885.391012 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
asset main.js 339 KiB {179} [emitted] (name: main)
asset styles.css 82.2 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 340 KiB = runtime.js 912 bytes main.js 339 KiB
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
    786 ms (resolving: 39 ms, restoring: 1 ms, integration: 0 ms, building: 746 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 84.2 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 84.2 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [554] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    972 ms (resolving: 36 ms, restoring: 1 ms, integration: 0 ms, building: 935 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    895 ms (resolving: 36 ms, restoring: 1 ms, integration: 0 ms, building: 858 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.417556 ms
<t> runtime requirements.chunks: 0.454276 ms
<t> runtime requirements.entries: 1.493563 ms
<t> runtime requirements.modules: 0.027309 ms
<t> runtime requirements.chunks: 0.016143 ms
<t> runtime requirements.entries: 0.12477 ms
<t> finish module profiles: 9.952833 ms
<t> compute affected modules: 0.00704 ms
<t> finish modules: 15.556532 ms
<t> report dependency errors and warnings: 4.235365 ms
<t> optimize dependencies: 14.399876 ms
<t> create chunks: 3.513621 ms
<t> compute affected modules with chunk graph: 0.003291 ms
<t> optimize: 24.857117 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 7.951179 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 443.541234 ms
<t> runtime requirements.modules: 0.248331 ms
<t> runtime requirements.chunks: 0.117396 ms
<t> runtime requirements.entries: 0.502472 ms
<t> runtime requirements: 1.053244 ms
<t> hashing: initialize hash: 0.007868 ms
<t> hashing: sort chunks: 0.04864 ms
<t> hashing: hash runtime modules: 1.013451 ms
<t> hashing: hash chunks: 1.204804 ms
<t> hashing: hash digest: 0.041921 ms
<t> hashing: process full hash modules: 0.228354 ms
<t> hashing: 2.642718 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.067938 ms
<t> module assets: 0.155304 ms
<t> create chunk assets: 2.903762 ms
<t> process assets: 4345.301575 ms

LOG from webpack.Compiler
<t> make hook: 4857.203917 ms
<t> finish make hook: 0.148876 ms
<t> finish compilation: 29.792997 ms
<t> seal compilation: 4848.158087 ms
<t> afterCompile hook: 0.132583 ms
<t> emitAssets: 4.021638 ms
<t> emitRecords: 0.058815 ms
<t> done hook: 149.752737 ms
<t> beginIdle: 0.397488 ms

LOG from webpack.Compilation.ModuleProfile
     | 65 ms (parallelism 3.5) resolve to new modules > ./src/main.ts
     | 144 ms (parallelism 9.2) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 31 ms (parallelism 20.2) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     | 31 ms (parallelism 20.2) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     | 32 ms (parallelism 20.1) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 56 ms (parallelism 16.4) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/cdk.mjs
    771 ms resolve to new modules
     | 142 ms (parallelism 9.2) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    185 ms resolve to existing modules
     |  | 170 ms (parallelism 5.5) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 170 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 147 ms (parallelism 5.8) build modules > ./src/styles.scss?ngGlobalStyle
     | 147 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 143 ms (parallelism 5.9) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 149 ms (parallelism 1.7) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 146 ms (parallelism 9) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 146 ms (parallelism 9.2) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 150 ms (parallelism 12.5) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 143 ms (parallelism 8.9) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 143 ms (parallelism 8.9) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 143 ms (parallelism 12.8) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 39 ms (parallelism 15.8) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 33 ms (parallelism 11.4) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 50 ms (parallelism 13.9) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 52 ms (parallelism 13.9) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 74 ms (parallelism 14.9) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 70 ms (parallelism 14.9) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 55 ms (parallelism 16.4) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 51 ms (parallelism 16.5) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     |  | 52 ms (parallelism 16.5) build modules > ./node_modules/@angular/cdk/fesm2022/bidi.mjs
     |  | 52 ms (parallelism 16.5) build modules > ./node_modules/@angular/cdk/fesm2022/platform.mjs
     |  | 52 ms (parallelism 16.5) build modules > ./node_modules/@angular/cdk/fesm2022/keycodes.mjs
     | 1750 ms build modules > 22 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 122 ms (parallelism 6.1) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 52 ms (parallelism 16.6) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 52 ms (parallelism 16.5) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     | 390 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 106 ms (parallelism 6.3) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 106 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 182 ms (parallelism 5.2) build modules > ./src/main.ts
     |  | 141 ms (parallelism 12.7) build modules > ./src/app/name-editor/name-editor.component.ts
     | 333 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i> 2943 ms build modules
+ 13 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (563 real resolves with 0 cached but invalid, 1258 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.153908 ms
<t> figure out provided exports: 8.544754 ms
    95% of exports of modules have been determined (15 no declared exports, 259 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 5 additional calculations due to dependencies)
<t> store provided exports into cache: 1.619086 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 11.177588 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.056782 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.550928 ms
<t> trace exports usage in graph: 9.370942 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.658837 ms
<t> visitModules: visiting: 2.485097 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.568016 ms
<t> connectChunkGroups: 0.003051 ms
<t> cleanup: 0.001442 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.032345 ms
<t> modules: 2.462135 ms
<t> queue: 0.005163 ms
<t> maxSize: 0.034613 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.038838 ms
<t> sort relevant modules: 0.149697 ms
<t> find modules to concatenate: 6.195598 ms
<t> sort concat configurations: 0.04504 ms
<t> create concatenated modules: 6.451753 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 227.43306 ms
<t> optimize asset: polyfills.js: 697.220939 ms
<t> optimize asset: main.js: 3595.417781 ms
<t> optimize js assets: 3674.387754 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 11.522117 ms
<t> optimize css assets: 16.9421 ms

LOG from webpack.FileSystemInfo
    825 new snapshots created
    0% root snapshot uncached (0 / 1258)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 134 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3440/4082) entries shared via 3 shared snapshots (561 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 55% (214/389) entries shared via 11 shared snapshots (28 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 22% (260/1203) entries shared via 15 shared snapshots (49 times referenced)
    Managed files snapshot optimization: 79% (3338/4220) entries shared via 182 shared snapshots (759 times referenced)
    Managed missing snapshot optimization: 87% (3893/4500) entries shared via 194 shared snapshots (776 times referenced)

2023-08-24 10:45:39: webpack 5.88.2 compiled in 11605 ms (227e3d2f054849b3)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1130.781901 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 55.943235 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1136 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.27722 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 2.959609 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/slide-toggle.mjs': 1.074388 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 3.002215 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.943673 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 2.389069 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/http.mjs': 1.102028 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 2.280872 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.028305 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators/mergeScan.js': 1.941669 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators/skip.js': 1.313603 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|bdcffb4806b02a7f|runtime': 10.820478 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 5.426326 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 230.617381 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1136 items, 1 files, 39 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 338.75 kB |                85.15 kB
styles.css          | styles        |  82.22 kB |                 8.09 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 454.86 kB |               104.43 kB

Build at: 2023-08-24T14:45:41.729Z - Hash: 227e3d2f054849b3 - Time: 14136ms
Done in 15.93s.
```
Thu Aug 24 10:45:58 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.105
info New version: 0.0.106
Done in 0.12s.
