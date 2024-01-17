const myObect = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by apple',

}

for (const key in myObect) {
    // console.log(`${key} shortcut is for ${myObect[key]}`);
}

const programing = ['js', 'cpp', 'rb', 'swift']

for (const key in programing) {
    console.log(programing[key]);
}