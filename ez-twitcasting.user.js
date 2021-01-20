// ==UserScript==
// @name         ez-twitcasting
// @version      0.1
// @description  엔터키로 코멘트를 달 수 있게 합니다. 줄바꿈은 Shift+엔터키로 가능합니다.
// @author       bs
// @include      *://twitcasting.tv/*
// @supportURL   https://github.com/Boosoong/ez-twitcasting/issues
// @homepageURL  https://github.com/Boosoong/ez-twitcasting/
// @downloadURL https://github.com/Boosoong/ez-twitcasting/raw/main/ez-twitcasting.user.js
// @updateURL   https://github.com/Boosoong/ez-twitcasting/raw/main/ez-twitcasting.user.js
// @grant        none
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

$(document).on('keypress','textarea', function(e){
		if(e.keyCode == 13 && !e.shiftKey) {
			$(this).blur();
			$('.tw-button-primary').click();
			return false;
		} else if(e.shiftKey && e.keyCode == 13) {
            return true;

		}
	});
})();
