```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
04 10 2023 10:26:05.353:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
04 10 2023 10:26:05.355:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
04 10 2023 10:26:05.357:INFO [launcher]: Starting browser Firefox
04 10 2023 10:26:06.488:INFO [Firefox 118.0 (Linux x86_64)]: Connected on socket fjiNFet5HmPpDHTRAAAB with id 20607087
Firefox 118.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
04 10 2023 10:26:07.071:INFO [Firefox 118.0 (Linux x86_64)]: Starting tests 20607087
[1A[2KFirefox 118.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.044 secs)
04 10 2023 10:26:07.150:INFO [Firefox 118.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 44 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:810 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.086 secs)
04 10 2023 10:26:07.170:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should create the app]: Success: 42 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:830 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 118.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.112 secs)
04 10 2023 10:26:07.193:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should render title]: Success: 26 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:853 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.129 secs)
04 10 2023 10:26:07.212:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 17 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:872 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.145 secs / 0.129 secs)
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

 - [1mFirefox 118.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:878 min/sec/ms


Firefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.145 secs / 0.129 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 10.71s.
```
