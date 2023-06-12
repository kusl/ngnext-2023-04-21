Mon Jun 12 09:13:24 AM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       4.9Gi       1.8Gi       925Mi       8.6Gi       8.9Gi
Swap:          8.0Gi       2.3Gi       5.7Gi
System Storage
692M	.
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
    

Angular CLI: 16.0.5
Node: 18.16.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.0.4
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1600.5
@angular-devkit/build-angular   16.0.5
@angular-devkit/core            16.0.5
@angular-devkit/schematics      16.0.5
@angular/cdk                    16.0.3
@angular/cli                    16.0.5
@angular/material               16.0.3
@schematics/angular             16.0.5
rxjs                            7.8.0
typescript                      5.0.4
    
Done in 0.60s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.39s.
```
Latest version:     1.0.30001502
Installed version:  1.0.30001495
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
Latest version:     1.0.30001502
Installed version:  1.0.30001502
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.0.5/angular-webpack/42b1abb520c34f9685c825f5bdfd412d89e8d7c5.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.0.5/angular-webpack/42b1abb520c34f9685c825f5bdfd412d89e8d7c5/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 2138.956865 ms
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
    828 ms (resolving: 162 ms, restoring: 0 ms, integration: 0 ms, building: 666 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 115 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 115 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [262] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    954 ms (resolving: 33 ms, restoring: 0 ms, integration: 0 ms, building: 921 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    954 ms (resolving: 123 ms, restoring: 0 ms, integration: 0 ms, building: 831 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.694588 ms
<t> runtime requirements.chunks: 0.696109 ms
<t> runtime requirements.entries: 1.970269 ms
<t> runtime requirements.modules: 0.035737 ms
<t> runtime requirements.chunks: 0.020689 ms
<t> runtime requirements.entries: 0.169822 ms
<t> finish module profiles: 14.12046 ms
<t> compute affected modules: 0.006198 ms
<t> finish modules: 21.4969 ms
<t> report dependency errors and warnings: 5.24736 ms
<t> optimize dependencies: 11.923536 ms
<t> create chunks: 4.58453 ms
<t> compute affected modules with chunk graph: 0.007653 ms
<t> optimize: 39.513209 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 10.051313 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 702.604605 ms
<t> runtime requirements.modules: 0.284511 ms
<t> runtime requirements.chunks: 0.095957 ms
<t> runtime requirements.entries: 0.560795 ms
<t> runtime requirements: 1.417946 ms
<t> hashing: initialize hash: 0.008271 ms
<t> hashing: sort chunks: 0.063215 ms
<t> hashing: hash runtime modules: 1.165113 ms
<t> hashing: hash chunks: 1.360233 ms
<t> hashing: hash digest: 0.018471 ms
<t> hashing: process full hash modules: 0.282107 ms
<t> hashing: 3.013006 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.068412 ms
<t> module assets: 0.179795 ms
<t> create chunk assets: 3.806691 ms
<t> process assets: 9229.266421 ms

LOG from webpack.Compiler
<t> make hook: 5447.125807 ms
<t> finish make hook: 0.162654 ms
<t> finish compilation: 40.938022 ms
<t> seal compilation: 10009.090347 ms
<t> afterCompile hook: 0.15294 ms
<t> emitAssets: 5.105041 ms
<t> emitRecords: 0.090734 ms
<t> done hook: 181.164457 ms
<t> beginIdle: 0.760088 ms

LOG from webpack.Compilation.ModuleProfile
     | 32 ms (parallelism 5.1) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 31 ms (parallelism 5.2) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 79 ms (parallelism 5.7) resolve to new modules > ./src/main.ts
     | 45 ms (parallelism 2) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 195 ms (parallelism 11.5) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 33 ms (parallelism 19.9) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     | 33 ms (parallelism 19.9) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     | 36 ms (parallelism 19.2) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 33 ms (parallelism 19.3) resolve to new modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     | 45 ms (parallelism 17.6) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/cdk.mjs
    1005 ms resolve to new modules
     | 195 ms (parallelism 11.5) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    249 ms resolve to existing modules
     |  | 161 ms (parallelism 5.7) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 161 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 52 ms (parallelism 6) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 52 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 143 ms (parallelism 5.8) build modules > ./src/styles.scss?ngGlobalStyle
     | 143 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 138 ms (parallelism 5.8) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 143 ms (parallelism 2.2) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
<i>  |  | 200 ms (parallelism 8.2) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 200 ms (parallelism 8.4) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 186 ms (parallelism 10.5) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 198 ms (parallelism 8.1) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 197 ms (parallelism 8.1) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 180 ms (parallelism 11.7) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 60 ms (parallelism 13.1) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 71 ms (parallelism 11.1) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 63 ms (parallelism 11.1) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 68 ms (parallelism 11.3) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 82 ms (parallelism 13.9) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 80 ms (parallelism 13.7) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 86 ms (parallelism 13.9) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 82 ms (parallelism 13.9) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
<i>  | 2057 ms build modules > 22 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 114 ms (parallelism 5.8) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 50 ms (parallelism 15.9) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 50 ms (parallelism 15.9) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     | 416 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 64 ms (parallelism 6) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 64 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 216 ms (parallelism 4.1) build modules > ./src/main.ts
<i>  | 248 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i> 3159 ms build modules
+ 21 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (562 real resolves with 0 cached but invalid, 1254 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.433171 ms
<t> figure out provided exports: 13.726686 ms
    95% of exports of modules have been determined (15 no declared exports, 258 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 5 additional calculations due to dependencies)
<t> store provided exports into cache: 1.853326 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 11.6101 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.507909 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.55043 ms
<t> trace exports usage in graph: 6.378393 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 2.246507 ms
<t> visitModules: visiting: 3.29957 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 3.420194 ms
<t> connectChunkGroups: 0.0045 ms
<t> cleanup: 0.002039 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.060828 ms
<t> modules: 4.360954 ms
<t> queue: 0.009185 ms
<t> maxSize: 0.061837 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.845646 ms
<t> sort relevant modules: 0.278984 ms
<t> find modules to concatenate: 6.890592 ms
<t> sort concat configurations: 0.043454 ms
<t> create concatenated modules: 10.670524 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 299.562112 ms
<t> optimize asset: polyfills.js: 759.046148 ms
<t> optimize asset: main.js: 8371.624113 ms
<t> optimize js assets: 8468.738586 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 15.639715 ms
<t> optimize css assets: 17.137792 ms

LOG from webpack.FileSystemInfo
    823 new snapshots created
    0% root snapshot uncached (0 / 1254)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 124 timestamps 22 hashes 22 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3433/4070) entries shared via 3 shared snapshots (560 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 57% (214/374) entries shared via 10 shared snapshots (28 times referenced)
    Managed items info in cache: 77 items
    Managed items snapshot optimization: 20% (237/1194) entries shared via 13 shared snapshots (41 times referenced)
    Managed files snapshot optimization: 79% (3332/4203) entries shared via 182 shared snapshots (759 times referenced)
    Managed missing snapshot optimization: 87% (3891/4498) entries shared via 194 shared snapshots (776 times referenced)

2023-06-12 09:14:16: webpack 5.80.0 compiled in 17618 ms (8d213113f97dd061)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 794.554161 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 36.267835 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1133 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/animations.mjs': 1.352857 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 3.283474 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 2.620346 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 2.979154 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.256357 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 5.396564 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 1.962675 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.27579 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/keycodes.mjs': 1.254573 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022|request=|@angular/common': 2.595195 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/Notification.js': 1.078579 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/operators|request=|../internal/operators/switchMapTo': 1.517161 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/scheduler|request=|./Action': 2.028534 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|292fab71983e1e33|runtime': 11.337836 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 5.885321 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 254.272619 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1133 items, 1 files, 38 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 337.07 kB |                84.67 kB
styles.css          | styles        | 105.81 kB |                 9.54 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 476.78 kB |               105.40 kB

Build at: 2023-06-12T13:14:18.886Z - Hash: 8d213113f97dd061 - Time: 19686ms
Done in 21.77s.
```
Mon Jun 12 09:14:37 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.55
info New version: 0.0.56
Done in 0.13s.
