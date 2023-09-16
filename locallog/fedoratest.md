```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
16 09 2023 19:52:25.757:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
16 09 2023 19:52:25.759:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
16 09 2023 19:52:25.762:INFO [launcher]: Starting browser Firefox
16 09 2023 19:52:26.897:INFO [Firefox 117.0 (Linux x86_64)]: Connected on socket RXTjukn3WeomNX6ZAAAB with id 64818040
Firefox 117.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
16 09 2023 19:52:27.300:INFO [Firefox 117.0 (Linux x86_64)]: Starting tests 64818040
[1A[2KFirefox 117.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.061 secs)
16 09 2023 19:52:27.373:INFO [Firefox 117.0 (Linux x86_64) | AppComponent | should render title]: Success: 61 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:629 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 117.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.079 secs)
16 09 2023 19:52:27.405:INFO [Firefox 117.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 18 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:661 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 117.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.098 secs)
16 09 2023 19:52:27.406:INFO [Firefox 117.0 (Linux x86_64) | AppComponent | should create the app]: Success: 19 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:663 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 117.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.107 secs)
16 09 2023 19:52:27.414:INFO [Firefox 117.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:670 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 117.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.116 secs / 0.107 secs)
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

 - [1mFirefox 117.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:677 min/sec/ms


Firefox 117.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.116 secs / 0.107 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.01s.
```
