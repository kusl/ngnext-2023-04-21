```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
11 12 2023 09:23:30.224:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
11 12 2023 09:23:30.226:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
11 12 2023 09:23:30.228:INFO [launcher]: Starting browser Firefox
11 12 2023 09:23:31.602:INFO [Firefox 120.0 (Linux x86_64)]: Connected on socket XwWVvs0OJ18CZcWzAAAB with id 25391633
Firefox 120.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
11 12 2023 09:23:31.981:INFO [Firefox 120.0 (Linux x86_64)]: Starting tests 25391633
[1A[2KFirefox 120.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.035 secs)
11 12 2023 09:23:32.014:INFO [Firefox 120.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 35 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:799 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 120.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.066 secs)
11 12 2023 09:23:32.051:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 31 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:836 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 120.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.083 secs)
11 12 2023 09:23:32.075:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should render title]: Success: 17 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:860 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.095 secs)
11 12 2023 09:23:32.087:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should create the app]: Success: 12 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:873 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.107 secs / 0.095 secs)
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

 - [1mFirefox 120.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:876 min/sec/ms


Firefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.107 secs / 0.095 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.74s.
```
