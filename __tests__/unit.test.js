// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
//test phone numbers
test('Phone number returns true #1 ', () => {
    
    expect(functions.isPhoneNumber('626-666-6666')).toBe(true);
});
test('Phone number returns true #2', () => {
    
    expect(functions.isPhoneNumber('(666)666-6666')).toBe(true);
});
test('Phone number returns false #1', () => {
    
    expect(functions.isPhoneNumber('666')).toBe(false);
});
test('Phone number returns false #2 ', () => {
    
    expect(functions.isPhoneNumber('6')).toBe(false);
});

//test emails
test('Email true #1', () => {
    
    expect(functions.isEmail('666@gmail.com')).toBe(true);
});
test('Email true #2', () => {
    
    expect(functions.isEmail('666@ucsd.edu')).toBe(true);
});

test('Email false #1', () => {
    
    expect(functions.isEmail('666@qq')).toBe(false);
});

test('Email false #2', () => {
    
    expect(functions.isEmail('666@***.com')).toBe(false);
});

//test dates
test('dates true #1', () => {
    
    expect(functions.isDate('11/20/2022')).toBe(true);
});
test('dates true #2', () => {
    
    expect(functions.isDate('11/20/2020')).toBe(true);
});

test('dates false #1', () => {
    
    expect(functions.isDate('2022/2022/2022')).toBe(false);
});
test('dates false #2', () => {
    
    expect(functions.isDate('666-666-666')).toBe(false);
});

//test hex color
test('hex true #1', () => {
    
    expect(functions.isHexColor('#EEEEEE')).toBe(true);
});
test('hex true #2', () => {
    
    expect(functions.isHexColor('#32a852')).toBe(true);
});
test('hex false #1', () => {
    
    expect(functions.isHexColor('##32a852')).toBe(false);
});
test('hex false #2', () => {
    
    expect(functions.isHexColor('32a85qqq')).toBe(false);
});

//test strong password
test('strong password true #1', () => {
    
    expect(functions.isStrongPassword('ddddddd')).toBe(true);
});
test('strong password true #2', () => {
    
    expect(functions.isStrongPassword('QqqQqqQ')).toBe(true);
});
test('strong password false #1', () => {
    
    expect(functions.isStrongPassword('666')).toBe(false);
});
test('strong password false #2', () => {
    
    expect(functions.isStrongPassword('qwq')).toBe(false);
});