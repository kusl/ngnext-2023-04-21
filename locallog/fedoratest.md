```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
11 05 2023 07:37:43.766:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
11 05 2023 07:37:43.768:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
11 05 2023 07:37:43.771:INFO [launcher]: Starting browser Firefox
11 05 2023 07:37:45.138:INFO [Firefox 113.0 (Linux x86_64)]: Connected on socket yI-cX70WWqWSDLFBAAAB with id 46433653
Firefox 113.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
11 05 2023 07:37:45.671:INFO [Firefox 113.0 (Linux x86_64)]: Starting tests 46433653
[1A[2KFirefox 113.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.07 secs)
11 05 2023 07:37:45.745:INFO [Firefox 113.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 70 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:996 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.127 secs)
11 05 2023 07:37:45.800:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should render title]: Success: 57 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:52 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 113.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.148 secs)
11 05 2023 07:37:45.827:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should create the app]: Success: 21 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:78 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.171 secs)
11 05 2023 07:37:45.853:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 23 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:105 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.184 secs / 0.171 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should render title : [32mok[39m
   * should create the app : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 113.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:109 min/sec/ms


Firefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.184 secs / 0.171 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 16.25s.
```
