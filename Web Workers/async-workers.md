# Introducing Workers
### *Workers* - enable us to run tasks in separate threads of execution.

> Note: A **thread** is a sequence of instructions that a program follows.

<br>

- We need to make sure that the main code and worker code never get direct access to each others variables to avoid introducing bugs that might modify data in an unexpected way.
<br>

- Workers should not access the DOM and both the worker code and main code must only interact with each other by sending each other a message.
<br>

## Three Different Types of Workers:
- Dedicated Workers
- Shared Workers
- Service Workers
<br>

### Using Web Workers
1. Dedicated Workers -  is only accessible from the script that first spawned it.
2. Shared Workers - can be shared by several different scripts running in different windows.
3. Service Workers - act like proxy servers, caching resources so that web applications can work when the user is offline.