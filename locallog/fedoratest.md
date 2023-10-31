```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
31 10 2023 13:29:27.523:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
31 10 2023 13:29:27.524:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
31 10 2023 13:29:27.527:INFO [launcher]: Starting browser Firefox
31 10 2023 13:29:28.831:INFO [Firefox 119.0 (Linux x86_64)]: Connected on socket JqO8vWcTtkNg3ceRAAAB with id 49754398
Firefox 119.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
31 10 2023 13:29:30.131:INFO [Firefox 119.0 (Linux x86_64)]: Starting tests 49754398
[1A[2KFirefox 119.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.036 secs)
31 10 2023 13:29:30.138:INFO [Firefox 119.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 36 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:626 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.07 secs)
31 10 2023 13:29:30.140:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 34 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:627 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 119.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.097 secs)
31 10 2023 13:29:30.140:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should render title]: Success: 27 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:627 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.116 secs)
31 10 2023 13:29:30.141:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should create the app]: Success: 19 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:628 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.011 secs / 0.116 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should render title : [32mok[39m
   * should create the app : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 119.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:631 min/sec/ms


Firefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.011 secs / 0.116 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 10.85s.
```
