---
title: createLinkedList
definition: createLinkedList(array)
description: Creates a linked list from given array.
---


#### Arguments


```bash
{Array} array - Source from which you want to generate linked list
```


#### Returns


```bash
{LinkedList} - Returns the generated linked list
```


#### Example


```ts
const linkedList = _.createLinkedList([2, 5, 6, 8, 10]);
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
```