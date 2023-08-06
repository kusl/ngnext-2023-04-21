```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
05 08 2023 23:42:48.000:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
05 08 2023 23:42:48.002:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
05 08 2023 23:42:48.006:INFO [launcher]: Starting browser Firefox
05 08 2023 23:42:49.145:INFO [Firefox 116.0 (Linux x86_64)]: Connected on socket J4rPYqF1hC4vd8YMAAAB with id 86090703
Firefox 116.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
05 08 2023 23:42:49.986:INFO [Firefox 116.0 (Linux x86_64)]: Starting tests 86090703
[1A[2KFirefox 116.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.052 secs)
05 08 2023 23:42:50.038:INFO [Firefox 116.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 52 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:73 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 116.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.067 secs)
05 08 2023 23:42:50.053:INFO [Firefox 116.0 (Linux x86_64) | AppComponent | should create the app]: Success: 15 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:87 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 116.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.083 secs)
05 08 2023 23:42:50.070:INFO [Firefox 116.0 (Linux x86_64) | AppComponent | should render title]: Success: 16 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:104 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 116.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.089 secs)
05 08 2023 23:42:50.079:INFO [Firefox 116.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:113 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 116.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.094 secs / 0.089 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should create the app : [32mok[39m
   * should render title : [32mok[39m
 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 116.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:117 min/sec/ms


Firefox 116.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.094 secs / 0.089 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 6.96s.
```
