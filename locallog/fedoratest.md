```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
11 05 2023 19:05:34.890:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
11 05 2023 19:05:34.892:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
11 05 2023 19:05:34.896:INFO [launcher]: Starting browser Firefox
11 05 2023 19:05:36.470:INFO [Firefox 113.0 (Linux x86_64)]: Connected on socket 2eheDZQcjgSsOAvNAAAB with id 43167102
Firefox 113.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
11 05 2023 19:05:36.991:INFO [Firefox 113.0 (Linux x86_64)]: Starting tests 43167102
[1A[2KFirefox 113.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.083 secs)
11 05 2023 19:05:37.106:INFO [Firefox 113.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 83 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:231 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.152 secs)
11 05 2023 19:05:37.156:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should create the app]: Success: 69 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:281 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 113.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.175 secs)
11 05 2023 19:05:37.179:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 23 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:305 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.204 secs)
11 05 2023 19:05:37.215:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should render title]: Success: 29 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:341 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.231 secs / 0.204 secs)
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

 - [1mFirefox 113.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:351 min/sec/ms


Firefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.231 secs / 0.204 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 11.47s.
```
