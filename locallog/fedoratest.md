```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
05 07 2023 09:59:39.314:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
05 07 2023 09:59:39.315:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
05 07 2023 09:59:39.318:INFO [launcher]: Starting browser Firefox
05 07 2023 09:59:40.706:INFO [Firefox 114.0 (Linux x86_64)]: Connected on socket m-QbF7H9DSQAU-RDAAAB with id 75587387
Firefox 114.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
05 07 2023 09:59:41.162:INFO [Firefox 114.0 (Linux x86_64)]: Starting tests 75587387
[1A[2KFirefox 114.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.072 secs)
05 07 2023 09:59:41.232:INFO [Firefox 114.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 72 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:931 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.131 secs)
05 07 2023 09:59:41.297:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should create the app]: Success: 59 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:996 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 114.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.156 secs)
05 07 2023 09:59:41.331:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 25 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:30 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.189 secs)
05 07 2023 09:59:41.360:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should render title]: Success: 33 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:59 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.221 secs / 0.189 secs)
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

 - [1mFirefox 114.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:84 min/sec/ms


Firefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.221 secs / 0.189 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 10.62s.
```
