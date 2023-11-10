```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
10 11 2023 09:20:54.677:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
10 11 2023 09:20:54.678:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
10 11 2023 09:20:54.681:INFO [launcher]: Starting browser Firefox
10 11 2023 09:20:55.898:INFO [Firefox 119.0 (Linux x86_64)]: Connected on socket q7VryksQioVIouYHAAAB with id 77288376
Firefox 119.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
10 11 2023 09:20:56.334:INFO [Firefox 119.0 (Linux x86_64)]: Starting tests 77288376
[1A[2KFirefox 119.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.039 secs)
10 11 2023 09:20:56.385:INFO [Firefox 119.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 39 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:719 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.077 secs)
10 11 2023 09:20:56.417:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should render title]: Success: 38 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:751 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 119.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.091 secs)
10 11 2023 09:20:56.445:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should create the app]: Success: 14 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:780 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.104 secs)
10 11 2023 09:20:56.447:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 13 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:781 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.121 secs / 0.104 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should render title : [32mok[39m
   * should create the app : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 119.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:792 min/sec/ms


Firefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.121 secs / 0.104 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.14s.
```
