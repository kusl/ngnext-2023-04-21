```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
29 01 2024 20:09:19.779:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
29 01 2024 20:09:19.781:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
29 01 2024 20:09:19.784:INFO [launcher]: Starting browser Firefox
29 01 2024 20:09:21.412:INFO [Firefox 122.0 (Linux x86_64)]: Connected on socket ksIYEWsQwjM73Z5KAAAB with id 22379188
Firefox 122.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
29 01 2024 20:09:21.976:INFO [Firefox 122.0 (Linux x86_64)]: Starting tests 22379188
[1A[2KFirefox 122.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.039 secs)
29 01 2024 20:09:22.028:INFO [Firefox 122.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 39 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:272 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 122.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.084 secs)
29 01 2024 20:09:22.070:INFO [Firefox 122.0 (Linux x86_64) | AppComponent | should create the app]: Success: 45 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:314 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 122.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.112 secs)
29 01 2024 20:09:22.098:INFO [Firefox 122.0 (Linux x86_64) | AppComponent | should render title]: Success: 28 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:341 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 122.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.128 secs)
29 01 2024 20:09:22.126:INFO [Firefox 122.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 16 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:369 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 122.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.152 secs / 0.128 secs)
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

 - [1mFirefox 122.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:374 min/sec/ms


Firefox 122.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.152 secs / 0.128 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 9.54s.
```
