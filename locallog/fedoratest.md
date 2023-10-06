```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
06 10 2023 11:41:33.060:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
06 10 2023 11:41:33.062:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
06 10 2023 11:41:33.065:INFO [launcher]: Starting browser Firefox
06 10 2023 11:41:34.220:INFO [Firefox 118.0 (Linux x86_64)]: Connected on socket i2RfjWdvTIX8B3neAAAB with id 1402907
Firefox 118.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
06 10 2023 11:41:35.232:INFO [Firefox 118.0 (Linux x86_64)]: Starting tests 1402907
[1A[2KFirefox 118.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.035 secs)
06 10 2023 11:41:35.273:INFO [Firefox 118.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 35 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:224 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.072 secs)
06 10 2023 11:41:35.311:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should render title]: Success: 37 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:262 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 118.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.089 secs)
06 10 2023 11:41:35.335:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 17 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:286 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.101 secs)
06 10 2023 11:41:35.344:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should create the app]: Success: 12 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:295 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.113 secs / 0.101 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should render title : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should create the app : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 118.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:300 min/sec/ms


Firefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.113 secs / 0.101 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.54s.
```
