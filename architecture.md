# Architecture for CI

Repo on GitHub
    -Dev local test and setup
    
    GH Actions to test and format code on PR
        - run tests
        - Run format, prettier
        - scan code for "bad" words
        - scan code for single ' quotes. 
    
    Build container on successful merge with main
        - installs dependencies
        - runs node
        - npm command starts app 
    Deploy container on Digital Ocean
