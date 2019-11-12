//process.argv
console.log("----argv forEach start----");
process.argv.forEach(function (item, index){
    //출력
    console.log(index + ':' + typeof (item) + ':' , item);

    //실행 매개변수에 --exit가 있을 때 
    if (item == '--exit'){
        //다음 매개변수 얻음
        var exitTime = Number(process.argv[index+1]);
        //일정 시간 후 프로그램을 종료
        setTimeout(function(){
            process.exit();
        }, exitTime);
    }
});
console.log("----argv forEach end----");

console.log('#process.env : ', process.env);
console.log('#process.version : ', process.version);
console.log('#process.versions : ', process.versions);
console.log('#process.arch : ', process.arch);
console.log('#process.platform : ', process.arch);
