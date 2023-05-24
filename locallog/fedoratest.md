```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
24 05 2023 11:50:35.558:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
24 05 2023 11:50:35.561:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
24 05 2023 11:50:35.563:INFO [launcher]: Starting browser Firefox
24 05 2023 11:50:36.846:INFO [Firefox 113.0 (Linux x86_64)]: Connected on socket -X3Or0x1oCbnD0aDAAAB with id 35482896
Firefox 113.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
24 05 2023 11:50:37.166:INFO [Firefox 113.0 (Linux x86_64)]: Starting tests 35482896
[1A[2KFirefox 113.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.072 secs)
24 05 2023 11:50:37.247:INFO [Firefox 113.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 72 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:714 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.119 secs)
24 05 2023 11:50:37.294:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should create the app]: Success: 47 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:761 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 113.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.143 secs)
24 05 2023 11:50:37.326:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should render title]: Success: 24 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:792 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.157 secs)
24 05 2023 11:50:37.337:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 14 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:803 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.172 secs / 0.157 secs)
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

 - [1mFirefox 113.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:808 min/sec/ms


Firefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.172 secs / 0.157 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 6.62s.
```
