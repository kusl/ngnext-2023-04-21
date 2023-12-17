```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
17 12 2023 12:38:42.648:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
17 12 2023 12:38:42.650:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
17 12 2023 12:38:42.651:INFO [launcher]: Starting browser Firefox
17 12 2023 12:38:43.935:INFO [Firefox 120.0 (Linux x86_64)]: Connected on socket Zvhq1_8BQY9lh20EAAAB with id 69810076
Firefox 120.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
17 12 2023 12:38:44.338:INFO [Firefox 120.0 (Linux x86_64)]: Starting tests 69810076
[1A[2KFirefox 120.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.061 secs)
17 12 2023 12:38:44.399:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should create the app]: Success: 61 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:782 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 120.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.076 secs)
17 12 2023 12:38:44.443:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 15 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:825 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 120.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.094 secs)
17 12 2023 12:38:44.447:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should render title]: Success: 18 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:829 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.1 secs)
17 12 2023 12:38:44.449:INFO [Firefox 120.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:831 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.112 secs / 0.1 secs)
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

 - [1mFirefox 120.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:834 min/sec/ms


Firefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.112 secs / 0.1 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.54s.
```
