```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
27 06 2023 13:38:11.763:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
27 06 2023 13:38:11.764:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
27 06 2023 13:38:11.767:INFO [launcher]: Starting browser Firefox
27 06 2023 13:38:13.102:INFO [Firefox 114.0 (Linux x86_64)]: Connected on socket iIomonCrzaHMKEXLAAAB with id 84684472
Firefox 114.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
27 06 2023 13:38:13.607:INFO [Firefox 114.0 (Linux x86_64)]: Starting tests 84684472
[1A[2KFirefox 114.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.113 secs)
27 06 2023 13:38:13.720:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 113 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:969 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 114.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.133 secs)
27 06 2023 13:38:13.742:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should create the app]: Success: 20 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:991 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 114.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.162 secs)
27 06 2023 13:38:13.783:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should render title]: Success: 29 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:32 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.172 secs)
27 06 2023 13:38:14.602:INFO [Firefox 114.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:851 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.996 secs / 0.172 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should create the app : [32mok[39m
   * should render title : [32mok[39m
 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 114.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:854 min/sec/ms


Firefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.996 secs / 0.172 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 11.15s.
```
