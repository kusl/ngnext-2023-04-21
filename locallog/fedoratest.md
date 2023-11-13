```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
13 11 2023 08:45:37.330:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
13 11 2023 08:45:37.332:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
13 11 2023 08:45:37.334:INFO [launcher]: Starting browser Firefox
13 11 2023 08:45:38.540:INFO [Firefox 119.0 (Linux x86_64)]: Connected on socket iYYsp19L986K6Fk5AAAB with id 29739851
Firefox 119.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
13 11 2023 08:45:38.953:INFO [Firefox 119.0 (Linux x86_64)]: Starting tests 29739851
[1A[2KFirefox 119.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.033 secs)
13 11 2023 08:45:38.997:INFO [Firefox 119.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 33 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:695 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.064 secs)
13 11 2023 08:45:39.027:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should create the app]: Success: 31 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:725 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 119.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.08 secs)
13 11 2023 08:45:39.040:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 16 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:738 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.097 secs)
13 11 2023 08:45:39.062:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should render title]: Success: 17 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:761 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.112 secs / 0.097 secs)
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

 - [1mFirefox 119.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:765 min/sec/ms


Firefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.112 secs / 0.097 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 6.81s.
```
