```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
31 07 2023 15:46:59.190:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
31 07 2023 15:46:59.192:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
31 07 2023 15:46:59.195:INFO [launcher]: Starting browser Firefox
31 07 2023 15:47:00.513:INFO [Firefox 115.0 (Linux x86_64)]: Connected on socket 8kl0vSCZL0mxRFLgAAAB with id 62708033
Firefox 115.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
31 07 2023 15:47:00.994:INFO [Firefox 115.0 (Linux x86_64)]: Starting tests 62708033
[1A[2KFirefox 115.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.064 secs)
31 07 2023 15:47:01.059:INFO [Firefox 115.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 64 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:883 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 115.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.115 secs)
31 07 2023 15:47:01.125:INFO [Firefox 115.0 (Linux x86_64) | AppComponent | should create the app]: Success: 51 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:948 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 115.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.144 secs)
31 07 2023 15:47:01.142:INFO [Firefox 115.0 (Linux x86_64) | AppComponent | should render title]: Success: 29 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:965 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 115.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.167 secs)
31 07 2023 15:47:01.177:INFO [Firefox 115.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 23 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:0 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 115.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.184 secs / 0.167 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
   * should render title : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 115.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:4 min/sec/ms


Firefox 115.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.184 secs / 0.167 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 16.24s.
```
