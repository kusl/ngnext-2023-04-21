```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
10 12 2023 06:34:13.242:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
10 12 2023 06:34:13.244:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
10 12 2023 06:34:13.247:INFO [launcher]: Starting browser Firefox
10 12 2023 06:34:14.554:INFO [Firefox 120.0 (Linux x86_64)]: Connected on socket qnWSghiUb5mzoC2aAAAB with id 42504809
Firefox 120.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
10 12 2023 06:34:15.104:INFO [Firefox 120.0 (Linux x86_64)]: Starting tests 42504809
[1A[2KFirefox 120.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.045 secs)
10 12 2023 06:34:15.151:INFO [Firefox 120.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 45 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:924 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 120.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.08 secs)
10 12 2023 06:34:15.195:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should create the app]: Success: 35 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:969 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 120.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.103 secs)
10 12 2023 06:34:15.221:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should render title]: Success: 23 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:994 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.119 secs)
10 12 2023 06:34:15.232:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 16 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:5 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.131 secs / 0.119 secs)
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

 - [1mFirefox 120.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:11 min/sec/ms


Firefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.131 secs / 0.119 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 15.94s.
```
