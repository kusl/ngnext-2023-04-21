```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
16 06 2023 13:09:33.685:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
16 06 2023 13:09:33.687:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
16 06 2023 13:09:33.690:INFO [launcher]: Starting browser Firefox
16 06 2023 13:09:35.623:INFO [Firefox 114.0 (Linux x86_64)]: Connected on socket IBylMDPdS78lb15IAAAB with id 53236162
Firefox 114.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
16 06 2023 13:09:35.950:INFO [Firefox 114.0 (Linux x86_64)]: Starting tests 53236162
[1A[2KFirefox 114.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.07 secs)
16 06 2023 13:09:36.021:INFO [Firefox 114.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 70 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:351 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.126 secs)
16 06 2023 13:09:36.085:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 56 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:415 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 114.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.151 secs)
16 06 2023 13:09:36.128:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should create the app]: Success: 25 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:457 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.182 secs)
16 06 2023 13:09:36.164:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should render title]: Success: 31 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:494 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.219 secs / 0.182 secs)
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

 - [1mFirefox 114.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:500 min/sec/ms


Firefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.219 secs / 0.182 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 8.25s.
```
