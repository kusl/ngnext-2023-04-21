```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
22 05 2023 14:26:39.484:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
22 05 2023 14:26:39.486:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
22 05 2023 14:26:39.489:INFO [launcher]: Starting browser Firefox
22 05 2023 14:26:41.127:INFO [Firefox 113.0 (Linux x86_64)]: Connected on socket e2-FOk4vbz791oZgAAAB with id 43933212
Firefox 113.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
22 05 2023 14:26:41.579:INFO [Firefox 113.0 (Linux x86_64)]: Starting tests 43933212
[1A[2KFirefox 113.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.088 secs)
22 05 2023 14:26:41.699:INFO [Firefox 113.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 88 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:230 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.162 secs)
22 05 2023 14:26:41.750:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 74 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:282 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 113.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.19 secs)
22 05 2023 14:26:41.781:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should create the app]: Success: 28 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:312 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.222 secs)
22 05 2023 14:26:41.815:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should render title]: Success: 32 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:347 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.24 secs / 0.222 secs)
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

 - [1mFirefox 113.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:354 min/sec/ms


Firefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.24 secs / 0.222 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 19.48s.
```
