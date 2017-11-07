<?php
//header('Content-type:text/html; charset="utf-8"');
/*
API:
	getPics.php
		参数
		cpage : 获取数据的页数
*/
$cpage = isset($_GET['cpage']) ? $_GET['cpage'] : 1;

//$url = 'http://www.wookmark.com/api/json/popular?page=' . $cpage;

$url = 'http://p.qiao.baidu.com/Refresh.php?callback=fn&t=1505984944421' . $cpage;

$content = file_get_contents($url);
$content = iconv('gbk', 'utf-8', $content);

echo $content;

?>