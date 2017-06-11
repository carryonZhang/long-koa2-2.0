<template>
    <aside v-bind:class="{active: isActive}" class="sort">
        <div class="nav"><a href="#">最新赛讯</a></div>
        <div class="nav"><a href="#">DOTA神器</a></div>
        <div class="nav"><a href="#">找妹子</a></div>
        <div class="nav"><a href="#">视频集锦</a></div>
        <div class="nav"><a href="#">找人切磋</a></div>
        <div class="nav"><a href="#">大神现身</a></div>
        <div class="arrow" v-on:click="focus"></div>
    </aside>
</template>

<script>
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
</script>

<style>
    .sort {
        position: fixed;
        padding: 0.5em 1em;
        background-color: deepskyblue;
        border-radius: 0.4rem;
    }
    .arrow {
        width: 0;
        height: 0;
        border-width: 1.3rem 1.3rem 1.3rem 0;
        border-color: transparent deepskyblue;
        border-style: solid;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-100%, -50%);
    }

    @media screen and (max-width: 599px) {
        .sort {
            top: 20px;
            right: 0;
            transform: translate3d(100%, 0, 0);
            transition: transform 0.4s;
        }
        .active {
            transform: translate3d(0, 0, 0);
        }
    }

    @media screen and (min-width: 600px) {
        .sort {
            right: 20px;
            top: 20px;
        }
        .arrow {
            display: none;
        }
    }

    @media screen and (min-width: 900px) {

    }

    @media screen and (min-width: 1200px) {

    }

    @media screen and (min-width: 1800px) {

    }

    .nav:not(:last-child) {
        margin-bottom: 0.5em;
    }
    .nav a {
        display: block;
        color: #fff;
        /*position: relative;*/
        overflow: hidden;

    }
    .nav a:hover {
        color: #f359cf;
    }

    .active {
        /*position: absolute;*/
        /*top: 0;*/
        /*left: 0;*/
        /*right: 0;*/
        /*bottom: 0;*/
        /*z-index: -1;*/
        display: block;

        background-color: lightpink;
        /*transform: translate3d(-);*/
    }
    .show {
        transform: translate3d(0, 0, 0);
    }

</style>