```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
29 11 2023 18:24:23.081:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
29 11 2023 18:24:23.083:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
29 11 2023 18:24:23.087:INFO [launcher]: Starting browser Firefox
29 11 2023 18:24:24.457:INFO [Firefox 120.0 (Linux x86_64)]: Connected on socket BkOs_j7deOCRPHyVAAAB with id 79231229
Firefox 120.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
29 11 2023 18:24:24.937:INFO [Firefox 120.0 (Linux x86_64)]: Starting tests 79231229
[1A[2KFirefox 120.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.036 secs)
29 11 2023 18:24:24.975:INFO [Firefox 120.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 36 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:916 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 120.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.076 secs)
29 11 2023 18:24:25.025:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should create the app]: Success: 40 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:966 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 120.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.102 secs)
29 11 2023 18:24:25.051:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should render title]: Success: 26 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:993 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.121 secs)
29 11 2023 18:24:25.076:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 19 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:17 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.141 secs / 0.121 secs)
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

 - [1mFirefox 120.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:21 min/sec/ms


Firefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.141 secs / 0.121 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 16.46s.
```
