# 1. The Decorator Function
def my_decorator(original_func):
    def wrapper():
        print("Something is happening BEFORE the function is called.")
        original_func()  # Execute the original function
        print("Something is happening AFTER the function is called.")
    return wrapper  # Return the modified function

# 2. A standard function
def say_hi():
    print("Hi!")

# 3. Manual Decoration
decorated_say_hi = my_decorator(say_hi)
decorated_say_hi()

# @ is used to provide syntatic sugar
@my_decorator
def say_hi():
    print("Hi!")

say_hi()


def log_execution(func):
    def wrapper(*args, **kwargs):
        print(f"Calling function: {func.__name__}")
        print(f"Arguments passed: args={args}, kwargs={kwargs}")
        
        result = func(*args, **kwargs)  # Call original function with arguments
        
        print(f"Execution finished. Result: {result}")
        return result  # Return the original result
    return wrapper

@log_execution
def add_numbers(a, b):
    return a + b

sum_val = add_numbers(10, 20)


import time
from functools import wraps

def timer(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        print(f"[{func.__name__}] Execution took {end_time - start_time:.4f} seconds")
        return result
    return wrapper

@timer
def heavy_computation():
    time.sleep(1)
    return sum(i * i for i in range(10**6))

heavy_computation()