```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
04 12 2023 08:21:10.751:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
04 12 2023 08:21:10.753:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
04 12 2023 08:21:10.755:INFO [launcher]: Starting browser Firefox
04 12 2023 08:21:12.067:INFO [Firefox 120.0 (Linux x86_64)]: Connected on socket aGV-XuXn7Es6UKsXAAAB with id 57373524
Firefox 120.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
04 12 2023 08:21:12.593:INFO [Firefox 120.0 (Linux x86_64)]: Starting tests 57373524
[1A[2KFirefox 120.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.033 secs)
04 12 2023 08:21:12.644:INFO [Firefox 120.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 33 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:910 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 120.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.074 secs)
04 12 2023 08:21:12.674:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should render title]: Success: 41 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:939 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 120.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.094 secs)
04 12 2023 08:21:12.696:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 20 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:961 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.111 secs)
04 12 2023 08:21:12.724:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should create the app]: Success: 17 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:989 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.133 secs / 0.111 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should render title : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should create the app : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 120.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:993 min/sec/ms


Firefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.133 secs / 0.111 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 11.22s.
```
