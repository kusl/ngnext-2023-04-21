```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
13 07 2023 08:14:10.602:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
13 07 2023 08:14:10.605:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
13 07 2023 08:14:10.607:INFO [launcher]: Starting browser Firefox
13 07 2023 08:14:12.450:INFO [Firefox 114.0 (Linux x86_64)]: Connected on socket rxMMBazgZM8_8BWuAAAB with id 35938326
Firefox 114.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
13 07 2023 08:14:12.779:INFO [Firefox 114.0 (Linux x86_64)]: Starting tests 35938326
[1A[2KFirefox 114.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.053 secs)
13 07 2023 08:14:12.840:INFO [Firefox 114.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 53 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:278 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.114 secs)
13 07 2023 08:14:12.910:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should create the app]: Success: 61 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:348 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 114.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.143 secs)
13 07 2023 08:14:12.957:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should render title]: Success: 29 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:395 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.163 secs)
13 07 2023 08:14:12.968:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 20 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:405 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.191 secs / 0.163 secs)
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

 - [1mFirefox 114.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:410 min/sec/ms


Firefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.191 secs / 0.163 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.18s.
```
