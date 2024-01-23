```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
23 01 2024 12:08:34.384:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
23 01 2024 12:08:34.386:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
23 01 2024 12:08:34.389:INFO [launcher]: Starting browser Firefox
23 01 2024 12:08:36.299:INFO [Firefox 121.0 (Linux x86_64)]: Connected on socket dxtztQq-IBjdAVDXAAAB with id 26865033
Firefox 121.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
23 01 2024 12:08:36.915:INFO [Firefox 121.0 (Linux x86_64)]: Starting tests 26865033
[1A[2KFirefox 121.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.048 secs)
23 01 2024 12:08:36.988:INFO [Firefox 121.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 48 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:619 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 121.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.106 secs)
23 01 2024 12:08:37.024:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should create the app]: Success: 58 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:655 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 121.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.139 secs)
23 01 2024 12:08:37.068:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should render title]: Success: 33 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:699 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.16 secs)
23 01 2024 12:08:37.099:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 21 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:731 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.187 secs / 0.16 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
   * should render title : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 121.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:736 min/sec/ms


Firefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.187 secs / 0.16 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 9.16s.
```
