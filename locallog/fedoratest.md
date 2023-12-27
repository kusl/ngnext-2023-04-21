```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
27 12 2023 10:49:41.116:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
27 12 2023 10:49:41.118:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
27 12 2023 10:49:41.122:INFO [launcher]: Starting browser Firefox
27 12 2023 10:49:42.696:INFO [Firefox 121.0 (Linux x86_64)]: Connected on socket LIZfubMhRWQ1YZSIAAAB with id 17465909
Firefox 121.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
27 12 2023 10:49:43.236:INFO [Firefox 121.0 (Linux x86_64)]: Starting tests 17465909
[1A[2KFirefox 121.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.072 secs)
27 12 2023 10:49:43.317:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should render title]: Success: 72 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:218 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 121.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.092 secs)
27 12 2023 10:49:43.335:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 20 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:235 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 121.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.111 secs)
27 12 2023 10:49:43.360:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should create the app]: Success: 19 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:261 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.119 secs)
27 12 2023 10:49:43.361:INFO [Firefox 121.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:262 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.129 secs / 0.119 secs)
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

 - [1mFirefox 121.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:268 min/sec/ms


Firefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.129 secs / 0.119 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 8.52s.
```
