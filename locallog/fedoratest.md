```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
17 01 2024 07:51:07.900:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
17 01 2024 07:51:07.902:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
17 01 2024 07:51:07.905:INFO [launcher]: Starting browser Firefox
17 01 2024 07:51:09.819:INFO [Firefox 121.0 (Linux x86_64)]: Connected on socket tlZ7wVl8hLfXCLl7AAAB with id 38865753
Firefox 121.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
17 01 2024 07:51:11.825:INFO [Firefox 121.0 (Linux x86_64)]: Starting tests 38865753
[1A[2KFirefox 121.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.104 secs)
17 01 2024 07:51:11.841:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 104 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:3:954 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 121.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.139 secs)
17 01 2024 07:51:11.844:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should render title]: Success: 35 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:3:956 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 121.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.166 secs)
17 01 2024 07:51:11.845:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should create the app]: Success: 27 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:3:957 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.178 secs)
17 01 2024 07:51:11.846:INFO [Firefox 121.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 12 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:3:958 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.023 secs / 0.178 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should render title : [32mok[39m
   * should create the app : [32mok[39m
 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 121.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:3:964 min/sec/ms


Firefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.023 secs / 0.178 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 13.79s.
```
