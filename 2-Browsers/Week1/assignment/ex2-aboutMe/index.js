/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/
const people = { nickname: 'Yar', 'fav-food': 'Fish', hometown: 'Moscow' };

function main(people) {
  const ul = document.getElementsByTagName('ul')[0];
  const li_s = ul.children;

  for (let i = 0; i < li_s.length; i++) {
    let span = li_s[i].getElementsByTagName('span');
    span[0].textContent = people[span[0].id];
    li_s[i].className = 'list-item';
  }
}

main(people);
