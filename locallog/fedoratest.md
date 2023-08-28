```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
28 08 2023 12:30:08.256:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
28 08 2023 12:30:08.258:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
28 08 2023 12:30:08.261:INFO [launcher]: Starting browser Firefox
28 08 2023 12:30:09.823:INFO [Firefox 116.0 (Linux x86_64)]: Connected on socket -l5zCUBMrW9CClzXAAAB with id 86315158
Firefox 116.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
28 08 2023 12:30:10.365:INFO [Firefox 116.0 (Linux x86_64)]: Starting tests 86315158
[1A[2KFirefox 116.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.066 secs)
28 08 2023 12:30:10.425:INFO [Firefox 116.0 (Linux x86_64) | AppComponent | should create the app]: Success: 66 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:183 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 116.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.083 secs)
28 08 2023 12:30:10.441:INFO [Firefox 116.0 (Linux x86_64) | AppComponent | should render title]: Success: 17 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:199 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 116.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.097 secs)
28 08 2023 12:30:10.455:INFO [Firefox 116.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 14 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:212 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 116.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.104 secs)
28 08 2023 12:30:10.469:INFO [Firefox 116.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:227 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 116.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.106 secs / 0.104 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
   * should render title : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 116.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:231 min/sec/ms


Firefox 116.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.106 secs / 0.104 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.63s.
```
