```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
30 01 2024 09:06:12.011:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
30 01 2024 09:06:12.013:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
30 01 2024 09:06:12.016:INFO [launcher]: Starting browser Firefox
30 01 2024 09:06:13.637:INFO [Firefox 122.0 (Linux x86_64)]: Connected on socket 17UasW8F4beLiz2ZAAAB with id 68959564
Firefox 122.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
30 01 2024 09:06:14.229:INFO [Firefox 122.0 (Linux x86_64)]: Starting tests 68959564
[1A[2KFirefox 122.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.046 secs)
30 01 2024 09:06:14.282:INFO [Firefox 122.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 46 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:286 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 122.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.093 secs)
30 01 2024 09:06:14.324:INFO [Firefox 122.0 (Linux x86_64) | AppComponent | should create the app]: Success: 47 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:327 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 122.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.127 secs)
30 01 2024 09:06:14.368:INFO [Firefox 122.0 (Linux x86_64) | AppComponent | should render title]: Success: 34 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:371 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 122.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.149 secs)
30 01 2024 09:06:14.385:INFO [Firefox 122.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 22 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:389 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 122.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.172 secs / 0.149 secs)
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

 - [1mFirefox 122.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:406 min/sec/ms


Firefox 122.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.172 secs / 0.149 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 9.75s.
```
