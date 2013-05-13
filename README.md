alignHeight.js
==============

選択したブロック要素群の高さを、それらの中で一番大きい要素の高さに揃えるjQueryプラグインです。引数に数値を渡すと、渡した数の要素毎に高さの最大値をリセットします。  

##必要な物
jquery(1.8以上)


##使い方
```js
$(selector).alignHeight(Number);
```

指定された全ての要素の高さを、それらの要素の一番大きい高さに揃えます。

###引数
Number > number  
分割する数。デフォルトは0で、全ての要素の高さを揃えます。  

##サンプル
###html
```html
<ul class="item_list">
	<li>item1</li>
	<li>item2</li>
	<li>item3</li>
	<li>item4</li>
	<li>item5</li>
	<li>item6</li>
	<li>item7</li>
	<li>item8</li>
</ul>
```

###Javascript
```js
<script type="text/javascript">
$(function() {
	$('.item_list > li').alignHeight();
});
</script>
```
class名item_list直下のli全ての要素の高さを、それらの要素の一番大きい高さに揃えます。


```js
<script type="text/javascript">
$(function() {
	$('.item_list > li').alignHeight(4);
});
</script>
```
class名item_list直下のliが、4個毎にそれらの要素の一番大きい高さに揃えます。