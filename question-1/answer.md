1. **Node.js Architecture**
* JavaAcript Engine(v8):
    - V8 is a Google's javascript engine written in c++.
    - It convets javascripts code into machine code and executes very fast.
    - Node.js uses V8 to run javascript outside the browser.
* Node.js Core APIs:
    - They are built-in modules provided by Node.js.
    - Ex:fs,http,path,os,events.
* Native Bindings:
    - Native bindings act as a bridge between javascript code and c/c++ code.
    - They allow Node.js to communicate with low-level system resources.
    - These bindings connect js APIs to libuv and the os.
* Event Loop:
    - The event loop handles asynchronous operations.
    - it continously checks:
        1. Call Stack
        2. Callback queue
        3. Microtask queue

2. **libuv**
- libuv:
    - libuv is a **C library** used internally by Node.js
    - it provides asynchronous I/O operations
    - it is responsible for handling the event loop and background tasks.
- why it needds:
    - Javascript is a single-threaded.
    - libuv helps Node.js perform non-blocking operations like:
        1. File system access.
        2. Network requests.
    - it ensures Node.js work efficiently across different os.
- Responsibilites:
    - Manages thread event loop.
    - Handles thread pool.
    - Perform asynchronous file I/O.
3. **Thread pool**
- Thread Pool:
    -A thread pool is a group of worker threads used to perform heavy or blocking tasks
- Node.js uses a thread pool:
    - Some operations are tooo heavy for the event loop.
    - To avoid blocking, Node.js, offloads these tasks to the thread pool.
- Operations handled by the thread pool:
    - File system operations.
    - Cryptography functions.
4. **Worker Threads**
- Worker Threads:
    - worker threads allow Node.js to run js code in parallel threads.
    - Each worker has its own event loop and memory.
- Reason:
    - Large calculations.
    - Image processing.
- Diff btn thread pool and worker thread:
    - used internally by Node.js
    - used explicity by developers.
5. **Event Loop Queues**
- Macro task queue:
    - contains large asynchronous tasks.
        * setTimeout
        * setInterval
        * setImmediate
        * I/O callbacks
- Micro task queue:
    - contains high priority tasks.
        * Promise.then()
        * process.nextTick()
- Execution Priority:
    - Call Stack
    - Micro Task queue
    - Macro Task Queue
- Examples:
    - Micro task:
        * promises
    - Macro Task:
        * Timers

