Thu Jun  8 10:26:09 AM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.7Gi       2.6Gi       558Mi       9.0Gi        10Gi
Swap:          8.0Gi       1.1Gi       6.9Gi
System Storage
929M	.
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
    

Angular CLI: 16.0.4
Node: 18.16.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.0.4
... animations, cli, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1600.4
@angular-devkit/build-angular   16.0.4
@angular-devkit/core            16.0.4
@angular-devkit/schematics      16.0.4
@angular/cdk                    16.0.3
@angular/material               16.0.3
@schematics/angular             16.0.4
rxjs                            7.8.0
typescript                      5.0.4
    
Done in 0.56s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.35s.
```
Latest version:     1.0.30001495
Installed version:  1.0.30001495
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001495
Installed version:  1.0.30001495
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.0.5/angular-webpack/ce2d812ae9cbc4fedda0b687f05a31c5d2cd3359.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.0.5/angular-webpack/ce2d812ae9cbc4fedda0b687f05a31c5d2cd3359/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1941.723183 ms
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
    929 ms (resolving: 151 ms, restoring: 1 ms, integration: 0 ms, building: 777 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 115 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 115 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [262] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1042 ms (resolving: 33 ms, restoring: 0 ms, integration: 0 ms, building: 1009 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1044 ms (resolving: 114 ms, restoring: 0 ms, integration: 0 ms, building: 930 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.407187 ms
<t> runtime requirements.chunks: 0.447365 ms
<t> runtime requirements.entries: 1.585106 ms
<t> runtime requirements.modules: 0.074788 ms
<t> runtime requirements.chunks: 0.018536 ms
<t> runtime requirements.entries: 0.176499 ms
<t> finish module profiles: 6.765889 ms
<t> compute affected modules: 0.004859 ms
<t> finish modules: 17.573538 ms
<t> report dependency errors and warnings: 4.820027 ms
<t> optimize dependencies: 10.574705 ms
<t> create chunks: 4.142919 ms
<t> compute affected modules with chunk graph: 0.00241 ms
<t> optimize: 31.420493 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 7.685043 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 567.568364 ms
<t> runtime requirements.modules: 0.29502 ms
<t> runtime requirements.chunks: 0.132328 ms
<t> runtime requirements.entries: 0.513323 ms
<t> runtime requirements: 1.346046 ms
<t> hashing: initialize hash: 0.007314 ms
<t> hashing: sort chunks: 0.049541 ms
<t> hashing: hash runtime modules: 1.060628 ms
<t> hashing: hash chunks: 1.2497 ms
<t> hashing: hash digest: 0.041786 ms
<t> hashing: process full hash modules: 0.250036 ms
<t> hashing: 2.771528 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.069912 ms
<t> module assets: 0.176125 ms
<t> create chunk assets: 3.305609 ms
<t> process assets: 8025.158991 ms

LOG from webpack.Compiler
<t> make hook: 6002.662805 ms
<t> finish make hook: 0.097263 ms
<t> finish compilation: 29.199625 ms
<t> seal compilation: 8656.194105 ms
<t> afterCompile hook: 0.178465 ms
<t> emitAssets: 4.194702 ms
<t> emitRecords: 0.062071 ms
<t> done hook: 146.019453 ms
<t> beginIdle: 0.410146 ms

LOG from webpack.Compilation.ModuleProfile
     | 68 ms (parallelism 6.1) resolve to new modules > ./src/main.ts
     | 48 ms (parallelism 2.3) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 129 ms (parallelism 8) resolve to new modules > ./src/app/name-editor/name-editor.component.ts
     | 34 ms (parallelism 15) resolve to new modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     | 34 ms (parallelism 15) resolve to new modules > ./node_modules/@angular/common/fesm2022/http.mjs
     | 163 ms (parallelism 10.1) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 36 ms (parallelism 14.8) resolve to new modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     | 36 ms (parallelism 14.8) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
    1020 ms resolve to new modules
     | 163 ms (parallelism 10.1) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    184 ms resolve to existing modules
     |  | 184 ms (parallelism 5.5) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 184 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 46 ms (parallelism 6.6) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 46 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 168 ms (parallelism 5.5) build modules > ./src/styles.scss?ngGlobalStyle
     | 168 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 51 ms (parallelism 6.5) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 51 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 157 ms (parallelism 5.6) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 118 ms (parallelism 2) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 165 ms (parallelism 8) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 180 ms (parallelism 8.6) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 162 ms (parallelism 8) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 163 ms (parallelism 8) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 163 ms (parallelism 8.1) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 48 ms (parallelism 13.6) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 60 ms (parallelism 12.4) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 82 ms (parallelism 9.9) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 79 ms (parallelism 9.8) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 98 ms (parallelism 11) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 94 ms (parallelism 11.1) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 92 ms (parallelism 11.1) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 98 ms (parallelism 11.1) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     |  | 100 ms (parallelism 11.5) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 1872 ms build modules > 22 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 141 ms (parallelism 5.5) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 101 ms (parallelism 11.6) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 101 ms (parallelism 11.6) build modules > ./node_modules/rxjs/dist/esm/index.js
     | 1546 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 239 ms (parallelism 4) build modules > ./src/main.ts
     |  | 34 ms (parallelism 15) build modules > ./src/app/name-editor/name-editor.component.ts
<i>  | 323 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i> 4194 ms build modules
+ 12 hidden lines

LOG from webpack.ResolverCachePlugin
    32% really resolved (562 real resolves with 0 cached but invalid, 1210 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 3.22656 ms
<t> figure out provided exports: 9.163196 ms
    95% of exports of modules have been determined (15 no declared exports, 258 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 1.584581 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 14.950194 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.196373 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.647969 ms
<t> trace exports usage in graph: 5.235017 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 2.117588 ms
<t> visitModules: visiting: 2.987884 ms
    269 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 3.077715 ms
<t> connectChunkGroups: 0.004546 ms
<t> cleanup: 0.001798 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.048764 ms
<t> modules: 4.089565 ms
<t> queue: 0.007385 ms
<t> maxSize: 0.052268 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.771041 ms
<t> sort relevant modules: 0.215087 ms
<t> find modules to concatenate: 7.365758 ms
<t> sort concat configurations: 0.038712 ms
<t> create concatenated modules: 5.050207 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 259.86178 ms
<t> optimize asset: polyfills.js: 724.84505 ms
<t> optimize asset: main.js: 7271.082596 ms
<t> optimize js assets: 7353.724699 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 17.610982 ms
<t> optimize css assets: 25.517176 ms

LOG from webpack.FileSystemInfo
    823 new snapshots created
    0% root snapshot uncached (0 / 1210)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 124 timestamps 22 hashes 22 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3433/4070) entries shared via 3 shared snapshots (560 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 58% (217/374) entries shared via 10 shared snapshots (30 times referenced)
    Managed items info in cache: 77 items
    Managed items snapshot optimization: 20% (243/1194) entries shared via 11 shared snapshots (41 times referenced)
    Managed files snapshot optimization: 79% (3336/4203) entries shared via 184 shared snapshots (759 times referenced)
    Managed missing snapshot optimization: 90% (4030/4498) entries shared via 197 shared snapshots (776 times referenced)

2023-06-08 10:26:57: webpack 5.80.0 compiled in 16613 ms (1f6eccb9e4e52632)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 630.748496 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 32.245488 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1133 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.038945 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 1.843131 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/animations.mjs': 1.00489 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 2.984684 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.165959 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/http.mjs': 1.228394 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 2.344597 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 1.605765 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.036199 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/keycodes.mjs': 1.01424 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/util/ArgumentOutOfRangeError.js': 1.54901 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/observable|request=|../operators/observeOn': 2.118649 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|292fab71983e1e33|runtime': 10.015612 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 5.668965 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 232.852119 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1133 items, 1 files, 38 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 337.07 kB |                84.74 kB
styles.css          | styles        | 105.81 kB |                 9.54 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 476.78 kB |               105.46 kB

Build at: 2023-06-08T14:26:59.019Z - Hash: 1f6eccb9e4e52632 - Time: 18610ms
Done in 20.54s.
```
