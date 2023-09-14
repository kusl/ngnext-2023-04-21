```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
14 09 2023 12:47:13.669:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
14 09 2023 12:47:13.671:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
14 09 2023 12:47:13.674:INFO [launcher]: Starting browser Firefox
14 09 2023 12:47:15.226:INFO [Firefox 117.0 (Linux x86_64)]: Connected on socket kHXLnHyJkThhMEw2AAAB with id 81401405
Firefox 117.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
14 09 2023 12:47:15.788:INFO [Firefox 117.0 (Linux x86_64)]: Starting tests 81401405
[1A[2KFirefox 117.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.063 secs)
14 09 2023 12:47:15.854:INFO [Firefox 117.0 (Linux x86_64) | AppComponent | should create the app]: Success: 63 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:199 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 117.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.085 secs)
14 09 2023 12:47:15.870:INFO [Firefox 117.0 (Linux x86_64) | AppComponent | should render title]: Success: 22 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:215 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 117.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.1 secs)
14 09 2023 12:47:15.884:INFO [Firefox 117.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 15 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:229 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 117.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.107 secs)
14 09 2023 12:47:15.901:INFO [Firefox 117.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:247 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 117.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.116 secs / 0.107 secs)
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

 - [1mFirefox 117.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:251 min/sec/ms


Firefox 117.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.116 secs / 0.107 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.86s.
```
