```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
21 04 2023 15:24:39.745:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
21 04 2023 15:24:39.747:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
21 04 2023 15:24:39.750:INFO [launcher]: Starting browser Firefox
21 04 2023 15:24:41.068:INFO [Firefox 112.0 (Linux x86_64)]: Connected on socket SCRvNZfSVYRlFpv2AAAB with id 12038897
Firefox 112.0 (Linux x86_64): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
21 04 2023 15:24:41.546:INFO [Firefox 112.0 (Linux x86_64)]: Starting tests 12038897
[1A[2KFirefox 112.0 (Linux x86_64): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.133 secs)
21 04 2023 15:24:41.677:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should render title]: Success: 133 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:950 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 112.0 (Linux x86_64): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.152 secs)
21 04 2023 15:24:41.699:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 19 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:971 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 112.0 (Linux x86_64): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.169 secs)
21 04 2023 15:24:41.720:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should create the app]: Success: 17 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:992 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 112.0 (Linux x86_64): Executed 3 of 3[32m SUCCESS[39m (0.18 secs / 0.169 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should render title : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should create the app : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 112.0 (Linux x86_64)[22m: 3 tests
   - [32m3 ok[39m
Elapsed Time: 0:2:1 min/sec/ms


Firefox 112.0 (Linux x86_64): Executed 3 of 3[32m SUCCESS[39m (0.18 secs / 0.169 secs)
[32mTOTAL: 3 SUCCESS[39m

Done in 8.34s.
```
