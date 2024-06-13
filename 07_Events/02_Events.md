
## Concept of sync and async
* **`Sync`**: Code runs line by line, waiting for each line to finish before moving on. Think of it as a single-lane road - wait for the car in front before you go. It is also known as `blocking code`

* **`Async`**: Code doesn't necessarily follow order. Long operations don't block other code. Imagine multiple lanes - you can keep moving while someone else is slow. It is also known as `Non-blocking code`

**Why Async Matters**

Keeps your program `responsive` during long operations (like waiting for data from the internet). Avoids freezing the user interface.

## Javascript : Sync or Async
JavaScript itself is not inherently synchronous or asynchronous. It's a `single-threaded language`, meaning it can only execute one task at a time. However, JavaScript provides mechanisms to handle long-running operations (like network requests, file I/O) without blocking the main thread. This is achieved through asynchronous programming.

In summary, JavaScript offers both synchronous and asynchronous capabilities. Synchronous code is suitable for simple tasks, while asynchronous code is essential for building responsive web applications that don't freeze during long-running operations.
## Execution in JavaScript
![Execution_Flow](https://github.com/AyushRawat1718/JavaScript/assets/143322694/f92b4657-a46a-4ab3-bd85-3594a15f1f5e)

* `Script Loading`: When your JavaScript code loads, the engine creates a special context called the `Global Execution Context`. This context holds information like global variables and functions.

* `Function Calls`: When you call a function, the engine creates a new frame on the `Call Stack`. This frame holds information specific to that function call, including:
    - Arguments passed to the function
    - Local variables declared within the function

* `LIFO (Last In, First Out)`: The call stack works like a stack of plates.  New functions are "pushed" onto the top of the stack, and when a function finishes executing, its frame is "popped" from the stack. This ensures the function that called it can resume execution.

* `Function Execution`: The engine starts executing the code inside the topmost frame on the call stack (the currently running function).

* `Nested Function Calls`: If a function calls another function, a new frame is pushed onto the call stack for the nested function. Execution then switches to the nested function's code. This nesting can continue for multiple levels.

* `Function Return`: When a function finishes its work, it returns a value (if any) and its frame is popped from the call stack. Control then returns to the function that called it, and execution resumes at the line after the function call.

* `Asynchronous Operations`: JavaScript is single-threaded, meaning it can only execute one function at a time. But some operations, like network requests, take time. For these, the engine schedules a `callback function` to be executed later.  The callback is placed in a separate queue called the `Task Queue`.

* `Event Loop`: The event loop is the heart of JavaScript’s concurrency model. It continuously checks the call stack and task queues, ensuring that the execution of code remains non-blocking. It follows a simple yet effective principle: execute code from the call stack, and when the call stack is empty, fetch tasks from the task queue, microtask queue, and push them onto the call stack.

* `Task Queue`: The task queue (a.k.a `callback queue`) holds tasks that are ready to be executed. These tasks usually originate from asynchronous operations like setTimeout(), DOM events, or Fetch requests. When a task is completed, it’s placed in the task queue to be picked up by the event loop for execution

* `Microtask Queue / Priority Queue`: The microtask queue holds tasks that are prioritized over tasks in the task queue. `Microtasks include promises and mutation observer callbacks`. When the call stack is empty and before fetching tasks from the task queue, the event loop first processes all tasks in the microtask queue. This ensures that microtasks are executed as soon as possible. 


## Related

For more conceptual accuracy consider this [article](https://rehmat-sayany.medium.com/understanding-the-event-loop-task-queue-and-microtask-queue-in-javascript-3a00b61783ec)