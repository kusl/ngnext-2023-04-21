```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
28 12 2023 11:59:30.825:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
28 12 2023 11:59:30.827:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
28 12 2023 11:59:30.830:INFO [launcher]: Starting browser Firefox
28 12 2023 11:59:32.940:INFO [Firefox 121.0 (Linux x86_64)]: Connected on socket IkxP7xyBj5kylt52AAAB with id 11232913
Firefox 121.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
28 12 2023 11:59:33.790:INFO [Firefox 121.0 (Linux x86_64)]: Starting tests 11232913
[1A[2KFirefox 121.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.105 secs)
28 12 2023 11:59:35.016:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 105 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:4:204 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 121.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.16 secs)
28 12 2023 11:59:35.019:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should render title]: Success: 55 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:4:206 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 121.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.187 secs)
28 12 2023 11:59:35.020:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should create the app]: Success: 27 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:4:207 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.201 secs)
28 12 2023 11:59:35.021:INFO [Firefox 121.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 14 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:4:208 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (1.232 secs / 0.201 secs)
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
Elapsed Time: 0:4:213 min/sec/ms


Firefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (1.232 secs / 0.201 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 15.10s.
```
