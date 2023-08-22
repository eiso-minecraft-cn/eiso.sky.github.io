document.getElementById("guestbookForm").addEventListener("submit", function(event) {
  event.preventDefault(); // 阻止表单默认的提交行为

  // 获取表单数据
  var name = document.getElementById("nameInput").value;
  var message = document.getElementById("messageInput").value;

  // 创建一个 JSON 对象
  var formData = {
    name: name,
    message: message
  };

  // 将 JSON 对象转换为字符串
  var jsonString = JSON.stringify(formData);

  // 发送 AJAX 请求，将数据发送到服务器
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://api.github.com/repos/eiso-minecraft-cn/eiso.sky.github.io/contents/guestbook.json", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", "token <your_token>");
  xhr.send(jsonString);

  // 处理服务器的响应
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 201) {
      alert("留言已提交成功！");
      document.getElementById("nameInput").value = "";
      document.getElementById("messageInput").value = "";
    } else if (xhr.readyState === 4 && xhr.status !== 201) {
      alert("提交留言时出现错误，请稍后再试。");
    }
  };
});
