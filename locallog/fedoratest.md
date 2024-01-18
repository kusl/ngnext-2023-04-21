```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
18 01 2024 17:12:29.295:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
18 01 2024 17:12:29.297:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
18 01 2024 17:12:29.300:INFO [launcher]: Starting browser Firefox
18 01 2024 17:12:31.257:INFO [Firefox 121.0 (Linux x86_64)]: Connected on socket FAMe3wNqc73ABcxrAAAB with id 98843238
Firefox 121.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
18 01 2024 17:12:32.087:INFO [Firefox 121.0 (Linux x86_64)]: Starting tests 98843238
[1A[2KFirefox 121.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.128 secs)
18 01 2024 17:12:32.235:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 128 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:952 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 121.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.171 secs)
18 01 2024 17:12:32.261:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should render title]: Success: 43 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:978 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 121.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.202 secs)
18 01 2024 17:12:32.310:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should create the app]: Success: 31 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:3:28 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.216 secs)
18 01 2024 17:12:32.315:INFO [Firefox 121.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 14 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:3:33 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.236 secs / 0.216 secs)
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

 - [1mFirefox 121.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:3:42 min/sec/ms


Firefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.236 secs / 0.216 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 20.76s.
```
