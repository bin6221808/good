/*
 * @Author: binhao <2732990098@qq.com>
 * @Date: 2023-06-02 09:55:32
 * @LastEditors: binhao <2732990098@qq.com>
 * @LastEditTime: 2023-06-05 09:45:59
 * @FilePath: /success/test.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

/**
 * @description: 示例
 * @param {*} new
 * @param {*} rejected
 * @return {*}
 */
// let a = new Promise((resolve,rejected)=>{
//     console.log(111);
//     if(true){
//         rejected(0);
//     }else{
//         resolve(1);
//     }
//     console.log(2);
    
// })
// a.then((value)=>{
//     console.log(value);
// }).catch((error)=>{
//     console.log(error);
// })

/**
 * @description: 创建图片
 * @param {*} url 图片url
 * @return {*}
 */
// function imageCreated(url){

// let created = new Promise((resolve,rejected)=>{
//     const image = new Image();
//     image.onload = function(){
//         resolve(image);
//     };
//     image.onerror = function(){
//         rejected("error");
//     }
//     image.url = url;
// });
// created.then((success)=>{
//     console.log(success);
//     return success;
// }).catch((error)=>{
//     console.log(error);
//     return error
// })

// };
// const image = imageCreated("111");

// const p1 = Promise.resolve(1);
// const p2 = Promise.resolve(2);
// const p = Promise.all([p1,p2]).then((resolve)=>{
//     console.log(resolve);
// })

// let b = Promise.resolve(123456).finally(()=>{
 
//     console.log('finally');
 
//     return new Promise((resolve,reject)=>{
 
//         setTimeout(()=>{
 
//             resolve('ok');
 
//         },3000);
 
//     });
 
 
 
// }).then(data=>{
 
//     console.log(data,'success')
 
// }).catch(err=>{
 
//     console.log(err,'fail');
 
// })
// b.then((data)=>{
//     console.log(data);
// })

let a = new Promise((resolve)=>{
    resolve(1);
}).then((res)=>{
    return res
}).then((res)=>{
    console.log(res);
})
