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
	        for (var i = 0; i < index; i++, curN = curN.next);
            	return curN.data;
        }
        else return 'error';
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
	if (this.length > 0){
		var arr = [];
		var i = 0;
		var curN = this.head;
		while (curN != this.tail){
        		arr[i++] = curN.data;
			curN = curN.next;
        	}
		arr[i] = curN.data;
	}
	else return null;
    }

    removeAt(index)
    {
	if (index < this.length){
        	var curN = this.head;
	        for (var i = 0; i < index; i++, curN = curN.next);
		curN.next.prev = curN.prev;
		curN.prev.next = cur.next;
        }
        else return 'error';
    }

    moveToFront(node)
    {
	node.prev.next = node.next;
	node.next.prev = node.prev;
	node.next = this.head;
	this.head.prev = node;
    }

    reorganize(data)
    {
	var curN = this.head;
        while (curN.data != data && curN != this.tail){
        	curN = curN.next;
        }
        if (curN.data == data) {
		curN.prev.next = curN.next;
		curN.next.prev = curN.prev;
		curN.next = this.head;
		this.head.prev = curN;
		return true;
	}
        else return false;
    }

}

module.exports = {
    SelfOrganizedList,
    Node
};