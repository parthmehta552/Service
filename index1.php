<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</head>
<body>
<input type="text" placeholder="name" id="name" />
<input type="text" placeholder="image" id="image" />
<input type="text" placeholder="registerdate" id="registerdate" />
<input type="text" placeholder="email" id="email" />
<input type="password" placeholder="pwd" id="pwd" />
<input type="text" placeholder="admin" id="admin" />
<input type="text" placeholder="isblock" id="isblock" />
<button id="done">Done</button>

<script>
$("#done").click(function(){
	
	var name = $("#name").val();
	var image = $("#image").val();
	var registerdate = $("#registerdate").val();
	var email = $("#email").val();
	var pwd = $("#pwd").val();
	var admin = $("#admin").val();
	var isblock = $("#isblock").val();
	
	var jsondata = { "name" : name,"email" : email,"password" : pwd,"image" : image,"registerdate" : registerdate,"admin" : admin,"isblock" : isblock }
	var json =  JSON.stringify(jsondata)
	
	$.ajax({
        type: "POST",
        url: "adduser.php",
        data: {data: json},
        success: function(result) {
            alert(result);
        }
    });
	
});
</script>
</body>
</html>