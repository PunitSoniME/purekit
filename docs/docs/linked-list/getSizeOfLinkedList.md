---
title: getSizeOfLinkedList
definition: getSizeOfLinkedList(linkedList)
description: This method will return the size of given linked list
---


#### Arguments


```bash
{ListNode} list - Linked list
```


#### Returns


```bash
{Number} - Returns the size of linked list
```


#### Example


```ts
const createdList: ListNode = {
	"val": 2,
	"next": {
		"val": 5,
		"next": {
			"val": 6,
			"next": {
				"val": 8,
				"next": {
					"val": 10,
					"next": null,
				}
			}
		}
	}
};

console.log(getSizeOfLinkedList(createdList));
//  =>  5
```