Thu May 25 03:44:34 AM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       1.7Gi       2.3Gi       480Mi        11Gi        12Gi
Swap:          8.0Gi       8.0Mi       8.0Gi
System Storage
905M	.
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
    

Angular CLI: 16.0.2
Node: 18.16.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.0.2
... animations, cli, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1600.2
@angular-devkit/build-angular   16.0.2
@angular-devkit/core            16.0.2
@angular-devkit/schematics      16.0.2
@angular/cdk                    16.0.1
@angular/material               16.0.1
@schematics/angular             16.0.2
rxjs                            7.8.0
typescript                      5.0.4
    
Done in 0.56s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.34s.
```
Latest version:     1.0.30001489
Installed version:  1.0.30001489
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001489
Installed version:  1.0.30001489
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.0.2/angular-webpack/30b7ab7f6a4a27140fa5b320a9e9785fe5cc6da9.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.0.2/angular-webpack/30b7ab7f6a4a27140fa5b320a9e9785fe5cc6da9/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1802.339984 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
asset main.js 337 KiB {179} [emitted] (name: main)
asset styles.css 106 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 338 KiB = runtime.js 912 bytes main.js 337 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 107 KiB = runtime.js 912 bytes styles.css 106 KiB
chunk {179} (runtime: runtime) main.js (main) 2.57 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2022/init.mjs + 1 modules [564] 38 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 114 modules [670] 2.53 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [583] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1744 ms (resolving: 145 ms, restoring: 0 ms, integration: 0 ms, building: 1599 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 115 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 115 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [262] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1847 ms (resolving: 30 ms, restoring: 0 ms, integration: 0 ms, building: 1817 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1849 ms (resolving: 111 ms, restoring: 0 ms, integration: 0 ms, building: 1738 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.428018 ms
<t> runtime requirements.chunks: 0.397507 ms
<t> runtime requirements.entries: 1.509253 ms
<t> runtime requirements.modules: 0.116845 ms
<t> runtime requirements.chunks: 0.016286 ms
<t> runtime requirements.entries: 0.123667 ms
<t> finish module profiles: 7.717335 ms
<t> compute affected modules: 0.005546 ms
<t> finish modules: 18.434621 ms
<t> report dependency errors and warnings: 4.479456 ms
<t> optimize dependencies: 10.310756 ms
<t> create chunks: 3.332201 ms
<t> compute affected modules with chunk graph: 0.003383 ms
<t> optimize: 24.393784 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 10.271919 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 403.589007 ms
<t> runtime requirements.modules: 0.263182 ms
<t> runtime requirements.chunks: 0.07859 ms
<t> runtime requirements.entries: 0.461014 ms
<t> runtime requirements: 0.997544 ms
<t> hashing: initialize hash: 0.006862 ms
<t> hashing: sort chunks: 0.049747 ms
<t> hashing: hash runtime modules: 1.009016 ms
<t> hashing: hash chunks: 1.195537 ms
<t> hashing: hash digest: 0.01617 ms
<t> hashing: process full hash modules: 0.230085 ms
<t> hashing: 2.604669 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.062768 ms
<t> module assets: 0.163937 ms
<t> create chunk assets: 3.011646 ms
<t> process assets: 8010.772355 ms

LOG from webpack.Compiler
<t> make hook: 5441.583595 ms
<t> finish make hook: 0.109101 ms
<t> finish compilation: 30.673378 ms
<t> seal compilation: 8471.926824 ms
<t> afterCompile hook: 0.147196 ms
<t> emitAssets: 5.997568 ms
<t> emitRecords: 0.095787 ms
<t> done hook: 146.763958 ms
<t> beginIdle: 0.34709 ms

LOG from webpack.Compilation.ModuleProfile
     | 74 ms (parallelism 5.7) resolve to new modules > ./src/main.ts
     | 69 ms (parallelism 2) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 34 ms (parallelism 3.9) resolve to new modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     | 34 ms (parallelism 3.9) resolve to new modules > ./node_modules/@angular/core/fesm2022/core.mjs
     | 158 ms (parallelism 8.9) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 49 ms (parallelism 13.9) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/cdk.mjs
    842 ms resolve to new modules
     | 140 ms (parallelism 9) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    182 ms resolve to existing modules
<i>  |  | 309 ms (parallelism 5.9) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 309 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 50 ms (parallelism 6) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 50 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 294 ms (parallelism 5.9) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 294 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 307 ms (parallelism 5.8) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 34 ms (parallelism 3.9) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 160 ms (parallelism 8.9) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 160 ms (parallelism 8.9) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 154 ms (parallelism 12.1) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 157 ms (parallelism 8.7) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 158 ms (parallelism 8.7) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 123 ms (parallelism 13) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 47 ms (parallelism 17.3) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 44 ms (parallelism 13.1) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 33 ms (parallelism 12.1) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 69 ms (parallelism 12.6) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 67 ms (parallelism 12.5) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 52 ms (parallelism 13.3) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 46 ms (parallelism 13.7) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     |  | 40 ms (parallelism 16) build modules > ./node_modules/@angular/cdk/fesm2022/platform.mjs
     |  | 40 ms (parallelism 15.7) build modules > ./node_modules/@angular/cdk/fesm2022/bidi.mjs
     |  | 41 ms (parallelism 15.5) build modules > ./node_modules/@angular/cdk/fesm2022/keycodes.mjs
<i>  | 1761 ms build modules > 22 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 270 ms (parallelism 5.9) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 45 ms (parallelism 13.7) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 45 ms (parallelism 13.7) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
<i>  | 522 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 224 ms (parallelism 6) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 224 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 297 ms (parallelism 5.4) build modules > ./src/main.ts
     |  | 120 ms (parallelism 9.3) build modules > ./src/app/name-editor/name-editor.component.ts
<i>  | 443 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i> 3617 ms build modules
+ 22 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (562 real resolves with 0 cached but invalid, 1254 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.059128 ms
<t> figure out provided exports: 8.472498 ms
    95% of exports of modules have been determined (15 no declared exports, 258 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 5 additional calculations due to dependencies)
<t> store provided exports into cache: 5.056681 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 9.087858 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.034782 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.476061 ms
<t> trace exports usage in graph: 5.343119 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.592915 ms
<t> visitModules: visiting: 2.3447 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.423128 ms
<t> connectChunkGroups: 0.002464 ms
<t> cleanup: 0.001323 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.039692 ms
<t> modules: 2.387861 ms
<t> queue: 0.004896 ms
<t> maxSize: 0.034818 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.051509 ms
<t> sort relevant modules: 0.134198 ms
<t> find modules to concatenate: 5.82431 ms
<t> sort concat configurations: 0.047324 ms
<t> create concatenated modules: 6.511089 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 236.347157 ms
<t> optimize asset: polyfills.js: 696.075116 ms
<t> optimize asset: main.js: 7224.728165 ms
<t> optimize js assets: 7299.928019 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 18.9929 ms
<t> optimize css assets: 30.150401 ms

LOG from webpack.FileSystemInfo
    823 new snapshots created
    0% root snapshot uncached (0 / 1254)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 124 timestamps 22 hashes 22 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3433/4070) entries shared via 3 shared snapshots (560 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 56% (208/374) entries shared via 10 shared snapshots (27 times referenced)
    Managed items info in cache: 77 items
    Managed items snapshot optimization: 21% (254/1194) entries shared via 15 shared snapshots (47 times referenced)
    Managed files snapshot optimization: 79% (3328/4200) entries shared via 182 shared snapshots (758 times referenced)
    Managed missing snapshot optimization: 87% (3893/4498) entries shared via 194 shared snapshots (776 times referenced)

2023-05-25 03:45:16: webpack 5.80.0 compiled in 15731 ms (fcb2b21381dbb7ff)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 668.918791 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 33.948434 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1133 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.419522 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 2.625005 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 2.699718 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 3.245399 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 1.782391 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.084176 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/keycodes.mjs': 1.222294 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/firstValueFrom.js': 1.058515 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/operators|request=|../internal/operators/timeInterval': 1.549622 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/scheduler|request=|./Action': 2.239553 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|292fab71983e1e33|runtime': 9.960893 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 5.445711 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 229.335038 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1133 items, 1 files, 38 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 337.15 kB |                84.80 kB
styles.css          | styles        | 105.84 kB |                 9.52 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 476.88 kB |               105.51 kB

Build at: 2023-05-25T07:45:18.644Z - Hash: fcb2b21381dbb7ff - Time: 17665ms
Done in 19.52s.
```
Thu May 25 03:45:34 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.43
info New version: 0.0.44
Done in 0.13s.
