```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
10 12 2023 12:12:02.831:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
10 12 2023 12:12:02.832:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
10 12 2023 12:12:02.835:INFO [launcher]: Starting browser Firefox
10 12 2023 12:12:04.206:INFO [Firefox 120.0 (Linux x86_64)]: Connected on socket Zsq6FkuCVHPsT75hAAAB with id 91472643
Firefox 120.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
10 12 2023 12:12:04.620:INFO [Firefox 120.0 (Linux x86_64)]: Starting tests 91472643
[1A[2KFirefox 120.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.039 secs)
10 12 2023 12:12:04.664:INFO [Firefox 120.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 39 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:844 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 120.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.079 secs)
10 12 2023 12:12:04.698:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 40 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:878 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 120.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.099 secs)
10 12 2023 12:12:04.723:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should create the app]: Success: 20 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:903 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.123 secs)
10 12 2023 12:12:04.749:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should render title]: Success: 24 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:929 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.133 secs / 0.123 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should create the app : [32mok[39m
   * should render title : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 120.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:935 min/sec/ms


Firefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.133 secs / 0.123 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.68s.
```
