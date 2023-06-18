```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
18 06 2023 15:03:52.310:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
18 06 2023 15:03:52.312:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
18 06 2023 15:03:52.315:INFO [launcher]: Starting browser Firefox
18 06 2023 15:03:53.624:INFO [Firefox 114.0 (Linux x86_64)]: Connected on socket M6wwn-VukHTNCNX2AAAB with id 97093482
Firefox 114.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
18 06 2023 15:03:54.017:INFO [Firefox 114.0 (Linux x86_64)]: Starting tests 97093482
[1A[2KFirefox 114.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.062 secs)
18 06 2023 15:03:54.074:INFO [Firefox 114.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 62 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:780 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.118 secs)
18 06 2023 15:03:54.144:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 56 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:849 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 114.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.152 secs)
18 06 2023 15:03:54.892:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should render title]: Success: 34 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:598 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.174 secs)
18 06 2023 15:03:54.893:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should create the app]: Success: 22 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:599 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.877 secs / 0.174 secs)
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

 - [1mFirefox 114.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:603 min/sec/ms


Firefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.877 secs / 0.174 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 11.29s.
```
