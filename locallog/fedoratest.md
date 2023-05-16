```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
16 05 2023 08:48:24.662:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
16 05 2023 08:48:24.665:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
16 05 2023 08:48:24.670:INFO [launcher]: Starting browser Firefox
16 05 2023 08:48:26.269:INFO [Firefox 113.0 (Linux x86_64)]: Connected on socket 4G4O6HaXT94ROpUnAAAB with id 61701886
Firefox 113.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
16 05 2023 08:48:26.742:INFO [Firefox 113.0 (Linux x86_64)]: Starting tests 61701886
[1A[2KFirefox 113.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.09 secs)
16 05 2023 08:48:26.823:INFO [Firefox 113.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 90 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:184 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.165 secs)
16 05 2023 08:48:26.896:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 75 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:256 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 113.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.194 secs)
16 05 2023 08:48:26.930:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should create the app]: Success: 29 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:290 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.223 secs)
16 05 2023 08:48:26.967:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should render title]: Success: 29 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:328 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.227 secs / 0.223 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should create the app : [32mok[39m
   * should render title : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 113.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:332 min/sec/ms


Firefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.227 secs / 0.223 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 17.71s.
```
