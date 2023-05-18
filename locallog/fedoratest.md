```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
17 05 2023 22:52:13.395:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
17 05 2023 22:52:13.397:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
17 05 2023 22:52:13.400:INFO [launcher]: Starting browser Firefox
17 05 2023 22:52:14.774:INFO [Firefox 113.0 (Linux x86_64)]: Connected on socket U5TZqRCxxbhbpt-AAAAB with id 76623793
Firefox 113.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
17 05 2023 22:52:15.210:INFO [Firefox 113.0 (Linux x86_64)]: Starting tests 76623793
[1A[2KFirefox 113.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.078 secs)
17 05 2023 22:52:15.288:INFO [Firefox 113.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 78 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:912 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.149 secs)
17 05 2023 22:52:15.355:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should render title]: Success: 71 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:979 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 113.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.172 secs)
17 05 2023 22:52:15.388:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 23 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:11 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.192 secs)
17 05 2023 22:52:15.403:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should create the app]: Success: 20 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:27 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.203 secs / 0.192 secs)
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

 - [1mFirefox 113.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:39 min/sec/ms


Firefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.203 secs / 0.192 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 16.61s.
```
