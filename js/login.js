$(function () {
	$('#loginBtn').on('click', function () {
		var result = $('#loginForm').serializeToJson();
		// console.log(result)
		if (!$.trim(result.username)) {
			alert('请输入用户名');
			return;
		}
		if(!$.trim(result.password)) {
			alert('请输入密码');
			return;
		}
		$.ajax({
			type: 'post',
			url: `${APP.baseUrl}/employee/employeeLogin`,
			data: result,
			success: function (reponse) {
				// console.log(reponse)
				if (reponse.success) {
					location.href = 'user.html';
				} else {
					alert(reponse.message);
				}
			}

		})
	})
})