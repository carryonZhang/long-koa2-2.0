/**
 * Created by shaolong on 2017/6/8.
 */



module.exports = function (templateParams) {
	var _cssList = ['common', 'index'];
	var webAssetsHelp = require('../../../webAssetsHelp.js')(templateParams, _cssList);
	var _html = "{% extends '../../common/pages/common.html' %} " +
		"{% block title %}{{data.title}}{% endblock %}" +
		"{% block styles %} " +
		webAssetsHelp.styles +
		"{% endblock %}" +
		"{% block content %}" +
		"<div class='left-area'>" +
		"{% for news in list%}" +
		"<div class='news'><div class='item'><a class='op' href='#'>{{ news.title }}</a></div>" +
		"<div class='item-detail'>{{ news.content }}</div></div>" +
		"{% endfor %}" +
		"</div>" +
		"<main class='main'>" +
		"{% for item in main %}" +
		"<figure class='clearfix'>" +
		"<img class='fig-img' src= '{{item.img}}' />" +
		"<p class='intro'>{{item.content}}</p>" +
		"</figure>" +
		"{% endfor %}" +
		"</main>" +
		"{% endblock %}" +
		// "{% include '../../activity/pages/activity.html' %}" +
		'{% block script%}' + webAssetsHelp.scripts + '{% endblock%}';
	return _html;
};
