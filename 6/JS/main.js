window.onload=function(){
    const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

    const cities = [];
    // fetch
    // Fetch API 提供了一个 JavaScript 接口，用于访问和操纵 HTTP 管道的一些具体部分，例如请求和响应。它还提供了一个全局 fetch() 方法，该方法提供了一种简单，合理的方式来跨网络异步获取资源。
    // 这个会返回一个Promise
    // pending是待定
    const prom =fetch(endpoint);
    console.log(prom);
    // Promise.prototype.then()
    // then() 方法返回一个 Promise (en-US)。它最多需要有两个参数：Promise 的成功和失败情况的回调函数。
    // promise.then(onCompleted, onRejected);
    // promise必需。Promise 对象。
    // onCompleted必需。承诺成功完成时要运行的履行处理程序函数。
    // onRejected可选。承诺被拒绝时要运行的错误处理程序函数
    // prom.then(Blob => console.log(Blob));
    prom.then(Blob =>(Blob.json())).then(data =>cities.push(...data));
    // .then(data => cities=(data));
    // 不加...这1000个数据就会被当作一个元素添加进去
    console.log(JSON.stringify(cities[0]));
    findMatches('bo',cities);

}
function findMatches(wordToMatch, citiess){
    // 用filter做选择器
    return citiess.filter(place => {
        // RegExp(正则表达式)
        //  i (忽略大小写)
        // g (全文查找出现的所有匹配字符)
        const reg=new RegExp(wordToMatch,'gi')
        return place.city.match(reg) || place.state.match(reg) ;
    })
}

