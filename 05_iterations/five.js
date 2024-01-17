const coding = ['js', 'css', 'html', 'ruby']

coding.forEach( function (items){
    console.log(items);
})

coding.forEach(  (item1) => {
    console.log(item1);
})

const myCoding = [
    {
        languageName: 'JavaScript',
        languageFileName: 'js',
    },
    {
        languageName: 'Java',
        languageFileName: 'java',
    },
    {
        languageName: 'Python',
        languageFileName: 'py',
    },
]
myCoding.forEach( (items) => {
    console.log(items.languageName);
})