```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
21 12 2023 12:09:22.403:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
21 12 2023 12:09:22.404:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
21 12 2023 12:09:22.407:INFO [launcher]: Starting browser Firefox
21 12 2023 12:09:24.430:INFO [Firefox 120.0 (Linux x86_64)]: Connected on socket j4E_kobOltux8U_SAAAB with id 41545029
Firefox 120.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
21 12 2023 12:09:25.221:INFO [Firefox 120.0 (Linux x86_64)]: Starting tests 41545029
[1A[2KFirefox 120.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.109 secs)
21 12 2023 12:09:25.326:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 109 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:937 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 120.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.154 secs)
21 12 2023 12:09:25.402:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should render title]: Success: 45 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:3:14 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 120.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.184 secs)
21 12 2023 12:09:25.424:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should create the app]: Success: 30 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:3:35 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.201 secs)
21 12 2023 12:09:25.428:INFO [Firefox 120.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 17 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:3:40 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.218 secs / 0.201 secs)
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

 - [1mFirefox 120.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:3:54 min/sec/ms


Firefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.218 secs / 0.201 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 18.99s.
```
