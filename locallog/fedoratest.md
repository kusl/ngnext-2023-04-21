```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
13 06 2023 10:23:19.582:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
13 06 2023 10:23:19.586:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
13 06 2023 10:23:19.589:INFO [launcher]: Starting browser Firefox
13 06 2023 10:23:21.054:INFO [Firefox 114.0 (Linux x86_64)]: Connected on socket djAxFt3wwJfcs5dRAAAB with id 33138247
Firefox 114.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
13 06 2023 10:23:21.350:INFO [Firefox 114.0 (Linux x86_64)]: Starting tests 33138247
[1A[2KFirefox 114.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.115 secs)
13 06 2023 10:23:21.459:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should render title]: Success: 115 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:904 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 114.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.137 secs)
13 06 2023 10:23:21.488:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 22 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:932 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 114.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.16 secs)
13 06 2023 10:23:21.505:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should create the app]: Success: 23 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:949 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.169 secs)
13 06 2023 10:23:21.522:INFO [Firefox 114.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:967 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.173 secs / 0.169 secs)
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

 - [1mFirefox 114.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:971 min/sec/ms


Firefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.173 secs / 0.169 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.27s.
```
