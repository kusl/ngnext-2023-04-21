```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
17 12 2023 23:58:49.380:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
17 12 2023 23:58:49.382:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
17 12 2023 23:58:49.385:INFO [launcher]: Starting browser Firefox
17 12 2023 23:58:50.735:INFO [Firefox 120.0 (Linux x86_64)]: Connected on socket avegos1YToKYeYu_AAAB with id 52717367
Firefox 120.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
17 12 2023 23:58:51.216:INFO [Firefox 120.0 (Linux x86_64)]: Starting tests 52717367
[1A[2KFirefox 120.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.03 secs)
17 12 2023 23:58:51.247:INFO [Firefox 120.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 30 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:880 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 120.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.066 secs)
17 12 2023 23:58:51.312:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 36 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:945 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 120.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.083 secs)
17 12 2023 23:58:51.316:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should create the app]: Success: 17 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:949 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.102 secs)
17 12 2023 23:58:51.338:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should render title]: Success: 19 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:972 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.127 secs / 0.102 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should create the app : [32mok[39m
   * should render title : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 120.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:978 min/sec/ms


Firefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.127 secs / 0.102 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 8.14s.
```
