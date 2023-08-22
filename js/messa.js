// 在每次表单提交时执行的函数
function submitGuestbook(event) {
    event.preventDefault(); // 阻止表单默认的提交行为
  
    // 获取用户输入的姓名和留言
    const name = document.getElementById('nameInput').value;
    const message = document.getElementById('messageInput').value;
  
    // 创建一个新的留言元素
    const newMessage = document.createElement('div');
    newMessage.innerHTML = `<strong>${name}</strong>: ${message}`;
  
    // 将新的留言添加到留言板上
    const guestbookMessages = document.getElementById('guestbookMessages');
    guestbookMessages.appendChild(newMessage);
  
    // 清空输入框
    document.getElementById('nameInput').value = '';
    document.getElementById('messageInput').value = '';
  }
  
  // 获取表单元素并为其绑定提交事件的监听器
  const guestbookForm = document.getElementById('guestbookForm');
  guestbookForm.addEventListener('submit', submitGuestbook);
  