```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
01 10 2023 04:01:05.172:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
01 10 2023 04:01:05.175:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
01 10 2023 04:01:05.177:INFO [launcher]: Starting browser Firefox
01 10 2023 04:01:06.361:INFO [Firefox 118.0 (Linux x86_64)]: Connected on socket G0CxwBwcBYvQEqFwAAAB with id 75074682
Firefox 118.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
01 10 2023 04:01:06.761:INFO [Firefox 118.0 (Linux x86_64)]: Starting tests 75074682
[1A[2KFirefox 118.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.071 secs)
01 10 2023 04:01:06.834:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should render title]: Success: 71 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:690 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 118.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.086 secs)
01 10 2023 04:01:06.852:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 15 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:708 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 118.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.1 secs)
01 10 2023 04:01:06.873:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should create the app]: Success: 14 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:730 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.112 secs)
01 10 2023 04:01:06.885:INFO [Firefox 118.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 12 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:741 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.13 secs / 0.112 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should render title : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should create the app : [32mok[39m
 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 118.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:750 min/sec/ms


Firefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.13 secs / 0.112 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.34s.
```
