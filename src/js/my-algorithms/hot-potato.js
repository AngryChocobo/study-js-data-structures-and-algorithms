// 击鼓传“土豆”，根据传入的玩家列表创建一个数组，迭代地淘汰其中第num个玩家，直到只剩一人
// 🤔如何实现？ 人数不足num时可以求模，从数组中淘汰玩家，既不是从开头删除，也不是从末尾删除，不属于队列操作吧
// 实际上换个角度想，每次比较的都是队列的开头玩家，如果不符合淘汰条件，就将该玩家dequeue，再重新enqueue，这样就是一个队列操作了
// 只需要队列即可，无需双向队列
const Queue = require('../my-data-structures/queue');

function hotPotato(playerList, num) {
  const queue = new Queue();
  // 创建玩家队列
  for (let i = 0; i < playerList.length; i++) {
    queue.enqueue(playerList[i]);
  }
  // 比较次数
  let count = 1;
  // 开始游戏
  while (queue.size() > 1) {
    const player = queue.dequeue();
    if (count % num === 0) {
      console.log(`玩家 ${player} 被淘汰`);
    } else {
      queue.enqueue(player);
    }
    count++;
  }
  console.log(`恭喜玩家 ${queue.peek()} 获胜!`);
}

hotPotato(['永强', '赵四', '刘能', '玉田', '长贵'], 8);

// 犯的错误：
// 1. 比较该不该淘汰玩家时，写错了逻辑：if (count % num === num) 这里永远不会为真，导致死循环
// 2. 理解问题，传入的num究竟是传递到次数被淘汰还是下一个被淘汰，如： 传7，是传到第7次被淘汰还是第8次被淘汰，我的算法是前者，书上是后者
// 3. forEach的this绑定问题 如： playerList.forEach(queue.enqueue);  这样Queue类是无法正常工作的，
//    forEach的回调函数的this如果不显示指定，就为全局对象

// 改进后的算法：

function hotPotatoPlus(playerList, num) {
  const queue = new Queue();
  // 创建玩家队列
  playerList.forEach(queue.enqueue, queue);
  const eliminatedPlayerList = [];
  // 开始游戏
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    // 传递完毕，下一个人被淘汰
    eliminatedPlayerList.push(queue.dequeue());
  }
  eliminatedPlayerList.forEach(player => console.log(`玩家 ${player} 被淘汰`));
  console.log(`恭喜玩家 ${queue.peek()} 获胜!`);
}

hotPotatoPlus(['永强', '赵四', '刘能', '玉田', '长贵'], 7);
