```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
14 06 2023 07:55:41.231:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
14 06 2023 07:55:41.233:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
14 06 2023 07:55:41.236:INFO [launcher]: Starting browser Firefox
14 06 2023 07:55:42.660:INFO [Firefox 114.0 (Linux x86_64)]: Connected on socket rLIu5E6XOOeM06f7AAAB with id 13486006
Firefox 114.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
14 06 2023 07:55:43.156:INFO [Firefox 114.0 (Linux x86_64)]: Starting tests 13486006
[1A[2KFirefox 114.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.119 secs)
14 06 2023 07:55:43.291:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 119 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:76 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 114.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.159 secs)
14 06 2023 07:55:43.334:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should render title]: Success: 40 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:119 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 114.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.18 secs)
14 06 2023 07:55:43.352:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should create the app]: Success: 21 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:136 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.192 secs)
14 06 2023 07:55:43.361:INFO [Firefox 114.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 12 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:146 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.208 secs / 0.192 secs)
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

 - [1mFirefox 114.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:152 min/sec/ms


Firefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.208 secs / 0.192 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 17.57s.
```
