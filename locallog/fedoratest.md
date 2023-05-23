```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
23 05 2023 09:47:32.328:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
23 05 2023 09:47:32.330:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
23 05 2023 09:47:32.332:INFO [launcher]: Starting browser Firefox
23 05 2023 09:47:33.918:INFO [Firefox 113.0 (Linux x86_64)]: Connected on socket 6wUVDF7sZSo2KfQkAAAB with id 73074172
Firefox 113.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
23 05 2023 09:47:34.306:INFO [Firefox 113.0 (Linux x86_64)]: Starting tests 73074172
[1A[2KFirefox 113.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.068 secs)
23 05 2023 09:47:34.361:INFO [Firefox 113.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 68 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:44 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.14 secs)
23 05 2023 09:47:34.421:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should create the app]: Success: 72 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:104 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 113.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.174 secs)
23 05 2023 09:47:34.457:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should render title]: Success: 34 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:141 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.192 secs)
23 05 2023 09:47:34.477:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 18 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:160 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.172 secs / 0.192 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
   * should render title : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 113.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:165 min/sec/ms


Firefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.172 secs / 0.192 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.33s.
```
