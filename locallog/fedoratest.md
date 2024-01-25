```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
25 01 2024 10:00:37.928:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
25 01 2024 10:00:37.932:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
25 01 2024 10:00:37.945:INFO [launcher]: Starting browser Firefox
25 01 2024 10:00:41.053:INFO [Firefox 121.0 (Linux x86_64)]: Connected on socket hIX-XTrDIpx_CJB5AAAB with id 25395116
Firefox 121.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
25 01 2024 10:00:42.032:INFO [Firefox 121.0 (Linux x86_64)]: Starting tests 25395116
[1A[2KFirefox 121.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.075 secs)
25 01 2024 10:00:42.172:INFO [Firefox 121.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 75 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:4:284 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 121.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.148 secs)
25 01 2024 10:00:42.192:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 73 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:4:305 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 121.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.2 secs)
25 01 2024 10:00:42.277:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should render title]: Success: 52 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:4:390 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.234 secs)
25 01 2024 10:00:42.299:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should create the app]: Success: 34 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:4:412 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.27 secs / 0.234 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should render title : [32mok[39m
   * should create the app : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 121.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:4:419 min/sec/ms


Firefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.27 secs / 0.234 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 27.51s.
```
