def my_generator(n):
    value = 0
    while value < n:
        yield value
        value += 1
for value in my_generator(3):
    print(value)


class PowTwo:
    def __init__(self, max=0):
        self.n = 0
        self.max = max

    def __iter__(self):
        return self

    def __next__(self):
        if self.n > self.max:
            raise StopIteration

        result = 2 ** self.n
        self.n += 1
        return result