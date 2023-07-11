```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
11 07 2023 16:43:36.322:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
11 07 2023 16:43:36.324:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
11 07 2023 16:43:36.327:INFO [launcher]: Starting browser Firefox
11 07 2023 16:43:37.666:INFO [Firefox 114.0 (Linux x86_64)]: Connected on socket llGoZ3KOIBey2dtZAAAB with id 86097357
Firefox 114.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
11 07 2023 16:43:38.185:INFO [Firefox 114.0 (Linux x86_64)]: Starting tests 86097357
[1A[2KFirefox 114.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.137 secs)
11 07 2023 16:43:38.311:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should render title]: Success: 137 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:4 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 114.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.162 secs)
11 07 2023 16:43:38.339:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should create the app]: Success: 25 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:32 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 114.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.184 secs)
11 07 2023 16:43:38.360:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 22 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:53 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.196 secs)
11 07 2023 16:43:38.382:INFO [Firefox 114.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 12 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:75 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.199 secs / 0.196 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should render title : [32mok[39m
   * should create the app : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 114.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:81 min/sec/ms


Firefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.199 secs / 0.196 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 11.02s.
```
