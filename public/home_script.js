alert(document)
document.addEventListener('DOMContentLoaded', initFunction())

function initFunction(){
    abc()
}

function abc(){
    var newContainer = document.querySelectorAll('.newCtn');
    for (let i = 0; i < newContainer.length; i++) {
      newContainer[i].addEventListener('mouseover', function () {
        document.getElementById('title1').style = 'color: red';
      })
      newContainer[i].addEventListener('mouseout', function () {
        document.getElementById('title1').style = 'color: #5168b5';
      })
    };
    document.getElementById('scrollBtn').addEventListener('click', function () {
      document.getElementById('welcomeSection').scrollIntoView({ behavior: 'smooth' });
    })
}