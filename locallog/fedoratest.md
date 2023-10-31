```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
31 10 2023 16:46:47.613:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
31 10 2023 16:46:47.614:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
31 10 2023 16:46:47.616:INFO [launcher]: Starting browser Firefox
31 10 2023 16:46:48.881:INFO [Firefox 119.0 (Linux x86_64)]: Connected on socket n8j6f4CUmusFiKlrAAAB with id 70036320
Firefox 119.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
31 10 2023 16:46:49.336:INFO [Firefox 119.0 (Linux x86_64)]: Starting tests 70036320
[1A[2KFirefox 119.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.041 secs)
31 10 2023 16:46:49.378:INFO [Firefox 119.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 41 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:778 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.084 secs)
31 10 2023 16:46:49.428:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should render title]: Success: 43 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:827 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 119.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.101 secs)
31 10 2023 16:46:49.450:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 17 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:849 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.117 secs)
31 10 2023 16:46:49.464:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should create the app]: Success: 16 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:863 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.13 secs / 0.117 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should render title : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should create the app : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 119.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:867 min/sec/ms


Firefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.13 secs / 0.117 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 6.44s.
```
