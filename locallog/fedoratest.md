```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
11 01 2024 11:51:25.839:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
11 01 2024 11:51:25.841:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
11 01 2024 11:51:25.844:INFO [launcher]: Starting browser Firefox
11 01 2024 11:51:27.758:INFO [Firefox 121.0 (Linux x86_64)]: Connected on socket eGvOyyh88K29QH2XAAAB with id 80088415
Firefox 121.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
11 01 2024 11:51:28.393:INFO [Firefox 121.0 (Linux x86_64)]: Starting tests 80088415
[1A[2KFirefox 121.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.043 secs)
11 01 2024 11:51:28.423:INFO [Firefox 121.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 43 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:599 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 121.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.091 secs)
11 01 2024 11:51:28.486:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 48 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:662 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 121.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.122 secs)
11 01 2024 11:51:28.514:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should render title]: Success: 31 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:689 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.142 secs)
11 01 2024 11:51:28.533:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should create the app]: Success: 20 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:709 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.143 secs / 0.142 secs)
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
Elapsed Time: 0:2:715 min/sec/ms


Firefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.143 secs / 0.142 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 9.63s.
```
