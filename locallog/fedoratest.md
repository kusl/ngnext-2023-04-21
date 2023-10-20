```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
20 10 2023 10:32:45.517:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
20 10 2023 10:32:45.519:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
20 10 2023 10:32:45.521:INFO [launcher]: Starting browser Firefox
20 10 2023 10:32:46.751:INFO [Firefox 118.0 (Linux x86_64)]: Connected on socket qiYjnyPFUie5Aj19AAAB with id 89534358
Firefox 118.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
20 10 2023 10:32:47.334:INFO [Firefox 118.0 (Linux x86_64)]: Starting tests 89534358
[1A[2KFirefox 118.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.063 secs)
20 10 2023 10:32:47.397:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should create the app]: Success: 63 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:893 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 118.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.08 secs)
20 10 2023 10:32:47.421:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 17 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:917 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 118.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.105 secs)
20 10 2023 10:32:47.445:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should render title]: Success: 25 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:942 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.115 secs)
20 10 2023 10:32:47.457:INFO [Firefox 118.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:953 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.125 secs / 0.115 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should render title : [32mok[39m
 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 118.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:959 min/sec/ms


Firefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.125 secs / 0.115 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 16.89s.
```
