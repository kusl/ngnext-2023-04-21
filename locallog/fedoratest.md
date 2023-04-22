```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
22 04 2023 07:45:10.304:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
22 04 2023 07:45:10.306:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
22 04 2023 07:45:10.308:INFO [launcher]: Starting browser Firefox
22 04 2023 07:45:11.787:INFO [Firefox 112.0 (Linux x86_64)]: Connected on socket 1db0XcfxVfJlra9eAAAB with id 33151120
Firefox 112.0 (Linux x86_64): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
22 04 2023 07:45:12.391:INFO [Firefox 112.0 (Linux x86_64)]: Starting tests 33151120
[1A[2KFirefox 112.0 (Linux x86_64): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.183 secs)
22 04 2023 07:45:12.601:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should create the app]: Success: 183 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:327 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 112.0 (Linux x86_64): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.233 secs)
22 04 2023 07:45:12.612:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should render title]: Success: 50 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:337 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 112.0 (Linux x86_64): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.26 secs)
22 04 2023 07:45:12.614:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 27 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:339 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 112.0 (Linux x86_64): Executed 3 of 3[32m SUCCESS[39m (0.225 secs / 0.26 secs)
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
Elapsed Time: 0:2:345 min/sec/ms


Firefox 112.0 (Linux x86_64): Executed 3 of 3[32m SUCCESS[39m (0.225 secs / 0.26 secs)
[32mTOTAL: 3 SUCCESS[39m

Done in 7.54s.
```
