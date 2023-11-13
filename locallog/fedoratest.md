```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
13 11 2023 09:33:00.745:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
13 11 2023 09:33:00.747:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
13 11 2023 09:33:00.749:INFO [launcher]: Starting browser Firefox
13 11 2023 09:33:01.958:INFO [Firefox 119.0 (Linux x86_64)]: Connected on socket cI2BedX6TNU7emslAAAB with id 40602612
Firefox 119.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
13 11 2023 09:33:02.399:INFO [Firefox 119.0 (Linux x86_64)]: Starting tests 40602612
[1A[2KFirefox 119.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.032 secs)
13 11 2023 09:33:02.432:INFO [Firefox 119.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 32 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:704 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.072 secs)
13 11 2023 09:33:02.471:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should render title]: Success: 40 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:742 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 119.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.086 secs)
13 11 2023 09:33:02.483:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 14 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:754 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.101 secs)
13 11 2023 09:33:02.500:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should create the app]: Success: 15 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:771 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.104 secs / 0.101 secs)
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
Elapsed Time: 0:1:776 min/sec/ms


Firefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.104 secs / 0.101 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.18s.
```
