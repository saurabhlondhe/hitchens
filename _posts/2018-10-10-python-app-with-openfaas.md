---
title:  "Deploy a python app using OpenFaaS"
author: "Saurabh Londhe"
avatar: "img/authors/saurabh.jpg"
image: "img/openfaas.png"
date:   2018-10-10
categories: [Cloud,Docker,Linux,Project]
layout: post
---
OpenFaaS provides function as a service. FaaS is framework for building serverless functions on top of containers. FaaS can be run using Docker Swarm.
With FaaS developers can focun on development more than servers and deploys. FaaS providers do not charge to their clients for an idel conditions, clients only pay for the computation taken by function.

-   If you haven't installed OpenFaaS, then [Install OpenFaaS](https://github.com/openfaas/workshop/blob/master/lab1.md) from here.

### Lets start with Simple Python app
-   create a folder for our files:

    ```sh
    $ mkdir myapp && cd myapp
    ```

-   Get templates from from github before proceding

    ```sh
    $ faas-cli template pull
    ```
    
-   we are using ```python3``` for development you can use ```python2``` also. user following syntax to start with app.

    ```sh
    $ faas-cli new --lang <language> <app-name> --prefix="<your-docker-username>"
    ```

    -   we will use python3 so our command will be:

        ```sh
        $ faas-cli new --lang python3 elements-sum --prefix="<your-docker-username>"
        ```

-   now you will be having following directory structure

        ./elements-sum.yml
        ./elements-sum
        ./elements-sum/handler.py
        ./elements-sum/requirements.txt

    -   modify ```./elements-sum/requirements.txt``` if any dependacy module required
    -   write python code in ```./elements-sum/handler.py``` 
        
        -   by default file will look like:

            ```python
            def handle(req):
                """handle a request to the function
                Args:
                    req (str): request body
                """
                return req
            ```
        -   this function only returns args passed

    -   add code to get sum of elements
        
        ```python
        def handle(req):
            sum=0
            req=req.split(",")
            for i in req:
                sum+=int(i)
            return str(sum)
        ```      
    -   if any dependancy needed add it into ```./elements-sum/requirements.txt```

    -   build, push to docker hub and deploy function containers

        ```sh
        $ faas-cli up -f elements-sum.yml
        ```

        -   if you got error then login to docker from CLI using ```$docker login```
        -   app will be deployed to OpenFaaS [http://127.0.0.1:8080/ui/](http://127.0.0.1:8080/ui)
        -   provide inpute as 
            
            ```10,20,30,40,50```
        
            will provide output as ```150```

            
        <img src="https://saurabhlondhe.github.io/static/assets/img/blog/openfaas/openfaas_demo1.png" style="width: 70%">

        -   or 

            ```sh
            $ echo 10,20,30,40,50 | faas-cli invoke elements-sum
            ```

    -   You can add other functions in ```./elements-sum/handler.py```


As well as python we can deploy many apps written in different languages