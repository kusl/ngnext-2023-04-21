```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
01 08 2023 23:15:45.402:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
01 08 2023 23:15:45.404:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
01 08 2023 23:15:45.407:INFO [launcher]: Starting browser Firefox
01 08 2023 23:15:46.676:INFO [Firefox 115.0 (Linux x86_64)]: Connected on socket o_-7wAOEUcQbsGsfAAAB with id 59635671
Firefox 115.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
01 08 2023 23:15:47.061:INFO [Firefox 115.0 (Linux x86_64)]: Starting tests 59635671
[1A[2KFirefox 115.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.066 secs)
01 08 2023 23:15:47.119:INFO [Firefox 115.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 66 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:731 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 115.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.113 secs)
01 08 2023 23:15:47.174:INFO [Firefox 115.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 47 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:786 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 115.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.139 secs)
01 08 2023 23:15:47.210:INFO [Firefox 115.0 (Linux x86_64) | AppComponent | should render title]: Success: 26 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:822 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 115.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.154 secs)
01 08 2023 23:15:47.219:INFO [Firefox 115.0 (Linux x86_64) | AppComponent | should create the app]: Success: 15 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:831 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 115.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.162 secs / 0.154 secs)
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

 - [1mFirefox 115.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:838 min/sec/ms


Firefox 115.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.162 secs / 0.154 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.45s.
```
