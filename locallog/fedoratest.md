```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
05 05 2023 10:50:52.351:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
05 05 2023 10:50:52.353:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
05 05 2023 10:50:52.357:INFO [launcher]: Starting browser Firefox
05 05 2023 10:50:53.622:INFO [Firefox 112.0 (Linux x86_64)]: Connected on socket EzgrO_75WDdwOqFwAAAB with id 35512364
Firefox 112.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
05 05 2023 10:50:54.043:INFO [Firefox 112.0 (Linux x86_64)]: Starting tests 35512364
[1A[2KFirefox 112.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.11 secs)
05 05 2023 10:50:54.150:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should render title]: Success: 110 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:812 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 112.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.131 secs)
05 05 2023 10:50:54.172:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 21 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:834 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 112.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.148 secs)
05 05 2023 10:50:54.190:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should create the app]: Success: 17 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:852 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 112.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.158 secs)
05 05 2023 10:50:54.209:INFO [Firefox 112.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:872 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.167 secs / 0.158 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should render title : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should create the app : [32mok[39m
 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 112.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:875 min/sec/ms


Firefox 112.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.167 secs / 0.158 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.02s.
```
