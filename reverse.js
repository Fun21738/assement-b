function reverse(string) {
    var result = '';
    while(string.length != ""){
        result += string.split('').slice(0,4).reverse().join('');
        string = string.slice(4);
    }

    return result;

}

console.log(reverse("Lorem at"));