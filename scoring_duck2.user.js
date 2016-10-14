// ==UserScript==
// @name       scoring duck2
// @namespace  http://web.nlhs.tyc.edu.tw/~lss
// @version    0.4.7
// @description  scoring duck2.htm homework
// @match      http://web.nlhs.tyc.edu.tw/*/duck2.htm
// @downloadURL     https://raw.github.com/lsslss/scoring_duck2/master/scoring_duck2.user.js
// @updateURL       https://raw.github.com/lsslss/scoring_duck2/master/scoring_duck2.user.js
// @updateVersion   16
// @copyright  2012+, You
// ==/UserScript==
var duckTitle = document.getElementsByTagName('h1')[0];
var scoringTitle = document.createElement('p');
var scoringP = document.createElement('p');
var scoringNLA = document.createElement('p');
var scoringWiki = document.createElement('p');
var homework = document.createElement('div');
var source_code = document.createElement('div');
source_code.TextContent = document.getElementsByTagName('html')[0].innerHTML;
homework.style.backgroundColor = 'grey';
homework.style.color = 'white';
homework.style.size = '45%';
homework.style.float = 'right';
scoringTitle.style.margin = '10';
scoringP.style.margin = '10';
scoringNLA.style.margin = '10';
scoringWiki.style.margin = '10';
scoringTitle.innerText = '網頁標題：[' + document.getElementsByTagName('title')[0].textContent + ']';
var allPs = document.getElementsByTagName('p');
scoringP.textContent = '==================>沒有新增段落';
if(allPs.length >= 2)
{
    scoringP.textContent = '新增段落：[' + allPs[0].textContent + ']';
}
var allLinks = document.getElementsByTagName('a');
scoringNLA.textContent = '==================>沒有內壢高中超連結';
for(var i=0; i<allLinks.length; ++i)
{
    var aLink = allLinks[0];
    if(aLink.textContent == '內壢高中')
    {
        scoringNLA.textContent = '內高網址：[' + aLink.href + ']';
        break;
    }
}
var allImgs = document.getElementsByTagName('img');
scoringWiki.textContent = '==================>沒有唐老鴨超連結';
if(allImgs[0].parentNode.tagName == 'A')
{
    scoringWiki.textContent = '唐老鴨網址：[' + allImgs[0].parentNode.href + ']';
}
duckTitle.parentNode.insertBefore(homework, duckTitle);
homework.appendChild(scoringTitle);
homework.appendChild(scoringP);
homework.appendChild(scoringNLA);
homework.appendChild(scoringWiki);
homework.appendChild(source_code);
