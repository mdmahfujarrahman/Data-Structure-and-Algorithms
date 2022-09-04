# Data Structure and Algorithms

## Topic

-   [Big O Notation](#big-o-notation)
-   Analyzing Performance Of Array And Object
-   Problem Solving Approach
-   Problem Solving Pattern
-   Recursion
-   Searching Algorithms
-   Bubble Sort
-   Selection Sort
-   Insertion Sort
-   Merge Sort
-   Quick Sort
-   Radix Sort
-   Into to Data Structure
-   Singly Linked lists
-   Doubly Linked List
-   Stacks and Query
-   Binary Search tress
-   Tree Traversal
-   Binary Heaps
-   Hash Tables
-   Graphs
-   Graphs Traversal
-   Dijkstra's Algorithms

---

# Topic Details

---

## Big O Notation

Big O Notation is a way to formalize fuzzy counting-(Shorthand counting how much operation has happing on a function)

        Big O Notation is simply Counting how much operation has happing on a function

#### Why we need to know Big O Notation?

Imagine we have multiple implementations of the same function. How can we determine which one is best. There's come Big O notation. We can chose which function take less time and less space.

If we see a function we can describe this function in this word.

            Every function we need to look which one is
            * Faster?
            * Less memory-intensive?
            * More readable?

![expression](/image/function%20expression.jpg)

#### Who cares Big O Notation?

:point_right: How our code performs , it's important to we have right vocabulary to talk.<br/>
:point_right: Very useful to discussing different approaches to take.<br/>
:point_right: If our code run slow or crush, then we can delete unnecessary code and point the weakness.<br/>
:point_right: Less important for job interview.<br/>

#### Why not use timers?

We can get function performance using performance.now().It's very easy process but we can not use this process in production every function.

         function addUpTo(n) {
            let total = 0;
            for (let i = 1; i <= n; i++) {
                total += i;
            }
            return total;
        }
        let t1 = performance.now();
        addUpTo(1000000000);
        let t2 = performance.now();
        console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

Using timers there some problem

        * Different machine will give different results.
        * Same machine will give different results.

Here come Big O Notation . We know in Big O Notation is counting operation has happing on function. As a Example

        function addUpTo(n) {
            return n * (n + 1) / 2;
        }

        addUpTo(50)


        In this function they take a argument (n) and inside main operation are  (*) Multiplication, (+) Sum , and (/) division. This three operation will not change if we incase argument n value.

        3 simple operations, regardless of the size of n. This function we can call O(1)

In Other hand we can see same results in different approaches

        function addUpTo(n) {
        let total = 0;
        for (let i = 1; i <= n; i++) {
            total += i;
        }
            return total;
        }

        addUpTo(50)

        In this function they take a argument (n) and inside run a for loop and get result . but here if you check how much operation is done. 1 to 50 every time will run the loop and sum the total. there not of operation. Also this operation depends on argument n.

        this function we can call O(n)

In Big O Notation There some rules

-   f(n) could be linear (f(n) = n)

            Example:-

            function addUpTo(n) {

                let total = 0;
                for (let i = 1; i <= n; i++) {
                    total += i;            //Number of operations is (eventually) bounded by a multiple of n (say, 10n)
                }
                return total;
            }

            addUpTo(5)

            function logAtLeast5(n) {

                for (var i = 1; i <= Math.max(5, n); i++) {
                    console.log(i);
                }
            }

            logAtLeast5(50)

-   f(n) could be quadratic (f(n) = n2 )

        Example:-

        function printAllPairs(n) {
            for (var i = 0; i < n; i++) {
                for (var j = 0; j < n; j++) {
                console.log(i, j);
                }
            }
        }
        printAllPairs(10)

        If O(n) inside run another O(n) operation , that's call  O(n2)

-   f(n) could be constant (f(n) = 1)

        Example:-

        f(n) could be constant (f(n) = 1)

        Example:-
        function addUpTo(n) {
            return n * (n + 1) / 2;    // Always 3 operations
        }
        addUpTo(5)


        function logAtMost5(n) {
            for (var i = 1; i <= Math.min(5, n); i++) {
                console.log(i);
            }
        }

-   f(n) could be something entirely different!

#### Constants Don't Matter

        O(2n)              O(n)
        O(500)             O(n1)
        O(13n2)            O(n2)

#### Smaller Terms Don't Matter

        O(n+10)            O(n)
        O(100n + 50 )      O(n)
        O(n2 + 5n + 8)     O(n2)

#### Big O Shorthands

-   Analyzing complexity with big O can get complicated

    :point_right: Arithmetic operations are constant <br/>
    :point_right: Variable assignment is constant <br/>
    :point_right: Accessing elements in an array (by index) or object (by key) is constant <br/>
    :point_right: In a loop, the the complexity is the length of the loop times the complexity of whatever happens inside of the loop

-   Big O Notation chart with

![Big O Notation](/image//bigonotation%20chart.jpg)

### Space Complexity

In function get best performance we also look in to Space Complexity like time complexity. we can do that Big O notation.

Space Complexity of an algorithm is the total space taken by the algorithm with respect to the input size.

#### Rules of Thumb - Space Complexity

:point_right: Most primitives (booleans, numbers, undefined, null) are constant space.

    function sum(arr) {
        let total = 0; // O(1) space!

        for (let i = 0; i < arr.length; i++) {
            total += arr[i];
        }

        return total;
    }

    sum(5)

:point_right: Strings require O(n) space (where n is the string length).

:point_right: Reference types are generally O( n), where n is the length (for arrays) or the number of keys (for objects)

    function double(arr) {
        let newArr = [];

        for (let i = 0; i < arr.length; i++) {
            newArr.push(2 * arr[i]);
        }

        return newArr; //O(n) space!
    }

    double([2,5,7])

### In Shorthands Big O Notation

-   To analyze the performance of an algorithm, we use Big O Notation.
-   Big O Notation can give us a high level understanding of the time or space complexity of an algorithm.
-   Big O Notation doesn't care about precision, only about general trends (linear? quadratic? constant?).
-   The time or space complexity (as measured by Big O) depends only on the algorithm, not the hardware used to run the algorithm.
-   Big O Notation is everywhere, so get lots of practice!
