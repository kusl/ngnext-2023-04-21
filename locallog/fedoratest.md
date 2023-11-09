```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
09 11 2023 18:15:22.884:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
09 11 2023 18:15:22.885:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
09 11 2023 18:15:22.888:INFO [launcher]: Starting browser Firefox
09 11 2023 18:15:24.120:INFO [Firefox 119.0 (Linux x86_64)]: Connected on socket up5RDYFqUtLlE0BMAAAB with id 57512038
Firefox 119.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
09 11 2023 18:15:24.563:INFO [Firefox 119.0 (Linux x86_64)]: Starting tests 57512038
[1A[2KFirefox 119.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.065 secs)
09 11 2023 18:15:24.634:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should create the app]: Success: 65 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:762 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 119.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.091 secs)
09 11 2023 18:15:24.662:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should render title]: Success: 26 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:789 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 119.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.109 secs)
09 11 2023 18:15:24.679:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 18 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:806 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.122 secs)
09 11 2023 18:15:24.695:INFO [Firefox 119.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 13 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:823 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.146 secs / 0.122 secs)
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
Elapsed Time: 0:1:838 min/sec/ms


Firefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.146 secs / 0.122 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 14.48s.
```
