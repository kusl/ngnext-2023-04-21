```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
16 01 2024 09:28:02.568:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
16 01 2024 09:28:02.570:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
16 01 2024 09:28:02.573:INFO [launcher]: Starting browser Firefox
16 01 2024 09:28:04.492:INFO [Firefox 121.0 (Linux x86_64)]: Connected on socket 1tFUtsfPeevyqunBAAAB with id 40836632
Firefox 121.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
16 01 2024 09:28:05.245:INFO [Firefox 121.0 (Linux x86_64)]: Starting tests 40836632
[1A[2KFirefox 121.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.049 secs)
16 01 2024 09:28:05.324:INFO [Firefox 121.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 49 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:769 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 121.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.125 secs)
16 01 2024 09:28:05.460:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should render title]: Success: 76 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:904 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 121.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.154 secs)
16 01 2024 09:28:05.461:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should create the app]: Success: 29 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:906 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.177 secs)
16 01 2024 09:28:05.465:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 23 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:910 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.223 secs / 0.177 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should render title : [32mok[39m
   * should create the app : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 121.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:916 min/sec/ms


Firefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.223 secs / 0.177 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 14.26s.
```
