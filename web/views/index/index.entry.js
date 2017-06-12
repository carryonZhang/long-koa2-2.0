/**
 * Created by long-mac on 2017/4/10.
 */
// import Vue from 'vue';
import './styles/index.css';
import '../../widget/activity/activity.css';
import '../../images/ig.jpeg';
import '../../images/ig2.jpeg';
import '../../images/ig3.jpeg';
console.log(Vue);

// 由于html是用模板引擎循环出来的，所以Vue只能绑定静态的html代码，之后循环出来的html代码Vue无法绑定

// const newsitem = new Vue({
//     el: '.news',
//     data: {
//         isActive: false
//     },
//     methods: {
//         show: function () {
//             this.isActive = !this.isActive
//         }
//     }
// })