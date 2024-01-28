```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
28 01 2024 17:35:28.628:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
28 01 2024 17:35:28.631:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
28 01 2024 17:35:28.634:INFO [launcher]: Starting browser Firefox
28 01 2024 17:35:30.140:INFO [Firefox 122.0 (Linux x86_64)]: Connected on socket xutJuI93MeK98RmmAAAB with id 61895383
Firefox 122.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
28 01 2024 17:35:30.661:INFO [Firefox 122.0 (Linux x86_64)]: Starting tests 61895383
[1A[2KFirefox 122.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.09 secs)
28 01 2024 17:35:30.750:INFO [Firefox 122.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 90 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:137 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 122.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.117 secs)
28 01 2024 17:35:30.783:INFO [Firefox 122.0 (Linux x86_64) | AppComponent | should create the app]: Success: 27 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:170 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 122.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.157 secs)
28 01 2024 17:35:30.823:INFO [Firefox 122.0 (Linux x86_64) | AppComponent | should render title]: Success: 40 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:209 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 122.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.17 secs)
28 01 2024 17:35:30.854:INFO [Firefox 122.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 13 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:240 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 122.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.195 secs / 0.17 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should create the app : [32mok[39m
   * should render title : [32mok[39m
 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 122.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:248 min/sec/ms


Firefox 122.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.195 secs / 0.17 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 9.41s.
```
