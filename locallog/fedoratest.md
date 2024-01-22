```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
22 01 2024 15:41:40.118:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
22 01 2024 15:41:40.120:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
22 01 2024 15:41:40.124:INFO [launcher]: Starting browser Firefox
22 01 2024 15:41:41.964:INFO [Firefox 121.0 (Linux x86_64)]: Connected on socket VFI3vXTO73XNURiKAAAB with id 39257563
Firefox 121.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
22 01 2024 15:41:42.620:INFO [Firefox 121.0 (Linux x86_64)]: Starting tests 39257563
[1A[2KFirefox 121.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.087 secs)
22 01 2024 15:41:42.709:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should render title]: Success: 87 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:606 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 121.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.109 secs)
22 01 2024 15:41:42.729:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 22 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:625 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 121.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.131 secs)
22 01 2024 15:41:42.762:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should create the app]: Success: 22 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:658 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.145 secs)
22 01 2024 15:41:42.780:INFO [Firefox 121.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 14 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:676 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.163 secs / 0.145 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should render title : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should create the app : [32mok[39m
 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 121.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:681 min/sec/ms


Firefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.163 secs / 0.145 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 9.13s.
```
