export default (toDoTasks) => {
  const checkBtns = document.querySelectorAll('.check-btn');
  checkBtns.forEach((checkBtn, index) => {
    checkBtn.addEventListener('change', () => {
      checkBtn.nextElementSibling.classList.toggle('active');
      if (checkBtn.nextElementSibling.classList.contains('active')) {
        toDoTasks.modifyTask(
          index,
          checkBtn.nextElementSibling.textContent.trim(),
          true,
        );
      } else {
        toDoTasks.modifyTask(
          index,
          checkBtn.nextElementSibling.textContent.trim(),
          false,
        );
      }
    });
  });
};