```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
27 01 2024 14:10:41.508:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
27 01 2024 14:10:41.510:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
27 01 2024 14:10:41.519:INFO [launcher]: Starting browser Firefox
27 01 2024 14:10:43.257:INFO [Firefox 122.0 (Linux x86_64)]: Connected on socket YWDPjBLeuD2BJB_mAAAB with id 97757721
Firefox 122.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
27 01 2024 14:10:43.894:INFO [Firefox 122.0 (Linux x86_64)]: Starting tests 97757721
[1A[2KFirefox 122.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.087 secs)
27 01 2024 14:10:43.980:INFO [Firefox 122.0 (Linux x86_64) | AppComponent | should render title]: Success: 87 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:497 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 122.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.114 secs)
27 01 2024 14:10:44.024:INFO [Firefox 122.0 (Linux x86_64) | AppComponent | should create the app]: Success: 27 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:541 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 122.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.135 secs)
27 01 2024 14:10:44.037:INFO [Firefox 122.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 21 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:555 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 122.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.146 secs)
27 01 2024 14:10:44.047:INFO [Firefox 122.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 11 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:565 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 122.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.169 secs / 0.146 secs)
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

 - [1mFirefox 122.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:584 min/sec/ms


Firefox 122.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.169 secs / 0.146 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 9.08s.
```
