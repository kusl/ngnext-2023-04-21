```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
02 10 2023 12:52:27.180:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
02 10 2023 12:52:27.182:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
02 10 2023 12:52:27.185:INFO [launcher]: Starting browser Firefox
02 10 2023 12:52:28.730:INFO [Firefox 118.0 (Linux x86_64)]: Connected on socket -4biCGurgITcnzjhAAAB with id 4170841
Firefox 118.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
02 10 2023 12:52:29.309:INFO [Firefox 118.0 (Linux x86_64)]: Starting tests 4170841
[1A[2KFirefox 118.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.035 secs)
02 10 2023 12:52:29.343:INFO [Firefox 118.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 35 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:174 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.067 secs)
02 10 2023 12:52:29.379:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should render title]: Success: 32 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:210 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 118.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.084 secs)
02 10 2023 12:52:29.398:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should create the app]: Success: 17 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:229 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.097 secs)
02 10 2023 12:52:29.410:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 13 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:241 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.108 secs / 0.097 secs)
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

 - [1mFirefox 118.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:250 min/sec/ms


Firefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.108 secs / 0.097 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.28s.
```
