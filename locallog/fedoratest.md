```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
17 07 2023 09:55:52.793:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
17 07 2023 09:55:52.795:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
17 07 2023 09:55:52.797:INFO [launcher]: Starting browser Firefox
17 07 2023 09:55:54.499:INFO [Firefox 115.0 (Linux x86_64)]: Connected on socket pX6bN8Fzbh7pneZvAAAB with id 95336585
Firefox 115.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
17 07 2023 09:55:54.959:INFO [Firefox 115.0 (Linux x86_64)]: Starting tests 95336585
[1A[2KFirefox 115.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.069 secs)
17 07 2023 09:55:55.034:INFO [Firefox 115.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 69 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:269 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 115.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.109 secs)
17 07 2023 09:55:55.074:INFO [Firefox 115.0 (Linux x86_64) | AppComponent | should create the app]: Success: 40 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:309 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 115.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.135 secs)
17 07 2023 09:55:55.098:INFO [Firefox 115.0 (Linux x86_64) | AppComponent | should render title]: Success: 26 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:333 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 115.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.149 secs)
17 07 2023 09:55:55.116:INFO [Firefox 115.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 14 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:351 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 115.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.159 secs / 0.149 secs)
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

 - [1mFirefox 115.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:355 min/sec/ms


Firefox 115.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.159 secs / 0.149 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.18s.
```
