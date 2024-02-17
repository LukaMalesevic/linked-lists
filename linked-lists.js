class LinkedList
{
    constructor(head = null, tail = null)
    {   
        this._head = head;
        this._tail = tail;
    }

    head()
    {
        return this._head.value;
    }

    tail()
    {
        return this._tail.value;
    }

    toString(start = this._head, string = '')
    {
        if(start === null) return console.log('List has no nodes');
        else if(start.nextNode === null)
        {
            string += `( ${start.value} ) -> ` + this._tail.nextNode;
            return string;
        }else
        {
            string += `( ${start.value} ) -> `;
            return this.toString(start.nextNode, string);
        }
    }

    prepend(value) 
    {
        if(this._head === null)
        {
            const node = new Node(value, this._tail)
            this._tail = node;
            this._head = node;

        }else if(this._head !== null)
        {
            const node = new Node(value, this._head)
            this._head = node;
        }
        
    }

    append(value)
    {
        if(this._tail === null)
        {
            const node = new Node(value, null)
            this._tail = node;
            this._head = node;

        }else if(this._tail !== null)
        {
            const node = new Node(value, null)
            this._tail.nextNode = node;
            this._tail = node;
        }
    }

    size(start = this._head, sum = 0)
    {
        if(start === null) return sum;
        else if(start.nextNode === null) return ++sum;
        else return this.size(start.nextNode, ++sum);   
    }

    at(index, start = this._head)
    {
        if(index >= this.size()) return console.log(`List doesn't have node on index: ${index}`);
        else
        {
            if(index === 0) return start.value;
            else return this.at(--index, start.nextNode);
        }
    }

    pop(start = this._head)
    {
        if(start === null) return console.log(`List doesn't have any nodes to remove.`);
        else if(start.nextNode.nextNode === null)
        {
            start.nextNode = null;
            this._tail = start;
            return console.log('Last node has been successfully removed.');
        }
        else return this.pop(start.nextNode);   
    }

    contains(value, start = this._head)
    {
        if(start === null) return false;
        else if(start.value === value) return true;
        else return this.contains(value, start.nextNode); 
    }

    find(value, start = this._head, index = 0)
    {
        if(start === null) return null;
        else if(start.value === value) return index;
        else return this.find(value, start.nextNode, ++index); 
    }

    insertAt(value, index, start = this._head)
    {
        if(index > this.size()) return console.log('Index is bigger than size of the list');
        else if(index === 0 && start === this._head) this.prepend(value);
        else if(index === (this.size())) this.append(value);
        else if(index === 1)
        {
            const n1 = new Node(value, start.nextNode);
            return start.nextNode = n1;
        }
        else return this.insertAt(value, --index, start.nextNode);
    }

    removeAt(index, start = this._head)
    {
        if(index >= this.size()) return console.log('Index is bigger than size of the list');
        else if(index === 0 && start === this._head) return this._head = start.nextNode;
        else if(index === (this.size()-1)) this.pop();
        else if(index === 1) return start.nextNode = start.nextNode.nextNode; 
        else return this.removeAt(--index, start.nextNode);
    }
}

class Node
{
    constructor(value = null, nextNode = null)
    {
        this.value = value;
        this.nextNode = nextNode;
    }
}

let list = new LinkedList();

list.append(3);
list.append(4);
list.prepend(2);
list.append(5);
list.prepend(1);
list.pop();
list.insertAt(5,4);
list.append(6);
list.prepend(0);
list.removeAt(5);
console.log(list.toString());
