```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
10 01 2024 19:42:18.286:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
10 01 2024 19:42:18.288:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
10 01 2024 19:42:18.291:INFO [launcher]: Starting browser Firefox
10 01 2024 19:42:20.582:INFO [Firefox 121.0 (Linux x86_64)]: Connected on socket p0j_y50D0uqFHG9kAAAB with id 9446544
Firefox 121.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
10 01 2024 19:42:21.232:INFO [Firefox 121.0 (Linux x86_64)]: Starting tests 9446544
[1A[2KFirefox 121.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.049 secs)
10 01 2024 19:42:21.277:INFO [Firefox 121.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 49 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:3:6 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 121.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.106 secs)
10 01 2024 19:42:21.347:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 57 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:3:76 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 121.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.142 secs)
10 01 2024 19:42:21.390:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should render title]: Success: 36 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:3:118 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.163 secs)
10 01 2024 19:42:21.405:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should create the app]: Success: 21 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:3:134 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.175 secs / 0.163 secs)
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

 - [1mFirefox 121.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:3:138 min/sec/ms


Firefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.175 secs / 0.163 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 10.07s.
```
