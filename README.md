Tue May 16 08:47:26 AM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       4.4Gi       1.9Gi       948Mi       9.0Gi       9.6Gi
Swap:          8.0Gi       608Mi       7.4Gi
System Storage
686M	.
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
    

Angular CLI: 16.0.1
Node: 18.16.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.0.1
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1600.1
@angular-devkit/build-angular   16.0.1
@angular-devkit/core            16.0.1
@angular-devkit/schematics      16.0.1
@schematics/angular             16.0.1
rxjs                            7.8.0
typescript                      5.0.4
    
Done in 0.59s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.45s.
```
Latest version:     1.0.30001487
Installed version:  1.0.30001486
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
warning "@angular-devkit/build-angular > postcss-loader > cosmiconfig-typescript-loader@4.3.0" has unmet peer dependency "@types/node@*".
warning "@angular-devkit/build-angular > postcss-loader > cosmiconfig-typescript-loader@4.3.0" has unmet peer dependency "ts-node@>=10".
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
warning "@angular-devkit/build-angular > postcss-loader > cosmiconfig-typescript-loader@4.3.0" has unmet peer dependency "@types/node@*".
warning "@angular-devkit/build-angular > postcss-loader > cosmiconfig-typescript-loader@4.3.0" has unmet peer dependency "ts-node@>=10".
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001487
Installed version:  1.0.30001487
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.0.1/angular-webpack/c2d9179339e7836effca16d7d8526f093a59c1c4.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.0.1/angular-webpack/c2d9179339e7836effca16d7d8526f093a59c1c4/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1988.353881 ms
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
chunk {179} (runtime: runtime) main.js (main) 2.56 MiB [initial] [rendered]
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
    1187 ms (resolving: 176 ms, restoring: 1 ms, integration: 0 ms, building: 1010 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 115 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 115 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [262] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1340 ms (resolving: 33 ms, restoring: 0 ms, integration: 0 ms, building: 1307 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1338 ms (resolving: 134 ms, restoring: 1 ms, integration: 0 ms, building: 1203 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.530638 ms
<t> runtime requirements.chunks: 0.441415 ms
<t> runtime requirements.entries: 1.775241 ms
<t> runtime requirements.modules: 0.029808 ms
<t> runtime requirements.chunks: 0.016521 ms
<t> runtime requirements.entries: 0.129893 ms
<t> finish module profiles: 9.592316 ms
<t> compute affected modules: 0.006057 ms
<t> finish modules: 17.41165 ms
<t> report dependency errors and warnings: 5.31274 ms
<t> optimize dependencies: 15.179162 ms
<t> create chunks: 3.572113 ms
<t> compute affected modules with chunk graph: 0.003463 ms
<t> optimize: 27.828885 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 7.568731 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 478.335236 ms
<t> runtime requirements.modules: 0.292452 ms
<t> runtime requirements.chunks: 0.076188 ms
<t> runtime requirements.entries: 0.479168 ms
<t> runtime requirements: 1.049351 ms
<t> hashing: initialize hash: 0.008298 ms
<t> hashing: sort chunks: 0.05309 ms
<t> hashing: hash runtime modules: 1.053358 ms
<t> hashing: hash chunks: 1.210338 ms
<t> hashing: hash digest: 0.018258 ms
<t> hashing: process full hash modules: 0.242149 ms
<t> hashing: 2.686782 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.068703 ms
<t> module assets: 0.197852 ms
<t> create chunk assets: 3.581111 ms
<t> process assets: 8992.543004 ms

LOG from webpack.Compiler
<t> make hook: 6750.638394 ms
<t> finish make hook: 0.123214 ms
<t> finish compilation: 32.368 ms
<t> seal compilation: 9534.584831 ms
<t> afterCompile hook: 0.126036 ms
<t> emitAssets: 4.440601 ms
<t> emitRecords: 0.064606 ms
<t> done hook: 144.79952 ms
<t> beginIdle: 0.481804 ms

LOG from webpack.Compilation.ModuleProfile
     | 36 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 34 ms (parallelism 5.1) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 93 ms (parallelism 6.2) resolve to new modules > ./src/main.ts
     | 123 ms (parallelism 2.1) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
<i>  | 203 ms (parallelism 6.6) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 76 ms (parallelism 12.1) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 42 ms (parallelism 14.3) resolve to new modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     | 42 ms (parallelism 14.3) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 33 ms (parallelism 14) resolve to new modules > ./node_modules/rxjs/dist/esm/index.js
     | 33 ms (parallelism 14) resolve to new modules > ./node_modules/rxjs/dist/esm/operators/index.js
     | 33 ms (parallelism 13) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/bidi.mjs
     | 33 ms (parallelism 13) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/platform.mjs
     | 33 ms (parallelism 13) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/keycodes.mjs
     | 74 ms (parallelism 12.5) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/cdk.mjs
<i> 1264 ms resolve to new modules
     | 76 ms (parallelism 12.1) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    101 ms resolve to existing modules
<i>  |  | 238 ms (parallelism 5.5) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 238 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 217 ms (parallelism 5.5) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 217 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 57 ms (parallelism 6.6) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 57 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 74 ms (parallelism 6.5) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 74 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 189 ms (parallelism 5.7) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
<i>  |  | 222 ms (parallelism 6.6) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 224 ms (parallelism 7.8) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
<i>  |  | 217 ms (parallelism 6.6) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
<i>  |  | 217 ms (parallelism 7.9) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
<i>  |  | 217 ms (parallelism 7.9) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 45 ms (parallelism 14) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 34 ms (parallelism 13.5) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 112 ms (parallelism 10.8) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 108 ms (parallelism 10.8) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 117 ms (parallelism 10.9) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 112 ms (parallelism 10.8) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     |  | 112 ms (parallelism 10.8) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 113 ms (parallelism 10.8) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 114 ms (parallelism 11.5) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
<i>  | 2226 ms build modules > 22 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 184 ms (parallelism 5.5) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 74 ms (parallelism 12.5) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 76 ms (parallelism 12.3) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     | 1542 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 239 ms (parallelism 4.3) build modules > ./src/main.ts
<i>  | 318 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i> 4682 ms build modules
+ 16 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (562 real resolves with 0 cached but invalid, 1259 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.20308 ms
<t> figure out provided exports: 9.630338 ms
    95% of exports of modules have been determined (15 no declared exports, 258 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 1.847051 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 10.261414 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 8.130202 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.584012 ms
<t> trace exports usage in graph: 5.985611 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.682984 ms
<t> visitModules: visiting: 2.514169 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.59705 ms
<t> connectChunkGroups: 0.003191 ms
<t> cleanup: 0.001816 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.039937 ms
<t> modules: 2.74999 ms
<t> queue: 0.006351 ms
<t> maxSize: 0.038993 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.138807 ms
<t> sort relevant modules: 0.146762 ms
<t> find modules to concatenate: 6.785914 ms
<t> sort concat configurations: 0.042126 ms
<t> create concatenated modules: 6.017157 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 291.654112 ms
<t> optimize asset: polyfills.js: 715.371403 ms
<t> optimize asset: main.js: 8172.170278 ms
<t> optimize js assets: 8265.606421 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 12.495664 ms
<t> optimize css assets: 14.458752 ms

LOG from webpack.FileSystemInfo
    823 new snapshots created
    0% root snapshot uncached (0 / 1259)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 124 timestamps 22 hashes 22 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3433/4070) entries shared via 3 shared snapshots (560 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 56% (209/374) entries shared via 9 shared snapshots (29 times referenced)
    Managed items info in cache: 77 items
    Managed items snapshot optimization: 20% (234/1194) entries shared via 11 shared snapshots (41 times referenced)
    Managed files snapshot optimization: 79% (3336/4203) entries shared via 184 shared snapshots (759 times referenced)
    Managed missing snapshot optimization: 86% (3875/4498) entries shared via 192 shared snapshots (781 times referenced)

2023-05-16 08:48:07: webpack 5.80.0 compiled in 18288 ms (b6f9ab9316b6d47a)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 827.644042 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 37.449075 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1133 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.758458 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 2.47763 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/slide-toggle.mjs': 1.314352 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 3.532692 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.241836 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/http.mjs': 1.327366 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 3.179964 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 1.954389 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.295516 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/keycodes.mjs': 1.262769 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/firstValueFrom.js': 1.25276 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/operators|request=|../internal/operators/throttle': 2.201965 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/scheduler|request=|./intervalProvider': 2.250579 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|292fab71983e1e33|runtime': 14.141608 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 6.519418 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 285.07271 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1133 items, 1 files, 38 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 337.16 kB |                84.68 kB
styles.css          | styles        | 105.84 kB |                 9.52 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 476.90 kB |               105.39 kB

Build at: 2023-05-16T12:48:09.475Z - Hash: b6f9ab9316b6d47a - Time: 20069ms
Done in 22.16s.
```
