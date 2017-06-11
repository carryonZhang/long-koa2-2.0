<!--{% extends '../../common/pages/common.html' %}-->
<!--{% block styles %} {% endblock %}-->
<!--{% block content %}-->
<!--<div class="left-area">-->
<!--{% for news in list%}-->
<!--<div>{{ news.title }}</div>-->
<!--{% endfor %}-->
<!--</div>-->
<!--{% endblock %}-->
<!--{% block script %} {% endblock %}-->

<template lang="swig">
    {% extends '../../common/pages/common.html' %}
    {% block title %}{{data.title}}{% endblock %}
    {% block styles %}
		webAssetsHelp.styles
    {% endblock %}
    {% block content %}
    <div class='left-area'>
    {% for news in list%}
    <div class='news'><div class='item'><a class='op' href='#'>{{ news.title }}</a></div>
    <div class='item-detail'>{{ news.content }}</div></div>
    {% endfor %}
    </div>
    <main class='main'>
    {% for item in main %}
    <figure class='clearfix'>
    <img class='fig-img' src= '{{item.img}}' />
    <p class='intro'>{{item.content}}</p>
    </figure>
    {% endfor %}
    </main>
    {% endblock %}
    {% block script%}  webAssetsHelp.scripts {% endblock%}

</template>
<script>
	var webAssetsHelp = require('../../../webAssetsHelp.js')(templateParams, ['common', 'index']);
		console.log(Vue);
	const newsitem = new Vue({
		el: '.news',
		data: {
			isActive: false
		},
		methods: {
			show: function () {
				this.isActive = !this.isActive
			}
		}
	})
</script>
<style>
    .main {
        float: left;
    }
    .fig-img {
        float: left;
        max-width: 100%;
        margin-right: 10px;
    }
    .main figure {
        margin-bottom: 10px;
    }
    .intro {
        text-indent: 2em;
    }
    @media screen and (max-width: 599px) {
        .left-area {
            width: 100%;
        }
        .fig-img {
            max-width: 100%;
        }
    }

    @media screen and (min-width: 600px) {
        .main figure {
            height: 220px;
        }
        .fig-img {
            width: 40%;
            height: 100%;
        }
        .intro {
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10;
        }
    }

    @media screen and (min-width: 900px) {
        .left-area {
            float: left;
            width: 30%;
        }
        .main {
            width: 50%;
            margin: 0 3%;
        }

        .fig-img {
            width: 300px;
        }
    }

    @media screen and (min-width: 1200px) {
        .news {

        }
    }

    @media screen and (min-width: 1800px) {

    }

    .news {
        margin-bottom: 10px;
    }

    .news:nth-of-type(odd) .item, .news:nth-of-type(even) .item-detail {
        background-color: darkorange;
    }

    .news:nth-of-type(even) .item, .news:nth-of-type(odd) .item-detail {
        background-color: pink;
    }

    .item {
        text-indent: 2em;
        border-top-left-radius: 0.3rem;
        border-top-right-radius: 0.3rem;
    }
    .item .op {
        color: #333;
    }
    .item-detail {
        font-size: 85%;
        text-indent: 2em;
        padding: 6px 6px 0;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
        overflow: hidden;
        border-bottom-left-radius: 0.3rem;
        border-bottom-right-radius: 0.3rem;
        height: 0;
        transition: height 0.4s;
    }
    .active {
        /*transform: scale3d(1, 1, 1);*/
        height: 7em;
    }

</style>