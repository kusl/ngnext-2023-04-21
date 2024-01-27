```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
27 01 2024 09:09:09.834:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
27 01 2024 09:09:09.838:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
27 01 2024 09:09:09.842:INFO [launcher]: Starting browser Firefox
27 01 2024 09:09:11.532:INFO [Firefox 122.0 (Linux x86_64)]: Connected on socket T0btAHJry9vu7hUnAAAB with id 28593360
Firefox 122.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
27 01 2024 09:09:12.189:INFO [Firefox 122.0 (Linux x86_64)]: Starting tests 28593360
[1A[2KFirefox 122.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.046 secs)
27 01 2024 09:09:12.246:INFO [Firefox 122.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 46 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:442 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 122.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.091 secs)
27 01 2024 09:09:12.302:INFO [Firefox 122.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 45 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:498 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 122.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.114 secs)
27 01 2024 09:09:12.318:INFO [Firefox 122.0 (Linux x86_64) | AppComponent | should create the app]: Success: 23 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:514 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 122.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.14 secs)
27 01 2024 09:09:12.350:INFO [Firefox 122.0 (Linux x86_64) | AppComponent | should render title]: Success: 26 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:546 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 122.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.164 secs / 0.14 secs)
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

 - [1mFirefox 122.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:551 min/sec/ms


Firefox 122.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.164 secs / 0.14 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 9.95s.
```
