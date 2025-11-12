#include <iostream>
using namespace std;

/* a simple recursive program for Fibonacci numbers */
int fib(int n)
{
	if (n <= 1)
		return n;

	return fib(n - 1) + fib(n - 2);
}

int main() {
	
	cout << fib(7);
	
	return 0;
}

// This code is contributed by sanjoy_62.
