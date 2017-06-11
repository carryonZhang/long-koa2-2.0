/**
 * Created by long-mac on 2017/4/11.
 */

import './sidebar.css';
const sidebar = new Vue({
    el: '.arrow',
    data: {
        isActive: false
    },
    methods: {
        focus: function () {
            this.isActive = !this.isActive;
        }
    }
});
export default sidebar;