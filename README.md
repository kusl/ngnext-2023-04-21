Wed May 17 10:51:03 PM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       5.4Gi       2.1Gi       575Mi       7.7Gi       8.9Gi
Swap:          8.0Gi       2.9Gi       5.1Gi
System Storage
920M	.
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
    
Done in 0.62s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.37s.
```
Latest version:     1.0.30001488
Installed version:  1.0.30001487
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
Latest version:     1.0.30001488
Installed version:  1.0.30001488
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.0.2/angular-webpack/357575ba49d4bed7797240c242c4bfdaafe8db73.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.0.2/angular-webpack/357575ba49d4bed7797240c242c4bfdaafe8db73/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1962.684252 ms
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
    987 ms (resolving: 152 ms, restoring: 0 ms, integration: 0 ms, building: 835 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 115 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 115 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [262] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1095 ms (resolving: 30 ms, restoring: 0 ms, integration: 0 ms, building: 1065 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1096 ms (resolving: 113 ms, restoring: 0 ms, integration: 0 ms, building: 983 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.486242 ms
<t> runtime requirements.chunks: 0.41221 ms
<t> runtime requirements.entries: 1.606189 ms
<t> runtime requirements.modules: 0.026873 ms
<t> runtime requirements.chunks: 0.015632 ms
<t> runtime requirements.entries: 0.127438 ms
<t> finish module profiles: 7.292387 ms
<t> compute affected modules: 0.006638 ms
<t> finish modules: 16.425909 ms
<t> report dependency errors and warnings: 4.3797 ms
<t> optimize dependencies: 17.311534 ms
<t> create chunks: 4.008708 ms
<t> compute affected modules with chunk graph: 0.002935 ms
<t> optimize: 29.027427 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 8.056121 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 472.061799 ms
<t> runtime requirements.modules: 0.346345 ms
<t> runtime requirements.chunks: 0.085732 ms
<t> runtime requirements.entries: 0.511131 ms
<t> runtime requirements: 1.158646 ms
<t> hashing: initialize hash: 0.008485 ms
<t> hashing: sort chunks: 0.059708 ms
<t> hashing: hash runtime modules: 1.075549 ms
<t> hashing: hash chunks: 1.287771 ms
<t> hashing: hash digest: 0.017009 ms
<t> hashing: process full hash modules: 0.237508 ms
<t> hashing: 2.78953 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.068114 ms
<t> module assets: 0.176415 ms
<t> create chunk assets: 3.154798 ms
<t> process assets: 8770.081105 ms

LOG from webpack.Compiler
<t> make hook: 6090.165023 ms
<t> finish make hook: 0.100729 ms
<t> finish compilation: 28.141091 ms
<t> seal compilation: 9310.049147 ms
<t> afterCompile hook: 0.123771 ms
<t> emitAssets: 7.385638 ms
<t> emitRecords: 0.064733 ms
<t> done hook: 156.48504 ms
<t> beginIdle: 0.39169 ms

LOG from webpack.Compilation.ModuleProfile
     | 30 ms (parallelism 5.1) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 70 ms (parallelism 6.2) resolve to new modules > ./src/main.ts
     | 51 ms (parallelism 3.6) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 143 ms (parallelism 8.1) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 33 ms (parallelism 15.8) resolve to new modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     | 33 ms (parallelism 15.8) resolve to new modules > ./node_modules/@angular/common/fesm2022/http.mjs
     | 164 ms (parallelism 10.4) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 34 ms (parallelism 15.8) resolve to new modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     | 34 ms (parallelism 15.8) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 34 ms (parallelism 15) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/bidi.mjs
     | 34 ms (parallelism 15) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/platform.mjs
     | 34 ms (parallelism 15) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/keycodes.mjs
     | 43 ms (parallelism 15.9) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/cdk.mjs
    1141 ms resolve to new modules
     | 61 ms (parallelism 13.2) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    81 ms resolve to existing modules
     |  | 186 ms (parallelism 5.7) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 186 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 48 ms (parallelism 6.6) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 48 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 170 ms (parallelism 5.8) build modules > ./src/styles.scss?ngGlobalStyle
     | 170 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 92 ms (parallelism 6.3) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 92 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 143 ms (parallelism 5.9) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 119 ms (parallelism 2) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 161 ms (parallelism 8) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 171 ms (parallelism 9) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 157 ms (parallelism 8) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 164 ms (parallelism 9.1) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 163 ms (parallelism 9) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 41 ms (parallelism 14.7) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 53 ms (parallelism 12.5) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 65 ms (parallelism 9.2) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 44 ms (parallelism 9.7) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 99 ms (parallelism 12.2) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 90 ms (parallelism 12) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     |  | 90 ms (parallelism 12) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 91 ms (parallelism 12) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 95 ms (parallelism 12.1) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 1763 ms build modules > 22 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 144 ms (parallelism 5.8) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 100 ms (parallelism 12.3) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 100 ms (parallelism 12.3) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     | 1523 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 228 ms (parallelism 4.3) build modules > ./src/main.ts
     |  | 126 ms (parallelism 7.9) build modules > ./src/app/app.component.ts
     |  | 33 ms (parallelism 15.8) build modules > ./src/app/name-editor/name-editor.component.ts
<i>  | 409 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i> 4195 ms build modules
+ 8 hidden lines

LOG from webpack.ResolverCachePlugin
    32% really resolved (562 real resolves with 0 cached but invalid, 1211 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.118843 ms
<t> figure out provided exports: 9.497395 ms
    95% of exports of modules have been determined (15 no declared exports, 258 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 2.013536 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 9.494457 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 6.512424 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.938464 ms
<t> trace exports usage in graph: 9.354085 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.972211 ms
<t> visitModules: visiting: 2.8923 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.97919 ms
<t> connectChunkGroups: 0.004197 ms
<t> cleanup: 0.001863 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.058522 ms
<t> modules: 4.055567 ms
<t> queue: 0.011425 ms
<t> maxSize: 0.050035 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.82311 ms
<t> sort relevant modules: 0.227204 ms
<t> find modules to concatenate: 7.221009 ms
<t> sort concat configurations: 0.158774 ms
<t> create concatenated modules: 5.082875 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 358.029424 ms
<t> optimize asset: polyfills.js: 800.384054 ms
<t> optimize asset: main.js: 7989.367005 ms
<t> optimize js assets: 8081.263232 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 16.608624 ms
<t> optimize css assets: 27.811728 ms

LOG from webpack.FileSystemInfo
    823 new snapshots created
    0% root snapshot uncached (0 / 1211)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 124 timestamps 22 hashes 22 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3433/4070) entries shared via 3 shared snapshots (560 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 59% (219/374) entries shared via 10 shared snapshots (30 times referenced)
    Managed items info in cache: 77 items
    Managed items snapshot optimization: 21% (252/1194) entries shared via 12 shared snapshots (42 times referenced)
    Managed files snapshot optimization: 79% (3336/4203) entries shared via 184 shared snapshots (759 times referenced)
    Managed missing snapshot optimization: 89% (4010/4498) entries shared via 194 shared snapshots (781 times referenced)

2023-05-17 22:51:57: webpack 5.80.0 compiled in 17377 ms (7ad18629f94ab92a)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 651.616834 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 32.931064 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1133 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle': 1.073944 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.394852 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 3.553255 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 3.341263 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.183998 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/http.mjs': 1.049709 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 2.018596 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 1.697199 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.194258 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/keycodes.mjs': 1.181598 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/util/NotFoundError.js': 1.539259 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/scheduler|request=|./immediateProvider': 2.267535 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|292fab71983e1e33|runtime': 12.005117 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 6.231138 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 258.962535 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1133 items, 1 files, 38 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 337.16 kB |                84.65 kB
styles.css          | styles        | 105.84 kB |                 9.52 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 476.89 kB |               105.36 kB

Build at: 2023-05-18T02:51:59.098Z - Hash: 7ad18629f94ab92a - Time: 18984ms
Done in 20.97s.
```
