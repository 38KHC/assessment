'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area'); 
const tweetDivided = document.getElementById('tweet-area');

/**
 * designation element child all remove
 * @param{HTMLElement}element
 */
function removeAllChildren(element){
    while (resultDivided.firstChild){
        //child element is true by remove
        resultDivided.removeChild(resultDivided.firstChild);
    }
}
//assessmentButton.onclick = function(){
assessmentButton.onclick = () => {
    const userName = userNameInput.value;
    //console.log('pushed button');
    if (userName.length===0){
        return;
    }
    console.log(userName);
    //todo area
    removeAllChildren(resultDivided);
    const header = document.createElement('h3');
    header.innerText = 'resule assessment';
    resultDivided.appendChild(header);

    const paragraph = document.createElement('p');
    const result = assessment(userName);
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);
    //todo
    removeAllChildren(tweetDivided);
    const anchor = document.createElement('a');
    const hrefValue =
        'https://twitter.com/intent/tweet?button_hashtag=yourgoodpoint&ref_src=twsrc%5Etfw';

        anchor.setAttribute('href',hrefValue);
        anchor.className = 'twitter-hashtag-button';
        anchor.setAttribute('data-text', '★固定文言★');
        anchor.innerText = 'Tweet #yourgoodpoint';

        tweetDivided.appendChild(anchor);
}

const answers = [
    '{userName}is good point This Voice. {userName} is voice ~',
    '{userName}is good point This eyes.{userName} is ~',
    '{userName}is good point This heart.{userName} is ~',
    '{userName}is good point This stoic.{userName} is ~',
    '{userName}is good point This knowledge.{userName} is ~',
    '{userName}is good point This unique.{userName} is ~',
    '{userName}is good point This attention.{userName} is ~',
    '{userName}is good point This sence.{userName} is ~',
    '{userName}is good point This hair.{userName} is ~',
    '{userName}is good point This song.{userName} is ~',
    '{userName}is good point This costume.{userName} is ~',
    '{userName}is good point This happyness.{userName} is ~',
    '{userName}is good point This Voice. {userName} is voice ~',
    '{userName}is good point This eyes.{userName} is ~',
    '{userName}is good point This heart.{userName} is ~',
    '{userName}is good point This stoic.{userName} is ~',
    '{userName}is good point This knowledge.{userName} is ~',
    '{userName}is good point This unique.{userName} is ~',
    '{userName}is good point This attention.{userName} is ~',
    '{userName}is good point This sence.{userName} is ~',
    '{userName}is good point This hair.{userName} is ~',
    '{userName}is good point This song.{userName} is ~',
    '{userName}is good point This costume.{userName} is ~',
    '{userName}is good point This happyness.{userName} is ~'
];

/**
 * name is string return to assessment function
 * @param{string} userName
 * @return{string} assessment
 */
function assessment(userName){
    //TODO assessment program
    //all letter is code Number Get and Addition
    let sumOfCharCode = 0;
    for (let i = 0; i< userName.length; i++){
        sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
    }

    //letter is code Number Sum answer division attached value request
    const index = sumOfCharCode % answers.length;
    let result = answers[index];
    result = result.replace(/{userName}/g, userName + " ");
    //return '';
    return result;
}

//console.log(assessment('taro'));
//console.log(assessment('jiro'));
//console.log(assessment('taro'));

//testcode
//console.assert(
//    assessment('taro') === 'taro is ~',
//    'name replace error'
//);

//console.assert(
//    assessment('taro') === assessment('taro'),
//    'taro same name error'
//);
