/**
 * Created by long-mac on 2017/4/11.
 */
const sidebar = new Vue({
    el: '.option',
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