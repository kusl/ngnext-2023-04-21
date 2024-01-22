```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
22 01 2024 10:27:56.456:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
22 01 2024 10:27:56.458:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
22 01 2024 10:27:56.461:INFO [launcher]: Starting browser Firefox
22 01 2024 10:27:58.222:INFO [Firefox 121.0 (Linux x86_64)]: Connected on socket kDSCpiROStoZhVztAAAB with id 94399397
Firefox 121.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
22 01 2024 10:27:58.898:INFO [Firefox 121.0 (Linux x86_64)]: Starting tests 94399397
[1A[2KFirefox 121.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.091 secs)
22 01 2024 10:27:58.999:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 91 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:557 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 121.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.124 secs)
22 01 2024 10:27:59.024:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should render title]: Success: 33 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:581 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 121.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.147 secs)
22 01 2024 10:27:59.052:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should create the app]: Success: 23 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:609 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.158 secs)
22 01 2024 10:27:59.068:INFO [Firefox 121.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 11 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:626 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.174 secs / 0.158 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should render title : [32mok[39m
   * should create the app : [32mok[39m
 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 121.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:630 min/sec/ms


Firefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.174 secs / 0.158 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.59s.
```
