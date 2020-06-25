// 236 二叉树的最近公共祖先

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var lowestCommonAncestor = function (root, p, q) {
    if (p === root || q === root) return root;
    var queue = [];
    var parent; // 父节点
    // 存储的属性为为当前节点，值为当前节点的父节点
    var parentArrays = [];
    // 是否访问的状态标志
    var visitedArrays = [];
    parentArrays[root.val] = null;
    queue.push(root);
    while (queue.length != 0) {
        var qval = queue.shift();
        if (qval.left != null) {
            parentArrays[qval.left.val] = qval;
            queue.push(qval.left);
        }
        if (qval.right != null) {
            parentArrays[qval.right.val] = qval;
            queue.push(qval.right);
        }
    }
    //先找出节点p所有的父节点
    var pv = p.val
    while (pv != null) {
        visitedArrays[pv] = 1; //设置数据已经访问
        pv = parentArrays[pv]==null?null:parentArrays[pv].val;
    }
    var qv = q.val;
    var dest = q;
    while (visitedArrays[qv] != 1) {
        
        dest=parentArrays[qv];
        qv=dest.val;
    }
    parent = dest
    return parent;
}


var root = new TreeNode(3);
var rl = new TreeNode(5);
var rr = new TreeNode(1);
root.left = rl;
root.right = rr;
console.log(lowestCommonAncestor(root, rr, rl));
