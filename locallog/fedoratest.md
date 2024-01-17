```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
17 01 2024 16:47:42.504:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
17 01 2024 16:47:42.506:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
17 01 2024 16:47:42.509:INFO [launcher]: Starting browser Firefox
17 01 2024 16:47:44.375:INFO [Firefox 121.0 (Linux x86_64)]: Connected on socket kuqXYo_SAuKRr9uhAAAB with id 35148208
Firefox 121.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
17 01 2024 16:47:45.242:INFO [Firefox 121.0 (Linux x86_64)]: Starting tests 35148208
[1A[2KFirefox 121.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.05 secs)
17 01 2024 16:47:45.268:INFO [Firefox 121.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 50 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:777 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 121.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.115 secs)
17 01 2024 16:47:45.355:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 65 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:864 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 121.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.16 secs)
17 01 2024 16:47:45.391:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should render title]: Success: 45 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:899 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.188 secs)
17 01 2024 16:47:45.438:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should create the app]: Success: 28 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:947 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.199 secs / 0.188 secs)
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

 - [1mFirefox 121.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:954 min/sec/ms


Firefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.199 secs / 0.188 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 13.38s.
```
