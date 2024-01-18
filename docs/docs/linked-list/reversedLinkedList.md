---
title: reversedLinkedList
definition: reversedLinkedList(linkedList)
description: This method will return the reversed linked list
---


#### Arguments


```bash
{ListNode} list - Linked list
```


#### Returns


```bash
{Number} - Returns the reversed linked list
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

console.log(reversedLinkedList(createdList));
// {
// 	"val": 10,
// 	"next": {
// 		"val": 8,
// 		"next": {
// 			"val": 6,
// 			"next": {
// 				"val": 5,
// 				"next": {
// 					"val": 2,
// 					"next": null,
// 				}
// 			}
// 		}
// 	}
// }
```