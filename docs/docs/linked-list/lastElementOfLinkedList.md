---
title: lastElementOfLinkedList
definition: lastElementOfLinkedList(linkedList)
description: This method will return the last element of given linked list
---


#### Arguments


```bash
{ListNode} list - Linked list
```


#### Returns


```bash
{Number} - Returns the last element of linked list
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

console.log(lastElementOfLinkedList(createdList));
//  =>  { "val": 10, "next": null }
```