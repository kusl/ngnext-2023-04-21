Wed Nov 15 07:05:23 PM EST 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.7Gi       1.4Gi       322Mi        11Gi        12Gi
Swap:          8.0Gi       128Ki       8.0Gi
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
    

Angular CLI: 17.0.0
Node: 20.9.0
Package Manager: yarn 1.22.21
OS: linux x64

Angular: 17.0.2
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1700.0
@angular-devkit/build-angular   17.0.0
@angular-devkit/core            17.0.0
@angular-devkit/schematics      17.0.0
@angular/cdk                    17.0.0
@angular/cli                    17.0.0
@angular/material               17.0.0
@schematics/angular             17.0.0
rxjs                            7.8.0
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.58s.
yarn install v1.22.21
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.37s.
```
```bash
Latest version:     1.0.30001562
Installed version:  1.0.30001561
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
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/17.0.1/angular-webpack/5ae485daa7b1a5f11939a77c5dab7e86ed786aef.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/17.0.1/angular-webpack/5ae485daa7b1a5f11939a77c5dab7e86ed786aef/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 2126.700124 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
asset main.js 342 KiB {179} [emitted] (name: main)
asset styles.css 83.3 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 343 KiB = runtime.js 912 bytes main.js 342 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 84.2 KiB = runtime.js 912 bytes styles.css 83.3 KiB
chunk {179} (runtime: runtime) main.js (main) 2.79 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2022/init.mjs + 1 modules [614] 29.8 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 115 modules [607] 2.76 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:15
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1449 ms (resolving: 32 ms, restoring: 0 ms, integration: 0 ms, building: 1417 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 85.4 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 85.4 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [554] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1650 ms (resolving: 29 ms, restoring: 1 ms, integration: 0 ms, building: 1620 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1561 ms (resolving: 30 ms, restoring: 0 ms, integration: 0 ms, building: 1531 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.419375 ms
<t> runtime requirements.chunks: 0.41964 ms
<t> runtime requirements.entries: 1.525533 ms
<t> runtime requirements.modules: 0.0286 ms
<t> runtime requirements.chunks: 0.017038 ms
<t> runtime requirements.entries: 0.143193 ms
<t> finish module profiles: 6.901073 ms
<t> compute affected modules: 0.006569 ms
<t> finish modules: 16.263671 ms
<t> report dependency errors and warnings: 4.806946 ms
<t> optimize dependencies: 12.980641 ms
<t> create chunks: 6.193814 ms
<t> compute affected modules with chunk graph: 0.003589 ms
<t> optimize: 29.298946 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 7.168999 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 507.07077 ms
<t> runtime requirements.modules: 0.2138 ms
<t> runtime requirements.chunks: 0.076823 ms
<t> runtime requirements.entries: 0.45175 ms
<t> runtime requirements: 0.921931 ms
<t> hashing: initialize hash: 0.006927 ms
<t> hashing: sort chunks: 0.048161 ms
<t> hashing: hash runtime modules: 3.011976 ms
<t> hashing: hash chunks: 1.24404 ms
<t> hashing: hash digest: 0.018648 ms
<t> hashing: process full hash modules: 0.239661 ms
<t> hashing: 4.680451 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.071053 ms
<t> module assets: 0.159812 ms
<t> create chunk assets: 2.908298 ms
<t> process assets: 4581.923515 ms

LOG from webpack.Compiler
<t> make hook: 6770.043824 ms
<t> finish make hook: 0.108313 ms
<t> finish compilation: 28.021533 ms
<t> seal compilation: 5154.998538 ms
<t> afterCompile hook: 0.093823 ms
<t> emitAssets: 3.83852 ms
<t> emitRecords: 0.056632 ms
<t> done hook: 122.944681 ms
<t> beginIdle: 0.402975 ms

LOG from webpack.Compilation.ModuleProfile
     | 69 ms (parallelism 3.2) resolve to new modules > ./src/main.ts
     | 156 ms (parallelism 7.1) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 84 ms (parallelism 9.1) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 101 ms (parallelism 12.2) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/cdk.mjs
    807 ms resolve to new modules
     | 84 ms (parallelism 9.1) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    103 ms resolve to existing modules
<i>  |  | 286 ms (parallelism 5.7) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 286 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 260 ms (parallelism 5.9) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 260 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 256 ms (parallelism 5.9) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 111 ms (parallelism 1.9) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 185 ms (parallelism 7.2) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 237 ms (parallelism 6.7) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 185 ms (parallelism 7.2) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 184 ms (parallelism 7.2) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 185 ms (parallelism 7.2) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 64 ms (parallelism 9.3) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 32 ms (parallelism 13) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 113 ms (parallelism 11.8) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 96 ms (parallelism 12) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 114 ms (parallelism 11.8) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 103 ms (parallelism 12) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 99 ms (parallelism 12) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 100 ms (parallelism 11.8) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 80 ms (parallelism 15.6) build modules > ./node_modules/@angular/cdk/fesm2022/bidi.mjs
     |  | 80 ms (parallelism 15.8) build modules > ./node_modules/@angular/cdk/fesm2022/platform.mjs
     |  | 78 ms (parallelism 16.1) build modules > ./node_modules/@angular/cdk/fesm2022/keycodes.mjs
<i>  | 2337 ms build modules > 23 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 234 ms (parallelism 6) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 106 ms (parallelism 11.8) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 106 ms (parallelism 11.8) build modules > ./node_modules/rxjs/dist/esm/index.js
<i>  | 1620 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 307 ms (parallelism 5.4) build modules > ./src/main.ts
     |  | 156 ms (parallelism 7.1) build modules > ./src/app/app.component.ts
<i>  | 498 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i>  |  | 211 ms (parallelism 6.1) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 211 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<w> 5243 ms build modules
+ 11 hidden lines

LOG from webpack.ResolverCachePlugin
    32% really resolved (564 real resolves with 0 cached but invalid, 1217 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.004394 ms
<t> figure out provided exports: 9.662214 ms
    95% of exports of modules have been determined (15 no declared exports, 260 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 1.703552 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 14.798317 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.107275 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.614889 ms
<t> trace exports usage in graph: 7.764425 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 3.039074 ms
<t> visitModules: visiting: 4.467856 ms
    267 queue items processed (123 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 4.609631 ms
<t> connectChunkGroups: 0.005441 ms
<t> cleanup: 0.002028 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.053052 ms
<t> modules: 5.972 ms
<t> queue: 0.007811 ms
<t> maxSize: 0.057735 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.151977 ms
<t> sort relevant modules: 0.185957 ms
<t> find modules to concatenate: 5.52768 ms
<t> sort concat configurations: 0.041093 ms
<t> create concatenated modules: 5.741449 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 214.861782 ms
<t> optimize asset: polyfills.js: 653.337654 ms
<t> optimize asset: main.js: 3788.593366 ms
<t> optimize js assets: 3858.167958 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 10.179233 ms
<t> optimize css assets: 11.22246 ms

LOG from webpack.FileSystemInfo
    827 new snapshots created
    0% root snapshot uncached (0 / 1217)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 130 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3446/4090) entries shared via 3 shared snapshots (562 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 64% (249/389) entries shared via 12 shared snapshots (33 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 20% (246/1205) entries shared via 12 shared snapshots (41 times referenced)
    Managed files snapshot optimization: 79% (3335/4227) entries shared via 184 shared snapshots (760 times referenced)
    Managed missing snapshot optimization: 89% (4028/4502) entries shared via 196 shared snapshots (775 times referenced)

2023-11-15 19:06:18: webpack 5.89.0 compiled in 14064 ms (7f53218b07d7c901)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1442.368596 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 51.71825 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1138 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 3.580553 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 4.64746 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/progress-spinner.mjs': 1.20417 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 2.148399 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.230106 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 1.788532 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/animations/fesm2022/browser.mjs': 1.008099 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 2.929154 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/observers.mjs': 1.065618 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators/windowTime.js': 1.689913 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/scheduled/scheduled.js': 2.15423 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|6fbab3001b309b4f|runtime': 12.047715 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 6.746943 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 232.712511 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1138 items, 1 files, 41 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 341.97 kB |                86.11 kB
styles.css          | styles        |  83.31 kB |                 8.13 kB
polyfills.js        | polyfills     |  32.97 kB |                10.63 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 459.15 kB |               105.39 kB

Build at: 2023-11-16T00:06:21.141Z - Hash: 7f53218b07d7c901 - Time: 16622ms
Done in 18.57s.
```
