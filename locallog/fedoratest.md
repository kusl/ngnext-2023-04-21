```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
28 01 2024 22:27:56.424:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
28 01 2024 22:27:56.425:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
28 01 2024 22:27:56.429:INFO [launcher]: Starting browser Firefox
28 01 2024 22:27:57.969:INFO [Firefox 122.0 (Linux x86_64)]: Connected on socket E-rKvkSmnSbxxmz5AAAB with id 29358936
Firefox 122.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
28 01 2024 22:27:58.511:INFO [Firefox 122.0 (Linux x86_64)]: Starting tests 29358936
[1A[2KFirefox 122.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.067 secs)
28 01 2024 22:27:58.591:INFO [Firefox 122.0 (Linux x86_64) | AppComponent | should create the app]: Success: 67 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:182 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 122.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.088 secs)
28 01 2024 22:27:58.609:INFO [Firefox 122.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 21 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:199 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 122.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.114 secs)
28 01 2024 22:27:58.629:INFO [Firefox 122.0 (Linux x86_64) | AppComponent | should render title]: Success: 26 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:219 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 122.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.122 secs)
28 01 2024 22:27:58.644:INFO [Firefox 122.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:235 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 122.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.135 secs / 0.122 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should render title : [32mok[39m
 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 122.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:238 min/sec/ms


Firefox 122.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.135 secs / 0.122 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 9.17s.
```
