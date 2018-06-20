$(function () {

	
})

function getData() {
	var page = 1;
	var pagesize = 5;
	var totalPage = 0;

	$.ajax({
		type: 'get',
		url: `${APP.baseUrl}/category/queryTopCategoryPaging`,
		data: {
			page: page,
			pagesize: pagesize
		},
		success: function (response) {
			console.log(response);
			if (response.error) {
				location.href = 'login.html';
			} else {
				var html = template('categoryFirstTpl', response);
				$('#categoryFirstBox').html(html);
			}
		totalPage = Math.ceil(response.total / pagesize);
		}
	})

	// 计算总页数
}