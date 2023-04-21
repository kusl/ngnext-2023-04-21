```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
21 04 2023 13:59:31.606:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
21 04 2023 13:59:31.608:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
21 04 2023 13:59:31.625:INFO [launcher]: Starting browser Firefox
21 04 2023 13:59:32.890:INFO [Firefox 112.0 (Linux x86_64)]: Connected on socket _OAiNXdp8PEvlTlvAAAB with id 87329239
Firefox 112.0 (Linux x86_64): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
21 04 2023 13:59:33.351:INFO [Firefox 112.0 (Linux x86_64)]: Starting tests 87329239
[1A[2KFirefox 112.0 (Linux x86_64): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.085 secs)
21 04 2023 13:59:33.433:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 85 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:841 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 112.0 (Linux x86_64): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.099 secs)
21 04 2023 13:59:33.459:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should create the app]: Success: 14 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:866 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 112.0 (Linux x86_64): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.118 secs)
21 04 2023 13:59:33.475:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should render title]: Success: 19 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:882 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 112.0 (Linux x86_64): Executed 3 of 3[32m SUCCESS[39m (0.13 secs / 0.118 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should create the app : [32mok[39m
   * should render title : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 112.0 (Linux x86_64)[22m: 3 tests
   - [32m3 ok[39m
Elapsed Time: 0:1:891 min/sec/ms


Firefox 112.0 (Linux x86_64): Executed 3 of 3[32m SUCCESS[39m (0.13 secs / 0.118 secs)
[32mTOTAL: 3 SUCCESS[39m

Done in 6.64s.
```
