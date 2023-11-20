```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
20 11 2023 12:14:00.678:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
20 11 2023 12:14:00.679:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
20 11 2023 12:14:00.682:INFO [launcher]: Starting browser Firefox
20 11 2023 12:14:01.882:INFO [Firefox 119.0 (Linux x86_64)]: Connected on socket 2gx-2YiOT4CBxwYvAAAB with id 38367387
Firefox 119.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
20 11 2023 12:14:02.244:INFO [Firefox 119.0 (Linux x86_64)]: Starting tests 38367387
[1A[2KFirefox 119.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.06 secs)
20 11 2023 12:14:02.313:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should render title]: Success: 60 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:645 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 119.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.074 secs)
20 11 2023 12:14:02.334:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should create the app]: Success: 14 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:667 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 119.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.089 secs)
20 11 2023 12:14:02.337:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 15 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:669 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.097 secs)
20 11 2023 12:14:02.345:INFO [Firefox 119.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:678 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.104 secs / 0.097 secs)
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

 - [1mFirefox 119.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:682 min/sec/ms


Firefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.104 secs / 0.097 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 6.68s.
```
