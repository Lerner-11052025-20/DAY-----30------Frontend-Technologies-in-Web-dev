function check()
{
    let x = 5, y = 7;
    console.log(x+ " " +y);
    
    function inner() // jya sudhi game te function ne call no karavaiye tya sudhi te fun as inner() or game te biju fun as check() outer() run thase nahi jyare call kariye tyare j te run thase
    {
        let c = 6;
        console.log(c);
    }
    inner();
    console.log(x+ " " +y);
    // console.log(c); ReferenceError: c is not defined LEXICAL SCOPE tene c ne function ni teni definition ni under j use or access kari skay
}

check();
// inner(); ReferenceError: inner is not defined  var ni jem j fun ni bhar tenu kay j Access kari sakay j nahi