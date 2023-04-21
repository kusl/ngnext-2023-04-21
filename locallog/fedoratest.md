```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
21 04 2023 08:56:01.437:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
21 04 2023 08:56:01.440:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
21 04 2023 08:56:01.443:INFO [launcher]: Starting browser Firefox
21 04 2023 08:56:02.703:INFO [Firefox 112.0 (Linux x86_64)]: Connected on socket P8dbOF24UjeYFzEIAAAB with id 26501751
Firefox 112.0 (Linux x86_64): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
21 04 2023 08:56:03.047:INFO [Firefox 112.0 (Linux x86_64)]: Starting tests 26501751
[1A[2KFirefox 112.0 (Linux x86_64): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.095 secs)
21 04 2023 08:56:03.148:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should create the app]: Success: 95 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:734 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 112.0 (Linux x86_64): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.108 secs)
21 04 2023 08:56:03.165:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 13 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:751 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 112.0 (Linux x86_64): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.128 secs)
21 04 2023 08:56:03.182:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should render title]: Success: 20 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:768 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 112.0 (Linux x86_64): Executed 3 of 3[32m SUCCESS[39m (0.144 secs / 0.128 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should render title : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 112.0 (Linux x86_64)[22m: 3 tests
   - [32m3 ok[39m
Elapsed Time: 0:1:779 min/sec/ms


Firefox 112.0 (Linux x86_64): Executed 3 of 3[32m SUCCESS[39m (0.144 secs / 0.128 secs)
[32mTOTAL: 3 SUCCESS[39m

Done in 6.19s.
```
