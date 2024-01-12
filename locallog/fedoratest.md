```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
12 01 2024 16:02:12.074:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
12 01 2024 16:02:12.076:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
12 01 2024 16:02:12.079:INFO [launcher]: Starting browser Firefox
12 01 2024 16:02:13.852:INFO [Firefox 121.0 (Linux x86_64)]: Connected on socket On-qrX1I_E1MGGDNAAAB with id 23471515
Firefox 121.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
12 01 2024 16:02:14.496:INFO [Firefox 121.0 (Linux x86_64)]: Starting tests 23471515
[1A[2KFirefox 121.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.045 secs)
12 01 2024 16:02:14.517:INFO [Firefox 121.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 45 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:463 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 121.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.09 secs)
12 01 2024 16:02:14.549:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 45 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:494 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 121.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.119 secs)
12 01 2024 16:02:14.583:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should render title]: Success: 29 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:529 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.144 secs)
12 01 2024 16:02:14.604:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should create the app]: Success: 25 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:550 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.115 secs / 0.144 secs)
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
Elapsed Time: 0:2:560 min/sec/ms


Firefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.115 secs / 0.144 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 8.82s.
```
