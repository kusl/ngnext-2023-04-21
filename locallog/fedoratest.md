```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
12 12 2023 23:01:33.951:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
12 12 2023 23:01:33.953:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
12 12 2023 23:01:33.956:INFO [launcher]: Starting browser Firefox
12 12 2023 23:01:35.289:INFO [Firefox 120.0 (Linux x86_64)]: Connected on socket XmNOGneqBWZAPFYRAAAB with id 48826914
Firefox 120.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
12 12 2023 23:01:35.734:INFO [Firefox 120.0 (Linux x86_64)]: Starting tests 48826914
[1A[2KFirefox 120.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.066 secs)
12 12 2023 23:01:35.809:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should create the app]: Success: 66 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:887 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 120.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.095 secs)
12 12 2023 23:01:35.835:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should render title]: Success: 29 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:912 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 120.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.114 secs)
12 12 2023 23:01:35.854:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 19 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:932 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.123 secs)
12 12 2023 23:01:35.867:INFO [Firefox 120.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:945 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.134 secs / 0.123 secs)
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

 - [1mFirefox 120.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:948 min/sec/ms


Firefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.134 secs / 0.123 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.83s.
```
