```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
15 07 2023 00:16:21.923:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
15 07 2023 00:16:21.925:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
15 07 2023 00:16:21.928:INFO [launcher]: Starting browser Firefox
15 07 2023 00:16:23.307:INFO [Firefox 114.0 (Linux x86_64)]: Connected on socket 6_lAUCEKPJfUJON_AAAB with id 74921189
Firefox 114.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
15 07 2023 00:16:23.717:INFO [Firefox 114.0 (Linux x86_64)]: Starting tests 74921189
[1A[2KFirefox 114.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.071 secs)
15 07 2023 00:16:23.785:INFO [Firefox 114.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 71 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:874 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.161 secs)
15 07 2023 00:16:23.883:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should render title]: Success: 90 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:973 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 114.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.185 secs)
15 07 2023 00:16:23.933:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 24 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:22 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.207 secs)
15 07 2023 00:16:23.939:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should create the app]: Success: 22 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:31 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.238 secs / 0.207 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should render title : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should create the app : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 114.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:48 min/sec/ms


Firefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.238 secs / 0.207 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 15.09s.
```
