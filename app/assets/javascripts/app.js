$('.mdl-card__supporting-text').hide();

$(document).ready(function(){

    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    $('#fab').click(function(){

        var innerHtml = $('#fab .material-icons').html();
        console.log(1);
        if (innerHtml === 'add'){
            console.log(2);
            $('#fab').css('background-color','green');
            $('#fab .material-icons').html('check circle');
            $('.mdl-card__supporting-text').show();
            $('.mdl-card__title').hide();
        }

        else {
            console.log(3);
            $('.mdl-card__supporting-text').hide();
            $('#fab').css('background-color','#ed2553');
            $('#fab .material-icons').html('add');
            $('.mdl-card__title').show();
            $('#title-text').text('Campaign added!');
        }

    });

    $('#sms-msg').keyup(function(){
        var Length = $('#sms-msg').val().length;
        var pageBreak = Math.floor((Length/160));
        $('#break-msg').val(pageBreak+1);
    });

    var inputStartDate = document.querySelector('#start-date');
    var outputStartDate = document.querySelector('#start-date-label');

    var inputEndDate = document.querySelector('#end-date');
    var outputEndDate = document.querySelector('#end-date-label');

    var inputStartTime = document.querySelector('#start-time');
    var outputStartTime = document.querySelector('#start-time-label');


    var dialogStartDate = new mdDateTimePicker.default({
        type: 'date',
        orientation: 'PORTRAIT',
        past: moment().subtract(150,'years'),
        future: moment().add(50,'years')
    });

    dialogStartDate.trigger = inputStartDate;

    inputStartDate.addEventListener('click', function() {
        dialogStartDate.toggle();
        $('.container-div').toggle();
    });

    inputStartDate.addEventListener('onOk', function() {
        var startDate = dialogStartDate.time.toString();
        var startDateFormat = moment(startDate).format('LL');
        outputStartDate.innerHTML = startDateFormat;
        $('#start-date-label').css('color','blue');
        $('.container-div').show();
    });

    inputStartDate.addEventListener('onCancel',function(){
        $('.container-div').show();
    });

    var dialogEndDate = new mdDateTimePicker.default({
        type: 'date',
        orientation: 'PORTRAIT',
        past: moment().subtract(150,'years'),
        future: moment().add(150,'years')
    });

    dialogEndDate.trigger = inputEndDate;

    inputEndDate.addEventListener('click', function() {
        dialogEndDate.toggle();
        $('.container-div').toggle();
    });

    inputEndDate.addEventListener('onOk', function() {
        var endDate = dialogEndDate.time.toString();
        var endDateFormat = moment(endDate).format('LL');
        outputEndDate.innerHTML = endDateFormat;
        $('#end-date-label').css('color','blue');
        $('.container-div').show();
    });

    inputEndDate.addEventListener('onCancel',function(){
        $('.container-div').show();
    });

    var dialogStartTime = new mdDateTimePicker.default({
        type: 'time',
        orientation: 'PORTRAIT',
    });

    dialogStartTime.trigger = inputStartTime;

    inputStartTime.addEventListener('click', function() {
        dialogStartTime.toggle();
        $('.container-div').toggle();
    });

    inputStartTime.addEventListener('onOk', function() {
        $('.container-div').show();
        var startTime = dialogStartTime.time.toString();
        var startTimeFormat = moment(startTime).format('LTS');
        outputStartTime.innerHTML = startTimeFormat;
        $('#start-time-label').css('color','blue');
    });

    inputStartTime.addEventListener('onCancel',function(){
        $('.container-div').show();
    });



});