```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
07 07 2023 08:49:57.455:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
07 07 2023 08:49:57.457:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
07 07 2023 08:49:57.460:INFO [launcher]: Starting browser Firefox
07 07 2023 08:49:58.864:INFO [Firefox 114.0 (Linux x86_64)]: Connected on socket TBCl872-xCp9h23oAAAB with id 48918614
Firefox 114.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
07 07 2023 08:49:59.341:INFO [Firefox 114.0 (Linux x86_64)]: Starting tests 48918614
[1A[2KFirefox 114.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.135 secs)
07 07 2023 08:49:59.478:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should create the app]: Success: 135 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:35 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 114.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.184 secs)
07 07 2023 08:49:59.535:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should render title]: Success: 49 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:92 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 114.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.208 secs)
07 07 2023 08:49:59.554:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 24 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:111 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.219 secs)
07 07 2023 08:49:59.575:INFO [Firefox 114.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 11 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:132 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.236 secs / 0.219 secs)
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

 - [1mFirefox 114.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:138 min/sec/ms


Firefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.236 secs / 0.219 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 16.40s.
```
