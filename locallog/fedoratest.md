```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
10 05 2023 14:38:48.759:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
10 05 2023 14:38:48.761:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
10 05 2023 14:38:48.764:INFO [launcher]: Starting browser Firefox
10 05 2023 14:38:50.051:INFO [Firefox 112.0 (Linux x86_64)]: Connected on socket byf24POBWeK-tSK_AAAB with id 58142002
Firefox 112.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
10 05 2023 14:38:50.444:INFO [Firefox 112.0 (Linux x86_64)]: Starting tests 58142002
[1A[2KFirefox 112.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.136 secs)
10 05 2023 14:38:50.583:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should render title]: Success: 136 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:839 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 112.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.158 secs)
10 05 2023 14:38:50.598:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should create the app]: Success: 22 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:853 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 112.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.176 secs)
10 05 2023 14:38:50.619:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 18 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:874 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 112.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.185 secs)
10 05 2023 14:38:50.638:INFO [Firefox 112.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:893 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.196 secs / 0.185 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should render title : [32mok[39m
   * should create the app : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 112.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:897 min/sec/ms


Firefox 112.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.196 secs / 0.185 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 14.37s.
```
