```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
08 11 2023 10:12:10.088:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
08 11 2023 10:12:10.091:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
08 11 2023 10:12:10.095:INFO [launcher]: Starting browser Firefox
08 11 2023 10:12:11.524:INFO [Firefox 119.0 (Linux x86_64)]: Connected on socket osbug0QaimvAPaFaAAAB with id 67987667
Firefox 119.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
08 11 2023 10:12:12.016:INFO [Firefox 119.0 (Linux x86_64)]: Starting tests 67987667
[1A[2KFirefox 119.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.068 secs)
08 11 2023 10:12:12.088:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 68 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:25 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 119.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.088 secs)
08 11 2023 10:12:12.112:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should create the app]: Success: 20 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:50 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 119.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.115 secs)
08 11 2023 10:12:12.136:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should render title]: Success: 27 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:73 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.123 secs)
08 11 2023 10:12:12.156:INFO [Firefox 119.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:94 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.142 secs / 0.123 secs)
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

 - [1mFirefox 119.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:98 min/sec/ms


Firefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.142 secs / 0.123 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 17.38s.
```
