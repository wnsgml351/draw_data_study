class BinaryTree {
    constructor(data, leftTree = null, rightTree = null) {
        this.data = data;
        this.leftSubTree = leftTree;
        this.rightSubTree = rightTree;
        this.height = 1;
    }

    getData() {
        return this.data;
    }

    setData(data) {
        this.data = data;
    }

    getLeftSubTree() {
        return this.leftSubTree;
    }

    getRightSubTree() {
        return this.rightSubTree;
    }

    setLeftSubTree(tree) {
        this.leftSubTree = tree;
    }

    setRightSubTree(tree) {
        this.rightSubTree = tree;
    }

    // 전위 순회
    preOrderTraversal(tree) {
        if (tree == null) return;
        console.log(tree.data);
        this.preOrderTraversal(tree.getLeftSubTree());
        this.preOrderTraversal(tree.getRightSubTree());
    }

    // 중위 순회
    inOrderTraversal(tree) {
        if (tree == null) return;
        this.inOrderTraversal(tree.getLeftSubTree());
        console.log(tree.data);
        this.inOrderTraversal(tree.getRightSubTree());
    }

    // 후위 순회
    postOrderTraversal(tree) {
        if (tree == null) return;
        this.postOrderTraversal(tree.getLeftSubTree());
        this.postOrderTraversal(tree.getRightSubTree());
        console.log(tree.data);
    }

    // 왼쪽 노드 자식 제거
    removeLeftSubTree() {
        let deletingNode = this.getLeftSubTree();
        this.setLeftSubTree(null);
        return deletingNode;
    }

    // 오른쪽 노드 자식 제거
    removeRightSubTree() {
        let deletingNode = this.getRightSubTree();
        this.setRightSubTree(null);
        return deletingNode;
    }
}

export { BinaryTree };
