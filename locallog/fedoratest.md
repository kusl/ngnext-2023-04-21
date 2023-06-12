```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
12 06 2023 09:14:33.359:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
12 06 2023 09:14:33.361:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
12 06 2023 09:14:33.365:INFO [launcher]: Starting browser Firefox
12 06 2023 09:14:34.725:INFO [Firefox 113.0 (Linux x86_64)]: Connected on socket FfRDlQ3ZBOIKq1nKAAAB with id 18626191
Firefox 113.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
12 06 2023 09:14:35.187:INFO [Firefox 113.0 (Linux x86_64)]: Starting tests 18626191
[1A[2KFirefox 113.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.077 secs)
12 06 2023 09:14:35.274:INFO [Firefox 113.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 77 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:935 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.146 secs)
12 06 2023 09:14:35.351:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should render title]: Success: 69 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:13 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 113.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.17 secs)
12 06 2023 09:14:35.369:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 24 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:30 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.191 secs)
12 06 2023 09:14:35.407:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should create the app]: Success: 21 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:69 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.223 secs / 0.191 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should render title : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should create the app : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 113.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:75 min/sec/ms


Firefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.223 secs / 0.191 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 16.21s.
```
