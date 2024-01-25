```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
24 01 2024 22:12:18.588:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
24 01 2024 22:12:18.590:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
24 01 2024 22:12:18.594:INFO [launcher]: Starting browser Firefox
24 01 2024 22:12:21.419:INFO [Firefox 121.0 (Linux x86_64)]: Connected on socket _Fy2uCiUO1orWYlxAAAB with id 50586264
Firefox 121.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
24 01 2024 22:12:22.387:INFO [Firefox 121.0 (Linux x86_64)]: Starting tests 50586264
[1A[2KFirefox 121.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.133 secs)
24 01 2024 22:12:22.591:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should create the app]: Success: 133 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:4:22 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 121.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.176 secs)
24 01 2024 22:12:22.595:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 43 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:4:26 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 121.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.22 secs)
24 01 2024 22:12:22.625:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should render title]: Success: 44 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:4:55 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.237 secs)
24 01 2024 22:12:22.648:INFO [Firefox 121.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 17 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:4:79 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.286 secs / 0.237 secs)
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
Elapsed Time: 0:4:107 min/sec/ms


Firefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.286 secs / 0.237 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 25.02s.
```
