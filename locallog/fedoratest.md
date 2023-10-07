```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
07 10 2023 15:48:38.141:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
07 10 2023 15:48:38.142:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
07 10 2023 15:48:38.144:INFO [launcher]: Starting browser Firefox
07 10 2023 15:48:39.359:INFO [Firefox 118.0 (Linux x86_64)]: Connected on socket HVZaGaBwn50gkiuqAAAB with id 84975495
Firefox 118.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
07 10 2023 15:48:39.838:INFO [Firefox 118.0 (Linux x86_64)]: Starting tests 84975495
[1A[2KFirefox 118.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.033 secs)
07 10 2023 15:48:39.872:INFO [Firefox 118.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 33 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:758 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.069 secs)
07 10 2023 15:48:39.934:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should create the app]: Success: 36 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:820 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 118.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.087 secs)
07 10 2023 15:48:39.936:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should render title]: Success: 18 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:821 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.101 secs)
07 10 2023 15:48:39.948:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 14 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:834 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.119 secs / 0.101 secs)
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

 - [1mFirefox 118.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:845 min/sec/ms


Firefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.119 secs / 0.101 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.17s.
```
