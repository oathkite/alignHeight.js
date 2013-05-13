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
	<li style="height: 10px;">item1</li>
	<li style="height: 20px;">item2</li>
	<li style="height: 30px;">item3</li>
	<li style="height: 40px;">item4</li>
	<li style="height: 50px;">item5</li>
	<li style="height: 60px;">item6</li>
	<li style="height: 70px;">item7</li>
	<li style="height: 80px;">item8</li>
</ul>
```

###Javascript
####例1
```js
<script type="text/javascript">
$(function() {
	$('.item_list > li').alignHeight();
});
</script>
```
class名item_list直下のli全ての要素の高さを、それらの要素の一番大きい高さに揃えます。  
（全ての高さが80pxになります。）  


####例2
```js
<script type="text/javascript">
$(function() {
	$('.item_list > li').alignHeight(4);
});
</script>
```
class名item_list直下のliが、4個毎にそれらの要素の一番大きい高さに揃えます。
(item1 ~ item4の高さが40pxに、item5 ~ item8の高さが80pxになります。)