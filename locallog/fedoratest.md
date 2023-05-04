```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
04 05 2023 04:47:46.976:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
04 05 2023 04:47:46.978:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
04 05 2023 04:47:46.981:INFO [launcher]: Starting browser Firefox
04 05 2023 04:47:48.778:INFO [Firefox 112.0 (Linux x86_64)]: Connected on socket DQR7P7pMY2wPveuEAAAB with id 6822699
Firefox 112.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
04 05 2023 04:47:49.356:INFO [Firefox 112.0 (Linux x86_64)]: Starting tests 6822699
[1A[2KFirefox 112.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.107 secs)
04 05 2023 04:47:49.464:INFO [Firefox 112.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 107 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:503 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.186 secs)
04 05 2023 04:47:49.548:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should create the app]: Success: 79 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:587 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 112.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.221 secs)
04 05 2023 04:47:49.604:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should render title]: Success: 35 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:643 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 112.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.243 secs)
04 05 2023 04:47:49.615:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 22 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:655 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 112.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.299 secs / 0.243 secs)
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

 - [1mFirefox 112.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:697 min/sec/ms


Firefox 112.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.299 secs / 0.243 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 20.29s.
```
