(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{180:function(t,n,s){"use strict";s.r(n);var a=s(0),e=Object(a.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"_01-阿里篇"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_01-阿里篇"}},[t._v("#")]),t._v(" 01.阿里篇")]),t._v(" "),s("h2",{attrs:{id:"q1：如何实现一个高效的单向链表逆序输出？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q1：如何实现一个高效的单向链表逆序输出？"}},[t._v("#")]),t._v(" Q1：如何实现一个高效的单向链表逆序输出？")]),t._v(" "),s("p",[s("strong",[t._v("出题人")]),t._v("：阿里巴巴出题专家：昀龙／阿里云弹性人工智能负责人")]),t._v(" "),s("p",[s("strong",[t._v("参考答案")]),t._v("：下面是其中一种写法，也可以有不同的写法，比如递归等。供参考。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('typedef struct node{\n    int           data;\n    struct node*  next;\n    node(int d):data(d), next(NULL){}\n}node;\n\nvoid reverse(node* head)\n{\n    if(NULL == head || NULL == head->next){\n        return;\n    }\n    \n    node* prev=NULL;\n    node* pcur=head->next;\n    node* next;\n    \n    while(pcur!=NULL){\n        if(pcur->next==NULL){\n            pcur->next=prev;\n            break;\n        }\n        next=pcur->next;\n        pcur->next=prev;\n        prev=pcur;\n        pcur=next;\n    }\n    \n    head->next=pcur;\n    node*tmp=head->next;\n    while(tmp!=NULL){\n        cout<<tmp->data<<"\\t";\n        tmp=tmp->next;\n    }\n}\n\n')])])]),s("h2",{attrs:{id:"q2：已知-sqrt-2-约等于-1-414，要求不用数学库，求-sqrt-2-精确到小数点后-10-位。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q2：已知-sqrt-2-约等于-1-414，要求不用数学库，求-sqrt-2-精确到小数点后-10-位。"}},[t._v("#")]),t._v(" Q2：已知 sqrt (2)约等于 1.414，要求不用数学库，求 sqrt (2)精确到小数点后 10 位。")]),t._v(" "),s("p",[s("strong",[t._v("出题人")]),t._v("：——阿里巴巴出题专家：文景／阿里云 CDN 资深技术专家")]),t._v(" "),s("p",[s("strong",[t._v("参考答案")]),t._v("：")]),t._v(" "),s("h4",{attrs:{id:"考察点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#考察点"}},[t._v("#")]),t._v(" * 考察点")]),t._v(" "),s("ol",[s("li",[t._v("基础算法的灵活应用能力（二分法学过数据结构的同学都知道，但不一定往这个方向考虑；如果学过数值计算的同学，应该还要能想到牛顿迭代法并解释清楚）")]),t._v(" "),s("li",[t._v("退出条件设计")])]),t._v(" "),s("h4",{attrs:{id:"解决办法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决办法"}},[t._v("#")]),t._v(" * 解决办法")]),t._v(" "),s("h5",{attrs:{id:"_1-已知-sqrt-2-约等于-1-414，那么就可以在-1-4-1-5-区间做二分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-已知-sqrt-2-约等于-1-414，那么就可以在-1-4-1-5-区间做二分"}},[t._v("#")]),t._v(" 1. 已知 sqrt(2)约等于 1.414，那么就可以在(1.4, 1.5)区间做二分")]),t._v(" "),s("p",[t._v("查找，如：\na) high=>1.5\nb) low=>1.4\nc) mid => (high+low)/2=1.45\nd) 1.45*1.45>2 ? high=>1.45 : low => 1.45\ne) 循环到 c)")]),t._v(" "),s("h5",{attrs:{id:"_2-退出条件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-退出条件"}},[t._v("#")]),t._v(" 2. 退出条件")]),t._v(" "),s("p",[t._v("a) 前后两次的差值的绝对值<=0.0000000001, 则可退出")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("const double EPSILON = 0.0000000001;\n\ndouble sqrt2() {\n    double low = 1.4, high = 1.5;\n    double mid = (low + high) / 2;\n\n    while (high - low > EPSILON) {\n        if (mid * mid > 2) {\n            high = mid;\n        } else {\n            low = mid;\n        }\n        mid = (high + low) / 2;\n    }\n\n    return mid;\n}\n")])])]),s("h2",{attrs:{id:"q3：给定一个二叉搜索树-bst-，找到树中第-k-小的节点。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q3：给定一个二叉搜索树-bst-，找到树中第-k-小的节点。"}},[t._v("#")]),t._v(" Q3：给定一个二叉搜索树(BST)，找到树中第 K 小的节点。")]),t._v(" "),s("p",[s("strong",[t._v("出题人")]),t._v("：阿里巴巴出题专家：文景／阿里云 CDN 资深技术专家")]),t._v(" "),s("p",[s("strong",[t._v("参考答案")]),t._v("：")]),t._v(" "),s("h5",{attrs:{id:"考察点-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#考察点-2"}},[t._v("#")]),t._v(" * 考察点")]),t._v(" "),s("ol",[s("li",[t._v("基础数据结构的理解和编码能力")]),t._v(" "),s("li",[t._v("递归使用")])]),t._v(" "),s("h5",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" * 示例")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("       5\n      / \\\n     3   6\n    / \\\n   2   4\n  /\n 1\n \n")])])]),s("p",[t._v("说明：保证输入的 K 满足 1<=K<=(节点数目）")]),t._v(" "),s("p",[t._v("树相关的题目，第一眼就想到递归求解，左右子树分别遍历。联想到二叉搜索树的性质，root 大于左子树，小于右子树，如果左子树的节点数目等于 K-1，那么 root 就是结果，否则如果左子树节点数目小于 K-1，那么结果必然在右子树，否则就在左子树。因此在搜索的时候同时返回节点数目，跟 K 做对比，就能得出结果了。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("/**\n * Definition for a binary tree node.\n **/\n\npublic class TreeNode {\n    int val;\n    TreeNode left;\n    TreeNode right;\n    TreeNode(int x) { val = x; }\n}\n\nclass Solution {\n    private class ResultType {\n    \n        boolean found;  // 是否找到\n        \n        int val;  // 节点数目\n        ResultType(boolean found, int val) {\n            this.found = found;\n            this.val = val;\n        }\n    }\n\n    public int kthSmallest(TreeNode root, int k) {\n        return kthSmallestHelper(root, k).val;\n    }\n\n    private ResultType kthSmallestHelper(TreeNode root, int k) {\n        if (root == null) {\n            return new ResultType(false, 0);\n        }\n\n        ResultType left = kthSmallestHelper(root.left, k);\n\n        // 左子树找到，直接返回\n        if (left.found) {\n            return new ResultType(true, left.val);\n        }\n\n        // 左子树的节点数目 = K-1，结果为 root 的值\n        if (k - left.val == 1) {\n            return new ResultType(true, root.val);\n        }\n\n        // 右子树寻找\n        ResultType right = kthSmallestHelper(root.right, k - left.val - 1);\n        if (right.found) {\n            return new ResultType(true, right.val);\n        }\n\n        // 没找到，返回节点总数\n        return new ResultType(false, left.val + 1 + right.val);\n    }\n}\n\n")])])]),s("h2",{attrs:{id:"q4：lru-缓存机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q4：lru-缓存机制"}},[t._v("#")]),t._v(" Q4：LRU 缓存机制")]),t._v(" "),s("p",[t._v("设计和实现一个 LRU（最近最少使用）缓存数据结构，使它应该支持一下操作：get 和 put。\nget(key) - 如果 key 存在于缓存中，则获取 key 的 value（总是正数），否则返回 -1。\nput(key,value) - 如果 key 不存在，请设置或插入 value。当缓存达到其容量时，它应该在插入新项目之前使最近最少使用的项目作废。")]),t._v(" "),s("p",[s("strong",[t._v("出题人")]),t._v("：文景／阿里云 CDN 资深技术专家")]),t._v(" "),s("p",[s("strong",[t._v("参考答案")]),t._v("：")]),t._v(" "),s("p",[t._v("python版本的：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('class LRUCache(object):\n    def __init__(self, capacity):\n    """\n    :type capacity: int\n    """\n    self.cache = {}\n    self.keys = []\n    self.capacity = capacity\n    \n    def visit_key(self, key):\n        if key in self.keys:\n            self.keys.remove(key)\n        self.keys.append(key)\n    \n    def elim_key(self):\n        key = self.keys[0]\n        self.keys = self.keys[1:]\n        del self.cache[key]\n        \n    def get(self, key):\n        """\n        :type key: int\n        :rtype: int\n        """\n        if not key in self.cache:\n            return -1\n        self.visit_key(key)\n        return self.cache[key]\n    \n    def put(self, key, value):\n        """\n        :type key: int\n        :type value: int\n        :rtype: void\n        """\n        if not key in self.cache:\n        if len(self.keys) == self.capacity:\n        self.elim_key()\n        self.cache[key] = value\n        self.visit_key(key)\n\ndef main():\n    s =\n    [["put","put","get","put","get","put","get","get","get"],[[1,1],[2,2],[1],[3,3],[2],[\n    4,4],[1],[3],[4]]]\n    obj = LRUCache(2)\n    l=[]\n    for i,c in enumerate(s[0]):\n        if(c == "get"):\n            l.append(obj.get(s[1][i][0]))\n        else:\n            obj.put(s[1][i][0], s[1][i][1])\n    print(l)\n\nif __name__ == "__main__":\n    main()\n\n')])])]),s("p",[t._v("c++版本的：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("class LRUCache{\n    public:\n        LRUCache(int capacity) {\n            cap = capacity;\n        }\n        \n        int get(int key) {\n            auto it = m.find(key);\n            if (it == m.end()) return -1;\n            l.splice(l.begin(), l, it->second);\n            return it->second->second;\n        }\n        \n        void set(int key, int value) {\n            auto it = m.find(key);\n            if (it != m.end()) l.erase(it->second);\n            l.push_front(make_pair(key, value));\n            m[key] = l.begin();\n            if (m.size() > cap) {\n                int k = l.rbegin()->first;\n                l.pop_back();\n                m.erase(k);\n            }\n        }\n}\n\n")])])]),s("h2",{attrs:{id:"q5：关于-epoll-和-select-的区别，哪些说法是正确的？（多选）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q5：关于-epoll-和-select-的区别，哪些说法是正确的？（多选）"}},[t._v("#")]),t._v(" Q5：关于 epoll 和 select 的区别，哪些说法是正确的？（多选）")]),t._v(" "),s("p",[t._v("A. epoll 和 select 都是 I/O 多路复用的技术，都可以实现同时监听多个 I/O 事件的状态。")]),t._v(" "),s("p",[t._v("B. epoll 相比 select 效率更高，主要是基于其操作系统支持的I/O事件通知机制，而 select 是基于轮询机制。")]),t._v(" "),s("p",[t._v("C. epoll 支持水平触发和边沿触发两种模式。")]),t._v(" "),s("p",[t._v("D. select 能并行支持 I/O 比较小，且无法修改。")]),t._v(" "),s("p",[s("strong",[t._v("出题人")]),t._v("：阿里巴巴出题专家：寈峰／阿里技术专家")]),t._v(" "),s("p",[s("strong",[t._v("参考答案")]),t._v("：A，B，C")]),t._v(" "),s("p",[s("strong",[t._v("【延伸】那在高并发的访问下，epoll使用那一种触发方式要高效些？当使用边缘触发的时候要注意些什么东西？")])]),t._v(" "),s("h2",{attrs:{id:"q6：从-innodb-的索引结构分析，为什么索引的-key-长度不能太长？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q6：从-innodb-的索引结构分析，为什么索引的-key-长度不能太长？"}},[t._v("#")]),t._v(" Q6：从 innodb 的索引结构分析，为什么索引的 key 长度不能太长？")]),t._v(" "),s("p",[s("strong",[t._v("出题人")]),t._v("：阿里巴巴出题专家：近秋／阿里云数据库产品技术部技术专家")]),t._v(" "),s("p",[s("strong",[t._v("参考答案")]),t._v("：key 太长会导致一个页当中能够存放的 key 的数目变少，间接导致索引树的页数目变多，索引层次增加，从而影响整体查询变更的效率。")]),t._v(" "),s("h2",{attrs:{id:"q7：mysql-的数据如何恢复到任意时间点？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q7：mysql-的数据如何恢复到任意时间点？"}},[t._v("#")]),t._v(" Q7：MySQL 的数据如何恢复到任意时间点？")]),t._v(" "),s("p",[s("strong",[t._v("出题人")]),t._v("：阿里巴巴出题专家：近秋／阿里云数据库产品技术部技术专家参考答案")]),t._v(" "),s("p",[s("strong",[t._v("参考答案")]),t._v("：恢复到任意时间点以定时的做全量备份，以及备份增量的 binlog 日志为前提。恢复到任意时间点首先将全量备份恢复之后，再此基础上回放增加的 binlog 直至指定的时间点。")]),t._v(" "),s("h2",{attrs:{id:"q8：nfs-和-smb-是最常见的两种-nas（network-attached-storage）协议，当把一个文件系统同时通过-nfs-和-smb-协议共享给多个主机访问时，以下哪些说法是错误的：（多选）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q8：nfs-和-smb-是最常见的两种-nas（network-attached-storage）协议，当把一个文件系统同时通过-nfs-和-smb-协议共享给多个主机访问时，以下哪些说法是错误的：（多选）"}},[t._v("#")]),t._v(" Q8：NFS 和 SMB 是最常见的两种 NAS（Network Attached Storage）协议，当把一个文件系统同时通过 NFS 和 SMB 协议共享给多个主机访问时，以下哪些说法是错误的：（多选）")]),t._v(" "),s("p",[t._v("A. 不可能有这样的操作，即把一个文件系统同时通过 NFS 和 SMB协议共享给多个主机访问。")]),t._v(" "),s("p",[t._v("B. 主机 a 的用户通过NFS 协议创建的文件或者目录，另一个主机 b的用户不能通过 SMB 协议将其删除。")]),t._v(" "),s("p",[t._v("C. 在同一个目录下，主机 a 通过 NFS 协议看到文件 file.txt，主机b 通过 SMB 协议也看到文件 file.txt，那么它们是同一个文件。")]),t._v(" "),s("p",[t._v("D. 主机 a 通过 NFS 协议，以及主机 b 通过 SMB 协议，都可以通过主机端的数据缓存，提升文件访问性能。")]),t._v(" "),s("p",[s("strong",[t._v("出题人")]),t._v("：阿里巴巴出题专家：起影／阿里云文件存储高级技术专家")]),t._v(" "),s("p",[s("strong",[t._v("参考答案")]),t._v("：A，B，C")]),t._v(" "),s("h2",{attrs:{id:"q9：输入-ping-ip-后敲回车，发包前会发生什么？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q9：输入-ping-ip-后敲回车，发包前会发生什么？"}},[t._v("#")]),t._v(" Q9：输入 ping IP 后敲回车，发包前会发生什么？")]),t._v(" "),s("p",[s("strong",[t._v("出题人")]),t._v("：阿里巴巴出题专家：怀虎／阿里云云效平台负责人")]),t._v(" "),s("p",[s("strong",[t._v("参考答案")]),t._v("：\n首先根据目的IP和路由表决定走哪个网卡，再根据网卡的子网掩码地址判断目的IP是否在子网内。如果不在则会通过arp缓存查询IP的网卡地址，不存在的话会通过广播询问目的IP的mac地址，得到后就开始发包了，同时mac地址也会被arp缓存起来。")]),t._v(" "),s("h2",{attrs:{id:"q10：请解释下为什么鹿晗发布恋情的时候，微博系统会崩溃，如何解决？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q10：请解释下为什么鹿晗发布恋情的时候，微博系统会崩溃，如何解决？"}},[t._v("#")]),t._v(" Q10：请解释下为什么鹿晗发布恋情的时候，微博系统会崩溃，如何解决？")]),t._v(" "),s("p",[s("strong",[t._v("出题人")]),t._v("：阿里巴巴出题专家：江岚／阿里巴巴数据技术高级技术专家")]),t._v(" "),s("p",[s("strong",[t._v("参考答案")]),t._v("：")]),t._v(" "),s("p",[t._v("A. 获取微博通过 pull 方式还是 push 方式")]),t._v(" "),s("p",[t._v("B. 发布微博的频率要远小于阅读微博")]),t._v(" "),s("p",[t._v("C. 流量明星的发微博，和普通博主要区分对待，比如在 sharding的时候，也要考虑这个因素")]),t._v(" "),s("h2",{attrs:{id:"q11：现有一批邮件需要发送给订阅顾客，且有一个集群（集群的节点数不定，会动态扩容缩容）来负责具体的邮件发送任务，如何让系统尽快地完成发送？请详述技术方案！"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q11：现有一批邮件需要发送给订阅顾客，且有一个集群（集群的节点数不定，会动态扩容缩容）来负责具体的邮件发送任务，如何让系统尽快地完成发送？请详述技术方案！"}},[t._v("#")]),t._v(" Q11：现有一批邮件需要发送给订阅顾客，且有一个集群（集群的节点数不定，会动态扩容缩容）来负责具体的邮件发送任务，如何让系统尽快地完成发送？请详述技术方案！")]),t._v(" "),s("p",[s("strong",[t._v("出题人")]),t._v("：阿里巴巴出题专家：江岚／阿里巴巴数据技术高级技术专家")]),t._v(" "),s("p",[s("strong",[t._v("参考答案")]),t._v("：")]),t._v(" "),s("p",[t._v("A. 借助消息中间件，通过发布者订阅者模式来进行任务分配")]),t._v(" "),s("p",[t._v("B. master-slave 部署，由 master 来分配任务")]),t._v(" "),s("p",[t._v("C. 不借助任何中间件，且所有节点均等。通过数据库的 update-returning，从而实现节点之间任务的互斥")]),t._v(" "),s("h2",{attrs:{id:"q12：有一批气象观测站，现需要获取这些站点的观测数据，并存储到-hive-中。但是气象局只提供了-api-查询，每次只能查询单个观测点。那么如果能够方便快速地获取到所有的观测点的数据？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q12：有一批气象观测站，现需要获取这些站点的观测数据，并存储到-hive-中。但是气象局只提供了-api-查询，每次只能查询单个观测点。那么如果能够方便快速地获取到所有的观测点的数据？"}},[t._v("#")]),t._v(" Q12：有一批气象观测站，现需要获取这些站点的观测数据，并存储到 Hive 中。但是气象局只提供了 api 查询，每次只能查询单个观测点。那么如果能够方便快速地获取到所有的观测点的数据？")]),t._v(" "),s("p",[s("strong",[t._v("出题人")]),t._v("：阿里巴巴出题专家：江岚／阿里巴巴数据技术高级技术专家")]),t._v(" "),s("p",[s("strong",[t._v("参考答案")]),t._v("：")]),t._v(" "),s("p",[t._v("A. 通过 shell 或 python 等调用 api，结果先暂存本地，最后将本地文件上传到 Hive 中。")]),t._v(" "),s("p",[t._v("B. 通过 datax 的 httpReader 和 hdfsWriter 插件，从而获取所需的数据。")]),t._v(" "),s("p",[t._v("C. 比较理想的回答，是在计算引擎的 UDF 中调用查询 api，执行UDF 的查询结果存储到对应的表中。一方面，不需要同步任务的导出导入；另一方面，计算引擎的分布式框架天生提供了分布式、容错、并发等特性。")]),t._v(" "),s("h2",{attrs:{id:"q13：如何实现两金额数据相加（最多小数点两位）？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q13：如何实现两金额数据相加（最多小数点两位）？"}},[t._v("#")]),t._v(" Q13：如何实现两金额数据相加（最多小数点两位）？")]),t._v(" "),s("p",[s("strong",[t._v("出题人")]),t._v("：阿里巴巴出题专家：御术／蚂蚁金服数据可视化高级技术专家")]),t._v(" "),s("p",[s("strong",[t._v("参考答案")]),t._v("：")]),t._v(" "),s("p",[t._v("其实问题并不难，就是考察候选人对 JavaScript 数据运算上的认知以及考虑问题的缜密程度，有很多坑，可以用在笔试题，如果用在面试，回答过程中还可以随机加入有很多计算机基础的延伸。")]),t._v(" "),s("p",[t._v("回到这个问题，由于直接浮点相与加会失精，所以要转整数；（可以插入问遇到过吗？是否可以举个例子？）。")]),t._v(" "),s("p",[t._v("转整数是第一个坑，虽然只有两位可以通过乘以100转整数，但由于乘以一百和除以一百都会出现浮点数的运算，所以也会失精，还是要通过字符串来转；（可以插入问字符串转整数有几种方式？）字符串转整是第二个坑，因为最后要对齐计算，如果没考虑周全先toFixed(2)，对于只有一位小数点数据进入计算就会错误；转整数后的计算是个加分点，很多同学往往就是直接算了，如果可以考虑大数计算的场景，恭喜同学进入隐藏关卡，这就会涉及如何有效循环、遍历、算法复杂度的问题。")]),t._v(" "),s("h2",{attrs:{id:"q14：-关于并行计算的一些基础开放问题。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q14：-关于并行计算的一些基础开放问题。"}},[t._v("#")]),t._v(" Q14： 关于并行计算的一些基础开放问题。")]),t._v(" "),s("p",[t._v("◼ 如何定义并计算，请分别阐述分布式内存到共享内存模式行编程的区别和实现（例子代码）？")]),t._v(" "),s("p",[t._v("◼ 请使用 MPI 和 OpenMP 分别实现 N 个处理器对 M 个变量的求和？")]),t._v(" "),s("p",[t._v("◼ 请说明 SIMD 指令在循环中使用的权限？向量化优化有哪些手段？")]),t._v(" "),s("p",[t._v("◼ 请用 Amdahl 定律说明什么是并行效率以及并行算法的扩展性？并说明扩展性的性能指标和限制因素，最后请说明在共享内存计算机中，共享内存的限制？OpenMP 是怎样实现共享内存编程环境的？MPI 阻塞和非阻塞读写的区别？")]),t._v(" "),s("p",[s("strong",[t._v("出题人")]),t._v("：阿里巴巴出题专家：何万青／阿里云高性能计算资深技术专家")]),t._v(" "),s("p",[s("strong",[t._v("参考答案")]),t._v("：")]),t._v(" "),s("p",[t._v("（简要答案，但必须触及，可以展开）\n◼ 同时执行多个/算法/逻辑操作/内存访问/IO，相互独立同时运行，分三个层次：进程级，多个节点分布式内存通过MPI通信并行；线程级，共享内存的多路机器，通过OpenMP实现多线程并行；指令集：通过SIM指令实现单指令多数据。。。。举例吧啦吧啦。")]),t._v(" "),s("p",[t._v("◼ MPI代码，，，OpenMP代码，分别写出来 M个元素，N个处理器的累加，后者注意private 参数。")]),t._v(" "),s("p",[t._v("◼ SIMD在循环中的应用，限制在于 SIMD指令处理的每一个数组的长度，cache line利用，内部循环间的依赖和条件调用等。")]),t._v(" "),s("p",[t._v("◼ 向量化，主要看SSE和AVX指令占比率，通过编译器优化...... 在loop代码中使用。")]),t._v(" "),s("p",[t._v("◼ 性能和计算规模随处理器增加的变化曲线，实测HPL和峰值HPL比率，能用用Amdahl定律表达Tpar(N) = (an + (1-a)n/N )t + C (n,N), 能够讲明白串行部分对整个并行的天花板效应，扩展性能够解释清楚算法的扩展性=并行效率随处理器数目的变化关系，画出来。")]),t._v(" "),s("p",[t._v("◼ 共享内存计算机OpenMP对变量的限制描述，EREW，CREW，ERCW，CRCW等区别，NUMA概念，如何保持coherent等。")]),t._v(" "),s("p",[t._v("◼ 写出OpenMP和MPI的核心函数，回答问题即可。")]),t._v(" "),s("h2",{attrs:{id:"q15：请计算xilinx公司vu9p芯片的算力相当于多少tops，给出计算过程与公式。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q15：请计算xilinx公司vu9p芯片的算力相当于多少tops，给出计算过程与公式。"}},[t._v("#")]),t._v(" Q15：请计算XILINX公司VU9P芯片的算力相当于多少TOPS，给出计算过程与公式。")]),t._v(" "),s("p",[s("strong",[t._v("出题人")]),t._v("： 阿里巴巴出题专家：隐达／阿里云异构计算资深专家")]),t._v(" "),s("p",[s("strong",[t._v("参考答案")]),t._v("：基于不同的算法，这个值在十几到几百之间。但是，如果只是单纯比算力，FPGA和ASIC、GPU相比并无太大优势，甚至大多时候有较大劣势。FPGA的优势在于高度的灵活性和算法的针对性。")]),t._v(" "),s("h2",{attrs:{id:"q16：一颗现代处理器，每秒大概可以执行多少条简单的mov指令，有哪些主要的影响因素？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q16：一颗现代处理器，每秒大概可以执行多少条简单的mov指令，有哪些主要的影响因素？"}},[t._v("#")]),t._v(" Q16：一颗现代处理器，每秒大概可以执行多少条简单的MOV指令，有哪些主要的影响因素？")]),t._v(" "),s("p",[s("strong",[t._v("出题人")]),t._v("：阿里巴巴出题专家：子团／创新产品虚拟化&稳定性资深技术专家")]),t._v(" "),s("p",[s("strong",[t._v("参考答案")]),t._v("：")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("及格：")]),t._v("\n每执行一条mov指令需要消耗1个时钟周期，所以每秒执行的mov指令和CPU主频相关。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("加分：")]),t._v("\n在CPU微架构上，要考虑数据预取，乱序执行，多发射，内存stall(前端stall和后端stall)等诸多因素，因此除了cpu主频外，还和流水线上的效率(IPC)强相关，比较复杂的一个问题。")])])]),t._v(" "),s("h2",{attrs:{id:"q17：请分析-maxcompute-产品与分布式技术的关系、当前大数据计算平台类产品的市场现状和发展趋势。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q17：请分析-maxcompute-产品与分布式技术的关系、当前大数据计算平台类产品的市场现状和发展趋势。"}},[t._v("#")]),t._v(" Q17：请分析 MaxCompute 产品与分布式技术的关系、当前大数据计算平台类产品的市场现状和发展趋势。")]),t._v(" "),s("p",[s("strong",[t._v("出题人")]),t._v("：阿里巴巴出题专家：云郎／阿里 MaxCompute 高级产品专家")]),t._v(" "),s("p",[s("strong",[t._v("参考答案")]),t._v("：")]),t._v(" "),s("p",[t._v("开放性问题，无标准答案。")]),t._v(" "),s("h2",{attrs:{id:"q18：-对大数据平台中的元数据管理是怎么理解的，元数据收集管理体系是怎么样的，会对大数据应用有什么样的影响。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q18：-对大数据平台中的元数据管理是怎么理解的，元数据收集管理体系是怎么样的，会对大数据应用有什么样的影响。"}},[t._v("#")]),t._v(" Q18： 对大数据平台中的元数据管理是怎么理解的，元数据收集管理体系是怎么样的，会对大数据应用有什么样的影响。")]),t._v(" "),s("p",[s("strong",[t._v("出题人")]),t._v("： 阿里巴巴出题专家：映泉／阿里巴巴高级技术专家")]),t._v(" "),s("p",[s("strong",[t._v("参考答案")]),t._v("：开放性问题，无标准答案。")]),t._v(" "),s("h2",{attrs:{id:"q19：-你理解常见如阿里，和友商大数据平台的技术体系差异以及发展趋势和技术瓶颈，在存储和计算两个方面进行概述。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q19：-你理解常见如阿里，和友商大数据平台的技术体系差异以及发展趋势和技术瓶颈，在存储和计算两个方面进行概述。"}},[t._v("#")]),t._v(" Q19： 你理解常见如阿里，和友商大数据平台的技术体系差异以及发展趋势和技术瓶颈，在存储和计算两个方面进行概述。")]),t._v(" "),s("p",[s("strong",[t._v("出题人")]),t._v("： 阿里巴巴出题专家：映泉／阿里巴巴高级技术专家")]),t._v(" "),s("p",[s("strong",[t._v("参考答案")]),t._v("：开放性问题，无标准答案。")]),t._v(" "),s("h2",{attrs:{id:"q20：在云计算大数据处理场景中，每天运行着成千上万的任务，每个任务都要进行-io-读写。存储系统为了更好的服务，经常会保证高优先级的任务优先执行。当多个作业或用户访问存储系统时，如何保证优先级和公平性。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q20：在云计算大数据处理场景中，每天运行着成千上万的任务，每个任务都要进行-io-读写。存储系统为了更好的服务，经常会保证高优先级的任务优先执行。当多个作业或用户访问存储系统时，如何保证优先级和公平性。"}},[t._v("#")]),t._v(" Q20：在云计算大数据处理场景中，每天运行着成千上万的任务，每个任务都要进行 IO 读写。存储系统为了更好的服务，经常会保证高优先级的任务优先执行。当多个作业或用户访问存储系统时，如何保证优先级和公平性。")]),t._v(" "),s("p",[s("strong",[t._v("出题人")]),t._v("：阿里巴巴出题专家：田磊磊／阿里云文件存储高级技术专家")]),t._v(" "),s("p",[s("strong",[t._v("参考答案")]),t._v("：开放性问题，无标准答案。")]),t._v(" "),s("h2",{attrs:{id:"q21：最大频率栈。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q21：最大频率栈。"}},[t._v("#")]),t._v(" Q21：最大频率栈。")]),t._v(" "),s("p",[t._v("实现 FreqStack，模拟类似栈的数据结构的操作的一个类。FreqStack 有两个函数：\npush(int x)，将整数 x 推入栈中。pop()，它移除并返回栈中出现最频繁的元素。如果最频繁的元素不只一个，则移除并返回最接近栈顶的元素。\n◼ 示例：\npush [5,7,5,7,4,5]\npop() -> 返回 5，因为 5 是出现频率最高的。\n栈变成\n[5,7,5,7,4]。\npop() -> 返回 7，因为 5 和 7 都是频率最高的，但 7 最接近栈\n顶。\n栈变成 [5,7,5,4]。\npop() -> 返回 5 。\n栈变成 [5,7,4]。\npop() -> 返回 4 。\n栈变成 [5,7]。")]),t._v(" "),s("p",[s("strong",[t._v("出题人")]),t._v("：阿里巴巴出题专家：屹平／阿里云视频云边缘计算高级技术专家")]),t._v(" "),s("p",[s("strong",[t._v("参考答案")]),t._v("：")]),t._v(" "),s("p",[t._v("令 freq 作为 x 的出现次数的映射 Map。")]),t._v(" "),s("p",[t._v("此外 maxfreq，即栈中任意元素的当前最大频率，因为我们必须弹出频率最高的元素。")]),t._v(" "),s("p",[t._v("当前主要的问题就变成了：在具有相同的（最大）频率的元素中，怎么判断那个元素是最新的？我们可以使用栈来查询这一信息：靠近栈顶的元素总是相对更新一些。")]),t._v(" "),s("p",[t._v("为此，我们令 group 作为从频率到具有该频率的元素的映射。到目前，我们已经实现了 FreqStack 的所有必要的组件。")]),t._v(" "),s("p",[t._v("算法：")]),t._v(" "),s("p",[t._v("实际上，作为实现层面上的一点细节，如果 x 的频率为 f，那么我们将获取在所有 group[i] (i <= f) 中的 x,而不仅仅是栈顶的那个。这是因为每个 group[i] 都会存储与第 i 个 x 副本相关的信息。")]),t._v(" "),s("p",[t._v("最后，我们仅仅需要如上所述维持 freq，group，以及 maxfreq。")]),t._v(" "),s("p",[s("strong",[t._v("参考代码")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("class FreqStack {\n    Map<Integer, Integer> freq;\n    Map<Integer, Stack<Integer>> group;\n    int maxfreq;\n\n    public FreqStack() {\n        freq = new HashMap();\n        group = new HashMap();\n        maxfreq = 0;\n    }\n    \n    public void push(int x) {\n        int f = freq.getOrDefault(x, 0) + 1;\n        freq.put(x, f);\n        if (f > maxfreq) maxfreq = f;\n        group.computeIfAbsent(f, z-> new Stack()).push(x);\n    }\n    \n    public int pop() {\n        int x = group.get(maxfreq).pop();\n        freq.put(x, freq.get(x) - 1);\n        if (group.get(maxfreq).size() == 0)\n        maxfreq--;\n        return x;\n    }\n}\n")])])]),s("h2",{attrs:{id:"q22：给定一个链表，删除链表的倒数第-n-个节点，并且返回链表的头结点。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q22：给定一个链表，删除链表的倒数第-n-个节点，并且返回链表的头结点。"}},[t._v("#")]),t._v(" Q22：给定一个链表，删除链表的倒数第 N 个节点，并且返回链表的头结点。")]),t._v(" "),s("p",[t._v("◼ 示例：\n给定一个链表: 1->2->3->4->5, 和 n = 2.\n当删除了倒数第二个节点后，链表变为 1->2->3->5.\n说明：\n给定的 n 保证是有效的。\n要求：\n只允许对链表进行一次遍历。")]),t._v(" "),s("p",[s("strong",[t._v("出题人")]),t._v("：阿里巴巴出题专家：屹平／阿里云视频云边缘计算高级技术专家")]),t._v(" "),s("p",[s("strong",[t._v("参考答案")]),t._v("：")]),t._v(" "),s("p",[t._v("我们可以使用两个指针而不是一个指针。第一个指针从列表的开头向前移动 n+1 步，而第二个指针将从列表的开头出发。现在，这两个指针被 n 个结点分开。我们通过同时移动两个指针向前来保持这个恒定的间隔，直到第一个指针到达最后一个结点。此时第二个指针将指向从最后一个结点数起的第 n 个结点。我们重新链接第二个指针所引用的结点的 next 指针指向该结点的下下个结点。")]),t._v(" "),s("p",[s("strong",[t._v("参考代码")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("public ListNode removeNthFromEnd(ListNode head, int n)\n{\n    ListNode dummy = new ListNode(0);\n    dummy.next = head;\n    ListNode first = dummy;\n    ListNode second = dummy;\n    // Advances first pointer so that the gap between first\n    and second is n nodes apart\n    for (int i = 1; i <= n + 1; i++) {\n        first = first.next;\n    }\n    // Move first to the end, maintaining the gap\n    while (first != null) {\n        first = first.next;\n        second = second.next;\n    }\n    second.next = second.next.next;\n    return dummy.next;\n}\n")])])]),s("p",[s("strong",[t._v("复杂度分析：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("时间复杂度：O(L)，该算法对含有 L 个结点的列表进行了一次遍历。因此时间复杂度为 O(L)。")])]),t._v(" "),s("li",[s("p",[t._v("空间复杂度：O(1)，我们只用了常量级的额外空间。")])])]),t._v(" "),s("h2",{attrs:{id:"q23：如果让你设计一个通用的、支持各种数据库秒级备份和恢复的系统，你会如何设计？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q23：如果让你设计一个通用的、支持各种数据库秒级备份和恢复的系统，你会如何设计？"}},[t._v("#")]),t._v(" Q23：如果让你设计一个通用的、支持各种数据库秒级备份和恢复的系统，你会如何设计？")]),t._v(" "),s("p",[s("strong",[t._v("出题人")]),t._v("：阿里巴巴出题专家：千震／阿里云数据库高级技术专家")]),t._v(" "),s("p",[s("strong",[t._v("参考答案")]),t._v("：开放性问题，无标准答案。")]),t._v(" "),s("h2",{attrs:{id:"q24：如果让你来设计一个支持数据库、nosql-和大数据之间数据实时流动的数据流及处理的系统，你会考虑哪些问题？如何设计？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q24：如果让你来设计一个支持数据库、nosql-和大数据之间数据实时流动的数据流及处理的系统，你会考虑哪些问题？如何设计？"}},[t._v("#")]),t._v(" Q24：如果让你来设计一个支持数据库、NOSQL 和大数据之间数据实时流动的数据流及处理的系统，你会考虑哪些问题？如何设计？")]),t._v(" "),s("p",[s("strong",[t._v("出题人")]),t._v("：阿里巴巴出题专家：千震／阿里云数据库高级技术专家")]),t._v(" "),s("p",[s("strong",[t._v("参考答案")]),t._v("：开放性问题，无标准答案。")]),t._v(" "),s("h2",{attrs:{id:"q25：给定一个整数数组和一个整数，返回两个数组的索引，这两个索引指向的数字的加和等于指定的整数。需要最优的算法，分析算法的空间和时间复杂度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q25：给定一个整数数组和一个整数，返回两个数组的索引，这两个索引指向的数字的加和等于指定的整数。需要最优的算法，分析算法的空间和时间复杂度"}},[t._v("#")]),t._v(" Q25：给定一个整数数组和一个整数，返回两个数组的索引，这两个索引指向的数字的加和等于指定的整数。需要最优的算法，分析算法的空间和时间复杂度")]),t._v(" "),s("p",[s("strong",[t._v("参考答案")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-Java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("twoSum")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMap")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" map "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMap")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("map"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("containsKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("map"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            map"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("分析：空间复杂度和时间复杂度均为 O(n)")]),t._v(" "),s("h2",{attrs:{id:"q26：假如给你一个新产品，你将从哪些方面来保障它的质量？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q26：假如给你一个新产品，你将从哪些方面来保障它的质量？"}},[t._v("#")]),t._v(" Q26：假如给你一个新产品，你将从哪些方面来保障它的质量？")]),t._v(" "),s("p",[s("strong",[t._v("出题人")]),t._v("：阿里巴巴出题专家：晨晖 ／阿里云中间件技术部测试开发专家")]),t._v(" "),s("p",[s("strong",[t._v("参考答案")]),t._v("：")]),t._v(" "),s("p",[t._v("可以从代码开发、测试保障、线上质量三个方面来保障。")]),t._v(" "),s("p",[t._v("在代码开发阶段，有单元测试、代码Review、静态代码扫描等；")]),t._v(" "),s("p",[t._v("测试保障阶段，有功能测试、性能测试、高可用测试、稳定性测试、兼容性测试等；")]),t._v(" "),s("p",[t._v("在线上质量方面，有灰度发布、紧急回滚、故障演练、线上监控和巡检等。")]),t._v(" "),s("h2",{attrs:{id:"q27：请评估一下程序的执行结果？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q27：请评估一下程序的执行结果？"}},[t._v("#")]),t._v(" Q27：请评估一下程序的执行结果？")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('public class SynchronousQueueQuiz {\n    public static void main(String[] args) throws Exception {\n        BlockingQueue<Integer> queue = new\n        SynchronousQueue<>();\n        System. out .print(queue.offer(1) + " ");\n        System. out .print(queue.offer(2) + " ");\n        System. out .print(queue.offer(3) + " ");\n        System. out .print(queue.take() + " ");\n        System. out .println(queue.size());\n    }\n}\n\n')])])]),s("p",[t._v("A. true true true 1 3")]),t._v(" "),s("p",[t._v("B. true true true (阻塞)")]),t._v(" "),s("p",[t._v("C. false false false null 0")]),t._v(" "),s("p",[t._v("D. false false false (阻塞)")]),t._v(" "),s("p",[s("strong",[t._v("出题人")]),t._v("：阿里巴巴出题专家：桃谷／阿里云中间件技术专家")]),t._v(" "),s("p",[s("strong",[t._v("参考答案")]),t._v("：D")])])}],!1,null,null,null);n.default=e.exports}}]);