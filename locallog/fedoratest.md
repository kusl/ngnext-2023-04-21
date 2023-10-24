```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
24 10 2023 10:10:10.272:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
24 10 2023 10:10:10.274:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
24 10 2023 10:10:10.277:INFO [launcher]: Starting browser Firefox
24 10 2023 10:10:11.498:INFO [Firefox 118.0 (Linux x86_64)]: Connected on socket OJNGj0G3_96immPhAAAB with id 13821111
Firefox 118.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
24 10 2023 10:10:11.982:INFO [Firefox 118.0 (Linux x86_64)]: Starting tests 13821111
[1A[2KFirefox 118.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.06 secs)
24 10 2023 10:10:12.051:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should render title]: Success: 60 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:792 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 118.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.074 secs)
24 10 2023 10:10:12.071:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 14 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:811 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 118.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.088 secs)
24 10 2023 10:10:12.085:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should create the app]: Success: 14 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:826 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.096 secs)
24 10 2023 10:10:12.091:INFO [Firefox 118.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:832 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.112 secs / 0.096 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should render title : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should create the app : [32mok[39m
 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 118.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:838 min/sec/ms


Firefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.112 secs / 0.096 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 6.66s.
```
