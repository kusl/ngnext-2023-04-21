```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
20 11 2023 17:22:28.766:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
20 11 2023 17:22:28.768:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
20 11 2023 17:22:28.771:INFO [launcher]: Starting browser Firefox
20 11 2023 17:22:30.150:INFO [Firefox 119.0 (Linux x86_64)]: Connected on socket A7aw2jG4OBD3n3IZAAAB with id 25514624
Firefox 119.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
20 11 2023 17:22:30.738:INFO [Firefox 119.0 (Linux x86_64)]: Starting tests 25514624
[1A[2KFirefox 119.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.064 secs)
20 11 2023 17:22:30.805:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should create the app]: Success: 64 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:49 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 119.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.085 secs)
20 11 2023 17:22:30.827:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should render title]: Success: 21 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:71 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 119.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.097 secs)
20 11 2023 17:22:30.859:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 12 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:103 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.103 secs)
20 11 2023 17:22:30.860:INFO [Firefox 119.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:105 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.124 secs / 0.103 secs)
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

 - [1mFirefox 119.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:108 min/sec/ms


Firefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.124 secs / 0.103 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.33s.
```
