```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
21 04 2023 08:06:56.493:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
21 04 2023 08:06:56.494:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
21 04 2023 08:06:56.497:INFO [launcher]: Starting browser Firefox
21 04 2023 08:06:57.765:INFO [Firefox 112.0 (Linux x86_64)]: Connected on socket 8G5IZatakuBng8pOAAAB with id 40014283
Firefox 112.0 (Linux x86_64): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
21 04 2023 08:06:58.092:INFO [Firefox 112.0 (Linux x86_64)]: Starting tests 40014283
[1A[2KFirefox 112.0 (Linux x86_64): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.1 secs)
21 04 2023 08:06:58.192:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should render title]: Success: 100 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:733 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 112.0 (Linux x86_64): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.114 secs)
21 04 2023 08:06:58.217:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 14 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:758 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 112.0 (Linux x86_64): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.127 secs)
21 04 2023 08:06:58.231:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should create the app]: Success: 13 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:771 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 112.0 (Linux x86_64): Executed 3 of 3[32m SUCCESS[39m (0.143 secs / 0.127 secs)
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
Elapsed Time: 0:1:779 min/sec/ms


Firefox 112.0 (Linux x86_64): Executed 3 of 3[32m SUCCESS[39m (0.143 secs / 0.127 secs)
[32mTOTAL: 3 SUCCESS[39m

Done in 6.27s.
```
