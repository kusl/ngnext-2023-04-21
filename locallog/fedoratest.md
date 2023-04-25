```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
25 04 2023 02:24:49.100:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
25 04 2023 02:24:49.102:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
25 04 2023 02:24:49.105:INFO [launcher]: Starting browser Firefox
25 04 2023 02:24:50.525:INFO [Firefox 112.0 (Linux x86_64)]: Connected on socket VIv6BnZHoNFnJB-yAAAB with id 39228328
Firefox 112.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
25 04 2023 02:24:50.967:INFO [Firefox 112.0 (Linux x86_64)]: Starting tests 39228328
[1A[2KFirefox 112.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.118 secs)
25 04 2023 02:24:51.075:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 118 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:1 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 112.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.154 secs)
25 04 2023 02:24:51.116:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should render title]: Success: 36 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:42 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 112.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.17 secs)
25 04 2023 02:24:51.134:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should create the app]: Success: 16 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:60 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 112.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.177 secs)
25 04 2023 02:24:51.149:INFO [Firefox 112.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:75 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.184 secs / 0.177 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should render title : [32mok[39m
   * should create the app : [32mok[39m
 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 112.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:79 min/sec/ms


Firefox 112.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.184 secs / 0.177 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.02s.
```
