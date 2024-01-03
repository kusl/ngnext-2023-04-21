```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
03 01 2024 11:16:29.013:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
03 01 2024 11:16:29.015:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
03 01 2024 11:16:29.018:INFO [launcher]: Starting browser Firefox
03 01 2024 11:16:30.893:INFO [Firefox 121.0 (Linux x86_64)]: Connected on socket Ypz86cCXzvuwfJq_AAAB with id 42265521
Firefox 121.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
03 01 2024 11:16:31.490:INFO [Firefox 121.0 (Linux x86_64)]: Starting tests 42265521
[1A[2KFirefox 121.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.1 secs)
03 01 2024 11:16:31.598:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should create the app]: Success: 100 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:606 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 121.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.122 secs)
03 01 2024 11:16:31.648:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 22 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:656 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 121.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.148 secs)
03 01 2024 11:16:31.659:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should render title]: Success: 26 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:668 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.158 secs)
03 01 2024 11:16:31.661:INFO [Firefox 121.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:670 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.178 secs / 0.158 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should render title : [32mok[39m
 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 121.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:678 min/sec/ms


Firefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.178 secs / 0.158 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.89s.
```
