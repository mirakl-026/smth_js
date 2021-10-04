class ThreeNode {
    constructor(leftNode, rightNode, name, value) {
        this.leftNode = leftNode;
        this.rightNode = rightNode;
        this.name = name;
        this.value = value;
    }
}

var three1 = new ThreeNode();
three1.name = "One";
three1.value = 1;
three1.leftNode = null;
three1.rightNode = null;

var three3 = new ThreeNode();
three3.name = "Three";
three3.value = 3;
three3.leftNode = null;
three3.rightNode = null;

var three5 = new ThreeNode();
three5.name = "Five";
three5.value = 5;
three5.leftNode = null;
three5.rightNode = null;

var three2 = new ThreeNode();
three2.name = "Two";
three2.value = 2;
three2.leftNode = three1;
three2.rightNode = three3;

var three6 = new ThreeNode();
three6.name = "Six";
three6.value = 6;
three6.leftNode = three5;
three6.rightNode = null;

var three8 = new ThreeNode();
three8.name = "Eight";
three8.value = 8;
three8.leftNode = null;
three8.rightNode = null;

var threeX = new ThreeNode();
threeX.name = "Ten";
threeX.value = 10;
threeX.leftNode = null;
threeX.rightNode = null;

var three4 = new ThreeNode();
three4.name = "Four";
three4.value = 4;
three4.leftNode = three2;
three4.rightNode = three6;

var three9 = new ThreeNode();
three9.name = "Nine";
three9.value = 9;
three9.leftNode = three8;
three9.rightNode = threeX;

var three7 = new ThreeNode();
three7.name = "Seven";
three7.value = 7;
three7.leftNode = three4;
three7.rightNode = three9;





// �������� ������ ������?

function FindItem(target_value) {
    var test_node = three7;
    
    while(true)
    {
        if (test_node == null)
            return null;
        
        if (target_value == test_node.value)
            return test_node;             // test_node �������� ������� �������� - ������� ���
        else if (target_value < test_node.value)
            test_node = test_node.leftNode; // ������� �� ����� �����
        else 
            test_node = test_node.rightNode;
    }
}


console.log(FindItem(3));