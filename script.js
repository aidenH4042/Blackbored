const blackboard = document.getElementById("blackboard");
const chalkAudio = document.getElementById("chalkAudio");
let isMouseDown = false;

blackboard.addEventListener('dragstart',function(e){
    e.preventDefault();
});

blackboard.addEventListener('mousedown', function(){
    isMouseDown = true;
    chalkAudio.play();
});

document.addEventListener('mouseup', function(){
    isMouseDown = false;
    chalkAudio.pause();
    chalkAudio.currentTime = 0;
});

blackboard.addEventListener('mouseout',function(){
    if (isMouseDown) {
        isMouseDown = false;
        chalkAudio.pause();
        chalkAudio.currentTime = 0;
    }
});