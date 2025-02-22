/*Chapter 1 Big O Notation
Whenever we get to solve a problem in coding . We know that there can be many approaches or many different ways to solve a problem. Our job is to find the best solution. Now how do we know which solution is the best? Now in order to know the best solution we use a tool called Big O to compare the solutions with one another and thereby determine a winning solution.
 
Now the question comes to what is Big O. Plainly speaking Big O uses math to find the speed at which the problem is 
being solved and the memory(space) the problem is using to execute.
However there can be scenarios where a poorly written code can perform better for a small data set compared to better 
written code which may perform better only for large data-sets. Therefore we can also say there are tradeoffs. In order 
to find these tradeoffs we need Big O.
 
Finding the speed
The speed at which the problem can be solved can be measured in different ways. We can literally take a timer and see 
if one solution is taking more time than another. But the problem with timing a solution is different machines have 
different processors so their performance will be different so we do not time a solution to see if it is fast enough 
or not. Therefore we use Big O. As Big O does not time a function but calculates the speed in a different manner.
 
If not time a code Then What
Since we are not timing a code we can simply count the steps involved in a code to reach the solution. The steps 
basically are the number of operations(add, subtract, divide, multiply).
There are many operations or steps like assigning, incrementing, comparing for true or false. Basically every piece of 
code that works towards providing a solution is an operation. However our work is to account only for the main operations 
basically we overlook the smaller operations like assigning etc.
 
Proper Intro To Big 0
We now say that Big O is nothing but fuzzily counting the steps of a code. It is basically a formal way to say how fast 
an algorithm is.
There are few different ways to define Big O
Big O(f(n) = n) this means that the Big O(counting) will increase in proportion as n increases. Here n is input f(n) 
basically is a symbol saying function with (n) input. If n is 2 then counting will be 2, n is 1000 counting will be 1000.
Big O (f(n) =n^2) this means n will Big O (counting) will increase at a quadratic rate meaning at n square rate. 
Meaning if n is 2 counting will be 4 and if n is 1000 counting will be 1000^2 = 1000000;
Big O (f(n) = 1) this means no matter what the size of n counting will always remain constant. If n is 2 counting will 
be 1 if n is 1000 counting will be 1. Note here 1 denotes constant number of operations and not one operation. 
It denotes a fixed number of steps(counting) to reach the solution and not 1 single step.
Big O (f(n)) could also be something entirely different. 
Note to self: in order to visualize n^2 always think like n x n;



Note in the above function O(n) is not O(n+ all minute steps) that is because we look for the bigger picture and 
ignore tiny details. In other words we ignore the co-efficient and take in n only. Now observe when we put one O(n) inside
another O(n) the function's complexity becomes O(n) x O(n) --> O(n x n) --> O(n^2). Also in order to visualize it better
think how the number of steps can increase with increase in n. Start with a smaller number like 2 and go to 3 then to 
4 like that a pattern in change in the number of steps will be visible.
 
Fuzzy
Constants don’t matter(ignore the minute details, look at the bigger picture)
O(2n), O(100n+300) => O(n) --> linear
O(500), O(100+100) => O(1) --> constant
O(13n^2) , O(20+n+n^2) => O(n^2) --> quadratic
 
Rule of thumbs to figure out Big O
Arithmetic operations are constant
Variable assignment is constant
Accessing elements in an array using an index or an object by key is also constant.
In a loop the complexity is the number of times the loop runs times whatever happens inside the loop. so if there are 
three nested loops we can say complexity is n^2 + n^3 however fuzzily looking at its n^3 
we overlook n^2. 
 */