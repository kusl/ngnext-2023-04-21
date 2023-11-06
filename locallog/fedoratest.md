```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
05 11 2023 19:09:26.393:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
05 11 2023 19:09:26.395:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
05 11 2023 19:09:26.398:INFO [launcher]: Starting browser Firefox
05 11 2023 19:09:27.557:INFO [Firefox 119.0 (Linux x86_64)]: Connected on socket _axddT0qkMtgC4W4AAAB with id 14465776
Firefox 119.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
05 11 2023 19:09:28.035:INFO [Firefox 119.0 (Linux x86_64)]: Starting tests 14465776
[1A[2KFirefox 119.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.035 secs)
05 11 2023 19:09:28.074:INFO [Firefox 119.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 35 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:692 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.065 secs)
05 11 2023 19:09:28.103:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should create the app]: Success: 30 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:721 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 119.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.08 secs)
05 11 2023 19:09:28.121:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 15 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:738 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.098 secs)
05 11 2023 19:09:28.139:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should render title]: Success: 18 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:756 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.112 secs / 0.098 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should render title : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 119.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:765 min/sec/ms


Firefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.112 secs / 0.098 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 6.93s.
```
