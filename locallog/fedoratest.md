```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
21 04 2023 10:17:56.503:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
21 04 2023 10:17:56.505:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
21 04 2023 10:17:56.507:INFO [launcher]: Starting browser Firefox
21 04 2023 10:17:57.782:INFO [Firefox 112.0 (Linux x86_64)]: Connected on socket iUp4WXsG36dZnIZnAAAB with id 39023006
Firefox 112.0 (Linux x86_64): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
21 04 2023 10:17:58.106:INFO [Firefox 112.0 (Linux x86_64)]: Starting tests 39023006
[1A[2KFirefox 112.0 (Linux x86_64): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.091 secs)
21 04 2023 10:17:58.199:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should create the app]: Success: 91 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:728 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 112.0 (Linux x86_64): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.111 secs)
21 04 2023 10:17:58.236:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should render title]: Success: 20 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:765 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 112.0 (Linux x86_64): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.123 secs)
21 04 2023 10:17:58.243:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 12 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:772 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 112.0 (Linux x86_64): Executed 3 of 3[32m SUCCESS[39m (0.14 secs / 0.123 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
   * should render title : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 112.0 (Linux x86_64)[22m: 3 tests
   - [32m3 ok[39m
Elapsed Time: 0:1:778 min/sec/ms


Firefox 112.0 (Linux x86_64): Executed 3 of 3[32m SUCCESS[39m (0.14 secs / 0.123 secs)
[32mTOTAL: 3 SUCCESS[39m

Done in 6.20s.
```
