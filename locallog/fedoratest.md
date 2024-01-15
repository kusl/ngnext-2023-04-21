```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
15 01 2024 16:57:37.462:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
15 01 2024 16:57:37.464:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
15 01 2024 16:57:37.467:INFO [launcher]: Starting browser Firefox
15 01 2024 16:57:39.298:INFO [Firefox 121.0 (Linux x86_64)]: Connected on socket gQI12KunnXU1drq5AAAB with id 58222611
Firefox 121.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
15 01 2024 16:57:39.889:INFO [Firefox 121.0 (Linux x86_64)]: Starting tests 58222611
[1A[2KFirefox 121.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.09 secs)
15 01 2024 16:57:39.958:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should render title]: Success: 90 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:514 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 121.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.111 secs)
15 01 2024 16:57:39.982:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should create the app]: Success: 21 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:538 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 121.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.136 secs)
15 01 2024 16:57:40.015:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 25 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:571 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.15 secs)
15 01 2024 16:57:40.027:INFO [Firefox 121.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 14 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:584 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.142 secs / 0.15 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should render title : [32mok[39m
   * should create the app : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 121.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:590 min/sec/ms


Firefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.142 secs / 0.15 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 9.47s.
```
