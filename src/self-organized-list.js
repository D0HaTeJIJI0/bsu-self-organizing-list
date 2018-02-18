class Node
{
    constructor(data)
    {
        this.data = data;
        this.next = null;
        this.prev = null;
    }


}

class SelfOrganizedList
{
    constructor()
    {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insert(data)
    {
        this.length++;
        var n = new Node();
    	n.next = null;
    	n.data = data;
    	n.prev = this.tail;
        if (this.head == null){
            this.head = n;
            this.tail = n;
        }
        else{
            this.tail.next = n;
            this.tail = n;
        }
    }

    size()
    {
	return this.length;
    }

    at(index)
    {
	if (index < this.length){
        	var curN = this.head;
	        for (var i = 0; i < index; i++){
			curN = curN.next;
		}
            	return curN.data;
        }
        else return null;
    }

    findNode(data)
    {
	var curN = this.head;
        while (curN.data != data && curN != this.tail){
        	curN = curN.next;
        }
        if (curN.data == data) return curN;
        else return null;
    }

    toArray()
    {
	
	var arr = [];
	var i = 0;
	var curN = this.head;
	while (curN != this.tail){
        	arr[i++] = curN.data;
		curN = curN.next;
        }
	if (this.length > 0){
		arr[i] = curN.data;
	}
	return arr;
    }

    removeAt(index)
    {
	if (index < this.length){
        	var curN = this.head;
	        for (var i = 0; i < index; i++){
			curN = curN.next;
		}
		if (curN == this.head) this.head = curN.next;
		else if (curN == this.tail) this.tail = curN.prev;
		if (curN.next != null) curN.next.prev = curN.prev;
		if (curN.prev != null) curN.prev.next = curN.next;
		curN = null;
		this.length--;
        }
        else return 'error';
    }

    moveToFront(node)
    {
	if (node.prev != null) node.prev.next = node.next;
	if (node.next != null) node.next.prev = node.prev;
	if (node != this.head) {
		node.next = this.head;
		this.head.prev = node;
	}
	this.head = node;
    }

    reorganize(data)
    {
	if (this.head != null){
		var curN = this.head;
	        while (curN.data != data && curN != this.tail){
	        	curN = curN.next;
	        }
	        if (curN.data == data) {
			if (this.length != 1){
				if (curN.prev != null) curN.prev.next = curN.next;
				if (curN.next != null) curN.next.prev = curN.prev;
				if (this.tail == curN) this.tail = curN.prev;
				curN.next = this.head;
				this.head.prev = curN;
				this.head = curN;
			} 
			return true;
		}
	        else return false;
	}
	else return false;
    }

}

module.exports = {
    SelfOrganizedList,
    Node
};