```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
30 09 2023 14:30:28.521:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
30 09 2023 14:30:28.523:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
30 09 2023 14:30:28.526:INFO [launcher]: Starting browser Firefox
30 09 2023 14:30:29.812:INFO [Firefox 118.0 (Linux x86_64)]: Connected on socket l9QF-CyWfTWOEar5AAAB with id 85028740
Firefox 118.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
30 09 2023 14:30:30.302:INFO [Firefox 118.0 (Linux x86_64)]: Starting tests 85028740
[1A[2KFirefox 118.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.062 secs)
30 09 2023 14:30:30.370:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should create the app]: Success: 62 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:878 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 118.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.078 secs)
30 09 2023 14:30:30.383:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 16 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:890 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 118.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.098 secs)
30 09 2023 14:30:30.403:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should render title]: Success: 20 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:910 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.108 secs)
30 09 2023 14:30:30.418:INFO [Firefox 118.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:925 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.118 secs / 0.108 secs)
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

 - [1mFirefox 118.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:929 min/sec/ms


Firefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.118 secs / 0.108 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.65s.
```
