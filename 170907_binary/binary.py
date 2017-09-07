
# coding: utf-8

# In[3]:


def binary(data, target):
    start = 0
    end = len(data) - 1
    
    print('data : ', data)
    print('target : ', target)
    
    while start >= end:
        mid = (start + end) // 2
        if target == data[mid]:
            return mid
        elif target < data[mid] :
            end = data[mid] - 1
        else :
            start = data[mid] + 1
    return None

