```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
06 01 2024 17:10:07.838:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
06 01 2024 17:10:07.841:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
06 01 2024 17:10:07.847:INFO [launcher]: Starting browser Firefox
06 01 2024 17:10:10.145:INFO [Firefox 121.0 (Linux x86_64)]: Connected on socket GjO2nMYl3LkCIs-vAAAB with id 47698841
Firefox 121.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
06 01 2024 17:10:11.039:INFO [Firefox 121.0 (Linux x86_64)]: Starting tests 47698841
[1A[2KFirefox 121.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.068 secs)
06 01 2024 17:10:11.108:INFO [Firefox 121.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 68 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:3:305 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 121.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.132 secs)
06 01 2024 17:10:11.156:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should create the app]: Success: 64 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:3:354 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 121.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.169 secs)
06 01 2024 17:10:11.198:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 37 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:3:395 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.208 secs)
06 01 2024 17:10:11.238:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should render title]: Success: 39 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:3:435 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.202 secs / 0.208 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should render title : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 121.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:3:442 min/sec/ms


Firefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.202 secs / 0.208 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 21.53s.
```
