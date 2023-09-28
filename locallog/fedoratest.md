```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
28 09 2023 14:34:49.958:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
28 09 2023 14:34:49.960:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
28 09 2023 14:34:49.962:INFO [launcher]: Starting browser Firefox
28 09 2023 14:34:51.748:INFO [Firefox 117.0 (Linux x86_64)]: Connected on socket o9G9HzYE_YbGNynTAAAB with id 12515571
Firefox 117.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
28 09 2023 14:34:52.161:INFO [Firefox 117.0 (Linux x86_64)]: Starting tests 12515571
[1A[2KFirefox 117.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.034 secs)
28 09 2023 14:34:52.202:INFO [Firefox 117.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 34 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:256 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 117.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.069 secs)
28 09 2023 14:34:52.242:INFO [Firefox 117.0 (Linux x86_64) | AppComponent | should render title]: Success: 35 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:295 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 117.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.083 secs)
28 09 2023 14:34:52.254:INFO [Firefox 117.0 (Linux x86_64) | AppComponent | should create the app]: Success: 14 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:307 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 117.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.094 secs)
28 09 2023 14:34:52.267:INFO [Firefox 117.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 11 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:321 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 117.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.108 secs / 0.094 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should render title : [32mok[39m
   * should create the app : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 117.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:324 min/sec/ms


Firefox 117.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.108 secs / 0.094 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.84s.
```
