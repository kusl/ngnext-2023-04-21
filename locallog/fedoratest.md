```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
04 05 2023 04:49:48.708:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
04 05 2023 04:49:48.711:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
04 05 2023 04:49:48.715:INFO [launcher]: Starting browser Firefox
04 05 2023 04:49:50.643:INFO [Firefox 112.0 (Linux x86_64)]: Connected on socket Ko1xDAMnaTpoUUgrAAAB with id 54855410
Firefox 112.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
04 05 2023 04:49:51.127:INFO [Firefox 112.0 (Linux x86_64)]: Starting tests 54855410
[1A[2KFirefox 112.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.068 secs)
04 05 2023 04:49:51.192:INFO [Firefox 112.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 68 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:512 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.119 secs)
04 05 2023 04:49:51.256:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should create the app]: Success: 51 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:576 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 112.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.146 secs)
04 05 2023 04:49:51.287:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 27 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:610 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 112.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.173 secs)
04 05 2023 04:49:51.318:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should render title]: Success: 27 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:639 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 112.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.196 secs / 0.173 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should render title : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 112.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:647 min/sec/ms


Firefox 112.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.196 secs / 0.173 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 8.30s.
```
