```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
28 01 2024 10:06:50.223:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
28 01 2024 10:06:50.225:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
28 01 2024 10:06:50.229:INFO [launcher]: Starting browser Firefox
28 01 2024 10:06:51.786:INFO [Firefox 122.0 (Linux x86_64)]: Connected on socket m6sQFqt7vwDHo_UYAAAB with id 28040722
Firefox 122.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
28 01 2024 10:06:52.321:INFO [Firefox 122.0 (Linux x86_64)]: Starting tests 28040722
[1A[2KFirefox 122.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.068 secs)
28 01 2024 10:06:52.383:INFO [Firefox 122.0 (Linux x86_64) | AppComponent | should create the app]: Success: 68 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:174 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 122.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.097 secs)
28 01 2024 10:06:52.441:INFO [Firefox 122.0 (Linux x86_64) | AppComponent | should render title]: Success: 29 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:232 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 122.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.116 secs)
28 01 2024 10:06:52.443:INFO [Firefox 122.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 19 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:234 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 122.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.126 secs)
28 01 2024 10:06:52.452:INFO [Firefox 122.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:244 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 122.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.136 secs / 0.126 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
   * should render title : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 122.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:251 min/sec/ms


Firefox 122.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.136 secs / 0.126 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 9.13s.
```
