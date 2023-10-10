```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
09 10 2023 23:38:38.154:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
09 10 2023 23:38:38.157:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
09 10 2023 23:38:38.160:INFO [launcher]: Starting browser Firefox
09 10 2023 23:38:39.341:INFO [Firefox 118.0 (Linux x86_64)]: Connected on socket R2bbQfbSzU5NcJBbAAAB with id 87818322
Firefox 118.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
09 10 2023 23:38:39.755:INFO [Firefox 118.0 (Linux x86_64)]: Starting tests 87818322
[1A[2KFirefox 118.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.065 secs)
09 10 2023 23:38:39.820:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should create the app]: Success: 65 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:694 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 118.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.085 secs)
09 10 2023 23:38:39.843:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should render title]: Success: 20 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:717 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 118.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.098 secs)
09 10 2023 23:38:39.854:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 13 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:728 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.106 secs)
09 10 2023 23:38:39.864:INFO [Firefox 118.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:738 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.111 secs / 0.106 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
   * should render title : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 118.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:743 min/sec/ms


Firefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.111 secs / 0.106 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.13s.
```
