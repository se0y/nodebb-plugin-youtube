(function(module) {
	"use strict";

	var Youtube = {},
		embed = '<iframe width="640" height="360" src="http://www.youtube.com/embed/$1" frameborder="0" allowfullscreen></iframe>';

	Youtube.parse = function(postContent, callback) {
		postContent = postContent.replace(/<a href="(?:http:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)<\/a>/g, embed);
		callback(null, postContent);
	};

	module.exports = Youtube;
}(module));