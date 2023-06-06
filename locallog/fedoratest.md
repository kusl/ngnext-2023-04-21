```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
06 06 2023 06:39:16.791:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
06 06 2023 06:39:16.793:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
06 06 2023 06:39:16.796:INFO [launcher]: Starting browser Firefox
06 06 2023 06:39:18.037:INFO [Firefox 113.0 (Linux x86_64)]: Connected on socket xWFztJ5lv09FiXzhAAAB with id 7867408
Firefox 113.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
06 06 2023 06:39:18.388:INFO [Firefox 113.0 (Linux x86_64)]: Starting tests 7867408
[1A[2KFirefox 113.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.126 secs)
06 06 2023 06:39:18.519:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 126 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:748 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 113.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.164 secs)
06 06 2023 06:39:18.547:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should render title]: Success: 38 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:775 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 113.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.186 secs)
06 06 2023 06:39:18.581:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should create the app]: Success: 22 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:809 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.197 secs)
06 06 2023 06:39:18.605:INFO [Firefox 113.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 11 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:833 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.218 secs / 0.197 secs)
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

 - [1mFirefox 113.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:837 min/sec/ms


Firefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.218 secs / 0.197 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 15.64s.
```
